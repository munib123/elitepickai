// Use string paths for assets - they'll be resolved by Vite at runtime
// TypeScript can't verify these at compile time, but Vite handles them correctly
const powerbiHeroDashboard = new URL('../assets/tools/powerbi-hero-dashboard.png', import.meta.url).href;
const powerbiPainMatrix = new URL('../assets/tools/powerbi-pain-matrix.png', import.meta.url).href;
const powerbi5StepProcess = new URL('../assets/tools/powerbi-5-step-process.png', import.meta.url).href;
const powerbiFinancialDashboard = new URL('../assets/tools/powerbi-financial-dashboard.png', import.meta.url).href;
const powerbiSalesDashboard = new URL('../assets/tools/powerbi-sales-dashboard.png', import.meta.url).href;
const powerbiInventoryDashboard = new URL('../assets/tools/powerbi-inventory-dashboard.png', import.meta.url).href;
const powerbiLeadMagnets = new URL('../assets/tools/powerbi-lead-magnets.png', import.meta.url).href;
const powerbiCtaBanner = new URL('../assets/tools/powerbi-cta-banner.png', import.meta.url).href;

import { n8nTool } from './tools/n8n';

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface MethodologyStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  metrics: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TargetAudienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface LeadMagnet {
  title: string;
  description: string;
  cta: string;
  icon: string;
}

export interface PricingTier {
  tier: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Tool {
  id: string;
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  seoKeywords: string[];
  metaDescription: string;
  heroImage: string;
  trustMetrics: { label: string; value: string }[];
  painPoints: PainPoint[];
  painMatrixImage: string;
  methodology: MethodologyStep[];
  methodologyImage: string;
  useCases: UseCase[];
  features: Feature[];
  targetAudience: TargetAudienceItem[];
  leadMagnets: LeadMagnet[];
  leadMagnetImage: string;
  pricing: PricingTier[];
  faqs: FAQ[];
  ctaBannerImage: string;
  fiverrLink: string;
  icon: string;
}

export const tools: Tool[] = [
  {
    id: '1',
    slug: 'power-bi-dashboard-services',
    title: 'Power BI Dashboard Development Services',
    headline: 'Stop Guessing. Start Knowing.',
    subheadline: 'Transform your chaotic spreadsheets into crystal-clear, interactive Power BI dashboards that make decisions for you.',
    seoKeywords: [
      'Power BI Dashboard Developer',
      'Custom Power BI Reports',
      'DAX Expert',
      'Business Intelligence Consultant',
      'Interactive Dashboard Design',
      'Power BI Consultant',
      'Data Visualization Expert'
    ],
    metaDescription: 'Transform raw data into executive-ready Power BI dashboards. Custom DAX formulas, real-time data connections, mobile-optimized views. Starter packages from $150.',
    heroImage: powerbiHeroDashboard,
    trustMetrics: [
      { label: 'Rating', value: '5-Star Rated' },
      { label: 'Delivered', value: '50+ Dashboards' },
      { label: 'Satisfaction', value: '100% Client Satisfaction' }
    ],
    painPoints: [
      {
        icon: 'FileSpreadsheet',
        title: 'Scattered Spreadsheets',
        description: 'Data lives in 15 different Excel files across 5 shared drives'
      },
      {
        icon: 'Clock',
        title: 'Manual Reporting',
        description: 'Spending 8+ hours weekly compiling reports manually'
      },
      {
        icon: 'AlertTriangle',
        title: 'Delayed Decisions',
        description: 'By the time you see the data, the opportunity has passed'
      },
      {
        icon: 'HelpCircle',
        title: 'No Single Source of Truth',
        description: 'Different departments report different numbers for the same metrics'
      },
      {
        icon: 'TrendingDown',
        title: 'Reactive, Not Proactive',
        description: 'You discover problems after they\'ve already cost you money'
      }
    ],
    painMatrixImage: powerbiPainMatrix,
    methodology: [
      {
        step: 1,
        title: 'Discovery',
        description: 'Deep-dive into your data sources, business questions, and decision-making needs.',
        icon: 'Search'
      },
      {
        step: 2,
        title: 'Design',
        description: 'Wireframe dashboard layouts optimized for your specific KPIs and user workflows.',
        icon: 'Palette'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Build your dashboard with clean data models, advanced DAX, and stunning visualizations.',
        icon: 'Code'
      },
      {
        step: 4,
        title: 'Delivery',
        description: 'Deploy, test, and train your team to maximize adoption and value.',
        icon: 'Rocket'
      },
      {
        step: 5,
        title: 'Ongoing Support',
        description: 'Continuous optimization, updates, and support as your needs evolve.',
        icon: 'HeartHandshake'
      }
    ],
    methodologyImage: powerbi5StepProcess,
    useCases: [
      {
        id: 'financial',
        title: 'Financial Performance Dashboard',
        subtitle: 'CFO-Ready Financial Intelligence',
        image: powerbiFinancialDashboard,
        metrics: ['Revenue tracking', 'Expense analysis', 'Cash flow forecasting', 'Budget vs. Actual']
      },
      {
        id: 'sales',
        title: 'Sales & Marketing Analytics',
        subtitle: 'Pipeline Visibility for Growth Teams',
        image: powerbiSalesDashboard,
        metrics: ['Pipeline tracking', 'Conversion rates', 'Campaign ROI', 'Lead source analysis']
      },
      {
        id: 'operations',
        title: 'Operations & Inventory Management',
        subtitle: 'Real-Time Operational Intelligence',
        image: powerbiInventoryDashboard,
        metrics: ['Inventory levels', 'Supply chain metrics', 'Production efficiency', 'Quality control']
      }
    ],
    features: [
      {
        icon: 'Zap',
        title: 'Real-Time Data Sync',
        description: 'Live connections to your data sources for up-to-the-minute insights'
      },
      {
        icon: 'Calculator',
        title: 'Advanced DAX Formulas',
        description: 'Complex calculations that go beyond basic aggregations'
      },
      {
        icon: 'Smartphone',
        title: 'Mobile-Responsive Design',
        description: 'Access your dashboards on any device, anywhere'
      },
      {
        icon: 'MousePointerClick',
        title: 'Interactive Drill-Downs',
        description: 'Click to explore details without switching reports'
      },
      {
        icon: 'Lock',
        title: 'Row-Level Security',
        description: 'Control who sees what data with granular permissions'
      },
      {
        icon: 'Bell',
        title: 'Automated Alerts',
        description: 'Get notified when KPIs hit critical thresholds'
      },
      {
        icon: 'Database',
        title: 'Multiple Data Sources',
        description: 'Connect Excel, SQL, cloud services, and more in one view'
      },
      {
        icon: 'Palette',
        title: 'Custom Branding',
        description: 'Dashboards that match your company\'s visual identity'
      }
    ],
    targetAudience: [
      {
        icon: 'Building2',
        title: 'Small Business Owners',
        description: 'Who need executive visibility without hiring an analytics team'
      },
      {
        icon: 'TrendingUp',
        title: 'Operations Managers',
        description: 'Tracking performance across multiple locations or departments'
      },
      {
        icon: 'DollarSign',
        title: 'Finance Directors',
        description: 'Requiring real-time financial reporting and forecasting'
      },
      {
        icon: 'Target',
        title: 'Sales Leaders',
        description: 'Who need pipeline visibility and performance tracking'
      },
      {
        icon: 'Briefcase',
        title: 'Consultants & Agencies',
        description: 'Delivering client-ready dashboards and analytics'
      }
    ],
    leadMagnets: [
      {
        title: 'Power BI Readiness Checklist',
        description: 'A 15-point checklist to prepare your data for dashboard success',
        cta: 'Download Free Checklist',
        icon: 'CheckSquare'
      },
      {
        title: 'Sample Dashboard File',
        description: 'Explore a fully-functional Power BI dashboard template',
        cta: 'Get Sample Dashboard',
        icon: 'FileBarChart'
      },
      {
        title: 'DAX Cheat Sheet',
        description: 'Essential DAX formulas every business analyst should know',
        cta: 'Download Cheat Sheet',
        icon: 'FileCode'
      }
    ],
    leadMagnetImage: powerbiLeadMagnets,
    pricing: [
      {
        tier: 'Starter',
        price: '$150 - $300',
        description: 'Perfect for small datasets and single-page dashboards',
        features: [
          'Single data source connection',
          '1 dashboard page with 5-8 visualizations',
          'Basic DAX measures',
          'Mobile-responsive layout',
          '1 revision round',
          '7-day delivery'
        ],
        cta: 'Get Started'
      },
      {
        tier: 'Professional',
        price: '$400 - $800',
        description: 'Ideal for growing businesses with multiple data needs',
        features: [
          'Up to 3 data sources',
          '3-5 dashboard pages',
          'Advanced DAX calculations',
          'Interactive drill-through pages',
          'Custom themes & branding',
          '2 revision rounds',
          '14-day delivery'
        ],
        cta: 'Most Popular',
        popular: true
      },
      {
        tier: 'Enterprise',
        price: '$1,200+',
        description: 'Complete BI solution for complex organizations',
        features: [
          'Unlimited data sources',
          'Full dashboard suite (5+ pages)',
          'Complex DAX & data modeling',
          'Row-level security setup',
          'Power BI Service deployment',
          'Training & documentation',
          'Unlimited revisions',
          '30-day support included'
        ],
        cta: 'Contact for Quote'
      }
    ],
    faqs: [
      {
        question: 'How long does it take to build a Power BI dashboard?',
        answer: 'Starter dashboards typically take 5-7 business days. Professional projects run 10-14 days, and Enterprise solutions may take 3-4 weeks depending on complexity and data source integration requirements.'
      },
      {
        question: 'What data sources can you connect to?',
        answer: 'Power BI can connect to virtually any data source: Excel, CSV, SQL databases, SharePoint, Google Sheets, Salesforce, QuickBooks, APIs, and 100+ other connectors. If your data exists, we can likely connect it.'
      },
      {
        question: 'Do I need a Power BI license?',
        answer: 'For viewing dashboards I send you as files (.pbix), Power BI Desktop is free. For sharing dashboards with your team via Power BI Service, you\'ll need Power BI Pro ($10/user/month) or Premium licenses.'
      },
      {
        question: 'Can you update existing dashboards I already have?',
        answer: 'Absolutely! I can optimize, redesign, or extend your existing Power BI dashboards. Often, a refresh can dramatically improve performance and usability without starting from scratch.'
      },
      {
        question: 'What if I need changes after delivery?',
        answer: 'Each package includes revision rounds. Beyond that, I offer ongoing support packages, or you can request ad-hoc changes as needed. I also provide documentation so your team can make simple updates themselves.'
      }
    ],
    ctaBannerImage: powerbiCtaBanner,
    fiverrLink: 'https://www.fiverr.com/s/lj4XQKg',
    icon: 'BarChart3'
  },
  n8nTool
];

export const getToolBySlug = (slug: string): Tool | undefined => {
  return tools.find(tool => tool.slug === slug);
};
