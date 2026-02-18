import type { BlogPost } from './types';

const heroImage = new URL('../../assets/blog/sales-dashboard-hero.webp', import.meta.url).href;

export const powerbiSalesDashboardPost: BlogPost = {
  slug: 'build-sales-dashboard-tutorial',
  category: 'Power BI',
  categorySlug: 'power-bi',
  title: 'How to Build a Sales Dashboard in Power BI from Scratch',
  headline: 'How to Build a Sales Dashboard in Power BI from Scratch',
  subheadline: 'A Complete Step-by-Step Tutorial with Sample Data, DAX Formulas, and Design Best Practices',
  seoTitle: 'How to Build a Sales Dashboard in Power BI | Step-by-Step',
  metaDescription: 'Build a professional sales dashboard in Power BI from scratch. This step-by-step tutorial covers data import, DAX measures, visual design, and interactivity with a free sample dataset.',
  primaryKeyword: 'Power BI sales dashboard tutorial',
  secondaryKeywords: [
    'build sales dashboard Power BI',
    'sales report Power BI',
    'Power BI dashboard step by step',
    'sales analytics Power BI',
    'revenue dashboard tutorial',
  ],
  longTailKeywords: [
    'how to build a sales dashboard in Power BI from scratch',
    'step by step Power BI sales report tutorial',
    'create sales analytics dashboard Power BI free template',
  ],
  canonicalUrl: 'https://elitepickai.com/blog/power-bi/build-sales-dashboard-tutorial',
  ogTitle: 'How to Build a Sales Dashboard in Power BI from Scratch (Step-by-Step)',
  ogDescription: 'Follow along as we build a complete sales dashboard from raw data to interactive report. Free dataset included.',
  ogImage: 'https://elitepickai.com/og-image.jpg',
  heroImage,
  heroImageAlt: 'Power BI sales dashboard displaying revenue KPIs, trend charts, and regional analytics on an ultrawide monitor',
  author: 'Muneeb Shafiq',
  authorUrl: 'https://elitepickai.com/about',
  datePublished: '2026-02-07',
  dateModified: '2026-02-07',
  readTime: '18 min',
  level: 'Beginner to Intermediate',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Power BI', href: '/blog?category=power-bi' },
  ],
  tableOfContents: [
    { id: 'importing-cleaning', title: '1. Importing and Cleaning Sales Data' },
    { id: 'star-schema', title: '2. Building the Star Schema' },
    { id: 'dax-measures', title: '3. Creating Core DAX Measures' },
    { id: 'kpi-header', title: '4. Designing the KPI Header Row' },
    { id: 'revenue-trend', title: '5. Building the Revenue Trend Chart' },
    { id: 'category-regional', title: '6. Category and Regional Breakdowns' },
    { id: 'top-products', title: '7. Creating the Top Products Table' },
    { id: 'slicers-interactivity', title: '8. Adding Slicers and Interactivity' },
    { id: 'drill-through', title: '9. Building a Drill-Through Page' },
    { id: 'color-theme', title: '10. Applying a Professional Theme' },
    { id: 'publishing', title: '11. Publishing and Sharing' },
    { id: 'final-result', title: '12. Final Result Walkthrough' },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "How to Build a Sales Dashboard in Power BI from Scratch",
    "description": "Step-by-step tutorial to build a professional sales dashboard in Power BI with data import, DAX measures, visual design, and interactivity.",
    "author": {
      "@type": "Person",
      "name": "Muneeb Shafiq",
      "url": "https://elitepickai.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ElitePick AI",
      "url": "https://elitepickai.com"
    },
    "datePublished": "2026-02-07",
    "dateModified": "2026-02-07",
    "proficiencyLevel": "Beginner to Intermediate",
    "dependencies": "Power BI Desktop (free), Sample Sales Dataset (CSV)",
    "isPartOf": {
      "@type": "WebPage",
      "@id": "https://elitepickai.com/blog/power-bi/ultimate-guide-custom-dashboards"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://elitepickai.com/blog/power-bi/build-sales-dashboard-tutorial"
    },
    "image": "https://elitepickai.com/og-image.jpg"
  },
  excerpt: 'Follow along as we build a complete sales dashboard from raw data to interactive report. Covers data import, DAX measures, visual design, and interactivity with a free sample dataset.',
  featured: false,
};
