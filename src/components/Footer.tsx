import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ShoppingCart, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Tools & Solutions', href: '/tools' },
    { name: 'Project Portfolio', href: '/projects' },
    { name: 'Blog & Tutorials', href: '/blog' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Direct Order', href: '/order' },
  ];

  const services = [
    { name: 'Power BI Dashboards', href: '/services/power-bi-dashboard-expert' },
    { name: 'AI Chatbot Development', href: '/services/custom-ai-chatbot-developer' },
    { name: 'Machine Learning', href: '/services/machine-learning-engineer' },
    { name: 'Python Automation', href: '/services/python-automation-scripting' },
    { name: 'n8n Workflow Automation', href: '/tools/n8n-automation' },
  ];

  const socials = [
    { name: 'GitHub', href: 'https://github.com/munib123', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/muneeb-zehel/', icon: Linkedin },
    { name: 'Email', href: '/contact', icon: Mail, isInternal: true },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">ElitePick AI</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              AI & Data Science Agency helping businesses transform raw data into actionable insights and intelligent automation.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                social.isInternal ? (
                  <Link
                    key={social.name}
                    to={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ) : (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Ready to Start?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Have a data challenge? Let's transform it into a competitive advantage.
            </p>
            <div className="flex flex-col gap-2">
              <Button asChild size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/order">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Direct Order
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ElitePick AI. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            AI & Data Science Agency | Available Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
