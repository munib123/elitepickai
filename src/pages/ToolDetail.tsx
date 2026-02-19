import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEOHelmet from '@/components/SEOHelmet';
import TrustBar from '@/components/tools/TrustBar';
import HeroSection from '@/components/tools/HeroSection';
import PainMatrix from '@/components/tools/PainMatrix';
import MethodologyTimeline from '@/components/tools/MethodologyTimeline';
import UseCaseGallery from '@/components/tools/UseCaseGallery';
import FeatureGrid from '@/components/tools/FeatureGrid';
import TargetAudience from '@/components/tools/TargetAudience';
import LeadMagnetHub from '@/components/tools/LeadMagnetHub';
import PricingTiers from '@/components/tools/PricingTiers';
import ToolTestimonials from '@/components/tools/ToolTestimonials';
import FAQAccordion from '@/components/tools/FAQAccordion';
import FinalCTA from '@/components/tools/FinalCTA';
import { getToolBySlug } from '@/data/tools';
import { getTestimonialsByKeywords } from '@/data/testimonials';

const ToolDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? getToolBySlug(slug) : undefined;

  if (!tool) {
    return <Navigate to="/tools" replace />;
  }

  // Get relevant testimonials for this tool
  const relevantTestimonials = getTestimonialsByKeywords([
    'Power BI',
    'Dashboard',
    'Tableau',
    'Data Visualization',
    'Business Intelligence'
  ]);

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": tool.title,
    "description": tool.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "ElitePick AI",
      "url": "https://elitepickai.com"
    },
    "areaServed": "Worldwide",
    "priceRange": tool.pricing[0]?.price || "$150 - $1200+",
    "url": `https://elitepickai.com/tools/${tool.slug}`,
    "image": "https://elitepickai.com/favicon-96x96.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    }
  };

  return (
    <Layout>
      <SEOHelmet
        title={`${tool.title} | ElitePick AI`}
        description={tool.metaDescription}
        canonical={`https://elitepickai.com/tools/${tool.slug}`}
        ogType="website"
        keywords={tool.seoKeywords.join(', ')}
        structuredData={jsonLd}
      />

      {/* Section 1: Trust Bar */}
      <TrustBar metrics={tool.trustMetrics} />

      {/* Section 2: Hero */}
      <HeroSection
        headline={tool.headline}
        subheadline={tool.subheadline}
        heroImage={tool.heroImage}
        linkedinLink={tool.linkedinLink}
        toolSlug={tool.slug}
      />

      {/* Section 3: Pain Matrix */}
      <PainMatrix
        painPoints={tool.painPoints}
        painMatrixImage={tool.painMatrixImage}
      />

      {/* Section 4: Methodology Timeline */}
      <MethodologyTimeline
        methodology={tool.methodology}
        methodologyImage={tool.methodologyImage}
      />

      {/* Section 5: Use Case Gallery */}
      <UseCaseGallery useCases={tool.useCases} />

      {/* Section 6: Feature Grid */}
      <FeatureGrid features={tool.features} />

      {/* Section 7: Target Audience */}
      <TargetAudience audience={tool.targetAudience} />

      {/* Section 8: Lead Magnet Hub */}
      <LeadMagnetHub
        leadMagnets={tool.leadMagnets}
        leadMagnetImage={tool.leadMagnetImage}
      />

      {/* Section 9: Pricing Tiers */}
      <PricingTiers pricing={tool.pricing} linkedinLink={tool.linkedinLink} />

      {/* Section 10: Testimonials */}
      <ToolTestimonials testimonials={relevantTestimonials} />

      {/* Section 11: FAQ Accordion */}
      <FAQAccordion faqs={tool.faqs} />

      {/* Section 12: Final CTA */}
      <FinalCTA
        ctaBannerImage={tool.ctaBannerImage}
        linkedinLink={tool.linkedinLink}
        toolSlug={tool.slug}
      />
    </Layout>
  );
};

export default ToolDetail;
