export interface Service {
  id: string;
  slug: string;
  title: string;
  headline: string;
  cluster: 'data-analytics' | 'ai-ml';
  seoKeywords: string[];
  targetClient: string;
  painPoints: string[];
  description: string;
  deliverables: string[];
  whyChooseMe: string;
  relatedProjects: string[];
  pricing: string;
  fiverrLink: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'power-bi-dashboard-expert',
    title: 'Power BI Dashboard Expert',
    headline: 'Transform Your Raw Data Into Executive-Ready Visual Intelligence',
    cluster: 'data-analytics',
    seoKeywords: ['Power BI Dashboard', 'Business Intelligence Expert', 'KPI Dashboard Developer', 'Interactive Sales Dashboard', 'Power BI Consultant', 'Data Visualization Specialist', 'Executive Dashboard Design', 'DAX Formula Expert'],
    targetClient: 'Business owners, operations managers, and executives who have data trapped in spreadsheets but need visual dashboards to make faster, smarter decisions.',
    painPoints: [
      'Spending hours compiling weekly reports manually from multiple spreadsheets',
      'Unable to see real-time business performance at a glance',
      'Leadership asking for insights but data is scattered across systems',
      'Making decisions based on gut feeling instead of clear data visualization',
      'Competitors using data dashboards while you\'re stuck with static reports'
    ],
    description: 'Stop drowning in spreadsheets and start making data-driven decisions in seconds. As a specialized Power BI Dashboard team, we transform your raw business data into stunning, interactive dashboards that tell the story your numbers are hiding. Every dashboard we create is designed with your end-users in mind. Executives get high-level overviews with drill-down capability. Managers get real-time metrics they can act on immediately.',
    deliverables: [
      'Custom-designed interactive Power BI dashboard tailored to your specific KPIs',
      'Data connection setup to your existing sources (Excel, SQL, CSV, cloud services)',
      'DAX measures and calculated columns for advanced metrics',
      'Mobile-optimized views for on-the-go access',
      'User training documentation or video walkthrough',
      '30 days of post-delivery support for adjustments'
    ],
    whyChooseMe: 'With proven experience building dashboards for operations management across 50+ facility locations, financial transaction analysis, and urban crime pattern visualization, we understand that a dashboard is only valuable if it answers your specific business questions.',
    relatedProjects: ['facility-cleaning-operations', 'chicago-crime-analysis', 'credit-card-transaction'],
    pricing: 'Basic dashboards start at $100, with enterprise solutions available for complex multi-department requirements.',
    fiverrLink: 'https://www.fiverr.com/s/lj4XQKg',
    icon: 'BarChart3'
  },
  {
    id: '2',
    slug: 'tableau-consultant',
    title: 'Tableau Consulting Services',
    headline: 'Professional-Grade Data Stories That Impress Stakeholders and Drive Decisions',
    cluster: 'data-analytics',
    seoKeywords: ['Tableau Expert', 'Tableau Dashboard Developer', 'Data Visualization Consultant', 'SQL to Tableau Integration', 'Automated Data Reporting', 'Tableau for Executives', 'Interactive Data Stories'],
    targetClient: 'Corporate teams, research departments, and data-driven organizations that have standardized on Tableau and need expert-level dashboard development.',
    painPoints: [
      'Tableau license costs are high but dashboards aren\'t delivering ROI',
      'Internal team knows basics but can\'t build advanced visualizations',
      'Need professional dashboards for board meetings or investor presentations',
      'Data exists in SQL databases but nobody can connect it properly to Tableau',
      'Current dashboards are slow, cluttered, or don\'t answer the right questions'
    ],
    description: 'Your Tableau investment should be generating insights, not frustration. As a dedicated Tableau Consulting team, we help organizations unlock the full potential of their Tableau platform by building dashboards that are not only visually stunning but analytically powerful.',
    deliverables: [
      'Custom Tableau dashboard with interactive filters and parameters',
      'SQL query optimization for faster dashboard performance',
      'Calculated fields and LOD expressions for advanced analytics',
      'Dashboard design following data visualization best practices',
      'Tableau Server/Cloud publishing and permission setup',
      'Documentation and optional training session'
    ],
    whyChooseMe: 'Our experience spans from survey trend analysis with rich statistical visualizations to operational KPI tracking across enterprise environments.',
    relatedProjects: ['developers-survey-analysis', 'kyc-verification-analytics'],
    pricing: 'Tableau consulting is priced based on dashboard complexity and data source integration requirements.',
    fiverrLink: 'https://www.fiverr.com/s/lj4XQKg',
    icon: 'PieChart'
  },
  {
    id: '3',
    slug: 'data-cleaning-services',
    title: 'Data Cleaning & Preparation Services',
    headline: 'Turn Your Messy, Unusable Data Into Analysis-Ready Gold',
    cluster: 'data-analytics',
    seoKeywords: ['Data Cleaning Services', 'Excel Data Cleanup', 'Remove Duplicates Dataset', 'Data Formatting Expert', 'CSV File Organization', 'Data Preprocessing', 'Pandas Data Cleaning'],
    targetClient: 'Anyone frustrated with messy data—business analysts who can\'t trust their spreadsheets, researchers with inconsistent survey responses, marketers with duplicate customer records.',
    painPoints: [
      'Spreadsheet is full of duplicates, blanks, and inconsistent formatting',
      'Can\'t run analysis because data from different sources doesn\'t match',
      'Spending more time fixing data than actually using it',
      'Data import keeps failing due to formatting errors',
      'Need to merge multiple files but columns don\'t align'
    ],
    description: 'Messy data isn\'t just annoying—it\'s expensive. Every hour you spend manually fixing spreadsheets is an hour you\'re not spending on analysis, strategy, or growth. We eliminate that problem completely by transforming your chaotic, inconsistent datasets into clean, structured, analysis-ready assets.',
    deliverables: [
      'Fully cleaned and formatted dataset in your preferred format (Excel, CSV, etc.)',
      'Data quality report documenting issues found and fixes applied',
      'Standardized column names, data types, and formatting',
      'Duplicate removal with configurable matching rules',
      'Missing value handling (removal, imputation, or flagging)',
      'Optional: Python script for repeatable cleaning on future data'
    ],
    whyChooseMe: 'We\'ve cleaned datasets with hundreds of thousands of records, handled multi-source data integration challenges, and built automated cleaning pipelines that save hours of manual work.',
    relatedProjects: ['kyc-verification-analytics', 'facility-cleaning-operations', 'chicago-crime-analysis'],
    pricing: 'Quick Excel cleanups start at $100, while complex multi-source data preparation projects are quoted individually.',
    fiverrLink: 'https://www.fiverr.com/s/7Y8NZZx',
    icon: 'Sparkles'
  },
  {
    id: '4',
    slug: 'exploratory-data-analysis',
    title: 'Exploratory Data Analysis (EDA) Services',
    headline: 'Discover the Hidden Stories, Patterns, and Opportunities in Your Data',
    cluster: 'data-analytics',
    seoKeywords: ['Exploratory Data Analysis', 'Python Data Analysis', 'Statistical Analysis', 'Data Insights Report', 'Pandas Dataframe Analysis', 'Trend Identification', 'Research Data Analyst'],
    targetClient: 'Researchers, students, startup founders, and business analysts who have collected data but don\'t know what it\'s telling them.',
    painPoints: [
      'Have raw data but don\'t know where to start analyzing it',
      'Need to find patterns or trends but lack statistical expertise',
      'Research deadline approaching and data analysis is overwhelming',
      'Collected survey/experiment data but can\'t extract meaningful insights',
      'Want to understand data before investing in expensive ML solutions'
    ],
    description: 'You\'ve collected the data. Now what? Exploratory Data Analysis is the critical first step that reveals what your data actually contains—the patterns, anomalies, relationships, and stories hiding in your numbers.',
    deliverables: [
      'Comprehensive EDA report with key findings and recommendations',
      'Statistical summary (distributions, correlations, central tendencies)',
      'Professional visualizations (histograms, scatter plots, heatmaps, box plots)',
      'Outlier detection and anomaly identification',
      'Missing data analysis and recommendations',
      'Jupyter notebook with all code for reproducibility (optional)'
    ],
    whyChooseMe: 'From analyzing 176,000+ verification records for compliance patterns to extracting insights from developer surveys, we\'ve performed EDA on diverse datasets across industries.',
    relatedProjects: ['kyc-verification-analytics', 'developers-survey-analysis'],
    pricing: 'Standard analysis reports start at $150, with premium packages including advanced statistical testing.',
    fiverrLink: 'https://www.fiverr.com/s/7Y8NZZx',
    icon: 'Search'
  },
  {
    id: '5',
    slug: 'custom-ai-chatbot-developer',
    title: 'Custom AI Chatbot Developer',
    headline: 'Build Intelligent Conversational AI That Understands Your Business',
    cluster: 'ai-ml',
    seoKeywords: ['Custom AI Chatbot', 'RAG Chatbot Development', 'Document Q&A Bot', 'AI Customer Support Agent', 'OpenAI API Integration', 'LLM Application Developer', 'Conversational AI Expert'],
    targetClient: 'Business owners who want to automate customer support, SaaS founders building AI features, enterprises needing internal knowledge assistants.',
    painPoints: [
      'Customer support team overwhelmed with repetitive questions',
      'Employees can\'t find information buried in company documents',
      'Want AI chatbot but ChatGPT doesn\'t know your specific business',
      'Need 24/7 support coverage without hiring night shifts',
      'Competitors launching AI features while you\'re still researching'
    ],
    description: 'Generic chatbots give generic answers. Your business deserves an AI assistant that actually knows your products, your policies, your documents, and your customers. We build custom AI chatbots powered by cutting-edge Large Language Models (LLMs) that are trained on YOUR data.',
    deliverables: [
      'Custom-trained AI chatbot tailored to your specific use case',
      'RAG implementation with your documents/knowledge base',
      'API integration (OpenAI, Gemini, Claude, or open-source LLMs)',
      'User-friendly chat interface (web, Streamlit, or API endpoint)',
      'Document processing pipeline for your content',
      'Deployment and hosting setup',
      'Usage documentation and maintenance guide'
    ],
    whyChooseMe: 'We\'ve built AI assistants ranging from autonomous travel planning agents deployed on Hugging Face Spaces to document Q&A systems that make PDFs conversationally searchable.',
    relatedProjects: ['tour-planning-ai-assistant', 'docspeak-rag'],
    pricing: 'Simple FAQ bots start at $100, while enterprise RAG systems with custom integrations are quoted based on scope.',
    fiverrLink: 'https://www.fiverr.com/s/AyAErkq',
    icon: 'MessageSquare'
  },
  {
    id: '6',
    slug: 'fine-tuning-llm-services',
    title: 'Fine-Tuning LLM Services',
    headline: 'Customize Large Language Models to Speak Your Language',
    cluster: 'ai-ml',
    seoKeywords: ['Fine-Tune LLM', 'Custom AI Model Training', 'LLM Customization Expert', 'Fine-Tune GPT', 'Fine-Tune Llama', 'NLP Model Training', 'Domain-Specific AI'],
    targetClient: 'Tech companies needing domain-specific AI capabilities, enterprises with unique terminology or workflows, and innovators who need AI that goes beyond generic responses.',
    painPoints: [
      'Generic ChatGPT doesn\'t understand your industry jargon',
      'Prompt engineering isn\'t enough—need model-level customization',
      'Competitors building proprietary AI while you use off-the-shelf tools',
      'Need consistent output format that prompting can\'t reliably achieve',
      'Privacy concerns prevent using cloud AI with sensitive data'
    ],
    description: 'When prompt engineering hits its limits, fine-tuning begins. Fine-tuning a Large Language Model means teaching it your specific domain, terminology, writing style, and task requirements at the model level.',
    deliverables: [
      'Fine-tuned LLM customized to your specific use case',
      'Training data preparation and formatting',
      'Hyperparameter optimization for best results',
      'Model evaluation and performance benchmarking',
      'Deployment setup (API endpoint or local hosting)',
      'Documentation on model usage and limitations'
    ],
    whyChooseMe: 'Our experience with Hugging Face models, Groq API for fast inference, and building production AI applications gives us end-to-end expertise in the LLM ecosystem.',
    relatedProjects: ['tour-planning-ai-assistant', 'docspeak-rag'],
    pricing: 'Fine-tuning projects are priced based on model type, training data volume, and complexity.',
    fiverrLink: 'https://www.fiverr.com/s/AyAErkq',
    icon: 'Brain'
  },
  {
    id: '7',
    slug: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    headline: 'Build Predictive Models That See the Future and Protect Your Business',
    cluster: 'ai-ml',
    seoKeywords: ['Machine Learning Engineer', 'Predictive Modeling Expert', 'Fraud Detection ML', 'Churn Prediction Model', 'Price Forecasting', 'Scikit-learn Expert', 'ML Model Deployment'],
    targetClient: 'Businesses that want to predict outcomes—customer churn, fraud risk, sales forecasts, loan defaults, equipment failures.',
    painPoints: [
      'Losing money to fraud that could be detected with pattern analysis',
      'Customers churning before you realize they\'re at risk',
      'Manual risk assessment is slow, inconsistent, and doesn\'t scale',
      'Competitors using predictive analytics while you react to events',
      'Have historical data but don\'t know how to use it for predictions'
    ],
    description: 'What if you could predict which customers will churn before they leave? Which loan applications are likely to default? Which transactions are probably fraudulent? Machine learning makes this possible—and we make it accessible.',
    deliverables: [
      'Trained and validated machine learning model for your prediction task',
      'Feature engineering pipeline to prepare your data for the model',
      'Model performance report (accuracy, precision, recall, AUC, etc.)',
      'Interactive Streamlit/Gradio interface for non-technical users (optional)',
      'API endpoint for integration with your systems (optional)',
      'Model documentation and interpretation guide'
    ],
    whyChooseMe: 'We\'ve built production fraud detection systems achieving 97% accuracy, demonstrating both the technical skills to engineer high-performing models and the practical judgment to deliver solutions that work.',
    relatedProjects: ['loan-sherlock-fraud-detection'],
    pricing: 'Simple classification models start at $100, with complex production systems requiring custom quotes.',
    fiverrLink: 'https://www.fiverr.com/s/AyAErkq',
    icon: 'Cpu'
  },
  {
    id: '8',
    slug: 'python-automation-scripting',
    title: 'Python Automation & Scripting',
    headline: 'Eliminate Repetitive Tasks and Reclaim Hours of Your Week',
    cluster: 'ai-ml',
    seoKeywords: ['Python Automation', 'Workflow Automation', 'Web Scraping Services', 'API Connector Script', 'Automate Daily Tasks', 'Python Script Developer', 'Data Pipeline Automation'],
    targetClient: 'Professionals drowning in repetitive tasks—data entry, report generation, file processing, web data collection, system integrations.',
    painPoints: [
      'Spending hours on tasks that feel like they should be automated',
      'Manually copying data between systems or spreadsheets',
      'Need data from websites but copying it manually is impractical',
      'Different tools don\'t talk to each other, creating manual workarounds',
      'Report generation is a weekly time sink that never gets easier'
    ],
    description: 'How many hours last week did you spend on tasks a computer should be doing for you? Data entry. Report generation. File organization. Web research. We build custom Python scripts that automate your specific workflows, no matter how unique.',
    deliverables: [
      'Custom Python script tailored to your specific automation need',
      'Error handling and logging for reliable unattended operation',
      'Documentation explaining what the script does and how to use it',
      'Setup assistance for scheduling (cron, Task Scheduler, etc.)',
      'Testing and validation with your actual data/systems',
      '30 days of support for adjustments and bug fixes'
    ],
    whyChooseMe: 'From building end-to-end data pipelines processing records from 50+ locations to automated analysis workflows handling hundreds of thousands of records, we\'ve engineered automation solutions that operate reliably in production.',
    relatedProjects: ['kyc-verification-analytics', 'facility-cleaning-operations', 'loan-sherlock-fraud-detection'],
    pricing: 'Simple scripts start at $100, with complex multi-system automation workflows priced individually.',
    fiverrLink: 'https://www.fiverr.com/s/AyAErkq',
    icon: 'Zap'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCluster = (cluster: 'data-analytics' | 'ai-ml'): Service[] => {
  return services.filter(service => service.cluster === cluster);
};
