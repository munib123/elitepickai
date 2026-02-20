export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tags: string[];
  situation: string;
  task: string;
  action: string;
  result: string;
  tools: string[];
  linkedinLink: string;
  githubLink?: string;
  featured: boolean;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'kyc-verification-analytics',
    title: 'KYC Document Verification Analytics Dashboard',
    shortTitle: 'KYC Analytics Dashboard',
    category: 'Compliance Analytics',
    tags: ['KYC Analytics', 'Compliance Dashboard', 'Identity Verification Analysis', 'Fraud Detection Dashboard', 'RegTech Analytics'],
    situation: 'Financial institutions and fintech companies face significant regulatory pressure to maintain robust Know Your Customer (KYC) processes. A client was struggling to understand why certain customer segments had higher verification failure rates, leading to customer drop-off and potential compliance risks. They had accumulated over 176,000 verification records but lacked the analytical infrastructure to extract actionable insights from this data.',
    task: 'Design and develop a comprehensive analytics dashboard that would transform raw KYC verification data into strategic insights. The solution needed to identify pass/fail rate patterns across different customer demographics, track monthly verification trends, and enable stakeholders to pinpoint bottlenecks in the verification workflow.',
    action: 'Built a complete data analysis pipeline using Python with Pandas for data cleaning and transformation of 176,000+ records. Performed exploratory data analysis to identify key metrics and correlations. Created statistical visualizations using Seaborn and Matplotlib to reveal demographic patterns in verification outcomes. Developed interactive visual dashboards with monthly trend analysis, geographic segmentation, and failure reason categorization.',
    result: 'Delivered a dashboard that reduced compliance investigation time by enabling instant identification of high-risk segments. The client discovered that 23% of failures were concentrated in a specific document type, leading to process improvements. Monthly trend analysis revealed seasonal patterns, allowing for better resource allocation during peak periods.',
    tools: ['Python', 'NumPy', 'Pandas', 'Seaborn', 'Matplotlib'],
    linkedinLink: 'https://www.linkedin.com/in/muneeb-zehel',
    githubLink: 'https://github.com/munib123/KPI-Decline-Analysis',
    featured: true,
    imageAlt: 'KYC Document Verification Analytics Dashboard built with Python, NumPy, Pandas, Seaborn, and Matplotlib — displaying 176,000+ compliance verification records with fraud detection insights'
  },
  {
    id: '2',
    slug: 'facility-cleaning-operations',
    title: 'Facility Cleaning Operations Data Pipeline',
    shortTitle: 'Operations Data Pipeline',
    category: 'Operations BI Dashboard',
    tags: ['Operations Analytics', 'Facility Management Dashboard', 'KPI Visualization', 'Power BI Expert', 'Data Pipeline Development'],
    situation: 'A commercial cleaning services company operating across 50+ facility locations was drowning in spreadsheets and manual reports. Operations managers spent hours compiling weekly performance data, yet still lacked real-time visibility into cleaning quality metrics, staff efficiency, and service compliance.',
    task: 'Build an end-to-end automated data pipeline that would collect, clean, and transform operational data from multiple sources into a unified analytics platform. The solution required interactive dashboards that operations leadership could use to monitor KPIs across all 50+ locations in real-time.',
    action: 'Designed and implemented a robust ETL pipeline using Python with Pandas and NumPy for data processing. Connected to MySQL databases to centralize data from disparate location systems. Built automated data cleaning routines to handle missing values, outliers, and inconsistent formatting. Developed comprehensive Power BI dashboards featuring location comparison views, staff productivity metrics, and service completion rates.',
    result: 'Transformed weekly manual reporting (previously 15+ hours) into automated daily insights available in under 5 minutes. The dashboard enabled identification of 8 underperforming locations within the first month. Operations team reported 40% faster decision-making and improved resource allocation.',
    tools: ['Python', 'Pandas', 'NumPy', 'MySQL', 'Power BI'],
    linkedinLink: 'https://www.linkedin.com/in/muneeb-zehel',
    githubLink: 'https://github.com/munib123/facility_management_system',
    featured: true,
    imageAlt: 'Facility Cleaning Operations Data Pipeline and Power BI Dashboard built with Python, Pandas, NumPy, and MySQL — real-time operations monitoring across 50+ facility locations'
  },
  {
    id: '3',
    slug: 'tour-planning-ai-assistant',
    title: 'Tour Planning AI Assistant (Autonomous Travel Agent)',
    shortTitle: 'AI Travel Assistant',
    category: 'AI Agent Development',
    tags: ['Custom AI Chatbot', 'AI Travel Assistant', 'LLM Application Development', 'Gradio Web App', 'Hugging Face Deployment'],
    situation: 'Travel planning remains a time-consuming process where travelers spend an average of 10+ hours researching destinations, accommodations, and activities. A client wanted to create a differentiated travel service by offering AI-powered personalized itinerary generation that could understand natural language preferences.',
    task: 'Develop an intelligent AI-powered travel planning assistant capable of understanding user preferences through natural conversation and generating comprehensive, personalized travel itineraries. The solution needed to be accessible via a web interface and provide real-time responses.',
    action: 'Architected and built a Python-based web application using Gradio for an intuitive conversational interface. Integrated Groq API for ultra-fast LLM inference, enabling real-time responses to complex travel queries. Leveraged Hugging Face models for enhanced natural language understanding. Implemented prompt engineering techniques for consistent, high-quality itinerary generation.',
    result: 'Created an AI assistant that generates comprehensive travel itineraries in under 30 seconds—compared to hours of manual research. The system handles complex multi-city trips with accommodation suggestions, activity recommendations, and time-optimized daily schedules. Successfully deployed on HF Spaces with consistent uptime.',
    tools: ['Python', 'Gradio', 'Groq API', 'Hugging Face', 'LLM Prompt Engineering'],
    linkedinLink: 'https://www.linkedin.com/in/muneeb-zehel',
    githubLink: 'https://github.com/munib123/Travel_Assistance_Chatbot',
    featured: true,
    imageAlt: 'Tour Planning AI Assistant autonomous travel agent built with Python, Gradio, Groq API, and Hugging Face — LLM-powered personalized itinerary generation interface'
  },
  {
    id: '4',
    slug: 'chicago-crime-analysis',
    title: 'Chicago Crime Rate Analysis Dashboard',
    shortTitle: 'Crime Analytics Dashboard',
    category: 'Public Safety Analytics',
    tags: ['Crime Analytics Dashboard', 'Public Safety Data Analysis', 'Geospatial Visualization', 'Power BI Dashboard Expert', 'Urban Analytics'],
    situation: 'City planners, real estate developers, and community organizations in Chicago needed to understand crime patterns across neighborhoods to make informed decisions about resource allocation, property investment, and community safety initiatives.',
    task: 'Transform raw Chicago crime data into an interactive analytical dashboard that would reveal crime trends over time, identify geographic hotspots, and enable stakeholders to compare safety metrics across different neighborhoods.',
    action: 'Performed comprehensive data cleaning and preprocessing using Pandas to handle the large-scale crime dataset. Used NumPy for efficient numerical computations. Developed SQL queries in MSSQL to aggregate and prepare data. Built interactive Power BI dashboards featuring time-series trend analysis, geographic heat maps, and crime category breakdowns.',
    result: 'Delivered a dashboard enabling stakeholders to identify high-risk zones within seconds rather than hours. The visualization revealed that 35% of certain crime types were concentrated in specific time windows, enabling targeted patrol scheduling recommendations.',
    tools: ['Power BI', 'Pandas', 'NumPy', 'MSSQL'],
    linkedinLink: 'https://www.linkedin.com/in/muneeb-zehel',
    featured: false,
    imageAlt: 'Chicago Crime Rate Analysis Dashboard built with Power BI, Pandas, NumPy, and MSSQL — interactive geographic hotspot identification and crime trend visualization'
  },
  {
    id: '5',
    slug: 'developers-survey-analysis',
    title: 'Developers Survey Analysis Report',
    shortTitle: 'Developer Survey Analysis',
    category: 'Survey Data Analysis',
    tags: ['Survey Data Analysis', 'Developer Insights Report', 'Statistical Visualization', 'Research Data Analyst', 'Python Data Analysis'],
    situation: 'A technology organization conducting an annual developer survey had collected extensive response data but lacked the analytical capability to extract meaningful insights about technology trends, developer preferences, and industry shifts.',
    task: 'Analyze the comprehensive developer survey dataset to identify key trends, demographic patterns, and technology adoption insights. The analysis needed to produce publication-ready visualizations and an actionable report.',
    action: 'Implemented optimized SQL queries in MSSQL to efficiently process and aggregate large survey datasets. Used Pandas for detailed data manipulation and computing statistical summaries. Performed correlation analysis using NumPy. Created rich visualizations using Matplotlib and Seaborn.',
    result: 'Produced an insights report that revealed unexpected correlations between developer experience levels and framework preferences—information that directly informed the client\'s product roadmap. SQL query optimization reduced analysis processing time by 60%.',
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'MSSQL'],
    linkedinLink: 'https://www.linkedin.com/in/muneeb-zehel',
    githubLink: 'https://github.com/munib123/Devs_Survey_2024',
    featured: false,
    imageAlt: 'Developers Survey Analysis Report built with Pandas, NumPy, Matplotlib, Seaborn, and MSSQL — statistical visualizations of technology trends and developer preferences'
  },
  {
    id: '6',
    slug: 'credit-card-transaction',
    title: 'Credit Card Transaction Analysis Dashboard',
    shortTitle: 'Transaction Analytics',
    category: 'Financial Analytics',
    tags: ['Financial Analytics Dashboard', 'Transaction Analysis Expert', 'FinTech Data Analyst', 'Fraud Pattern Detection', 'Power BI Finance Dashboard'],
    situation: 'A financial services company needed deeper visibility into credit card transaction patterns to identify spending trends, detect anomalies, and understand customer behavior. Their existing reporting was static and weekly.',
    task: 'Develop dynamic, interactive reports that would visualize transaction trends across multiple dimensions including time, merchant categories, geographic distribution, and transaction amounts.',
    action: 'Built a comprehensive data processing pipeline using Pandas and NumPy to handle high-volume transaction data. Developed SQL procedures in MSSQL for efficient data aggregation. Created dynamic Power BI reports featuring interactive time-series visualizations and drill-down functionality.',
    result: 'Enabled the analytics team to identify a 15% increase in specific transaction categories during holiday periods. The weekly pattern analysis revealed optimal times for fraud monitoring, reducing false positive alerts. Dashboard refresh time reduced from 4 hours to 15 minutes.',
    tools: ['Power BI', 'Pandas', 'NumPy', 'MSSQL'],
    linkedinLink: 'https://www.linkedin.com/in/muneeb-zehel',
    githubLink: 'https://github.com/munib123/Credit_card_transaction-_report',
    featured: false,
    imageAlt: 'Credit Card Transaction Analysis Dashboard built with Power BI, Pandas, NumPy, and MSSQL — interactive transaction trend visualization and anomaly detection'
  },
  {
    id: '7',
    slug: 'loan-sherlock-fraud-detection',
    title: 'Loan Sherlock - Fraud Detection System',
    shortTitle: 'Fraud Detection System',
    category: 'ML Fraud Detection',
    tags: ['Fraud Detection Expert', 'Machine Learning Engineer', 'Loan Risk Analysis', 'Predictive Modeling', 'FinTech ML Developer'],
    situation: 'Financial institutions lose billions annually to loan fraud, with traditional rule-based detection systems catching only a fraction of fraudulent applications. A client needed a more sophisticated approach to identify potential fraud before disbursement.',
    task: 'Develop a machine learning-based fraud detection system capable of analyzing loan applications and predicting fraud probability with high accuracy. The solution required an interactive user interface for loan officers.',
    action: 'Performed extensive feature engineering on historical loan application data. Trained and evaluated multiple ML models including Random Forest, LightGBM, and Logistic Regression using cross-validation. Built an interactive Streamlit web application with Plotly visualizations for risk scores and feature importance.',
    result: 'Achieved 97% accuracy in fraud detection, significantly outperforming the previous rule-based system (78% accuracy). The model correctly identified fraudulent patterns that would have resulted in $2.3M in potential losses. Fraud investigation time reduced by 65%.',
    tools: ['Python', 'Scikit-learn', 'LightGBM', 'Streamlit', 'Plotly'],
    linkedinLink: 'https://www.linkedin.com/in/muneeb-zehel',
    githubLink: 'https://github.com/munib123/Loan-Sherlock',
    featured: true,
    imageAlt: 'Loan Sherlock Fraud Detection System built with Python, Scikit-learn, LightGBM, Streamlit, and Plotly — 97% accuracy ML-based loan fraud prediction'
  },
  {
    id: '8',
    slug: 'docspeak-rag',
    title: 'DocSpeak - RAG Document Q&A System',
    shortTitle: 'DocSpeak RAG System',
    category: 'RAG/Document AI',
    tags: ['RAG Developer', 'Custom AI Chatbot', 'Document AI Expert', 'LLM Application Builder', 'PDF Analysis Bot'],
    situation: 'Organizations accumulate vast amounts of knowledge in PDF documents, DOCX files, and reports, but this information becomes siloed and difficult to access. A client needed a solution that would make their document repository conversationally accessible.',
    task: 'Build an AI-powered system that could ingest uploaded documents, understand their content semantically, and answer natural language questions with context-aware responses directly sourced from the document content.',
    action: 'Implemented a Retrieval-Augmented Generation (RAG) architecture using Python. Built document processing pipelines to extract and chunk text. Created vector embeddings for semantic search. Integrated Google\'s Gemini API for high-quality natural language generation. Developed an intuitive Streamlit interface.',
    result: 'Delivered a system that reduces document search time from 30+ minutes to under 10 seconds per query. The RAG architecture ensures responses are grounded in actual document content, eliminating AI hallucination concerns. Solution tested on legal contracts, technical manuals, and research papers with consistent accuracy.',
    tools: ['Python', 'RAG Architecture', 'Streamlit', 'Gemini API', 'Vector Embeddings'],
    linkedinLink: 'https://www.linkedin.com/in/muneeb-zehel',
    githubLink: 'https://github.com/munib123/DocSpeak',
    featured: true,
    imageAlt: 'DocSpeak RAG Document Q&A System built with Python, RAG Architecture, Streamlit, Gemini API, and Vector Embeddings — conversational document access interface'
  },
  {
    id: '9',
    slug: 'intelligent-job-application-bot',
    title: 'Intelligent Job Application Bot: End-to-End Automation with n8n & AI Agents',
    shortTitle: 'AI Job Application Bot',
    category: 'n8n Workflow Automation',
    tags: ['n8n Workflow Automation', 'LLM Integration', 'LangChain', 'API Orchestration', 'Lead Generation', 'Python', 'Automated Outreach', 'Data Engineering', 'CRM Automation', 'GPT-4o', 'Snov.io', 'REST API'],
    situation: 'The traditional job application process is inefficient and repetitive. Manually searching for roles, finding recruiter contact information, and drafting personalized cover emails for every application consumes hours of valuable time, often leading to missed opportunities due to slow turnaround.',
    task: 'Architect a fully automated system that could source relevant Data Analyst roles, verify recruiter details, and send human-like, personalized emails without manual intervention. The system needed to strictly adhere to specific skill requirements (Python, SQL, Power BI) and exclude roles that did not match my experience level (e.g., Senior/Lead roles).',
    action: 'Developed a complex workflow using n8n that functions as an autonomous recruitment agent: Integrated JSearch and LinkedIn APIs via HTTP Request nodes to fetch real-time job postings. Implemented conditional logic (If nodes) to parse JSON data, filtering jobs to ensure they contained specific keywords while excluding unwanted titles. Connected the Snov.io API to programmatically hunt for recruiter email addresses. Utilized LangChain nodes powered by GPT-4o with two distinct agents: a Subject Line Agent for relevant, non-spammy subjects, and a Body Copy Agent to cross-reference resume JSON against Job Descriptions. The system automatically removes duplicates using Merge nodes, logs application data into Google Sheets, and dispatches emails via Gmail with resume attached.',
    result: 'This automation transformed a manual 40-hour/week process into a fully autonomous workflow. The system now processes and applies to qualified leads instantly upon execution. It ensures zero errors in addressing recruiters, eliminates duplicate applications, and delivers highly personalized content that significantly increases open and response rates compared to generic bulk applications.',
    tools: ['n8n', 'LangChain', 'GPT-4o', 'Snov.io API', 'Google Sheets', 'Gmail API', 'REST API'],
    linkedinLink: 'https://www.linkedin.com/in/muneeb-zehel',
    githubLink: 'https://github.com/munib123/Cold_mail_workflow',
    featured: true,
    imageAlt: 'Intelligent Job Application Bot built with n8n, LangChain, GPT-4o, and Snov.io API — end-to-end automated AI-powered recruitment workflow'
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};
