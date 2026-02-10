/**
 * Google Indexing API - Automated URL Submission
 * 
 * Parses sitemap.xml, authenticates via service account,
 * and submits all URLs for indexing via the Google Indexing API.
 * 
 * Runs automatically after every build (part of npm run build).
 * Can also run standalone: node scripts/google-indexing.mjs
 * 
 * Requires: GOOGLE_SERVICE_KEY_PATH env var or default path below.
 * Uses zero external dependencies — Node.js built-in crypto + https only.
 */

import { readFileSync } from 'fs';
import { createSign } from 'crypto';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// ─── Configuration ──────────────────────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..');

// Service account key path — override via env var if needed
const SERVICE_KEY_PATH = process.env.GOOGLE_SERVICE_KEY_PATH
  || 'C:\\Users\\eve\\Documents\\g-cloud-service-keys\\gen-lang-client-0174539489-28cc701b280c.json';

const SITEMAP_PATH = resolve(PROJECT_ROOT, 'public', 'sitemap.xml');
const INDEXING_API_ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
const BATCH_ENDPOINT = 'https://indexing.googleapis.com/batch';
const TOKEN_URI = 'https://oauth2.googleapis.com/token';
const SCOPE = 'https://www.googleapis.com/auth/indexing';

// Rate limit: Google allows 200 requests/day for Indexing API
const BATCH_SIZE = 40; // URLs per batch request (max 40 per Google docs)
const DELAY_BETWEEN_BATCHES_MS = 1000;

// ─── JWT Token Generation (zero dependencies) ──────────────────────────────
function createJWT(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  
  const header = {
    alg: 'RS256',
    typ: 'JWT',
    kid: serviceAccount.private_key_id,
  };
  
  const payload = {
    iss: serviceAccount.client_email,
    scope: SCOPE,
    aud: TOKEN_URI,
    iat: now,
    exp: now + 3600, // 1 hour
  };
  
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const headerB64 = encode(header);
  const payloadB64 = encode(payload);
  const signInput = `${headerB64}.${payloadB64}`;
  
  const sign = createSign('RSA-SHA256');
  sign.update(signInput);
  const signature = sign.sign(serviceAccount.private_key, 'base64url');
  
  return `${signInput}.${signature}`;
}

async function getAccessToken(serviceAccount) {
  const jwt = createJWT(serviceAccount);
  
  const body = new URLSearchParams({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: jwt,
  });
  
  const response = await fetch(TOKEN_URI, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
  
  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Token exchange failed (${response.status}): ${err}`);
  }
  
  const data = await response.json();
  return data.access_token;
}

// ─── Sitemap Parser ─────────────────────────────────────────────────────────
function extractUrlsFromSitemap(sitemapPath) {
  const xml = readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

// ─── Single URL Submission ──────────────────────────────────────────────────
async function submitUrl(url, accessToken, type = 'URL_UPDATED') {
  const response = await fetch(INDEXING_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ url, type }),
  });
  
  const data = await response.json();
  return { url, status: response.status, data };
}

// ─── Batch Submission (more efficient for many URLs) ────────────────────────
function buildBatchBody(urls, accessToken, boundary) {
  let body = '';
  
  for (let i = 0; i < urls.length; i++) {
    body += `--${boundary}\r\n`;
    body += 'Content-Type: application/http\r\n';
    body += `Content-ID: <item${i + 1}>\r\n\r\n`;
    body += 'POST /v3/urlNotifications:publish HTTP/1.1\r\n';
    body += 'Content-Type: application/json\r\n\r\n';
    body += JSON.stringify({ url: urls[i], type: 'URL_UPDATED' });
    body += '\r\n';
  }
  
  body += `--${boundary}--`;
  return body;
}

async function submitBatch(urls, accessToken) {
  const boundary = `batch_indexing_${Date.now()}`;
  const body = buildBatchBody(urls, accessToken, boundary);
  
  const response = await fetch(BATCH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': `multipart/mixed; boundary=${boundary}`,
      'Authorization': `Bearer ${accessToken}`,
    },
    body,
  });
  
  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Batch request failed (${response.status}): ${err}`);
  }
  
  return response.text();
}

function parseBatchResponse(responseText) {
  // Parse multipart batch response to extract individual statuses
  const results = [];
  const parts = responseText.split(/--batch_/);
  
  for (const part of parts) {
    const statusMatch = part.match(/HTTP\/1\.1 (\d+)/);
    const urlMatch = part.match(/"url"\s*:\s*"([^"]+)"/);
    
    if (statusMatch) {
      results.push({
        status: parseInt(statusMatch[1]),
        url: urlMatch ? urlMatch[1] : 'unknown',
        success: parseInt(statusMatch[1]) === 200,
      });
    }
  }
  
  return results;
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const startTime = Date.now();
  console.log('\n🔍 Google Indexing API — Automated URL Submission\n');
  console.log('─'.repeat(55));
  
  // 1. Load service account
  let serviceAccount;
  try {
    const keyPath = resolve(SERVICE_KEY_PATH);
    serviceAccount = JSON.parse(readFileSync(keyPath, 'utf-8'));
    console.log(`✅ Service account loaded: ${serviceAccount.client_email}`);
  } catch (err) {
    console.error(`❌ Failed to load service account key from: ${SERVICE_KEY_PATH}`);
    console.error(`   Set GOOGLE_SERVICE_KEY_PATH env var or update the path in this script.`);
    console.error(`   Error: ${err.message}`);
    process.exit(1);
  }
  
  // 2. Extract URLs from sitemap
  let urls;
  try {
    urls = extractUrlsFromSitemap(SITEMAP_PATH);
    console.log(`✅ Sitemap parsed: ${urls.length} URLs found`);
  } catch (err) {
    console.error(`❌ Failed to read sitemap: ${SITEMAP_PATH}`);
    console.error(`   Error: ${err.message}`);
    process.exit(1);
  }
  
  // 3. Get access token
  let accessToken;
  try {
    accessToken = await getAccessToken(serviceAccount);
    console.log(`✅ OAuth2 access token obtained`);
  } catch (err) {
    console.error(`❌ Authentication failed: ${err.message}`);
    process.exit(1);
  }
  
  console.log('─'.repeat(55));
  console.log(`\n📤 Submitting ${urls.length} URLs for indexing...\n`);
  
  // 4. Submit in batches
  let successCount = 0;
  let failCount = 0;
  
  if (urls.length <= BATCH_SIZE) {
    // Small enough for a single batch
    try {
      const responseText = await submitBatch(urls, accessToken);
      const results = parseBatchResponse(responseText);
      
      for (const result of results) {
        if (result.success) {
          successCount++;
          console.log(`  ✅ ${result.url}`);
        } else {
          failCount++;
          console.log(`  ❌ ${result.url} (HTTP ${result.status})`);
        }
      }
      
      // If batch parsing didn't return results, fall back to individual
      if (results.length === 0) {
        console.log('  ⚠️  Batch response unclear, falling back to individual submissions...');
        for (const url of urls) {
          const result = await submitUrl(url, accessToken);
          if (result.status === 200) {
            successCount++;
            console.log(`  ✅ ${url}`);
          } else {
            failCount++;
            console.log(`  ❌ ${url} (HTTP ${result.status}: ${JSON.stringify(result.data)})`);
          }
        }
      }
    } catch (err) {
      console.log(`  ⚠️  Batch request failed, falling back to individual submissions...`);
      for (const url of urls) {
        try {
          const result = await submitUrl(url, accessToken);
          if (result.status === 200) {
            successCount++;
            console.log(`  ✅ ${url}`);
          } else {
            failCount++;
            console.log(`  ❌ ${url} (HTTP ${result.status})`);
          }
        } catch (urlErr) {
          failCount++;
          console.log(`  ❌ ${url} (Error: ${urlErr.message})`);
        }
      }
    }
  } else {
    // Multiple batches needed
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      const batch = urls.slice(i, i + BATCH_SIZE);
      const batchNum = Math.floor(i / BATCH_SIZE) + 1;
      const totalBatches = Math.ceil(urls.length / BATCH_SIZE);
      console.log(`  Batch ${batchNum}/${totalBatches} (${batch.length} URLs)...`);
      
      try {
        const responseText = await submitBatch(batch, accessToken);
        const results = parseBatchResponse(responseText);
        
        for (const result of results) {
          if (result.success) {
            successCount++;
          } else {
            failCount++;
            console.log(`    ❌ ${result.url} (HTTP ${result.status})`);
          }
        }
        
        console.log(`    ✅ ${results.filter(r => r.success).length} succeeded`);
      } catch (err) {
        console.log(`    ⚠️  Batch failed, trying individually...`);
        for (const url of batch) {
          try {
            const result = await submitUrl(url, accessToken);
            if (result.status === 200) successCount++;
            else failCount++;
          } catch { failCount++; }
        }
      }
      
      if (i + BATCH_SIZE < urls.length) {
        await new Promise(r => setTimeout(r, DELAY_BETWEEN_BATCHES_MS));
      }
    }
  }
  
  // 5. Summary
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log('\n' + '─'.repeat(55));
  console.log(`\n📊 Indexing Summary:`);
  console.log(`   Total URLs:  ${urls.length}`);
  console.log(`   Submitted:   ${successCount} ✅`);
  if (failCount > 0) console.log(`   Failed:      ${failCount} ❌`);
  console.log(`   Time:        ${elapsed}s`);
  console.log('');
  
  // Don't fail the build if indexing has issues — it's a best-effort step
  if (failCount > 0) {
    console.log('⚠️  Some URLs failed. This does not affect the build.');
    console.log('   Check that the service account has Indexing API access in Google Cloud Console.');
  }
}

main().catch((err) => {
  console.error(`\n❌ Indexing script error: ${err.message}`);
  // Don't exit with error code — indexing failure shouldn't break the build
});
