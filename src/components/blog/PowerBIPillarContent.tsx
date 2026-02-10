import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckCircle, AlertTriangle, ExternalLink, Download, ArrowRight, Lightbulb, MessageSquare } from 'lucide-react';

import heroDataTransformation from '@/assets/blog/powerbi-data-transformation.webp';
import imgDesktopSetup from '@/assets/blog/powerbi-desktop-setup.webp';
import imgDataSources from '@/assets/blog/powerbi-data-sources.webp';
import imgStarSchema from '@/assets/blog/powerbi-star-schema.webp';
import imgDaxFormulas from '@/assets/blog/powerbi-dax-formulas.webp';
import imgDesignComparison from '@/assets/blog/powerbi-design-comparison.webp';
import imgEnterpriseArch from '@/assets/blog/powerbi-enterprise-architecture.webp';
import imgFacilityDashboard from '@/assets/blog/powerbi-facility-dashboard.webp';

const CodeBlock = ({ language, children }: { language: string; children: string }) => (
  <div className="my-6 rounded-lg overflow-hidden border border-border">
    <div className="bg-muted px-4 py-2 text-xs font-mono text-muted-foreground uppercase">
      {language}
    </div>
    <pre className="bg-muted/50 p-4 overflow-x-auto text-sm leading-relaxed">
      <code className="font-mono text-foreground">{children}</code>
    </pre>
  </div>
);

const ExpertNote = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 border-l-4 border-primary bg-primary/5 rounded-r-lg p-4 md:p-6">
    <div className="flex items-start gap-3">
      <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <div className="text-sm text-foreground space-y-2">{children}</div>
    </div>
  </div>
);

const ProTip = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 border-l-4 border-chart-2 bg-chart-2/5 rounded-r-lg p-4 md:p-6">
    <div className="flex items-start gap-3">
      <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
      <div className="text-sm text-foreground space-y-2">{children}</div>
    </div>
  </div>
);

const ChapterImage = ({ src, alt }: { src: string; alt: string }) => (
  <figure className="my-8">
    <img
      src={src}
      alt={alt}
      className="w-full rounded-lg border border-border"
      loading="lazy"
    />
    <figcaption className="mt-2 text-xs text-muted-foreground text-center italic">
      {alt}
    </figcaption>
  </figure>
);

const CtaBanner = ({ variant }: { variant: 'consultation' | 'fiverr' }) => {
  if (variant === 'consultation') {
    return (
      <div className="my-10 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6 md:p-8 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">
          🚀 Need a Custom Power BI Dashboard Built for Your Business?
        </h3>
        <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-sm">
          We have delivered enterprise-grade dashboards for businesses managing 50+ locations, 
          processing thousands of daily transactions, and monitoring critical KPIs in real-time.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild>
            <Link to="/contact">
              Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.fiverr.com/s/lj4XQKg" target="_blank" rel="noopener noreferrer">
              View Fiverr Packages <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    );
  }
  return null;
};

const PowerBIPillarContent = () => {
  return (
    <div className="prose-custom space-y-8">
      {/* Introduction - PAS Framework */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
        
        <p className="text-foreground/90 leading-relaxed">
          Your business generates data every single day. Sales transactions pile up in spreadsheets, 
          customer interactions scatter across CRM exports, and operational metrics sit buried in 
          databases that nobody queries. The result? Executives make decisions based on gut feeling 
          instead of evidence, and teams spend entire Monday mornings manually stitching together 
          reports that are already outdated by the time they reach the inbox.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          The cost of this chaos is staggering. According to industry research, knowledge workers spend 
          up to <strong>30% of their time</strong> just searching for and preparing data. Every hour your team spends 
          copying rows between Excel tabs is an hour not spent analyzing trends, identifying risks, or 
          capitalizing on opportunities. And when leadership finally gets that report? The numbers are 
          from last week. The decisions they make are based on a rearview mirror, not a windshield.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          <strong>Power BI changes this equation entirely.</strong> It transforms raw, messy data into interactive, 
          real-time dashboards that tell a story at a glance. In this comprehensive guide, we will walk you 
          through every stage of building a custom Power BI dashboard — from connecting your first data 
          source to deploying a polished, enterprise-ready report. This is not theory. Every technique in 
          this guide comes from real-world projects we have delivered for clients managing operations 
          across 50+ locations, processing thousands of financial transactions, and monitoring KPIs that 
          directly impact revenue.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          Whether you are a business analyst building your first report, a data engineer optimizing an 
          existing pipeline, or a decision-maker evaluating whether Power BI is right for your 
          organization — this guide has something for you. And if at any point the complexity exceeds 
          what you want to tackle yourself, we are just a <Link to="/contact" className="text-primary hover:underline">message away</Link>.
        </p>
      </section>

      {/* Prerequisites */}
      <section className="bg-muted/30 rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-3">✅ What You Will Need to Follow Along</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/90">
          <li><strong>Power BI Desktop (Free)</strong> — <a href="https://powerbi.microsoft.com/desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Download from Microsoft</a></li>
          <li><strong>Sample Dataset</strong> — Download from our GitHub</li>
          <li>Basic familiarity with spreadsheets (Excel or Google Sheets)</li>
          <li><em>Optional:</em> A SQL Server or MySQL database for the advanced sections</li>
          <li><em>Optional:</em> A Power BI Pro or Premium Per User license for publishing and sharing</li>
        </ol>
        <ExpertNote>
          <p className="font-semibold">Don't Have Time to Follow Along?</p>
          <p>This guide is designed to teach you everything step by step. But if you need a professional dashboard built quickly, we specialize in custom Power BI development for businesses of all sizes. <Link to="/contact" className="text-primary hover:underline">Book a free consultation</Link> or check out our <a href="https://www.fiverr.com/s/lj4XQKg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dashboard packages on Fiverr</a>.</p>
        </ExpertNote>
      </section>

      <Separator className="my-10" />

      {/* Chapter 1 */}
      <section id="what-is-power-bi">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 1: What is Power BI and Why It Matters for Your Business
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Power BI is Microsoft's business analytics platform that lets you connect to hundreds of data 
          sources, transform that data into a coherent model, and build interactive visualizations that 
          update automatically. But calling it just a "visualization tool" undersells it dramatically. 
          Power BI is an entire ecosystem that spans from data ingestion to enterprise-grade reporting.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Power BI Ecosystem at a Glance</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>What It Does</TableHead>
                <TableHead>Who Uses It</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell className="font-medium">Power BI Desktop</TableCell><TableCell>Free application for building reports and data models. This is where 90% of the development work happens.</TableCell><TableCell>Analysts, Developers</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Power BI Service</TableCell><TableCell>Cloud platform (app.powerbi.com) for publishing, sharing, and scheduling data refreshes.</TableCell><TableCell>Teams, Managers</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Power BI Mobile</TableCell><TableCell>iOS/Android apps for viewing dashboards on the go.</TableCell><TableCell>Executives, Field Teams</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Power BI Gateway</TableCell><TableCell>Bridges on-premise data sources with the cloud service for automatic refresh.</TableCell><TableCell>IT Admins, Engineers</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Power BI Embedded</TableCell><TableCell>Embeds reports into custom applications and websites.</TableCell><TableCell>Developers, SaaS Companies</TableCell></TableRow>
            </TableBody>
          </Table>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Why Power BI Over Alternatives?</h3>
        <p className="text-foreground/90 leading-relaxed">
          The dashboard market is crowded. Tableau, Looker, Qlik, and Metabase all have their strengths. 
          But Power BI dominates the enterprise space for several practical reasons: it integrates natively 
          with the entire Microsoft ecosystem (Excel, Azure, SharePoint, Teams), it offers the most generous 
          free tier in the industry, and its DAX formula language provides calculation capabilities that no 
          other tool matches at this price point.
        </p>
        <p className="text-foreground/90 leading-relaxed mt-3">
          For businesses and consultants, Power BI has the largest client demand. Most businesses already 
          have Microsoft 365, which means the barrier to adopting Power BI is nearly zero compared to a tool 
          like Tableau that requires a separate, expensive license for every viewer.
        </p>

        <ChapterImage
          src={heroDataTransformation}
          alt="Infographic showing transformation from messy raw data to clean interactive Power BI dashboards"
        />
      </section>

      <Separator className="my-10" />

      {/* Chapter 2 */}
      <section id="setting-up">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 2: Setting Up Your Power BI Environment
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Before building anything, you need a properly configured environment. Power BI Desktop is free 
          to download and use, but there are several settings you should configure from day one to avoid 
          headaches later.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Step 1: Download and Install Power BI Desktop</h3>
        <p className="text-foreground/90 leading-relaxed">
          Head to <a href="https://powerbi.microsoft.com/desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">powerbi.microsoft.com/desktop</a> and 
          download the latest version. We recommend downloading directly from the website rather than the 
          Microsoft Store, as it gives you more control over updates.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Step 2: Configure Essential Settings</h3>
        <p className="text-foreground/90 leading-relaxed mb-3">
          Once installed, navigate to <code className="bg-muted px-1.5 py-0.5 rounded text-sm">File &gt; Options and Settings &gt; Options</code>. 
          These are the settings you should change immediately:
        </p>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Setting</TableHead>
                <TableHead>Recommended</TableHead>
                <TableHead>Why It Matters</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell className="font-medium">Data Load &gt; Auto Date/Time</TableCell><TableCell><Badge variant="destructive" className="text-xs">DISABLE</Badge></TableCell><TableCell>Auto date tables bloat your model and conflict with custom date tables.</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Data Load &gt; Auto Detect Relationships</TableCell><TableCell><Badge variant="destructive" className="text-xs">DISABLE</Badge></TableCell><TableCell>Automatic relationships often create incorrect joins.</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Regional Settings</TableCell><TableCell>Match your data locale</TableCell><TableCell>Prevents date format conflicts (MM/DD vs DD/MM).</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Privacy &gt; Always Ignore</TableCell><TableCell><Badge variant="secondary" className="text-xs">ENABLE</Badge></TableCell><TableCell>Avoids privacy level prompts during development.</TableCell></TableRow>
            </TableBody>
          </Table>
        </div>

        <ExpertNote>
          <p><strong>Expert Note:</strong> Disabling Auto Date/Time is the single most impactful setting change you can make. The default auto date tables can double or triple your model size without you realizing it. We have seen client files go from 500MB to 150MB just by disabling this and building a proper date dimension.</p>
        </ExpertNote>

        <ChapterImage
          src={imgDesktopSetup}
          alt="Power BI Desktop welcome screen showing Get Data options for Excel, databases, and cloud services"
        />
      </section>

      <Separator className="my-10" />

      {/* Chapter 3 */}
      <section id="connecting-data">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 3: Connecting to Data Sources (Excel, SQL, APIs, and More)
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Power BI can connect to over <strong>150 data sources</strong>. For this guide, we will cover the most common ones 
          you will encounter in real projects: Excel files, SQL databases, and REST APIs.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Step 1: Connecting to Excel</h3>
        <p className="text-foreground/90 leading-relaxed">
          Go to <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Home &gt; Get Data &gt; Excel Workbook</code>. Navigate to the sample file 
          you downloaded from the prerequisites section. Power BI will show you a Navigator window listing 
          all sheets and named tables.
        </p>
        <ProTip>
          <p><strong>Pro Tip:</strong> Always convert your Excel data to a Table (Ctrl+T in Excel) before importing into Power BI. Named tables import cleaner, handle new rows automatically, and give you proper column headers instead of 'Column1, Column2.'</p>
        </ProTip>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Step 2: Connecting to SQL Server / MySQL</h3>
        <p className="text-foreground/90 leading-relaxed">
          For production dashboards, Excel is rarely the final answer. Most enterprise data lives in 
          relational databases. To connect to SQL Server, go to <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Home &gt; Get Data &gt; SQL Server database</code>.
        </p>

        <CodeBlock language="SQL">{`-- Example: Optimized query for Power BI import
SELECT
    t.TransactionID,
    t.TransactionDate,
    t.Amount,
    t.CategoryID,
    c.CategoryName,
    s.StoreName,
    s.Region
FROM Transactions t
INNER JOIN Categories c ON t.CategoryID = c.CategoryID
INNER JOIN Stores s ON t.StoreID = s.StoreID
WHERE t.TransactionDate >= '2025-01-01'`}</CodeBlock>

        <ExpertNote>
          <p><strong>Expert Note:</strong> Never use 'SELECT *' when connecting Power BI to SQL. Only pull the columns you need. Every unnecessary column increases your model size and slows down refresh times. We reduced a client's refresh time from <strong>45 minutes to 8 minutes</strong> just by optimizing the source query.</p>
        </ExpertNote>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Step 3: Connecting to REST APIs</h3>
        <p className="text-foreground/90 leading-relaxed">
          Modern applications expose data through APIs. Power BI can consume JSON and OData endpoints 
          natively. Go to <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Home &gt; Get Data &gt; Web</code>, and enter your API endpoint URL.
        </p>

        <ChapterImage
          src={imgDataSources}
          alt="Diagram showing multiple data sources connecting to Power BI for centralized reporting"
        />
      </section>

      <Separator className="my-10" />

      {/* Chapter 4 */}
      <section id="data-modeling">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 4: Data Modeling — The Backbone of Every Great Dashboard
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          This is where most Power BI projects succeed or fail. A bad data model means slow reports, 
          wrong numbers, and frustrated users. A good data model means fast performance, accurate 
          calculations, and dashboards that practically build themselves.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Understanding Star Schema</h3>
        <p className="text-foreground/90 leading-relaxed">
          The gold standard for Power BI data modeling is the <strong>Star Schema</strong>. In a Star Schema, 
          you have one or more <em>Fact Tables</em> (containing your measurable events like sales, transactions, 
          or orders) surrounded by <em>Dimension Tables</em> (containing descriptive attributes like product 
          names, dates, customer info, and locations).
        </p>

        <ChapterImage
          src={imgStarSchema}
          alt="Star Schema data model diagram showing fact and dimension tables for a sales analytics Power BI project"
        />

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Building Relationships</h3>
        <p className="text-foreground/90 leading-relaxed mb-3">
          In Power BI, relationships define how tables are connected. Always use <strong>single-direction, 
          many-to-one</strong> relationships from your fact table to your dimension tables. Avoid bidirectional 
          filtering unless absolutely necessary.
        </p>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Relationship</TableHead>
                <TableHead>From (Many)</TableHead>
                <TableHead>To (One)</TableHead>
                <TableHead>Direction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>Sales to Date</TableCell><TableCell>FactSales[DateKey]</TableCell><TableCell>DimDate[DateKey]</TableCell><TableCell>Single</TableCell></TableRow>
              <TableRow><TableCell>Sales to Product</TableCell><TableCell>FactSales[ProductKey]</TableCell><TableCell>DimProduct[ProductKey]</TableCell><TableCell>Single</TableCell></TableRow>
              <TableRow><TableCell>Sales to Customer</TableCell><TableCell>FactSales[CustomerKey]</TableCell><TableCell>DimCustomer[CustomerKey]</TableCell><TableCell>Single</TableCell></TableRow>
              <TableRow><TableCell>Sales to Store</TableCell><TableCell>FactSales[StoreKey]</TableCell><TableCell>DimStore[StoreKey]</TableCell><TableCell>Single</TableCell></TableRow>
            </TableBody>
          </Table>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Custom Date Table</h3>
        <p className="text-foreground/90 leading-relaxed">
          Every Power BI model needs a dedicated date table. This is your time dimension, and it powers 
          all time intelligence calculations (year-over-year, month-to-date, rolling averages). Never 
          rely on Power BI's auto date/time feature.
        </p>

        <CodeBlock language="DAX">{`// DAX: Create a Comprehensive Date Table
DateTable =
VAR StartDate = DATE(2020, 1, 1)
VAR EndDate = DATE(2026, 12, 31)
RETURN
ADDCOLUMNS(
    CALENDAR(StartDate, EndDate),
    "Year", YEAR([Date]),
    "Quarter", "Q" & FORMAT([Date], "Q"),
    "Month Number", MONTH([Date]),
    "Month Name", FORMAT([Date], "MMMM"),
    "Month Short", FORMAT([Date], "MMM"),
    "Week Number", WEEKNUM([Date]),
    "Day of Week", FORMAT([Date], "dddd"),
    "Is Weekend", IF(WEEKDAY([Date], 2) >= 6, TRUE(), FALSE()),
    "Year-Month", FORMAT([Date], "YYYY-MM"),
    "Fiscal Year", IF(MONTH([Date]) >= 7, YEAR([Date]) + 1, YEAR([Date]))
)`}</CodeBlock>

        <ExpertNote>
          <p><strong>Expert Note:</strong> Mark your date table using <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Table Tools &gt; Mark as Date Table</code> in Power BI. This unlocks built-in time intelligence functions. Without this step, functions like SAMEPERIODLASTYEAR and TOTALYTD will not work correctly.</p>
        </ExpertNote>
      </section>

      <Separator className="my-10" />

      {/* Chapter 5 */}
      <section id="dax-essentials">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 5: DAX Essentials — Calculations That Drive Insights
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          DAX (Data Analysis Expressions) is Power BI's formula language. If data modeling is the backbone 
          of your dashboard, DAX is the brain. It is what transforms simple sums into meaningful business 
          metrics like year-over-year growth, running totals, and dynamic rankings.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Measures vs. Calculated Columns</h3>
        <p className="text-foreground/90 leading-relaxed">
          A <strong>Calculated Column</strong> is computed row by row when data is loaded and stored in the model. 
          A <strong>Measure</strong> is computed dynamically at query time based on the filters currently applied. 
          As a rule: <em>use Measures for anything that will appear in a visual</em>. Use Calculated Columns only 
          when you need a value for sorting, filtering, or relationships.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Essential DAX Patterns</h3>

        <CodeBlock language="DAX">{`// 1. Total Sales
Total Sales = SUM(FactSales[Amount])

// 2. Year-over-Year Growth
YoY Growth % =
VAR CurrentYear = [Total Sales]
VAR PreviousYear = CALCULATE([Total Sales], SAMEPERIODLASTYEAR(DateTable[Date]))
RETURN
DIVIDE(CurrentYear - PreviousYear, PreviousYear, 0)

// 3. Month-to-Date Sales
MTD Sales = TOTALMTD([Total Sales], DateTable[Date])

// 4. Year-to-Date Sales
YTD Sales = TOTALYTD([Total Sales], DateTable[Date])

// 5. Running Total
Running Total =
CALCULATE(
    [Total Sales],
    FILTER(
        ALL(DateTable[Date]),
        DateTable[Date] <= MAX(DateTable[Date])
    )
)

// 6. Dynamic Ranking
Sales Rank =
RANKX(ALL(DimProduct[ProductName]), [Total Sales], , DESC, DENSE)

// 7. Percentage of Total
% of Total = DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(DimProduct)))`}</CodeBlock>

        <ProTip>
          <p><strong>Pro Tip:</strong> Always use DIVIDE() instead of the / operator in DAX. DIVIDE() handles division by zero gracefully and returns a specified alternate result (0, BLANK(), etc.) instead of throwing an error. This small habit prevents countless broken visuals.</p>
        </ProTip>

        <ChapterImage
          src={imgDaxFormulas}
          alt="DAX formulas in code editor showing Total Sales, Year-over-Year Growth, and Running Total measures"
        />
      </section>

      <Separator className="my-10" />

      {/* Chapter 6 */}
      <section id="designing-visuals">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 6: Designing Visuals That Communicate, Not Confuse
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          A dashboard is not a data dump. It is a communication tool. The goal is not to show every number 
          you have, but to answer specific business questions clearly and quickly. The best dashboards 
          tell a story in under five seconds.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Visual Selection Framework</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Business Question</TableHead>
                <TableHead>Best Visual</TableHead>
                <TableHead>Avoid</TableHead>
                <TableHead>Why</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>How do values compare?</TableCell><TableCell>Bar / Column Chart</TableCell><TableCell>Pie Chart (&gt;5 slices)</TableCell><TableCell>Length is easier to compare than angles</TableCell></TableRow>
              <TableRow><TableCell>How did it change over time?</TableCell><TableCell>Line Chart</TableCell><TableCell>Stacked Bar</TableCell><TableCell>Lines show trend continuity</TableCell></TableRow>
              <TableRow><TableCell>What is the composition?</TableCell><TableCell>Stacked Bar / Treemap</TableCell><TableCell>3D Charts</TableCell><TableCell>Flat designs are more accurate</TableCell></TableRow>
              <TableRow><TableCell>What is the single KPI?</TableCell><TableCell>Card / KPI Visual</TableCell><TableCell>Gauge</TableCell><TableCell>Cards are cleaner and faster to read</TableCell></TableRow>
              <TableRow><TableCell>Where is it happening?</TableCell><TableCell>Map / Filled Map</TableCell><TableCell>Bubble Chart</TableCell><TableCell>Geographic data needs maps</TableCell></TableRow>
              <TableRow><TableCell>What is the relationship?</TableCell><TableCell>Scatter Plot</TableCell><TableCell>Clustered Bar</TableCell><TableCell>Scatter shows correlation clearly</TableCell></TableRow>
            </TableBody>
          </Table>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dashboard Layout Principles</h3>
        <p className="text-foreground/90 leading-relaxed">
          Follow the <strong>inverted pyramid approach</strong>. Place the most critical KPIs at the top of the page as 
          card visuals. Below them, add trend charts that provide context. At the bottom, include detailed 
          tables for users who want to drill into specifics. This structure mirrors how executives naturally 
          consume information: headline first, context second, detail on demand.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Color Strategy</h3>
        <p className="text-foreground/90 leading-relaxed">
          Limit your palette to <strong>three to five colors maximum</strong>. Use your brand's primary color for positive 
          metrics and a contrasting color for alerts or negative values. Gray should be your best friend — 
          it works perfectly for secondary data. Avoid red/green combinations entirely, as approximately 
          8% of men have some form of color vision deficiency.
        </p>

        <ChapterImage
          src={imgDesignComparison}
          alt="Before and after comparison of Power BI dashboard design showing improvement from cluttered to clean layout"
        />
      </section>

      <Separator className="my-10" />

      {/* Chapter 7 */}
      <section id="interactive-reports">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 7: Building Interactive Reports with Filters and Drill-Downs
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Static reports are dead. The power of Power BI lies in interactivity. Users should be able to 
          click on any visual and see the entire page respond.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Level 1: Slicers</h3>
        <p className="text-foreground/90 leading-relaxed">
          Slicers are the most visible form of filtering. They appear as buttons, dropdowns, or date 
          range selectors on the report canvas. Best practice is to place them in a consistent location — 
          either at the top or along the left side — across all pages.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Level 2: Cross-Filtering</h3>
        <p className="text-foreground/90 leading-relaxed">
          When a user clicks a bar in a bar chart, all other visuals on the page filter to match that 
          selection. You should edit the interactions between visuals to ensure they behave logically. 
          Go to <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Format &gt; Edit Interactions</code> to control behavior.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Level 3: Drill-Down and Drill-Through</h3>
        <p className="text-foreground/90 leading-relaxed">
          <strong>Drill-down</strong> allows users to navigate hierarchies within a single visual — for example clicking 
          a Year to see Quarters, then Months. <strong>Drill-through</strong> lets users right-click on a data point 
          and navigate to an entirely different report page that shows detailed information about that 
          specific selection.
        </p>

        <div className="bg-muted/30 rounded-lg p-4 border border-border my-4">
          <h4 className="font-semibold text-foreground mb-2 text-sm">Drill-through Filter Setup</h4>
          <p className="text-sm text-foreground/90">On your "Product Detail" page, add these fields to the Drill-through filter well:</p>
          <ul className="list-disc list-inside text-sm text-foreground/90 mt-2 space-y-1">
            <li>DimProduct[ProductName]</li>
            <li>DimProduct[Category]</li>
          </ul>
          <p className="text-sm text-foreground/90 mt-2">Now users can right-click any product in any visual on any page and select "Drill through &gt; Product Detail" to see a dedicated analysis page for that product.</p>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Chapter 8 */}
      <section id="publishing">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 8: Publishing and Sharing Your Dashboard
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Building a dashboard on your desktop is only half the job. The real value comes when your 
          stakeholders can access it from anywhere, on any device, with data that refreshes automatically.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Publishing to Power BI Service</h3>
        <p className="text-foreground/90 leading-relaxed">
          Click <strong>Publish</strong> in Power BI Desktop. Select your workspace (or create a new one). The PBIX file 
          uploads to app.powerbi.com, where it becomes a cloud-hosted report with all the interactivity intact.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Scheduling Data Refresh</h3>
        <p className="text-foreground/90 leading-relaxed">
          For cloud data sources, you can schedule automatic refreshes directly in the service. For 
          on-premise databases, you need the <strong>Power BI Gateway</strong> — a secure bridge between your 
          local network and the Power BI cloud.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Sharing Options</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Method</TableHead>
                <TableHead>Best For</TableHead>
                <TableHead>Requirements</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell className="font-medium">Direct Share</TableCell><TableCell>Sharing with specific individuals</TableCell><TableCell>Both parties need Power BI Pro</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Workspace Access</TableCell><TableCell>Team-wide access</TableCell><TableCell>Power BI Pro or Premium workspace</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Publish to Web</TableCell><TableCell>Public, unrestricted access</TableCell><TableCell>No license needed (data is public)</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Embed in Teams</TableCell><TableCell>Microsoft Teams integration</TableCell><TableCell>Power BI Pro + Teams</TableCell></TableRow>
              <TableRow><TableCell className="font-medium">Power BI App</TableCell><TableCell>Polished, packaged experience</TableCell><TableCell>Premium or PPU workspace</TableCell></TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Chapter 9 */}
      <section id="advanced-techniques">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 9: Advanced Techniques for Enterprise Deployments
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Everything covered so far gets you a working dashboard. This chapter covers what separates a 
          personal report from an enterprise-grade solution that serves hundreds of users reliably.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Row-Level Security (RLS)</h3>
        <p className="text-foreground/90 leading-relaxed">
          RLS ensures that users only see the data they are authorized to view. A regional manager sees 
          only their region's data; the VP sees everything.
        </p>

        <CodeBlock language="DAX">{`// Row-Level Security: Regional Filter
// Create a Role called "Regional Manager" and add this DAX filter:
[Region] = USERPRINCIPALNAME()

// Or for a lookup table approach:
CONTAINS(
    SecurityTable,
    SecurityTable[UserEmail], USERPRINCIPALNAME(),
    SecurityTable[Region], DimStore[Region]
)`}</CodeBlock>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Incremental Refresh</h3>
        <p className="text-foreground/90 leading-relaxed">
          For large datasets (millions of rows), refreshing the entire dataset every time is wasteful. 
          Incremental Refresh tells Power BI to only refresh data that has changed since the last refresh, 
          dramatically reducing refresh time and server load.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">⚡ Performance Optimization Checklist</h3>
        <ol className="list-decimal list-inside space-y-2 text-foreground/90 text-sm">
          <li>Remove unused columns from your model (every column costs memory)</li>
          <li>Avoid calculated columns when a measure would work</li>
          <li>Use variables (VAR) in complex DAX to prevent duplicate evaluations</li>
          <li>Star Schema always outperforms flat tables</li>
          <li>Pre-aggregate data in SQL before importing</li>
          <li>Use INT instead of STRING for keys (integers compress better)</li>
          <li>Limit visuals per page to 8-10 maximum</li>
          <li>Use Performance Analyzer (View &gt; Performance Analyzer) to identify slow visuals</li>
        </ol>

        <ChapterImage
          src={imgEnterpriseArch}
          alt="Enterprise Power BI deployment architecture diagram showing on-premises gateway, firewall, and cloud workspaces"
        />
      </section>

      <Separator className="my-10" />

      {/* Chapter 10 */}
      <section id="case-study">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 10: Real-World Case Study — From Raw Data to Executive Dashboard
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Let me walk you through a real project we completed for a client managing facility cleaning 
          operations across <strong>50+ locations</strong>. This case study demonstrates every concept covered in 
          this guide, applied to a real business problem.
        </p>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-40">Element</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Challenge</TableCell>
                <TableCell>Data scattered across 50+ locations in Excel files, Google Sheets, and a legacy database. Management had zero real-time visibility into staff productivity, service completion rates, or resource utilization.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Solution Architecture</TableCell>
                <TableCell>Built a robust ETL pipeline using Python (Pandas) to extract, clean, and load data from all sources into a centralized MySQL database. Connected Power BI to MySQL for real-time reporting.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Key Metrics Tracked</TableCell>
                <TableCell>Staff productivity rates, service completion percentages, cost per square foot, equipment utilization, client satisfaction scores.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Results</TableCell>
                <TableCell>Reduced manual reporting time from <strong>15 hours per week to under 5 minutes</strong>. Enabled management to identify underperforming locations in real-time and reallocate resources proactively.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <ChapterImage
          src={imgFacilityDashboard}
          alt="Power BI facility operations dashboard showing KPIs, location performance, and trend analysis for a multi-location cleaning business"
        />
      </section>

      <Separator className="my-10" />

      {/* Chapter 11 */}
      <section id="common-mistakes">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 11: Common Mistakes and How to Avoid Them
        </h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mistake</TableHead>
                <TableHead>Why It Hurts</TableHead>
                <TableHead>The Fix</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>Using a flat table instead of Star Schema</TableCell><TableCell>Slow performance, incorrect totals</TableCell><TableCell>Normalize into fact and dimension tables</TableCell></TableRow>
              <TableRow><TableCell>Leaving Auto Date/Time enabled</TableCell><TableCell>Bloated model size, hidden tables</TableCell><TableCell>Disable and build a custom date table</TableCell></TableRow>
              <TableRow><TableCell>Too many visuals on one page</TableCell><TableCell>Slow rendering, cognitive overload</TableCell><TableCell>Maximum 8-10 visuals per page</TableCell></TableRow>
              <TableRow><TableCell>Using calculated columns for aggregations</TableCell><TableCell>Wasted memory, incorrect context</TableCell><TableCell>Use measures instead</TableCell></TableRow>
              <TableRow><TableCell>Bidirectional relationships everywhere</TableCell><TableCell>Ambiguous filter propagation</TableCell><TableCell>Single direction, many-to-one</TableCell></TableRow>
              <TableRow><TableCell>Not testing on mobile</TableCell><TableCell>Broken layouts for mobile users</TableCell><TableCell>Use the Mobile Layout view in Desktop</TableCell></TableRow>
              <TableRow><TableCell>Ignoring data types</TableCell><TableCell>Wrong sort order, failed calculations</TableCell><TableCell>Set types in Power Query before loading</TableCell></TableRow>
              <TableRow><TableCell>No error handling in DAX</TableCell><TableCell>Blank or error values crash visuals</TableCell><TableCell>Use DIVIDE(), IFERROR(), ISBLANK()</TableCell></TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Chapter 12 */}
      <section id="diy-vs-expert">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Chapter 12: When to DIY vs. When to Hire a Power BI Expert
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          This guide has given you the complete toolkit to build professional Power BI dashboards. 
          But knowing how to do something and having the time to do it well are two different things.
        </p>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Scenario</TableHead>
                <TableHead>DIY</TableHead>
                <TableHead>Hire an Expert</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>Simple report from one Excel file</TableCell><TableCell>Yes — this guide covers it</TableCell><TableCell>Not needed</TableCell></TableRow>
              <TableRow><TableCell>Multi-source data integration</TableCell><TableCell>Possible but time-intensive</TableCell><TableCell>Recommended — saves weeks</TableCell></TableRow>
              <TableRow><TableCell>Enterprise deployment with RLS</TableCell><TableCell>Only if you have BI experience</TableCell><TableCell>Strongly recommended</TableCell></TableRow>
              <TableRow><TableCell>Performance optimization</TableCell><TableCell>Trial and error</TableCell><TableCell>Expert can identify issues fast</TableCell></TableRow>
              <TableRow><TableCell>Ongoing maintenance</TableCell><TableCell>If you built it yourself</TableCell><TableCell>Hand off for efficiency</TableCell></TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Conclusion</h2>
        <p className="text-foreground/90 leading-relaxed">
          You now have a comprehensive understanding of the entire Power BI development lifecycle. 
          From connecting to raw data sources, through building optimized star schema models, writing 
          powerful DAX calculations, designing visuals that communicate clearly, and deploying 
          enterprise-ready reports with security and scheduled refresh.
        </p>
        <p className="text-foreground/90 leading-relaxed mt-3">
          <strong>The key takeaway is this:</strong> a great Power BI dashboard is not about flashy charts. 
          It is about the invisible architecture underneath — the data model, the relationships, the 
          calculations. Get those right, and the visuals practically design themselves.
        </p>
        <p className="text-foreground/90 leading-relaxed mt-3">
          Bookmark this guide and refer back to it as you build your dashboards. And explore the cluster 
          posts linked throughout for deeper dives into specific topics like DAX time intelligence, MySQL 
          connectivity, and advanced drill-down techniques.
        </p>
      </section>

      {/* Free Download CTA */}
      <div className="my-10 rounded-xl bg-muted/50 border border-border p-6 md:p-8 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">
          🎁 Free Download: The Elite Power BI Template Pack
        </h3>
        <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-sm">
          Get 5 pre-built Power BI dashboard templates (Sales, Finance, Operations, HR, Marketing) 
          that you can customize for your business. Includes the sample dataset used in this guide.
        </p>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download Free Templates
        </Button>
      </div>

      {/* Final CTA */}
      <CtaBanner variant="consultation" />
    </div>
  );
};

export default PowerBIPillarContent;
