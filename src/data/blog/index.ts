import type { BlogPost, BlogCategory } from './types';
import { powerbiPillarPost } from './powerbi-pillar';
import { powerbiSalesDashboardPost } from './powerbi-sales-dashboard';
import { n8nLeadGenerationPost } from './n8n-lead-generation';

export type { BlogPost, BlogCategory };

export const blogCategories: BlogCategory[] = [
  {
    name: 'Power BI',
    slug: 'power-bi',
    description: 'Guides, tutorials, and best practices for Microsoft Power BI dashboard development.',
    icon: 'BarChart3',
  },
  {
    name: 'n8n Automation',
    slug: 'n8n-automation',
    description: 'Step-by-step tutorials for building AI-powered workflow automation with n8n.',
    icon: 'Zap',
  },
];

export const blogPosts: BlogPost[] = [
  n8nLeadGenerationPost,
  powerbiPillarPost,
  powerbiSalesDashboardPost,
];

export const getBlogPostBySlug = (categorySlug: string, postSlug: string): BlogPost | undefined => {
  return blogPosts.find(
    (post) => post.categorySlug === categorySlug && post.slug === postSlug
  );
};

export const getBlogPostsByCategory = (categorySlug: string): BlogPost[] => {
  return blogPosts.filter((post) => post.categorySlug === categorySlug);
};
