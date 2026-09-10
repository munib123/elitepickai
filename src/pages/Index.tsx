import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHelmet from "@/components/SEOHelmet";
import { Button } from "@/components/ui/button";
import { SITE, WORK, CLIENT_PROOF } from "@/site";

/**
 * The home page states who runs this practice, what it takes on, and where the
 * work can be inspected. It carries no ratings, project counts, accuracy figures
 * or guarantees: the only number on the page is the Fiverr aggregate, and it is
 * a link to the profile that publishes it.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://elitepickai.com/#website",
      url: "https://elitepickai.com/",
      name: SITE.brand,
      inLanguage: "en",
      publisher: { "@id": "https://elitepickai.com/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://elitepickai.com/#person",
      name: SITE.owner,
      jobTitle: SITE.title,
      url: SITE.portfolio,
      email: `mailto:${SITE.email}`,
      worksFor: { "@type": "Organization", name: SITE.employer },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      sameAs: [SITE.github, SITE.linkedin, SITE.fiverr, SITE.portfolio],
    },
  ],
};

const Index = () => (
  <Layout>
    <SEOHelmet route="/" structuredData={structuredData} />

    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Independent practice · {SITE.location} · {SITE.timezone}
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          Data and AI work, built by one engineer.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          I&rsquo;m {SITE.owner}, {SITE.title} at {SITE.employer}. {SITE.brand} is where I take on
          independent work: dashboards and the data plumbing under them, retrieval systems that cite
          their sources, and automation that runs without supervision.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`${SITE.portfolio}/projects`} target="_blank" rel="noopener noreferrer">
              Read the case studies
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">What I take on</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {WORK.map((w) => (
            <div key={w.heading}>
              <h3 className="text-lg font-semibold">{w.heading}</h3>
              <p className="mt-2 text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
          No fixed packages or published prices. Scope and cost depend on the data and what you need
          out of it, which is what the first conversation is for.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Where to check the work</h2>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Everything below is somewhere you can verify rather than something stated here.
      </p>
      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        <li className="rounded-lg border border-border p-6">
          <h3 className="font-semibold">Client work</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {CLIENT_PROOF.clients} clients across {CLIENT_PROOF.countries} countries, rated{" "}
            {CLIENT_PROOF.rating} on the profile that publishes the reviews.
          </p>
          <a
            href={CLIENT_PROOF.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-sm text-primary hover:underline"
          >
            Verify on Fiverr
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        </li>
        <li className="rounded-lg border border-border p-6">
          <h3 className="font-semibold">Case studies</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Written up end to end on my portfolio: the problem, the architecture, the trade-offs and
            what I actually did.
          </p>
          <a
            href={`${SITE.portfolio}/projects`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-sm text-primary hover:underline"
          >
            muneebshafiq.me
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        </li>
        <li className="rounded-lg border border-border p-6">
          <h3 className="font-semibold">Code</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The public repositories, including the one this site is built from.
          </p>
          <a
            href={SITE.github}
            target="_blank"
            rel="me noopener noreferrer"
            className="mt-3 inline-flex items-center text-sm text-primary hover:underline"
          >
            github.com/munib123
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        </li>
      </ul>
    </section>
  </Layout>
);

export default Index;
