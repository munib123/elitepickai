import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  onStartTour?: () => void;
}

const Layout = ({ children, onStartTour }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onStartTour={onStartTour} />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
