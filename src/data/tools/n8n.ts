// Use string paths for assets - they'll be resolved by Vite at runtime
const n8nHeroWorkflow = new URL('../../assets/tools/n8n-hero-workflow.webp', import.meta.url).href;
const n8nPainMatrix = new URL('../../assets/tools/n8n-pain-matrix.webp', import.meta.url).href;
const n8nMethodology = new URL('../../assets/tools/n8n-methodology.webp', import.meta.url).href;
const n8nUseCaseMarketing = new URL('../../assets/tools/n8n-usecase-marketing.webp', import.meta.url).href;
const n8nUseCaseOperations = new URL('../../assets/tools/n8n-usecase-operations.webp', import.meta.url).href;
const n8nUseCaseAI = new URL('../../assets/tools/n8n-usecase-ai.webp', import.meta.url).href;
const n8nLogo = new URL('../../assets/tools/n8n-logo.webp', import.meta.url).href;
const n8nLeadMagnets = new URL('../../assets/tools/n8n-lead-magnets.webp', import.meta.url).href;
const n8nCtaBanner = new URL('../../assets/tools/n8n-cta-banner.webp', import.meta.url).href;

import type { Tool } from '../tools';

export const n8nLogo_image = n8nLogo;

export const n8nTool: Tool = {
  id: '2',
  slug: 'n8n-automation',
  title: 'n8n Expert & Workflow Automation Developer',
  headline: 'Automate Mission-Critical Workflows with Expert n8n Integrations',
  subheadline: 'Stop paying per task. Stop wrestling with API documentation. We build powerful, self-hosted n8n automations that connect your entire tech stack—running 24/7 without the “Zapier tax” or the technical headache.',
  seoKeywords: [
    'n8n Expert',
    'n8n Developer',
    'Workflow Automation Consultant',
    'n8n Integration Services',
    'API Integration Specialist',
    'Zapier Alternative Expert',
    'n8n CRM Automation',
    'n8n AI Integration',
    'n8n Freelancer',
    'hire n8n developer',
    'n8n automation services',
    'n8n workflow builder',
    'n8n lead generation automation',
    'business process automation',
    'automate repetitive tasks n8n',
    'n8n vs Zapier'
  ],
  metaDescription: 'Hire an n8n expert to automate your business workflows — lead routing, CRM sync, invoice processing, and AI integrations. Self-hosted, zero per-task costs. Free audit.',
  heroImage: n8nHeroWorkflow,
  trustMetrics: [
    { label: 'Partner', value: 'n8n Certified Partner' },
    { label: 'Deployed', value: '300+ Workflows' },
    { label: 'Rating', value: '4.9★ Fiverr Rating' },
    { label: 'Automated', value: '50K+ Tasks/Month' }
  ],
  painPoints: [
    {
      icon: 'Copy',
      title: 'The Copy-Paste Nightmare',
      description: 'Hours spent manually copying data between apps. Lead comes in, someone manually adds to CRM, notifies Slack, updates spreadsheet—4 steps per lead, 200 daily actions prone to human error.'
    },
    {
      icon: 'DollarSign',
      title: 'The Zapier Tax',
      description: 'Paying $500+/month to Zapier with growing bills. Every task counts against your quota, complex workflows burn through allocation fast, and you\'re limited by pre-built integrations.'
    },
    {
      icon: 'Code',
      title: 'API Integration Hell',
      description: 'Days reading API docs, figuring out OAuth, parsing JSON, debugging webhooks. Then the API changes and everything breaks. Your core business isn\'t building integrations.'
    },
    {
      icon: 'AlertTriangle',
      title: 'Silent Automation Failures',
      description: 'Automation worked for a week, then silently failed. Leads stopped syncing, invoices stopped sending. Discovered 3 days later when a customer complained—damage done.'
    }
  ],
  painMatrixImage: n8nPainMatrix,
  methodology: [
    {
      step: 1,
      title: 'Discovery',
      description: 'Map your current manual processes end-to-end. Identify automation candidates, decision points, and expected time/cost savings.',
      icon: 'ClipboardList'
    },
    {
      step: 2,
      title: 'Design',
      description: 'Architect the technical blueprint: APIs, authentication, data transformations, and error handling. Scalable for 10x volume.',
      icon: 'Compass'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Build workflows node by node: triggers, transformations, business logic, and actions. Every path tested with real data.',
      icon: 'Code'
    },
    {
      step: 4,
      title: 'Error Handling',
      description: 'Implement try-catch blocks, automatic retry logic, dead-letter queues, and real-time Slack/email alerts. Self-healing workflows.',
      icon: 'ShieldAlert'
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'Deploy to your n8n instance, configure securely, and provide full documentation for independent team maintenance.',
      icon: 'Rocket'
    }
  ],
  methodologyImage: n8nMethodology,
  useCases: [
    {
      id: 'marketing',
      title: 'Intelligent Lead Routing & Enrichment',
      subtitle: 'Marketing & Sales Automation',
      image: n8nUseCaseMarketing,
      metrics: ['Lead response: 4 hours → 4 minutes', '47% higher conversion rate', 'AI-powered lead scoring', 'Multi-source webhook aggregation']
    },
    {
      id: 'operations',
      title: 'Automated Invoice Processing',
      subtitle: 'Operations & Admin Automation',
      image: n8nUseCaseOperations,
      metrics: ['15 min → 30 sec per invoice', '35 hours/month saved', 'AI document extraction', 'Zero late payment penalties']
    },
    {
      id: 'ai-agents',
      title: 'AI Customer Support Agent',
      subtitle: 'AI-Powered Automation',
      image: n8nUseCaseAI,
      metrics: ['65% tickets auto-resolved', '8 hours → 2 min response', 'RAG architecture', '18% CSAT improvement']
    }
  ],
  features: [
    {
      icon: 'Infinity',
      title: 'Unlimited Tasks',
      description: 'Self-hosted n8n means zero per-execution costs. Run unlimited workflows forever.'
    },
    {
      icon: 'Bot',
      title: 'AI/LLM Integration',
      description: 'Native OpenAI, Claude, Gemini nodes. Build RAG systems with Pinecone vector databases.'
    },
    {
      icon: 'GitBranch',
      title: 'Complex Logic',
      description: 'Loops, conditionals, switches, and custom JavaScript/Python code that Zapier charges enterprise prices for.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Error Handling',
      description: 'Try-catch, auto-retry, dead-letter queues, instant alerts. Workflows that self-heal.'
    },
    {
      icon: 'Link',
      title: '400+ Integrations',
      description: 'Native connectors for CRMs, databases, email, e-commerce. HTTP Request node for any API.'
    },
    {
      icon: 'Lock',
      title: 'Data Sovereignty',
      description: 'Self-hosted option keeps your data on your infrastructure. HIPAA, SOC 2, GDPR compliant.'
    },
    {
      icon: 'Webhook',
      title: 'Webhook Triggers',
      description: 'Real-time automation triggered by any app event, form submission, or API call.'
    },
    {
      icon: 'FileText',
      title: 'Full Documentation',
      description: 'Complete docs so your team can maintain and extend workflows independently.'
    }
  ],
  targetAudience: [
    {
      icon: 'TrendingUp',
      title: 'Marketing Directors',
      description: 'Lead routing, campaign orchestration, and cross-channel attribution automation'
    },
    {
      icon: 'Building2',
      title: 'Operations Managers',
      description: 'Invoice processing, employee onboarding, and admin task elimination'
    },
    {
      icon: 'Bot',
      title: 'Technical Founders',
      description: 'AI agents, RAG systems, and intelligent process automation'
    },
    {
      icon: 'ShoppingCart',
      title: 'E-commerce Founders',
      description: 'Cart recovery, inventory sync, and order processing automation'
    },
    {
      icon: 'Users',
      title: 'Agency Owners',
      description: 'Client workflow automation and white-label integration services'
    }
  ],
  leadMagnets: [
    {
      title: 'Automation ROI Calculator',
      description: 'Interactive spreadsheet to calculate manual process costs and potential automation savings. Most find $50K+/year in hidden opportunities.',
      cta: 'Get the ROI Calculator',
      icon: 'Calculator'
    },
    {
      title: 'Starter Workflow Templates',
      description: '5 ready-to-import n8n JSON files: lead notifications, report aggregator, CRM sync, social scheduler, error monitoring.',
      cta: 'Download Template Pack',
      icon: 'FileJson'
    },
    {
      title: 'n8n Error Handling Cheat Sheet',
      description: 'Quick-reference guide covering 10 most common n8n errors with code snippets and node configurations.',
      cta: 'Get the Cheat Sheet',
      icon: 'FileCode'
    }
  ],
  leadMagnetImage: n8nLeadMagnets,
  pricing: [
    {
      tier: 'Starter',
      price: '$100 - $250',
      description: 'Simple automations connecting 2-3 apps with linear logic',
      features: [
        '1 n8n workflow (up to 10 nodes)',
        'Connection to 2-3 apps/services',
        'Basic trigger (webhook, schedule, app event)',
        'Simple data transformation',
        'Basic error notification (email/Slack)',
        '2 revision rounds',
        '2-4 business days delivery'
      ],
      cta: 'Order Starter'
    },
    {
      tier: 'Professional',
      price: '$350 - $700',
      description: 'Complex workflows with branching logic and API integrations',
      features: [
        '1-2 workflows (up to 30 nodes total)',
        'Connection to 4-6 apps/services',
        'Complex logic (IF/Switch, loops, merges)',
        'Custom API integrations (REST/GraphQL)',
        'Comprehensive error handling with retry',
        'Data validation and transformation',
        'Setup documentation',
        '5-8 business days delivery'
      ],
      cta: 'Most Popular',
      popular: true
    },
    {
      tier: 'Enterprise',
      price: '$1,000+',
      description: 'Multiple interconnected workflows with AI integration',
      features: [
        'Everything in Professional PLUS:',
        'Unlimited workflows and nodes',
        'AI/LLM integration (OpenAI, Claude)',
        'Vector database setup for RAG',
        'Self-hosted n8n deployment assistance',
        'Custom JavaScript/Python code nodes',
        'Video walkthrough + 30-day support',
        '10-21 business days delivery'
      ],
      cta: 'Request Quote'
    }
  ],
  faqs: [
    {
      question: 'What is n8n and how is it different from Zapier?',
      answer: 'n8n is an open-source workflow automation tool that can be self-hosted, meaning zero per-task fees. It supports complex logic like loops, conditionals, and custom code—things Zapier charges enterprise prices for. Think of it as Zapier\'s more powerful, more affordable cousin with 400+ built-in integrations.'
    },
    {
      question: 'Do I need to host n8n myself?',
      answer: 'No! n8n offers both options: n8n Cloud (fully managed, starting $20/month) or self-hosted on your own server for maximum control and zero per-execution costs. We can build workflows for either environment and help you choose the right option.'
    },
    {
      question: 'How long does it take to build an n8n automation?',
      answer: 'Simple single workflows take 2-4 business days. Multi-step automations with branching logic require 5-8 days. Enterprise-grade AI-powered systems take 2-3 weeks. Rush delivery available for time-sensitive projects.'
    },
    {
      question: 'Is my data secure with n8n?',
      answer: 'Absolutely—n8n can be MORE secure than cloud-only tools. With self-hosted n8n, your data never leaves your infrastructure. All credentials are encrypted. For sensitive industries, self-hosted enables HIPAA, SOC 2, and GDPR compliance.'
    },
    {
      question: 'What happens if my automation breaks?',
      answer: 'Every workflow includes comprehensive error handling: automatic retry logic, instant Slack/email alerts, and dead-letter queues. You\'ll know about issues within seconds, not days, and most issues auto-recover.'
    },
    {
      question: 'Can n8n integrate with my specific tool?',
      answer: 'Almost certainly yes. n8n has 400+ native integrations covering CRMs, databases, communication tools, e-commerce, AI, and more. For tools without native connectors, the HTTP Request node connects to ANY service with an API.'
    },
    {
      question: 'Can n8n handle AI and LLM integrations?',
      answer: 'Yes! Native nodes exist for OpenAI, Claude, Google Gemini. Build RAG systems with Pinecone. Use cases include AI support agents, content generation, document processing, and intelligent routing based on AI classification.'
    },
    {
      question: 'How much will I save compared to Zapier?',
      answer: 'Typically 70-90% savings. Example: 10,000 tasks/month costs $500+/month on Zapier. Same workflow on self-hosted n8n costs $0 per task—just $20-50/month hosting. That\'s $5,400+ saved yearly on one workflow.'
    }
  ],
  ctaBannerImage: n8nCtaBanner,
  fiverrLink: 'https://www.fiverr.com/s/AyAErkq',
  icon: 'Workflow'
};
