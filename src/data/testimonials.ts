export interface Testimonial {
  id: string;
  clientName: string;
  country: string;
  countryFlag: string;
  service: string;
  serviceSlug: string;
  rating: number;
  review: string;
  date: string;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sarah M.',
    country: 'United States',
    countryFlag: '🇺🇸',
    service: 'Power BI Dashboard',
    serviceSlug: 'power-bi-dashboards',
    rating: 5,
    review: "Absolutely phenomenal work! He transformed our messy sales data into an interactive Power BI dashboard that our entire team now uses daily. The visualizations are intuitive, and the drill-down features save us 15+ hours every week. Communication was excellent throughout the project. Will definitely hire again!",
    date: '2 weeks ago',
    projectType: 'Business Intelligence'
  },
  {
    id: '2',
    clientName: 'James T.',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    service: 'AI Chatbot Development',
    serviceSlug: 'ai-chatbots',
    rating: 5,
    review: "Built a custom AI chatbot for our e-commerce website that now handles 70% of customer queries automatically. The bot understands context perfectly and escalates complex issues to our team. Our response time dropped from 4 hours to instant. Incredible ROI on this project!",
    date: '1 month ago',
    projectType: 'AI/ML Solutions'
  },
  {
    id: '3',
    clientName: 'Michael R.',
    country: 'Germany',
    countryFlag: '🇩🇪',
    service: 'Machine Learning Model',
    serviceSlug: 'machine-learning',
    rating: 5,
    review: "The fraud detection model he built for our fintech startup achieved 97% accuracy, exactly as promised. He explained the technical aspects in a way our non-technical stakeholders could understand. The model has already prevented thousands in fraudulent transactions. Exceptional work!",
    date: '3 weeks ago',
    projectType: 'AI/ML Solutions'
  },
  {
    id: '4',
    clientName: 'Priya S.',
    country: 'India',
    countryFlag: '🇮🇳',
    service: 'Data Cleaning & Preparation',
    serviceSlug: 'data-cleaning',
    rating: 5,
    review: "Had 50,000+ rows of messy customer data with duplicates, missing values, and inconsistent formats. He delivered a perfectly cleaned, standardized dataset in just 2 days with detailed documentation. Also provided Python scripts so we can automate future cleaning. Highly recommended!",
    date: '1 week ago',
    projectType: 'Data Engineering'
  },
  {
    id: '5',
    clientName: 'Ahmed K.',
    country: 'UAE',
    countryFlag: '🇦🇪',
    service: 'Tableau Dashboard',
    serviceSlug: 'tableau-dashboards',
    rating: 5,
    review: "Created executive dashboards for our real estate company that impressed our entire board. The KPI tracking, market trends visualization, and property performance metrics are exactly what we needed. Very professional communication and delivered ahead of schedule!",
    date: '2 months ago',
    projectType: 'Business Intelligence'
  },
  {
    id: '6',
    clientName: 'Lisa C.',
    country: 'Canada',
    countryFlag: '🇨🇦',
    service: 'Python Automation',
    serviceSlug: 'python-automation',
    rating: 5,
    review: "Automated our weekly reporting process that used to take 4 hours of manual work. The Python script now runs automatically every Monday morning and emails the reports to stakeholders. Also built error handling and logging. This has been a game-changer for our operations team!",
    date: '1 month ago',
    projectType: 'Automation'
  },
  {
    id: '7',
    clientName: 'David L.',
    country: 'Australia',
    countryFlag: '🇦🇺',
    service: 'Exploratory Data Analysis',
    serviceSlug: 'exploratory-data-analysis',
    rating: 4.9,
    review: "Conducted thorough EDA on our customer survey data and uncovered insights we never would have found ourselves. The visualizations and statistical analysis helped us understand our customer segments much better. The final report was comprehensive and actionable.",
    date: '3 weeks ago',
    projectType: 'Data Analysis'
  },
  {
    id: '8',
    clientName: 'Emma W.',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    service: 'LLM Fine-tuning',
    serviceSlug: 'llm-fine-tuning',
    rating: 5,
    review: "Fine-tuned a large language model specifically for our legal documents. The model now understands our industry terminology perfectly and generates accurate summaries. The training pipeline he set up allows us to continue improving the model. Outstanding expertise in AI!",
    date: '2 weeks ago',
    projectType: 'AI/ML Solutions'
  }
];

export const getTestimonialsByService = (serviceSlug: string): Testimonial[] => {
  return testimonials.filter(t => t.serviceSlug === serviceSlug);
};

export const getTestimonialsByProjectType = (projectType: string): Testimonial[] => {
  return testimonials.filter(t => t.projectType === projectType);
};

export const getFeaturedTestimonials = (count: number = 4): Testimonial[] => {
  return testimonials.slice(0, count);
};

export const getTestimonialsByKeywords = (keywords: string[]): Testimonial[] => {
  const lowerKeywords = keywords.map(k => k.toLowerCase());
  return testimonials.filter(t => {
    const searchText = `${t.service} ${t.projectType} ${t.review}`.toLowerCase();
    return lowerKeywords.some(keyword => searchText.includes(keyword.toLowerCase()));
  });
};
