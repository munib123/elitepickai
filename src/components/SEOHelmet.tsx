import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  canonical: string; // Full URL like https://elitepickai.com/about
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  keywords?: string | string[];
  author?: string;
  publishedDate?: string; // ISO date for blog posts
  modifiedDate?: string; // ISO date for blog posts
  structuredData?: object; // JSON-LD schema
}

const BASE_URL = "https://elitepickai.com";
const SITE_NAME = "ElitePick AI";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_AUTHOR = "ElitePick AI";

const SEOHelmet = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  keywords,
  author = DEFAULT_AUTHOR,
  publishedDate,
  modifiedDate,
  structuredData,
}: SEOHelmetProps) => {
  const fullImageUrl = ogImage
    ? (ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`)
    : DEFAULT_OG_IMAGE;

  // Normalize keywords
  const keywordsString = Array.isArray(keywords) ? keywords.join(", ") : (keywords || "");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />

      {/* Indexing Directives */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific OG tags for blog posts */}
      {ogType === "article" && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {ogType === "article" && modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      {ogType === "article" && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;
