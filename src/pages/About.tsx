import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, Calendar, ShoppingCart, MessageSquare, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHelmet from '@/components/SEOHelmet';
import CertificationBadges from '@/components/CertificationBadges';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';

const skills = {
  'Programming & Analysis': ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn'],
  'Visualization & BI': ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly'],
  'AI & Machine Learning': ['TensorFlow', 'LangChain', 'RAG', 'LLM Fine-tuning', 'Prompt Engineering'],
  'Tools & Deployment': ['Streamlit', 'Gradio', 'Docker', 'Git', 'Hugging Face'],
};

const certifications = [
  'Tools For Data Science - Coursera',
  'IBM Data Science Certificate',
  'Google Data Analytics Certificate',
  'Power BI Data Analyst - Microsoft',
  'SQL (Basic to Advanced) - HackerRank',
];

const experience = [
  {
    role: 'Data Scientist and AI Engineer',
    company: 'ElitePick AI',
    period: 'May 2025 - Present',
    bullets: [
      'Completed 5 data analysis projects with an average client rating of 4.8/5.',
      'Specialized in data visualization, statistical analysis, and delivering actionable business insights.',
    ],
  },
  {
    role: 'Campus Ambassador',
    company: 'Manafa Technologies',
    period: 'December 2025 - Present',
    bullets: [
      'Arranged industry tours to minimize the gap between industry and academia.',
      'Organized workshops on AI/ML/Data Analysis.',
    ],
  },
  {
    role: 'Campus Ambassador',
    company: 'Devsinc',
    period: '2023 - Present',
    bullets: [
      'Arranged industry tours to minimize the gap between industry and academia.',
      'Organized workshops on AI/ML/Data Analysis.',
    ],
  },
  {
    role: 'Campus Ambassador',
    company: 'AICP',
    period: '2023 - Present',
    bullets: [
      'Organized AI-focused workshops, seminars, and webinars to promote community engagement.',
      'Amplified AICP initiatives through social media campaigns and on-campus outreach programs.',
      'Collaborated with diverse teams and stakeholders to drive participation.',
    ],
  },
];

const BASE_URL = "https://elitepickai.com";

// Person schema for Muneeb Shafiq
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muneeb Shafiq",
  "alternateName": "ElitePick Ai",
  "url": `${BASE_URL}/about`,
  "image": `${BASE_URL}/og-image.jpg`,
  "jobTitle": "Founder & Lead AI Engineer at ElitePick AI",
  "description": "Founder of ElitePick AI, a data science and AI agency specializing in Power BI dashboards, machine learning, and custom AI solutions.",
  "email": "muneebzehel@gmail.com",
  "sameAs": [
    "https://github.com/munib123",
    "https://www.linkedin.com/in/muneeb-zehel/"
  ],
  "knowsAbout": [
    "n8n", "n8n Workflow Automation", "Workflow Automation", "Business Process Automation",
    "Python", "SQL", "Pandas", "NumPy", "Scikit-learn",
    "Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly",
    "TensorFlow", "LangChain", "RAG", "LLM Fine-tuning", "Prompt Engineering",
    "Streamlit", "Gradio", "Docker", "Git", "Hugging Face"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Tools For Data Science - Coursera"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "IBM Data Science Certificate"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Google Data Analytics Certificate"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Power BI Data Analyst - Microsoft"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "SQL (Basic to Advanced) - HackerRank"
    }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "ElitePick AI",
    "url": "https://elitepickai.com"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Power BI Dashboard Development",
        "description": "Transform raw data into executive-ready visual intelligence"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Custom AI Chatbot Development",
        "description": "Build intelligent conversational AI with RAG architecture"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Machine Learning Engineering",
        "description": "Build predictive models for fraud detection, churn prediction, and forecasting"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "n8n Workflow Automation",
        "description": "Automate mission-critical workflows with expert n8n integrations"
      }
    }
  ]
};

const AboutPage = () => {
  return (
    <Layout>
      <SEOHelmet
        title="About ElitePick AI | n8n Automation & AI Data Science Agency"
        description="ElitePick AI is a certified AI & data science agency specializing in n8n workflow automation, Power BI dashboards, and custom AI chatbots. IBM, Google & Microsoft certified."
        canonical="https://elitepickai.com/about"
        ogType="profile"
        keywords="ElitePick AI, n8n Automation Expert, Workflow Automation Specialist, AI Agency, Data Science Agency, IBM Certified, Google Certified, Microsoft Certified"
        structuredData={personJsonLd}
      />

      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Profile Info */}
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-foreground">About </span>
                  <span className="text-gradient">ElitePick AI</span>
                </h1>
                
                <p className="text-xl text-primary font-medium mb-4">
                  AI & Data Science Agency
                </p>
                
                <p className="text-muted-foreground text-lg mb-6">
                  We help businesses transform raw data into actionable insights and intelligent automation. Specializing in Power BI dashboards, machine learning models, and custom AI chatbots that drive real business results.
                </p>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Available Worldwide</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Accepting New Clients</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://github.com/munib123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-foreground" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muneeb-zehel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-foreground" />
                  </a>
                  <a
                    href="mailto:muneebzehel@gmail.com"
                    className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-foreground" />
                  </a>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Ready to Work Together?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  4.8★ client rating across 15+ successful projects.
                </p>
                {/* Certification Badges */}
                <CertificationBadges variant="compact" className="mb-4" />
                <div className="flex flex-col gap-2">
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to="/order">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Direct Order
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Experience</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experience.map((exp, index) => (
                <div key={index} className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground">{exp.role} - {exp.company}</h3>
                  <p className="text-sm text-primary mb-4">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <TestimonialsSection 
              variant="grid" 
              maxItems={6}
              title="Client Testimonials"
              subtitle="What clients say about working with us"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Whether you need a data dashboard, ML model, or AI chatbot—we're here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/order">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Place Direct Order
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View Our Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
