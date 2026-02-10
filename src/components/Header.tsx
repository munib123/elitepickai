import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import GuideButton from '@/components/GuideButton';

interface HeaderProps {
  onStartTour?: () => void;
}

const Header = ({ onStartTour }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Services',
    href: '/services'
  }, {
    name: 'Tools',
    href: '/tools'
  }, {
    name: 'Blog',
    href: '/blog'
  }, {
    name: 'Projects',
    href: '/projects'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Contact Us',
    href: '/contact'
  }];
  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav aria-label="Main navigation" className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="tour-logo flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">|
          </span>
            <span className="hidden sm:inline text-lg font-semibold text-foreground">ElitePick Ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="tour-navigation hidden md:flex items-center gap-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? 'text-primary' : 'text-muted-foreground'}`}>
                {item.name}
              </Link>)}
          </div>

          {/* Theme Toggle & CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {onStartTour && <GuideButton onClick={onStartTour} />}
            <div className="tour-theme-toggle">
              <ThemeToggle />
            </div>
            <Button asChild variant="outline" size="sm" className="tour-fiverr-btn">
              <a href="https://www.fiverr.com/s/bdXwDDa" target="_blank" rel="noopener noreferrer">
                Fiverr
              </a>
            </Button>
            <Button asChild size="sm" className="tour-order-btn bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/order">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Direct Order
              </Link>
            </Button>
          </div>

          {/* Mobile: Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {onStartTour && <GuideButton onClick={onStartTour} />}
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-foreground" aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden border-t border-border py-4 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={`text-base font-medium transition-colors hover:text-primary px-2 py-1 ${isActive(item.href) ? 'text-primary' : 'text-muted-foreground'}`}>
                  {item.name}
                </Link>)}
              <div className="flex flex-col gap-2 mt-2">
                <Button asChild variant="outline">
                  <a href="https://www.fiverr.com/s/bdXwDDa" target="_blank" rel="noopener noreferrer">
                    Order on Fiverr
                  </a>
                </Button>
                <Button asChild className="bg-primary text-primary-foreground">
                  <Link to="/order" onClick={() => setIsMenuOpen(false)}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Direct Order
                  </Link>
                </Button>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;
