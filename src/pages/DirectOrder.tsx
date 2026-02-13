import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Package, Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHelmet from '@/components/SEOHelmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { services } from '@/data/services';

const budgetRanges = [
  { value: '100-250', label: '$100 - $250' },
  { value: '250-500', label: '$250 - $500' },
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-2500', label: '$1,000 - $2,500' },
  { value: '2500+', label: '$2,500+' },
  { value: 'discuss', label: 'Let\'s Discuss' },
];

const timelineOptions = [
  { value: 'asap', label: 'ASAP (Rush)' },
  { value: '1-week', label: 'Within 1 Week' },
  { value: '2-weeks', label: 'Within 2 Weeks' },
  { value: '1-month', label: 'Within 1 Month' },
  { value: 'flexible', label: 'Flexible' },
];

const DirectOrderPage = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService,
    budget: '',
    timeline: '',
    projectDescription: '',
    expectedOutcome: '',
    additionalInfo: '',
    hasExistingData: false,
    needsOngoingSupport: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const getServiceTitle = (slug: string) => {
    const service = services.find(s => s.slug === slug);
    return service ? service.title.replace('Freelance ', '').replace(' for Hire', '') : slug;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceTitle = formData.service ? getServiceTitle(formData.service) : 'Not specified';
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key:
            (import.meta.env.VITE_WEB3FORMS_API_KEY as string | undefined) ??
            'c894bb38-929a-4b87-877b-5c53a4809627',
          name: formData.name,
          email: formData.email,
          subject: `Direct Order Request: ${serviceTitle}`,
          from_name: 'ElitePick AI Direct Order',
          // Order details
          company: formData.company || 'Not provided',
          service_requested: serviceTitle,
          budget_range: formData.budget,
          timeline: formData.timeline,
          project_description: formData.projectDescription,
          expected_outcome: formData.expectedOutcome,
          additional_info: formData.additionalInfo || 'None',
          has_existing_data: formData.hasExistingData ? 'Yes' : 'No',
          needs_ongoing_support: formData.needsOngoingSupport ? 'Yes' : 'No',
          // Formatted message for email
          message: `
NEW DIRECT ORDER REQUEST

Client Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || 'Not provided'}

Order Details:
- Service: ${serviceTitle}
- Budget: ${formData.budget}
- Timeline: ${formData.timeline}
- Has Existing Data: ${formData.hasExistingData ? 'Yes' : 'No'}
- Needs Ongoing Support: ${formData.needsOngoingSupport ? 'Yes' : 'No'}

Project Description:
${formData.projectDescription}

Expected Outcome:
${formData.expectedOutcome}

Additional Information:
${formData.additionalInfo || 'None'}
          `.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        toast.success('Order request submitted successfully!');
      } else {
        throw new Error(data.message || 'Failed to submit order');
      }
    } catch (error) {
      toast.error('Failed to submit order. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <SEOHelmet
          title="Order Submitted | ElitePick AI"
          description="Your order request has been submitted successfully. We'll get back to you soon."
          canonical="https://elitepickai.com/order"
        />
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Order Request Submitted!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your interest! We'll review your requirements and get back to you within 24 hours with a customized proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/services">Browse Services</Link>
              </Button>
              <Button asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHelmet
        title="Direct Order | AI & Data Science Services | ElitePick AI"
        description="Place a direct order for data science, AI, and machine learning services from ElitePick AI. Skip Fiverr and work directly."
        canonical="https://elitepickai.com/order"
        ogType="website"
        keywords="Direct Order, Hire Data Scientist, Custom AI Project, Machine Learning Services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Direct Order — ElitePick AI",
          "description": "Place a direct order for data science, AI, and machine learning services from ElitePick AI.",
          "url": "https://elitepickai.com/order",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://elitepickai.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://elitepickai.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Direct Order", "item": "https://elitepickai.com/order" }
            ]
          }
        }}
      />

      {/* Back Link */}
      <div className="bg-muted/50 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Place a </span>
              <span className="text-gradient">Direct Order</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Skip the middleman. Share your project details and I'll create a customized proposal for you.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Order Details</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Your Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Service Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleSelectChange('service', value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.slug} value={service.slug}>
                            {service.title.replace('Freelance ', '').replace(' for Hire', '')}
                          </SelectItem>
                        ))}
                        <SelectItem value="custom">Custom Project (Other)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range *</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => handleSelectChange('budget', value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline *</Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => handleSelectChange('timeline', value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Project Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">Describe Your Project *</Label>
                    <Textarea
                      id="projectDescription"
                      name="projectDescription"
                      placeholder="What problem are you trying to solve? What data do you have? What's the context of your project?"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectedOutcome">Expected Outcome *</Label>
                    <Textarea
                      id="expectedOutcome"
                      name="expectedOutcome"
                      placeholder="What deliverables do you expect? What does success look like for this project?"
                      rows={3}
                      value={formData.expectedOutcome}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Any other details, requirements, or questions you have..."
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="hasExistingData"
                      checked={formData.hasExistingData}
                      onCheckedChange={(checked) => handleCheckboxChange('hasExistingData', checked as boolean)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="hasExistingData" className="cursor-pointer">
                        I have existing data ready to work with
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        (e.g., spreadsheets, databases, APIs, or other data sources)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="needsOngoingSupport"
                      checked={formData.needsOngoingSupport}
                      onCheckedChange={(checked) => handleCheckboxChange('needsOngoingSupport', checked as boolean)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="needsOngoingSupport" className="cursor-pointer">
                        I need ongoing maintenance/support
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        (e.g., regular updates, monitoring, or long-term partnership)
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Order Request
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-6">
                We'll review your request and respond within 24 hours with a customized proposal. No commitment required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DirectOrderPage;
