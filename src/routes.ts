import { projects } from './data/projects';
import { services } from './data/services';
import { tools } from './data/tools';
import { blogPosts } from './data/blog';

// Static routes
const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/projects',
  '/services',
  '/tools',
  '/blog',
  '/order',
];

// Dynamic project routes
const projectRoutes = projects.map(project => `/projects/${project.slug}`);

// Dynamic service routes
const serviceRoutes = services.map(service => `/services/${service.slug}`);

// Dynamic tool routes
const toolRoutes = tools.map(tool => `/tools/${tool.slug}`);

// Dynamic blog routes
const blogRoutes = blogPosts.map(post => `/blog/${post.categorySlug}/${post.slug}`);

// All routes for pre-rendering
export const allRoutes = [
  ...staticRoutes,
  ...projectRoutes,
  ...serviceRoutes,
  ...toolRoutes,
  ...blogRoutes,
];

export default allRoutes;
