import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEOHelmet from "@/components/SEOHelmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEOHelmet
        title="Page Not Found — ElitePick AI"
        description="The page you're looking for doesn't exist. Browse our AI & Data Science services, projects, and blog."
        canonical="https://elitepickai.com/"
      />
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404 — Page Not Found</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
