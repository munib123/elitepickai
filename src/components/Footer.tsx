import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE } from '@/site';

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

/** rel="me" marks the profiles that are the same person as this site's owner. */
const SOCIALS = [
  { name: 'GitHub', href: SITE.github, icon: Github },
  { name: 'LinkedIn', href: SITE.linkedin, icon: Linkedin },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">{SITE.brand}</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The independent data and AI practice of {SITE.owner}, {SITE.title} at {SITE.employer}.
              Remote from {SITE.location}.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Contact"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-foreground font-semibold mb-4">Pages</h2>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.portfolio}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Case studies on muneebshafiq.me
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-foreground font-semibold mb-4">Start a conversation</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Tell me what the data is and what you need out of it. {SITE.replyTime}
            </p>
            <div className="flex flex-col gap-2">
              <Button asChild size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href={SITE.resume} target="_blank" rel="noopener noreferrer">
                  <FileDown className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {SITE.brand}
          </p>
          <p className="text-muted-foreground text-sm">
            {SITE.location} · {SITE.timezone}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
