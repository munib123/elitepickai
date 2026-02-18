import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckCircle, AlertTriangle, ExternalLink, Lightbulb, Link2, Zap } from 'lucide-react';

import imgHero from '@/assets/blog/n8n-lead-gen-hero.webp';
import imgPrerequisites from '@/assets/blog/n8n-lead-gen-prerequisites.webp';
import imgStep1 from '@/assets/blog/n8n-lead-gen-step1-canvas.webp';
import imgStep2 from '@/assets/blog/n8n-lead-gen-step2-trigger.webp';
import imgStep3 from '@/assets/blog/n8n-lead-gen-step3-scraping.webp';
import imgStep4 from '@/assets/blog/n8n-lead-gen-step4-enrichment.webp';
import imgStep5 from '@/assets/blog/n8n-lead-gen-step5-scoring.webp';
import imgStep6 from '@/assets/blog/n8n-lead-gen-step6-sheets.webp';
import imgCompleteWorkflow from '@/assets/blog/n8n-lead-gen-complete-workflow.webp';

const CodeBlock = ({ language, children }: { language: string; children: string }) => (
  <div className="my-6 rounded-lg overflow-hidden border border-border">
    <div className="bg-muted px-4 py-2 text-xs font-mono text-muted-foreground uppercase">
      {language}
    </div>
    <pre className="bg-muted/50 p-4 overflow-x-auto text-sm leading-relaxed">
      <code className="font-mono text-foreground">{children}</code>
    </pre>
  </div>
);

const ExpertNote = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 border-l-4 border-primary bg-primary/5 rounded-r-lg p-4 md:p-6">
    <div className="flex items-start gap-3">
      <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <div className="text-sm text-foreground space-y-2">{children}</div>
    </div>
  </div>
);

const WarningNote = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 border-l-4 border-destructive bg-destructive/5 rounded-r-lg p-4 md:p-6">
    <div className="flex items-start gap-3">
      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
      <div className="text-sm text-foreground space-y-2">{children}</div>
    </div>
  </div>
);

const ProTip = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 border-l-4 border-chart-2 bg-chart-2/5 rounded-r-lg p-4 md:p-6">
    <div className="flex items-start gap-3">
      <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
      <div className="text-sm text-foreground space-y-2">{children}</div>
    </div>
  </div>
);

const ChapterImage = ({ src, alt }: { src: string; alt: string }) => (
  <figure className="my-8">
    <img
      src={src}
      alt={alt}
      className="w-full rounded-lg border border-border"
      loading="lazy"
    />
    <figcaption className="mt-2 text-xs text-muted-foreground text-center italic">
      {alt}
    </figcaption>
  </figure>
);

const PillarLink = ({ href, label }: { href: string; label: string }) => (
  <div className="my-6 bg-muted/30 border border-border rounded-lg p-4">
    <div className="flex items-start gap-3">
      <Link2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <div className="text-sm">
        <span className="text-muted-foreground">🔗 Related: </span>
        <Link to={href} className="text-primary hover:underline font-medium">
          {label}
        </Link>
      </div>
    </div>
  </div>
);

const StepHeader = ({ number, title }: { number: number; title: string }) => (
  <div className="flex items-center gap-4 mb-4 mt-12">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
      {number}
    </div>
    <h2 className="text-2xl font-bold text-foreground">{title}</h2>
  </div>
);

const N8nLeadGenerationContent = () => {
  return (
    <div className="prose-content space-y-6 text-foreground">

      {/* Introduction */}
      <section id="introduction">
        <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">The Problem</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Finding qualified leads is the lifeblood of any business, but doing it manually is a nightmare. You spend hours scrolling through LinkedIn, copying contact details into spreadsheets, researching each company one by one, and crafting individual outreach emails. By the time you have sent 20 cold emails, an entire morning has vanished — and most of those leads were not even a good fit.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">The Painful Reality</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          While you are spending 10+ hours per week on manual prospecting, your competitors are running automated systems that scrape, enrich, score, and email hundreds of qualified leads every single day — without lifting a finger. The gap between manual and automated lead generation is not just about time. It is about survival in a market where speed-to-contact determines who wins the deal.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">The Solution</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In this tutorial, I will show you exactly how to build a fully automated lead generation pipeline using <strong>n8n</strong> — the open-source workflow automation platform. We will build a system that automatically discovers businesses matching your ideal customer profile, enriches each lead with AI-powered analysis, scores them based on fit, and delivers qualified prospects straight into your CRM or Google Sheets — ready for personalized outreach.
        </p>

        <PillarLink
          href="/blog/n8n-automation"
          label="Explore the complete n8n Automation & Workflow Engineering guide"
        />

        <Card className="my-6 border-border">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-4">
              <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <h3 className="font-semibold text-foreground">What You Will Build</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">A complete n8n workflow that:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" /> Scrapes business leads from Google Maps based on industry and location</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" /> Enriches leads with AI analysis using OpenAI GPT-4o-mini</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" /> Scores and qualifies leads automatically using IF/Switch nodes</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" /> Pushes qualified leads to Google Sheets with full contact details</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" /> Optionally triggers personalized email outreach via Gmail</li>
            </ul>
          </CardContent>
        </Card>

        <ChapterImage
          src={imgHero}
          alt="n8n workflow automation pipeline for lead generation showing connected nodes from data scraping to CRM integration"
        />
      </section>

      <Separator className="my-10" />

      {/* Prerequisites */}
      <section id="prerequisites">
        <h2 className="text-2xl font-bold text-foreground mb-6">Prerequisites: What You Will Need</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Requirement</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">n8n Instance</TableCell>
              <TableCell>Self-hosted (Docker) or n8n Cloud account</TableCell>
              <TableCell>Free (self-hosted) or from $24/mo (cloud)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Google Cloud Account</TableCell>
              <TableCell>For Google Maps Places API (generous free tier)</TableCell>
              <TableCell>Free tier covers thousands of requests</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">OpenAI API Key</TableCell>
              <TableCell>For AI-powered lead enrichment and scoring</TableCell>
              <TableCell>Pay-per-use (~$0.01 per lead)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Google Sheets</TableCell>
              <TableCell>For storing and organizing lead data</TableCell>
              <TableCell>Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Gmail Account</TableCell>
              <TableCell>For automated outreach (optional)</TableCell>
              <TableCell>Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Basic Understanding</TableCell>
              <TableCell>Familiarity with APIs and JSON (no coding required)</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <ExpertNote>
          <p><strong>Expert Note: Why n8n Over Other Tools?</strong></p>
          <p>You might wonder why we use n8n instead of Zapier or Make. The answer is cost and flexibility. n8n charges per workflow execution, not per step. A lead generation workflow with 15 nodes costs the same as one with 3 nodes. For high-volume lead generation, this makes n8n dramatically cheaper. Plus, self-hosting gives you full data control — critical for GDPR-conscious businesses.</p>
        </ExpertNote>

        <ChapterImage
          src={imgPrerequisites}
          alt="Comparison of n8n Cloud dashboard and Docker self-hosted installation terminal command"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 1 */}
      <section id="step-1-setup">
        <StepHeader number={1} title="Setting Up Your n8n Environment" />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Before we build anything, you need a running n8n instance. You have two options, and your choice depends on your technical comfort level and data privacy requirements.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Option A: n8n Cloud (Recommended for Beginners)</h3>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
          <li>Go to <a href="https://n8n.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">n8n.io <ExternalLink className="h-3 w-3" /></a> and click "Get Started Free."</li>
          <li>Create your account with email or Google sign-in.</li>
          <li>You will land on the n8n canvas — a blank workflow editor. This is where we will build everything.</li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mb-3">Option B: Self-Hosted via Docker</h3>
        <p className="text-muted-foreground mb-3">
          If you want full control over your data (recommended for business use), run this single command:
        </p>

        <CodeBlock language="bash">
{`docker volume create n8n_data

docker run -it --rm \\
  --name n8n \\
  -p 5678:5678 \\
  -v n8n_data:/home/node/.n8n \\
  docker.n8n.io/n8nio/n8n`}
        </CodeBlock>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Once running, open your browser and navigate to <code className="bg-muted px-1.5 py-0.5 rounded text-sm">http://localhost:5678</code>. You will see the n8n setup wizard. Complete the registration and you are ready to go.
        </p>

        <ChapterImage
          src={imgStep1}
          alt="Empty n8n workflow editor canvas showing where to add the first trigger node"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 2 */}
      <section id="step-2-trigger">
        <StepHeader number={2} title="Configuring the Trigger Node" />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Every n8n workflow starts with a trigger — the event that kicks off the automation. For our lead generation pipeline, we have two excellent trigger options depending on your use case.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Option A: Schedule Trigger (Automated Daily Runs)</h3>
        <p className="text-muted-foreground mb-3">If you want your pipeline to automatically collect new leads every day without manual intervention:</p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
          <li>Click the "+" button on the canvas.</li>
          <li>Search for "Schedule Trigger" and select it.</li>
          <li>Set the Rule to "Every Day" at your preferred time (e.g., 8:00 AM).</li>
          <li>This ensures fresh leads hit your sheet every morning before you start work.</li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mb-3">Option B: Form Trigger (On-Demand Lead Search)</h3>
        <p className="text-muted-foreground mb-3">If you want to control what type of leads to search for each time:</p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
          <li>Add a "Form Trigger" node instead.</li>
          <li>Add form fields: "Business Type" (text), "Location" (text), "Number of Leads" (number).</li>
          <li>When you submit the form, the workflow triggers with your specific search parameters.</li>
        </ol>

        <ExpertNote>
          <p><strong>Which Trigger Should You Choose?</strong></p>
          <p>Use the <strong>Schedule Trigger</strong> if you have a consistent ideal customer profile (ICP) and want a "set it and forget it" approach. Use the <strong>Form Trigger</strong> if your lead requirements change frequently or if different team members need to run searches for different industries. For this tutorial, we will use the Form Trigger for maximum flexibility.</p>
        </ExpertNote>

        <ChapterImage
          src={imgStep2}
          alt="n8n Form Trigger node configuration with Business Type, Location, and Number of Leads fields"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 3 */}
      <section id="step-3-scraping">
        <StepHeader number={3} title="Building the Lead Scraping Module" />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Now we connect to the Google Maps Places API to automatically find businesses matching our criteria. This is the core data collection engine of our pipeline.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Set Up Google Cloud Credentials</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
          <li>Go to <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">console.cloud.google.com <ExternalLink className="h-3 w-3" /></a> and create a new project.</li>
          <li>Enable the "Places API (New)" from the API Library.</li>
          <li>Generate an API key from the Credentials page.</li>
          <li>Google offers a generous free tier that covers thousands of place searches per month.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Add the HTTP Request Node</h3>
        <p className="text-muted-foreground mb-3">Back in n8n, add an HTTP Request node after your trigger:</p>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium w-28">Method</TableCell>
              <TableCell><code className="bg-muted px-1.5 py-0.5 rounded text-sm">POST</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">URL</TableCell>
              <TableCell><code className="bg-muted px-1.5 py-0.5 rounded text-sm text-wrap break-all">https://places.googleapis.com/v1/places:searchText</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium align-top">Headers</TableCell>
              <TableCell>
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm block mb-1">Content-Type: application/json</code>
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm block mb-1">X-Goog-Api-Key: {'{{ $credentials.googleApiKey }}'}</code>
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm block">X-Goog-FieldMask: places.displayName,places.formattedAddress,places.websiteUri,places.nationalPhoneNumber,places.businessStatus,places.rating,places.types</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium align-top">Body (JSON)</TableCell>
              <TableCell>
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{`{ "textQuery": "{{ $json.businessType }} in {{ $json.location }}", "maxResultCount": {{ $json.numberOfLeads }} }`}</code>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.3 Parse and Clean the Response</h3>
        <p className="text-muted-foreground mb-3">Add a "Code" node to transform the raw API response into clean, structured lead records:</p>

        <CodeBlock language="javascript">
{`// Code Node: Transform Google Maps Response
const places = $input.first().json.places || [];
return places.map(place => ({
  json: {
    companyName: place.displayName?.text || "N/A",
    address: place.formattedAddress || "N/A",
    website: place.websiteUri || "N/A",
    phone: place.nationalPhoneNumber || "N/A",
    rating: place.rating || "N/A",
    status: place.businessStatus || "N/A",
    category: place.types?.[0] || "N/A",
    scrapedAt: new Date().toISOString()
  }
}));`}
        </CodeBlock>

        <ExpertNote>
          <p><strong>Why Google Maps Over LinkedIn?</strong></p>
          <p>While LinkedIn is excellent for B2B leads, scraping it directly violates its Terms of Service and risks account bans. Google Maps Places API is a legitimate, well-documented API with a generous free tier. For local business lead generation, it provides richer data including phone numbers, websites, ratings, and business status — all in a single API call.</p>
          <p className="mt-2">
            Need help with{' '}
            <Link to="/services" className="text-primary hover:underline">automated data cleaning pipelines</Link>{' '}
            for your lead data? That's another service we offer at ElitePick AI.
          </p>
        </ExpertNote>

        <ChapterImage
          src={imgStep3}
          alt="n8n workflow showing Form Trigger connected to Google Maps API HTTP Request and Code parser nodes with sample lead data output"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 4 */}
      <section id="step-4-enrichment">
        <StepHeader number={4} title="AI-Powered Lead Enrichment with OpenAI" />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Raw lead data is just the starting point. The real power of this workflow is using AI to analyze each lead, extract additional business intelligence, and determine how well they match your ideal customer profile.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Add the OpenAI Node</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
          <li>Add an "OpenAI" node (or HTTP Request to the OpenAI API).</li>
          <li>Set the model to "gpt-4o-mini" for cost efficiency (approximately $0.01 per lead).</li>
          <li>Configure your OpenAI credentials in n8n settings.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">4.2 The Enrichment Prompt</h3>
        <p className="text-muted-foreground mb-3">Use this prompt template to analyze each lead:</p>

        <CodeBlock language="text">
{`System Prompt:
You are a B2B lead qualification expert. Analyze the following business information and provide a structured assessment.

User Prompt:
Analyze this business lead and return a JSON response:

Company: {{ $json.companyName }}
Website: {{ $json.website }}
Address: {{ $json.address }}
Phone: {{ $json.phone }}
Rating: {{ $json.rating }}
Category: {{ $json.category }}

Return JSON with these fields:
{
  "businessSummary": "2-3 sentence description of the business",
  "estimatedSize": "small/medium/large",
  "potentialNeeds": ["list of services they might need"],
  "decisionMakerTitle": "likely title of decision maker",
  "leadQualityScore": 1-10,
  "reasoning": "brief explanation of the score"
}`}
        </CodeBlock>

        <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Parse the AI Response</h3>
        <p className="text-muted-foreground mb-3">Add another Code node to merge the original lead data with the AI enrichment:</p>

        <CodeBlock language="javascript">
{`// Code Node: Merge Original Data + AI Enrichment
const original = $('Parse Results').item.json;
let aiData;

try {
  aiData = JSON.parse($input.first().json.message.content);
} catch(e) {
  aiData = { leadQualityScore: 0, reasoning: "Parse error" };
}

return [{
  json: {
    ...original,
    businessSummary: aiData.businessSummary || "N/A",
    estimatedSize: aiData.estimatedSize || "unknown",
    potentialNeeds: (aiData.potentialNeeds || []).join(", "),
    decisionMakerTitle: aiData.decisionMakerTitle || "N/A",
    leadScore: aiData.leadQualityScore || 0,
    scoreReasoning: aiData.reasoning || "N/A",
    enrichedAt: new Date().toISOString()
  }
}];`}
        </CodeBlock>

        <ExpertNote>
          <p><strong>Cost Optimization</strong></p>
          <p>Using <code>gpt-4o-mini</code> instead of <code>gpt-4o</code> reduces your cost by approximately 90% with minimal quality loss for structured data extraction. For 100 leads per day, your AI enrichment cost would be approximately $1.00. This makes the workflow viable even for bootstrapped startups.</p>
          <p className="mt-2">
            Want a{' '}
            <Link to="/services" className="text-primary hover:underline">custom AI chatbot</Link>{' '}
            built for your business? We build these integrations at ElitePick AI.
          </p>
        </ExpertNote>

        <ChapterImage
          src={imgStep4}
          alt="Infographic showing how raw lead data is enriched through OpenAI to produce scored and qualified leads with business intelligence"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 5 */}
      <section id="step-5-scoring">
        <StepHeader number={5} title="Automated Lead Scoring and Qualification" />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Not every lead is worth pursuing. This step filters and categorizes leads so your sales team only spends time on high-value prospects.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Add the IF Node for Lead Scoring</h3>
        <p className="text-muted-foreground mb-3">Add an "IF" node to create qualification tiers:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
          <li><strong>IF leadScore &ge; 7</strong> → Route to "Hot Leads" path (immediate outreach)</li>
          <li><strong>ELSE IF leadScore &ge; 4</strong> → Route to "Warm Leads" path (nurture sequence)</li>
          <li><strong>ELSE</strong> → Route to "Cold Leads" path (archive for later)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Lead Scoring Criteria</h3>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Score Range</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Badge className="bg-chart-2/20 text-chart-2 border border-chart-2/30">8–10</Badge>
              </TableCell>
              <TableCell className="font-medium">Hot Lead</TableCell>
              <TableCell>Immediate personalized email + phone call</TableCell>
              <TableCell>Highest</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Badge className="bg-chart-4/20 text-chart-4 border border-chart-4/30">5–7</Badge>
              </TableCell>
              <TableCell className="font-medium">Warm Lead</TableCell>
              <TableCell>Add to nurture email sequence</TableCell>
              <TableCell>Medium</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Badge className="bg-muted text-muted-foreground border border-border">3–4</Badge>
              </TableCell>
              <TableCell className="font-medium">Cold Lead</TableCell>
              <TableCell>Store in database for future campaigns</TableCell>
              <TableCell>Low</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Badge className="bg-destructive/20 text-destructive border border-destructive/30">1–2</Badge>
              </TableCell>
              <TableCell className="font-medium">Disqualified</TableCell>
              <TableCell>Archive — not a fit</TableCell>
              <TableCell>None</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <ChapterImage
          src={imgStep5}
          alt="Lead scoring decision flowchart showing hot, warm, and cold lead routing paths based on AI quality scores"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 6 */}
      <section id="step-6-crm">
        <StepHeader number={6} title="CRM Integration and Output" />

        <p className="text-muted-foreground leading-relaxed mb-6">
          Now we need to store these qualified leads somewhere useful. Google Sheets is the simplest option that works for most small-to-mid-sized teams, but we will also cover CRM integration for scaling teams.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Google Sheets Integration</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Add a "Google Sheets" node after each scoring path.</li>
          <li>Create three separate sheets within one spreadsheet: "Hot Leads", "Warm Leads", "Cold Leads".</li>
          <li>Map the following columns:</li>
        </ul>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Column</TableHead>
              <TableHead>Source Field</TableHead>
              <TableHead>Purpose</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ['A: Company Name', 'companyName', 'Business identification'],
              ['B: Website', 'website', 'Quick access for research'],
              ['C: Phone', 'phone', 'Direct contact information'],
              ['D: Address', 'address', 'Location context'],
              ['E: Rating', 'rating', 'Google Maps rating'],
              ['F: Business Summary', 'businessSummary', 'AI-generated company overview'],
              ['G: Company Size', 'estimatedSize', 'Qualification filter'],
              ['H: Potential Needs', 'potentialNeeds', 'Conversation starters'],
              ['I: Decision Maker', 'decisionMakerTitle', 'Who to target'],
              ['J: Lead Score', 'leadScore', 'Priority ranking'],
              ['K: Score Reasoning', 'scoreReasoning', 'Context for sales team'],
              ['L: Scraped Date', 'scrapedAt', 'Data freshness tracking'],
            ].map(([col, field, purpose]) => (
              <TableRow key={col}>
                <TableCell className="font-medium">{col}</TableCell>
                <TableCell><code className="bg-muted px-1 py-0.5 rounded text-xs">{field}</code></TableCell>
                <TableCell className="text-muted-foreground">{purpose}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">6.2 CRM Integration (HubSpot / Pipedrive)</h3>
        <p className="text-muted-foreground mb-4">For teams using a dedicated CRM, replace the Google Sheets node with the appropriate CRM node:</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="border-border">
            <CardContent className="pt-4">
              <h4 className="font-semibold text-foreground mb-3">HubSpot Integration</h4>
              <p className="text-sm text-muted-foreground mb-2">Node: "HubSpot" → Create Contact</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><span className="font-medium">Email:</span> Extracted from website or enrichment</li>
                <li><span className="font-medium">Company:</span> companyName</li>
                <li><span className="font-medium">Phone:</span> phone</li>
                <li><span className="font-medium">Lead Score:</span> leadScore (custom property)</li>
                <li><span className="font-medium">Lead Source:</span> "n8n Automated Pipeline"</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="pt-4">
              <h4 className="font-semibold text-foreground mb-3">Pipedrive Integration</h4>
              <p className="text-sm text-muted-foreground mb-2">Node: "Pipedrive" → Create Deal</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><span className="font-medium">Title:</span> companyName + " - Automated Lead"</li>
                <li><span className="font-medium">Value:</span> Estimated based on company size</li>
                <li><span className="font-medium">Pipeline:</span> "Inbound Automated"</li>
                <li><span className="font-medium">Stage:</span> Based on lead score tier</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <ChapterImage
          src={imgStep6}
          alt="Google Sheets output showing enriched lead data with color-coded lead scores from the n8n automation pipeline"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 7 */}
      <section id="step-7-outreach">
        <StepHeader number={7} title="Automated Email Outreach (Optional)" />

        <p className="text-muted-foreground leading-relaxed mb-6">
          For the "Hot Leads" path, you can add automated personalized email outreach. This step is optional but dramatically accelerates your speed-to-contact.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Add the Gmail Node</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
          <li>Connect a "Gmail" node after the Hot Leads Google Sheets node.</li>
          <li>Note: This requires extracting an email address. You can use the AI enrichment step to find a likely contact email from the company website, or use a service like Hunter.io via an HTTP Request node.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">7.2 AI-Generated Email Template</h3>
        <p className="text-muted-foreground mb-3">Add another OpenAI node to generate a personalized cold email:</p>

        <CodeBlock language="text">
{`System Prompt:
You are a professional business development representative.
Write a personalized cold email that is concise, friendly, and value-driven. Never be pushy or salesy.

User Prompt:
Write a cold email for this lead:

Company: {{ $json.companyName }}
Business Summary: {{ $json.businessSummary }}
Potential Needs: {{ $json.potentialNeeds }}
Decision Maker Title: {{ $json.decisionMakerTitle }}

My company (ElitePick AI) offers:
Power BI dashboards, AI automation, and data pipelines.

Return JSON:
{
  "subject": "compelling subject line under 50 chars",
  "body": "email body, 3-4 short paragraphs, end with CTA"
}`}
        </CodeBlock>

        <WarningNote>
          <p><strong>Email Compliance Warning</strong></p>
          <p>Always ensure your automated outreach complies with <strong>CAN-SPAM</strong>, <strong>GDPR</strong>, and local email marketing laws. Include an unsubscribe option, your physical business address, and never misrepresent your identity. Respect opt-outs immediately. It is recommended to start with warm introductions and limit automated cold emails to 30–50 per day to maintain deliverability.</p>
        </WarningNote>
      </section>

      <Separator className="my-10" />

      {/* Complete Workflow */}
      <section id="complete-workflow">
        <h2 className="text-2xl font-bold text-foreground mb-6">Complete Workflow Architecture</h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Here is the complete n8n workflow with all nodes connected. This visualization shows the full pipeline from data collection to multi-tier CRM output.
        </p>

        <ChapterImage
          src={imgCompleteWorkflow}
          alt="Complete n8n lead generation workflow showing all nodes from Form Trigger through Google Maps scraping, AI enrichment, lead scoring, and multi-tier CRM output with email automation"
        />

        <h3 className="text-xl font-semibold text-foreground mb-4">Workflow Performance Metrics</h3>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead>Manual Process</TableHead>
              <TableHead>n8n Automated</TableHead>
              <TableHead>Improvement</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Leads collected per day</TableCell>
              <TableCell>10–20</TableCell>
              <TableCell className="text-chart-2 font-medium">100–500</TableCell>
              <TableCell><Badge variant="secondary">10–25x faster</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Time per lead</TableCell>
              <TableCell>15–20 minutes</TableCell>
              <TableCell className="text-chart-2 font-medium">Under 10 seconds</TableCell>
              <TableCell><Badge variant="secondary">100x faster</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lead enrichment quality</TableCell>
              <TableCell>Inconsistent</TableCell>
              <TableCell className="text-chart-2 font-medium">Standardized AI analysis</TableCell>
              <TableCell><Badge variant="secondary">Consistent</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Cost per lead</TableCell>
              <TableCell>$5–15 (labor time)</TableCell>
              <TableCell className="text-chart-2 font-medium">$0.01–0.05 (API costs)</TableCell>
              <TableCell><Badge variant="secondary">99% reduction</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Speed to first contact</TableCell>
              <TableCell>2–5 days</TableCell>
              <TableCell className="text-chart-2 font-medium">Under 1 hour</TableCell>
              <TableCell><Badge variant="secondary">Same-day outreach</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <Separator className="my-10" />

      {/* Enterprise */}
      <section id="enterprise">
        <h2 className="text-2xl font-bold text-foreground mb-6">Taking It Further: Enterprise Considerations</h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          The tutorial above gives you a solid working pipeline. However, enterprise environments require additional capabilities that go beyond a basic setup.
        </p>

        <div className="space-y-6">
          <Card className="border-border">
            <CardContent className="pt-5">
              <h3 className="font-semibold text-foreground mb-2">Multi-Source Lead Collection</h3>
              <p className="text-sm text-muted-foreground">
                Instead of relying solely on Google Maps, enterprise pipelines combine multiple data sources: LinkedIn via Apollo.io or PhantomBuster, Crunchbase for recently funded startups, job board scraping to identify companies that are actively hiring (a strong buying signal), and industry-specific directories.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-5">
              <h3 className="font-semibold text-foreground mb-2">Advanced Lead Scoring with ML Models</h3>
              <p className="text-sm text-muted-foreground">
                While our AI prompt-based scoring works well for small volumes, enterprise teams benefit from training custom machine learning models on historical conversion data. This means your scoring improves over time as it learns which lead characteristics predict actual purchases.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-5">
              <h3 className="font-semibold text-foreground mb-2">Webhook-Based Real-Time Processing</h3>
              <p className="text-sm text-muted-foreground">
                Replace the Schedule or Form triggers with webhooks that fire whenever a new lead appears in any connected source, enabling true real-time lead processing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-5">
              <h3 className="font-semibold text-foreground mb-2">Data Deduplication and Compliance</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise pipelines need robust deduplication logic to prevent contacting the same lead multiple times, plus GDPR/CCPA compliance layers for data retention and opt-out management.
              </p>
            </CardContent>
          </Card>
        </div>

        <PillarLink
          href="/blog/n8n-automation"
          label="Explore more n8n workflow engineering guides — business automation with AI agents"
        />

        <Card className="my-8 border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <h3 className="font-bold text-foreground text-lg mb-2">Need an Enterprise-Grade Lead Generation Pipeline?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Building multi-source lead pipelines with ML-powered scoring, CRM integration, and compliance layers is what I do every day at ElitePick AI.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
              >
                View n8n Automation Services
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-10" />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl font-bold text-foreground mb-6">Conclusion and Next Steps</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          In this tutorial, you have learned how to build a complete automated lead generation pipeline using n8n. We covered:
        </p>

        <ul className="space-y-2 text-muted-foreground mb-6">
          {[
            'Setting up the n8n environment (Cloud or self-hosted Docker)',
            'Configuring triggers for both scheduled and on-demand lead collection',
            'Scraping business data from Google Maps Places API',
            'Enriching leads with AI-powered analysis using OpenAI GPT-4o-mini',
            'Implementing automated lead scoring with multi-tier qualification (Hot/Warm/Cold)',
            'Outputting qualified leads to Google Sheets or CRM (HubSpot / Pipedrive)',
            'Optionally automating personalized email outreach via Gmail',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground leading-relaxed mb-6">
          This workflow replaces 10+ hours of weekly manual prospecting with a system that runs continuously in the background, delivering pre-qualified leads straight to your inbox every single day.
        </p>

        <PillarLink
          href="/blog/n8n-automation"
          label="Continue learning: Complete n8n Automation & Business AI Workflow Engineering guide"
        />

        <Card className="my-8 border-border bg-muted/30">
          <CardContent className="pt-6">
            <h3 className="font-bold text-foreground text-lg mb-2">Need a Custom Lead Generation System?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Whether you need a simple n8n workflow or a full enterprise-grade pipeline with ML scoring and multi-CRM integration, I can build it for you.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              <li>• Quick automation fixes? <Link to="/order" className="text-primary hover:underline">Order a direct build</Link> — starting at $50 for single workflow builds.</li>
              <li>• Enterprise projects? <Link to="/contact" className="text-primary hover:underline">Book a consultation</Link> for custom end-to-end solutions.</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/order"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Order Now — Quick Build
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

    </div>
  );
};

export default N8nLeadGenerationContent;
