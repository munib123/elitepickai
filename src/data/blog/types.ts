export interface BlogPost {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  headline: string;
  subheadline: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  heroImage: string;
  heroImageAlt: string;
  author: string;
  authorUrl: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  level: string;
  breadcrumbs: { label: string; href: string }[];
  tableOfContents: { id: string; title: string }[];
  jsonLd: object;
  excerpt: string;
  featured?: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  icon: string;
}
