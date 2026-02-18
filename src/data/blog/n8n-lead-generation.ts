import type { BlogPost } from './types';

const heroImage = new URL('../../assets/blog/n8n-lead-gen-hero.webp', import.meta.url).href;

export const n8nLeadGenerationPost: BlogPost = {
  slug: 'lead-generation-automation-n8n-tutorial',
  category: 'n8n Automation',
  categorySlug: 'n8n-automation',
  title: 'How to Automate Lead Generation with n8n: Build a Complete AI-Powered Pipeline from Scratch',
  headline: 'How to Automate Lead Generation with n8n: Build a Complete AI-Powered Pipeline from Scratch',
  subheadline: 'A step-by-step tutorial covering web scraping, AI enrichment, lead scoring, and CRM integration — with free workflow templates',
  seoTitle: 'Lead Generation Automation with n8n: Complete Step-by-Step Guide (2025)',
  metaDescription: 'Learn how to automate your entire lead generation pipeline with n8n. This step-by-step tutorial covers web scraping, AI enrichment, lead scoring, and CRM integration — with free workflow templates.',
  primaryKeyword: 'n8n lead generation automation',
  secondaryKeywords: [
    'automate lead generation',
    'n8n workflow automation',
    'n8n workflow lead scraping',
    'n8n tutorial',
  ],
  longTailKeywords: [
    'how to automate lead generation with n8n for free',
    'n8n lead enrichment workflow tutorial',
    'n8n google maps lead scraping workflow',
  ],
  canonicalUrl: 'https://elitepickai.com/blog/n8n-automation/lead-generation-automation-n8n-tutorial',
  ogTitle: 'Lead Generation Automation with n8n: Complete Step-by-Step Guide (2025)',
  ogDescription: 'Build a fully automated lead generation pipeline with n8n — scraping, AI enrichment, lead scoring, and CRM integration. Free workflow templates included.',
  ogImage: 'https://elitepickai.com/og-image.jpg',
  heroImage,
  heroImageAlt: 'n8n workflow automation pipeline for lead generation showing connected nodes from data scraping to CRM integration',
  author: 'Muneeb Shafiq',
  authorUrl: 'https://elitepickai.com/about',
  datePublished: '2025-02-13',
  dateModified: '2025-02-13',
  readTime: '18 min',
  level: 'Beginner to Intermediate',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'n8n Automation', href: '/blog?category=n8n-automation' },
  ],
  tableOfContents: [
    { id: 'prerequisites', title: 'Prerequisites: What You Will Need' },
    { id: 'step-1-setup', title: 'Step 1: Setting Up Your n8n Environment' },
    { id: 'step-2-trigger', title: 'Step 2: Configuring the Trigger Node' },
    { id: 'step-3-scraping', title: 'Step 3: Building the Lead Scraping Module' },
    { id: 'step-4-enrichment', title: 'Step 4: AI-Powered Lead Enrichment with OpenAI' },
    { id: 'step-5-scoring', title: 'Step 5: Automated Lead Scoring and Qualification' },
    { id: 'step-6-crm', title: 'Step 6: CRM Integration and Output' },
    { id: 'step-7-outreach', title: 'Step 7: Automated Email Outreach (Optional)' },
    { id: 'complete-workflow', title: 'Complete Workflow Architecture' },
    { id: 'enterprise', title: 'Taking It Further: Enterprise Considerations' },
    { id: 'conclusion', title: 'Conclusion and Next Steps' },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "Lead Generation Automation with n8n: Complete Step-by-Step Guide",
        "description": "Learn how to automate your entire lead generation pipeline with n8n including web scraping, AI enrichment, lead scoring, and CRM integration.",
        "author": {
          "@type": "Person",
          "name": "Muneeb Shafiq",
          "url": "https://elitepickai.com/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ElitePick AI",
          "url": "https://elitepickai.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://elitepickai.com/favicon.png"
          }
        },
        "datePublished": "2025-02-13",
        "dateModified": "2025-02-13",
        "proficiencyLevel": "Beginner to Intermediate",
        "dependencies": "n8n (self-hosted or cloud), Google Sheets, OpenAI API key",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://elitepickai.com/blog/n8n-automation/lead-generation-automation-n8n-tutorial"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Automate Lead Generation with n8n",
        "description": "A complete guide to building an automated lead generation pipeline using n8n workflows.",
        "totalTime": "PT45M",
        "estimatedCost": {
          "@type": "MonetaryCost",
          "currency": "USD",
          "value": "0"
        },
        "tool": [
          { "@type": "HowToTool", "name": "n8n (self-hosted or cloud)" },
          { "@type": "HowToTool", "name": "Google Sheets" },
          { "@type": "HowToTool", "name": "OpenAI API" }
        ],
        "step": [
          { "@type": "HowToStep", "name": "Set Up Your n8n Environment", "text": "Install n8n via Docker or sign up for n8n Cloud." },
          { "@type": "HowToStep", "name": "Configure the Trigger Node", "text": "Add a Schedule Trigger or Form Trigger to initiate lead collection." },
          { "@type": "HowToStep", "name": "Build the Lead Scraping Module", "text": "Use HTTP Request nodes to collect leads from Google Maps Places API." },
          { "@type": "HowToStep", "name": "Add AI-Powered Lead Enrichment", "text": "Connect OpenAI to analyze and enrich lead data with business context." },
          { "@type": "HowToStep", "name": "Implement Lead Scoring Logic", "text": "Use IF and Switch nodes to score and qualify leads automatically." },
          { "@type": "HowToStep", "name": "Push to CRM and Trigger Outreach", "text": "Route qualified leads to Google Sheets, HubSpot, or Pipedrive and trigger email sequences." }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://elitepickai.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://elitepickai.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "n8n Automation", "item": "https://elitepickai.com/blog/n8n-automation" },
          { "@type": "ListItem", "position": 4, "name": "Lead Generation Automation with n8n" }
        ]
      }
    ]
  },
  excerpt: 'Build a fully automated lead generation pipeline with n8n — from Google Maps scraping to AI enrichment, lead scoring, and CRM output. Replace 10+ hours of manual prospecting with a system that runs 24/7.',
  featured: true,
};
