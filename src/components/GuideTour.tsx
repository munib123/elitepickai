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
    content: 'Navigate to different pages: Services, Projects, About, and Contact to explore everything we offer.',
    placement: 'bottom',
  },
  {
    target: '.tour-hero',
    content: 'This is the hero section showcasing our key stats and expertise in Data Science & AI Engineering.',
    placement: 'bottom',
  },
  {
    target: '.tour-services',
    content: 'Explore our Data Analytics and AI/ML services. Each service has detailed information and pricing.',
    placement: 'top',
  },
  {
    target: '.tour-projects',
    content: 'View featured case studies and real project results with measurable outcomes.',
    placement: 'top',
  },
  {
    target: '.tour-linkedin-btn',
    content: 'Connect with us on LinkedIn to discuss your project, view our professional profile, and start a conversation.',
    placement: 'bottom',
  },
  {
    target: '.tour-order-btn',
    content: 'Or place a direct order here for custom projects.',
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
