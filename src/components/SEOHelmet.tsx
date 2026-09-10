import { Helmet } from 'react-helmet-async';
import seo from '../../seo.config.json';

interface SEOHelmetProps {
  /** The route this page serves, e.g. "/about". Its head comes from seo.config.json. */
  route: '/' | '/about' | '/contact';
  /** 404 only: keep the page out of the index. */
  noindex?: boolean;
  /** JSON-LD for this route. */
  structuredData?: object;
}

const BASE_URL = seo.baseUrl;

/**
 * The head for a route, read from seo.config.json.
 *
 * scripts/prerender.mjs reads the same file and writes the same tags into the
 * static HTML, which is what a crawler receives. Both sides taking their values
 * from one file is what stops the two drifting: before this, every prerendered
 * page shipped the homepage's title and a canonical pointing at "/", because the
 * prerender only ever replaced the body and left this component to fix the head
 * client-side, which it cannot do for a crawler reading raw HTML.
 */
const SEOHelmet = ({ route, noindex = false, structuredData }: SEOHelmetProps) => {
  const meta = seo.routes[route];
  const canonical = route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`;
  const imageUrl = `${BASE_URL}${seo.ogImage}`;
  const robots = noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />

      <meta name="robots" content={robots} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={meta.ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* No twitter:site or twitter:creator: there is no X account for this site. */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;
