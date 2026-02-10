#!/usr/bin/env node

/**
 * Post-build pre-rendering script
 * Runs AFTER vite build to inject static HTML content into the built index.html
 * This allows search engine crawlers to see actual content instead of an empty div
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

// Read the built index.html template
const templatePath = join(distDir, 'index.html');
if (!existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');

// ============================================
// Data definitions (extracted from src/data/)
// ============================================

const projects = [
  {
    slug: 'kyc-verification-analytics',
    title: 'KYC Document Verification Analytics Dashboard',
    category: 'Compliance Analytics',
    description: 'Comprehensive analytics dashboard transforming 176,000+ KYC verification records into strategic insights for compliance and fraud detection.',
    tools: ['Python', 'NumPy', 'Pandas', 'Seaborn', 'Matplotlib'],
  },
  {
    slug: 'facility-cleaning-operations',
    title: 'Facility Cleaning Operations Data Pipeline',
    category: 'Operations BI Dashboard',
    description: 'End-to-end automated data pipeline for 50+ facility locations with real-time Power BI dashboards for operations monitoring.',
    tools: ['Python', 'Pandas', 'NumPy', 'MySQL', 'Power BI'],
  },
  {
    slug: 'tour-planning-ai-assistant',
    title: 'Tour Planning AI Assistant (Autonomous Travel Agent)',
    category: 'AI Agent Development',
    description: 'AI-powered travel planning assistant using LLM technology for personalized itinerary generation.',
    tools: ['Python', 'Gradio', 'Groq API', 'Hugging Face', 'LLM Prompt Engineering'],
  },
  {
    slug: 'chicago-crime-analysis',
    title: 'Chicago Crime Rate Analysis Dashboard',
    category: 'Public Safety Analytics',
    description: 'Interactive analytical dashboard for crime trend analysis and geographic hotspot identification.',
    tools: ['Power BI', 'Pandas', 'NumPy', 'MSSQL'],
  },
  {
    slug: 'developers-survey-analysis',
    title: 'Developers Survey Analysis Report',
    category: 'Survey Data Analysis',
    description: 'Comprehensive analysis of developer survey data to identify technology trends and preferences.',
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'MSSQL'],
  },
  {
    slug: 'credit-card-transaction',
    title: 'Credit Card Transaction Analysis Dashboard',
    category: 'Financial Analytics',
    description: 'Dynamic interactive reports for transaction trend visualization and anomaly detection.',
    tools: ['Power BI', 'Pandas', 'NumPy', 'MSSQL'],
  },
  {
    slug: 'loan-sherlock-fraud-detection',
    title: 'Loan Sherlock - Fraud Detection System',
    category: 'ML Fraud Detection',
    description: 'Machine learning-based fraud detection system achieving 97% accuracy for loan application analysis.',
    tools: ['Python', 'Scikit-learn', 'LightGBM', 'Streamlit', 'Plotly'],
  },
  {
    slug: 'docspeak-rag',
    title: 'DocSpeak - RAG Document Q&A System',
    category: 'RAG/Document AI',
    description: 'AI-powered document Q&A system using RAG architecture for conversational document access.',
    tools: ['Python', 'RAG Architecture', 'Streamlit', 'Gemini API', 'Vector Embeddings'],
  },
  {
    slug: 'intelligent-job-application-bot',
    title: 'Intelligent Job Application Bot: End-to-End Automation with n8n & AI Agents',
    category: 'n8n Workflow Automation',
    description: 'Fully automated job application system using n8n for AI-powered personalized outreach.',
    tools: ['n8n', 'LangChain', 'GPT-4o', 'Snov.io API', 'Google Sheets', 'Gmail API'],
  },
];

const services = [
  {
    slug: 'power-bi-dashboard-expert',
    title: 'Power BI Dashboard Expert',
    headline: 'Transform Your Raw Data Into Executive-Ready Visual Intelligence',
    description: 'Custom Power BI dashboard development for business intelligence and data visualization.',
  },
  {
    slug: 'tableau-consultant',
    title: 'Tableau Consulting Services',
    headline: 'Professional-Grade Data Stories That Impress Stakeholders',
    description: 'Expert Tableau dashboard development and data visualization consulting.',
  },
  {
    slug: 'data-cleaning-services',
    title: 'Data Cleaning & Preparation Services',
    headline: 'Turn Your Messy Data Into Analysis-Ready Gold',
    description: 'Professional data cleaning, preprocessing, and preparation services.',
  },
  {
    slug: 'exploratory-data-analysis',
    title: 'Exploratory Data Analysis (EDA) Services',
    headline: 'Discover Hidden Patterns in Your Data',
    description: 'Comprehensive exploratory data analysis to uncover insights and trends.',
  },
  {
    slug: 'custom-ai-chatbot-developer',
    title: 'Custom AI Chatbot Developer',
    headline: 'Build Intelligent Conversational AI',
    description: 'Custom AI chatbot development with RAG, LLM integration, and document Q&A.',
  },
  {
    slug: 'fine-tuning-llm-services',
    title: 'Fine-Tuning LLM Services',
    headline: 'Customize Large Language Models',
    description: 'LLM fine-tuning services for domain-specific AI applications.',
  },
  {
    slug: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    headline: 'Predictive Models for Business',
    description: 'Machine learning model development for fraud detection, prediction, and classification.',
  },
  {
    slug: 'python-automation-scripting',
    title: 'Python Automation & Scripting',
    headline: 'Eliminate Repetitive Tasks',
    description: 'Custom Python automation scripts for workflow optimization.',
  },
];

const tools = [
  {
    slug: 'power-bi-dashboard-services',
    title: 'Power BI Dashboard Development Services',
    headline: 'Stop Guessing. Start Knowing.',
    description: 'Transform chaotic spreadsheets into interactive Power BI dashboards.',
  },
  {
    slug: 'n8n-automation',
    title: 'n8n Expert & Workflow Automation Developer',
    headline: 'Automate Mission-Critical Workflows',
    description: 'Self-hosted n8n automations that connect your entire tech stack.',
  },
];

// ============================================
// Static content generators for each route
// ============================================

function generateHomeContent() {
  return `
    <header>
      <h1>Your Data Science & AI Agency | ElitePick AI</h1>
      <p>Transform raw data into actionable insights. Partner with a top-rated AI & Data Science Agency for Power BI Dashboards, Custom AI Chatbots, and Python Automation.</p>
    </header>
    <main>
      <section>
        <h2>Data Science & AI Services</h2>
        <p>Professional data science, machine learning, and AI engineering services for businesses.</p>
        <ul>
          <li>Power BI Dashboard Development</li>
          <li>Custom AI Chatbot Development</li>
          <li>Machine Learning Engineering</li>
          <li>Python Automation & Scripting</li>
          <li>Data Cleaning & Preparation</li>
          <li>Exploratory Data Analysis</li>
        </ul>
      </section>
      <section>
        <h2>Featured Projects</h2>
        ${projects.slice(0, 4).map(p => `
          <article>
            <h3><a href="/projects/${p.slug}">${p.title}</a></h3>
            <p>${p.category}</p>
            <p>${p.description}</p>
          </article>
        `).join('')}
      </section>
      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>Python, SQL, Power BI, Tableau</li>
          <li>Pandas, NumPy, Scikit-learn, TensorFlow</li>
          <li>LangChain, RAG, LLM Fine-tuning</li>
          <li>Streamlit, Gradio, Docker, Git</li>
        </ul>
      </section>
    </main>
  `;
}

function generateAboutContent() {
  return `
    <header>
      <h1>About ElitePick AI - AI & Data Science Agency</h1>
    </header>
    <main>
      <section>
        <h2>Professional Background</h2>
        <p>AI & Data Science Agency specializing in Power BI dashboards, machine learning, and custom AI solutions. Helping businesses transform data into actionable insights.</p>
      </section>
      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Tools For Data Science - Coursera</li>
          <li>IBM Data Science Certificate</li>
          <li>Google Data Analytics Certificate</li>
          <li>Power BI Data Analyst - Microsoft</li>
          <li>SQL (Basic to Advanced) - HackerRank</li>
        </ul>
      </section>
      <section>
        <h2>Technical Skills</h2>
        <h3>Programming & Analysis</h3>
        <p>Python, SQL, Pandas, NumPy, Scikit-learn</p>
        <h3>Visualization & BI</h3>
        <p>Power BI, Tableau, Matplotlib, Seaborn, Plotly</p>
        <h3>AI & Machine Learning</h3>
        <p>TensorFlow, LangChain, RAG, LLM Fine-tuning, Prompt Engineering</p>
        <h3>Tools & Deployment</h3>
        <p>Streamlit, Gradio, Docker, Git, Hugging Face</p>
      </section>
    </main>
  `;
}

function generateServicesContent() {
  return `
    <header>
      <h1>Data Science & AI Services</h1>
      <p>Professional data analysis, machine learning, and AI engineering services.</p>
    </header>
    <main>
      <section>
        <h2>Data Analytics Services</h2>
        ${services.filter(s => ['power-bi-dashboard-expert', 'tableau-consultant', 'data-cleaning-services', 'exploratory-data-analysis'].includes(s.slug)).map(s => `
          <article>
            <h3><a href="/services/${s.slug}">${s.title}</a></h3>
            <p>${s.headline}</p>
            <p>${s.description}</p>
          </article>
        `).join('')}
      </section>
      <section>
        <h2>AI & Machine Learning Services</h2>
        ${services.filter(s => ['custom-ai-chatbot-developer', 'fine-tuning-llm-services', 'machine-learning-engineer', 'python-automation-scripting'].includes(s.slug)).map(s => `
          <article>
            <h3><a href="/services/${s.slug}">${s.title}</a></h3>
            <p>${s.headline}</p>
            <p>${s.description}</p>
          </article>
        `).join('')}
      </section>
    </main>
  `;
}

function generateServiceDetailContent(service) {
  return `
    <header>
      <h1>${service.title}</h1>
      <p>${service.headline}</p>
    </header>
    <main>
      <section>
        <p>${service.description}</p>
      </section>
      <nav>
        <a href="/services">Back to Services</a>
        <a href="/contact">Contact for Quote</a>
      </nav>
    </main>
  `;
}

function generateProjectsContent() {
  return `
    <header>
      <h1>Data Science & AI Portfolio</h1>
      <p>Explore completed projects in data analytics, machine learning, and AI development.</p>
    </header>
    <main>
      ${projects.map(p => `
        <article>
          <h2><a href="/projects/${p.slug}">${p.title}</a></h2>
          <p>${p.category}</p>
          <p>${p.description}</p>
          <p>Technologies: ${p.tools.join(', ')}</p>
        </article>
      `).join('')}
    </main>
  `;
}

function generateProjectDetailContent(project) {
  return `
    <header>
      <h1>${project.title}</h1>
      <p>${project.category}</p>
    </header>
    <main>
      <section>
        <p>${project.description}</p>
        <h2>Technologies Used</h2>
        <ul>
          ${project.tools.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </section>
      <nav>
        <a href="/projects">Back to Portfolio</a>
        <a href="/contact">Discuss Your Project</a>
      </nav>
    </main>
  `;
}

function generateToolsContent() {
  return `
    <header>
      <h1>Specialized Tool Services</h1>
      <p>Expert services for specific tools and platforms.</p>
    </header>
    <main>
      ${tools.map(t => `
        <article>
          <h2><a href="/tools/${t.slug}">${t.title}</a></h2>
          <p>${t.headline}</p>
          <p>${t.description}</p>
        </article>
      `).join('')}
    </main>
  `;
}

function generateToolDetailContent(tool) {
  return `
    <header>
      <h1>${tool.title}</h1>
      <p>${tool.headline}</p>
    </header>
    <main>
      <section>
        <p>${tool.description}</p>
      </section>
      <nav>
        <a href="/tools">Back to Tools</a>
        <a href="/contact">Get Started</a>
      </nav>
    </main>
  `;
}

function generateContactContent() {
  return `
    <header>
      <h1>Contact ElitePick AI - AI & Data Science Agency</h1>
    </header>
    <main>
      <section>
        <h2>Get in Touch</h2>
        <p>Ready to transform your data into actionable insights? Let's discuss your project.</p>
        <p>Email: muneebzehel@gmail.com</p>
        <p>Or use the contact form to send a message directly.</p>
      </section>
      <section>
        <h2>Services Available</h2>
        <ul>
          <li>Power BI Dashboard Development</li>
          <li>Custom AI Chatbot Development</li>
          <li>Machine Learning Engineering</li>
          <li>Data Cleaning & Analysis</li>
          <li>Python Automation</li>
        </ul>
      </section>
    </main>
  `;
}

function generateOrderContent() {
  return `
    <header>
      <h1>Order Data Science Services</h1>
    </header>
    <main>
      <section>
        <h2>Available Services</h2>
        <ul>
          <li>Power BI Dashboard Development - Starting at $150</li>
          <li>Custom AI Chatbot - Starting at $100</li>
          <li>Machine Learning Models - Starting at $100</li>
          <li>Data Cleaning Services - Starting at $100</li>
          <li>Python Automation Scripts - Starting at $100</li>
        </ul>
        <p>Contact for custom quotes on larger projects.</p>
      </section>
    </main>
  `;
}

// ============================================
// Route definitions and content mapping
// ============================================

const staticRoutes = [
  { path: '/', generator: generateHomeContent },
  { path: '/about', generator: generateAboutContent },
  { path: '/services', generator: generateServicesContent },
  { path: '/projects', generator: generateProjectsContent },
  { path: '/tools', generator: generateToolsContent },
  { path: '/contact', generator: generateContactContent },
  { path: '/order', generator: generateOrderContent },
];

const dynamicRoutes = [
  ...projects.map(p => ({
    path: `/projects/${p.slug}`,
    generator: () => generateProjectDetailContent(p),
  })),
  ...services.map(s => ({
    path: `/services/${s.slug}`,
    generator: () => generateServiceDetailContent(s),
  })),
  ...tools.map(t => ({
    path: `/tools/${t.slug}`,
    generator: () => generateToolDetailContent(t),
  })),
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

// ============================================
// Pre-rendering logic
// ============================================

console.log('🚀 Starting pre-rendering...\n');

for (const route of allRoutes) {
  const staticContent = route.generator();
  
  // Inject the static content into the root div
  const outputHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${staticContent}</div>`
  );
  
  // Determine output path
  const outputPath = route.path === '/'
    ? join(distDir, 'index.html')
    : join(distDir, route.path, 'index.html');
  
  // Ensure directory exists
  const dir = dirname(outputPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  
  // Write the pre-rendered HTML
  writeFileSync(outputPath, outputHtml);
  console.log(`✅ Pre-rendered: ${route.path}`);
}

console.log(`\n🎉 Pre-rendering complete! ${allRoutes.length} pages generated.`);
