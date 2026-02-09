import { Step } from 'react-joyride';

export const tourSteps: Step[] = [
  {
    target: '.tour-logo',
    content: 'Welcome to ElitePick AI! Let me show you around the website.',
    disableBeacon: true,
    placement: 'bottom',
  },
  {
    target: '.tour-navigation',
    content: 'Navigate to different pages: Services, Projects, About, and Contact to explore everything I offer.',
    placement: 'bottom',
  },
  {
    target: '.tour-hero',
    content: 'This is the hero section showcasing my key stats and expertise as a Data Scientist & AI Engineer.',
    placement: 'bottom',
  },
  {
    target: '.tour-services',
    content: 'Explore my Data Analytics and AI/ML services. Each service has detailed information and pricing.',
    placement: 'top',
  },
  {
    target: '.tour-projects',
    content: 'View featured case studies and real project results with measurable outcomes.',
    placement: 'top',
  },
  {
    target: '.tour-fiverr-btn',
    content: 'Click here to hire me directly on Fiverr with secure payment and milestone protection.',
    placement: 'bottom',
  },
  {
    target: '.tour-order-btn',
    content: 'Or place a direct order here for custom projects outside of Fiverr.',
    placement: 'bottom',
  },
  {
    target: '.tour-theme-toggle',
    content: 'Toggle between light and dark mode for your preferred viewing experience. Enjoy exploring!',
    placement: 'bottom',
  },
];

export const tourStyles = {
  options: {
    arrowColor: 'hsl(var(--card))',
    backgroundColor: 'hsl(var(--card))',
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    primaryColor: 'hsl(var(--primary))',
    textColor: 'hsl(var(--foreground))',
    zIndex: 10000,
  },
  tooltip: {
    borderRadius: '12px',
    padding: '16px',
  },
  tooltipContent: {
    padding: '8px 0',
  },
  buttonNext: {
    backgroundColor: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    borderRadius: '8px',
    padding: '8px 16px',
  },
  buttonBack: {
    color: 'hsl(var(--muted-foreground))',
    marginRight: '8px',
  },
  buttonSkip: {
    color: 'hsl(var(--muted-foreground))',
  },
};
