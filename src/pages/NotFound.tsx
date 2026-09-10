import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEOHelmet from "@/components/SEOHelmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: no route for", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      {/* The site is three pages, so the 404 borrows the home head and adds noindex. */}
      <SEOHelmet route="/" noindex />
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
          <p className="mb-6 text-lg text-muted-foreground max-w-md">
            This site is three pages: home, about and contact. If you followed a link to a
            services, tools, blog or project page, that work now lives on the portfolio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="text-primary underline hover:text-primary/90">
              Home
            </Link>
            <a
              href="https://www.muneebshafiq.me/projects"
              className="text-primary underline hover:text-primary/90"
              rel="noopener noreferrer"
            >
              Case studies
            </a>
            <Link to="/contact" className="text-primary underline hover:text-primary/90">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
