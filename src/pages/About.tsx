import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHelmet from "@/components/SEOHelmet";
import { Button } from "@/components/ui/button";
import { SITE, CERTIFICATIONS, CLIENT_PROOF } from "@/site";

/**
 * Every claim on this page is checkable. Certifications link to the issuer's own
 * verification page; the one without a link says so rather than implying one. The
 * client figure is the Fiverr profile's public aggregate, linked. There are no
 * badges for credentials nobody issues, and no invented reviews.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://elitepickai.com/about#profilepage",
  url: "https://elitepickai.com/about",
  mainEntity: {
    "@type": "Person",
    "@id": "https://elitepickai.com/#person",
    name: SITE.owner,
    jobTitle: SITE.title,
    url: SITE.portfolio,
    email: `mailto:${SITE.email}`,
    worksFor: { "@type": "Organization", name: SITE.employer },
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    sameAs: [SITE.github, SITE.linkedin, SITE.fiverr, SITE.portfolio],
    hasCredential: CERTIFICATIONS.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.title,
      recognizedBy: { "@type": "Organization", name: c.issuer },
      ...(c.verifyUrl ? { url: c.verifyUrl } : {}),
    })),
  },
};

const About = () => (
  <Layout>
    <SEOHelmet route="/about" structuredData={structuredData} />

    <section className="container mx-auto px-4 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {SITE.owner}, {SITE.title}.
        </h1>
        <div className="mt-6 space-y-4 text-lg text-muted-foreground">
          <p>
            I work at {SITE.employer} on the agent pipeline behind the Puffo AI platform: nine
            agents, folder-scoped writes, human approval gates between phases, and an append-only
            audit log. Remote from {SITE.location}, on LLM automation that has to clear a security or
            compliance review before it ships.
          </p>
          <p>
            {SITE.brand} is the independent side of that. Most of the client work I have done is
            dashboards and the data preparation underneath them; the day job is agent systems. Both
            are on the table.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href={SITE.portfolio} target="_blank" rel="me noopener noreferrer">
              Full portfolio
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Client work</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {CLIENT_PROOF.clients} clients across {CLIENT_PROOF.countries} countries, rated{" "}
          {CLIENT_PROOF.rating}. I do not reproduce the reviews here, because they belong to the
          people who wrote them. They are on the profile, under their own names.
        </p>
        <a
          href={CLIENT_PROOF.href}
          target="_blank"
          rel="me noopener noreferrer"
          className="mt-4 inline-flex items-center text-primary hover:underline"
        >
          Read them on Fiverr
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Each one links to the issuer&rsquo;s own verification page, so you do not have to take my
        word for any of them.
      </p>
      <ul className="mt-8 divide-y divide-border border-t border-border">
        {CERTIFICATIONS.map((c) => (
          <li
            key={c.title}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
          >
            <div className="min-w-0">
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
            </div>
            {c.verifyUrl ? (
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center text-sm text-primary hover:underline"
              >
                Verify
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            ) : (
              <span className="shrink-0 text-sm text-muted-foreground">
                No verification link issued
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default About;
