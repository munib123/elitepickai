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
import { CheckCircle, AlertTriangle, ExternalLink, ArrowRight, Lightbulb, Link2 } from 'lucide-react';

import imgPowerQuery from '@/assets/blog/sales-dashboard-power-query.webp';
import imgStarSchema from '@/assets/blog/sales-dashboard-star-schema.webp';
import imgKpiCards from '@/assets/blog/sales-dashboard-kpi-cards.webp';
import imgRevenueTrend from '@/assets/blog/sales-dashboard-revenue-trend.webp';
import imgCategoryRegion from '@/assets/blog/sales-dashboard-category-region.webp';
import imgDrillThrough from '@/assets/blog/sales-dashboard-drill-through.webp';
import imgFinalResult from '@/assets/blog/sales-dashboard-final-result.webp';

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

const PillarLink = ({ chapter, label }: { chapter: string; label: string }) => (
  <div className="my-6 bg-muted/30 border border-border rounded-lg p-4">
    <div className="flex items-start gap-3">
      <Link2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <div className="text-sm">
        <span className="text-muted-foreground">🔗 Related Pillar Content: </span>
        <Link
          to={`/blog/power-bi/ultimate-guide-custom-dashboards#${chapter}`}
          className="text-primary hover:underline font-medium"
        >
          {label}
        </Link>
      </div>
    </div>
  </div>
);

const CtaBanner = ({ variant }: { variant: 'consultation' | 'linkedin' }) => {
  if (variant === 'consultation') {
    return (
      <div className="my-10 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6 md:p-8 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">
          🚀 Need a Production-Ready Sales Dashboard?
        </h3>
        <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-sm">
          We build custom sales dashboards for businesses of all sizes. From connecting your live data sources
          through deployment and training, we handle the entire process. Our dashboards have helped clients
          reduce reporting time from 15 hours to under 5 minutes.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild>
            <Link to="/contact">
              Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.linkedin.com/in/muneeb-zehel" target="_blank" rel="noopener noreferrer">
              View LinkedIn Profile <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    );
  }
  if (variant === 'linkedin') {
    return (
      <div className="my-10 rounded-xl bg-gradient-to-r from-chart-2/10 to-chart-2/5 border border-chart-2/20 p-6 md:p-8 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">
          ⚡ Quick Fixes and Single-Page Dashboards
        </h3>
        <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-sm">
          Need a single dashboard page built fast? Or have a DAX formula that is not working?
          Connect with us on LinkedIn to discuss your project needs. 4.8-star client rating from 15+ completed projects.
        </p>
        <Button asChild>
          <a href="https://www.linkedin.com/in/muneeb-zehel" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    );
  }
  return null;
};

const SalesDashboardContent = () => {
  return (
    <div className="prose-custom space-y-8">
      {/* Introduction - PAS Framework */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>

        <p className="text-foreground/90 leading-relaxed">
          <strong>Problem:</strong> Your sales team generates hundreds of transactions every day. Orders come in from multiple channels,
          regions ship at different rates, and product margins vary wildly across categories. Yet when Monday arrives, the sales
          manager is still waiting for someone to pull last week's numbers into a spreadsheet. By the time the report lands in the
          VP's inbox, it is already three days old and missing half the context needed to make a decision.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          <strong>Agitation:</strong> The real cost is not the analyst's time. It is the decisions that do not get made. That
          underperforming region that could have been flagged two weeks ago. The product category bleeding margin that nobody
          noticed until the quarterly review. The sales rep who exceeded target and deserved recognition, but the data was buried
          in a pivot table nobody opened. Static reports do not just waste time. They hide the stories your data is trying to tell you.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          <strong>Solution:</strong> In this tutorial, you are going to build a complete, interactive sales dashboard in Power BI from
          scratch. Not a toy example with three rows of data. A real dashboard built on a realistic sales dataset with 10,000+
          transactions spanning multiple products, regions, and time periods. By the end, you will have a polished, professional
          report that you can adapt for your own business or present to a client.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          Every technique in this tutorial comes from dashboards we have built for real clients. We will show you the exact data model,
          the exact DAX measures, and the exact design decisions that separate an amateur report from a professional-grade sales
          analytics tool.
        </p>

        <div className="my-6 bg-muted/30 border border-border rounded-lg p-4">
          <p className="text-sm text-foreground/90">
            🔗 This post is part of our comprehensive Power BI series. For the full picture of Power BI development — from data
            modeling theory to enterprise deployment — read{' '}
            <Link to="/blog/power-bi/ultimate-guide-custom-dashboards" className="text-primary hover:underline font-medium">
              The Ultimate Guide to Custom Power BI Dashboards for Business Intelligence
            </Link>.
          </p>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="bg-muted/30 rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-3">✅ What You Will Need</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/90">
          <li><strong>Power BI Desktop (Free)</strong> — <a href="https://powerbi.microsoft.com/desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Download from Microsoft</a></li>
          <li><strong>Sample Sales Dataset (CSV)</strong> — Contains: 10,000+ orders, 50 products, 4 regions, 24 months of data</li>
          <li>About 60–90 minutes of focused time</li>
          <li>Basic familiarity with spreadsheets (you know what rows, columns, and formulas are)</li>
          <li><em>Optional:</em> Power BI Pro license if you want to publish and share (free 60-day trial available)</li>
        </ol>

        <h4 className="text-sm font-semibold text-foreground mt-4 mb-2">About the Sample Dataset</h4>
        <p className="text-sm text-foreground/90">
          The sample dataset simulates a mid-size e-commerce company selling products across four regions (North, South, East, West)
          with 50 unique products in 6 categories (Electronics, Clothing, Home & Garden, Sports, Books, Food & Beverage). It includes
          fields for Order ID, Order Date, Ship Date, Customer ID, Product Name, Category, Region, Sales Rep, Quantity, Unit Price,
          Discount, Revenue, Cost, and Profit.
        </p>
        <p className="text-sm text-foreground/90 mt-2">
          We designed this dataset to include realistic patterns: seasonal spikes in Q4, a product category with declining margins,
          one region that consistently outperforms, and a handful of outlier orders.
        </p>

        <ExpertNote>
          <p className="font-semibold">💡 Prefer to Skip the Build and Get the Result?</p>
          <p>If you want a professional sales dashboard built for your actual business data, we can have it ready in 3–5 business days.
            Connect with us on <a href="https://www.linkedin.com/in/muneeb-zehel" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a> or{' '}
            <Link to="/contact" className="text-primary hover:underline">book a free consultation</Link> for custom enterprise solutions.
          </p>
        </ExpertNote>
      </section>

      <Separator className="my-10" />

      {/* Step 1: Importing and Cleaning */}
      <section id="importing-cleaning">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 1: Importing and Cleaning Your Sales Data
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Open Power BI Desktop and click <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Home &gt; Get Data &gt; Text/CSV</code>.
          Navigate to the sample CSV file you downloaded. Power BI will show a preview of your data. Do not click Load yet.
          Instead, click <strong>Transform Data</strong>. This opens the Power Query Editor, which is where all data cleaning happens.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Critical Cleaning Steps</h3>
        <p className="text-foreground/90 leading-relaxed">
          <strong>First</strong>, verify your data types. Power Query auto-detects types, but it often gets dates wrong, especially if your
          system locale differs from the data format. Click on the OrderDate column header, then in the ribbon set it to Date type.
          Do the same for ShipDate. Set Revenue, Cost, and Profit to Decimal Number. Set Quantity to Whole Number.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          <strong>Second</strong>, check for nulls and errors. Click the dropdown arrow on each key column and look for (null) or (error)
          entries. For this dataset, you should find approximately 15 null values in the Discount column. Replace these with 0 by
          right-clicking the column header, selecting Replace Values, and entering null as the value to find and 0 as the replacement.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          <strong>Third</strong>, create a calculated column for Net Revenue. Go to{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Add Column &gt; Custom Column</code> and enter the following M formula:
        </p>

        <CodeBlock language="Power Query M">{`// Power Query M: Net Revenue after discount
= [Revenue] * (1 - [Discount])`}</CodeBlock>

        <p className="text-foreground/90 leading-relaxed">
          Name this column <code className="bg-muted px-1.5 py-0.5 rounded text-sm">NetRevenue</code> and set its type to Decimal Number.
        </p>

        <ExpertNote>
          <p><strong>Expert Note:</strong> Always do your data type conversions and null handling in Power Query, never in DAX.
            Power Query runs once at refresh time and stores the clean result. DAX calculated columns run every time the model
            loads. This is not just a best practice. On large datasets, doing this wrong can add minutes to your load time.</p>
        </ExpertNote>

        <ChapterImage
          src={imgPowerQuery}
          alt="Power Query Editor showing sales data cleaning with Applied Steps panel highlighting Changed Type, Removed Errors, and Filtered Rows steps"
        />

        <PillarLink
          chapter="connecting-data"
          label="Chapter 3: Connecting to Data Sources in our Ultimate Power BI Guide"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 2: Star Schema */}
      <section id="star-schema">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 2: Building the Star Schema Data Model
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          With clean data loaded, you now need to structure it properly. A flat table with all columns works for Excel, but
          Power BI performs best with a <strong>Star Schema</strong>. We are going to split our single sales table into a fact table
          and three dimension tables.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Creating the Date Dimension</h3>
        <p className="text-foreground/90 leading-relaxed">
          In Power BI Desktop, go to <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Modeling &gt; New Table</code> and
          enter this DAX formula to create a comprehensive date table:
        </p>

        <CodeBlock language="DAX">{`DateTable =
VAR StartDate = MIN(Sales[OrderDate])
VAR EndDate = MAX(Sales[OrderDate])
RETURN
ADDCOLUMNS(
    CALENDAR(StartDate, EndDate),
    "Year", YEAR([Date]),
    "Quarter", "Q" & FORMAT([Date], "Q"),
    "Month Number", MONTH([Date]),
    "Month Name", FORMAT([Date], "MMMM"),
    "Month Short", FORMAT([Date], "MMM"),
    "Year-Month", FORMAT([Date], "YYYY-MM"),
    "Week Number", WEEKNUM([Date]),
    "Day Name", FORMAT([Date], "dddd"),
    "Is Weekend", IF(WEEKDAY([Date], 2) >= 6, TRUE(), FALSE())
)`}</CodeBlock>

        <p className="text-foreground/90 leading-relaxed">
          After creating the table, go to <strong>Table Tools</strong> and click <strong>Mark as Date Table</strong>, selecting the
          Date column. This is mandatory for time intelligence functions to work.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Creating the Product Dimension</h3>
        <CodeBlock language="DAX">{`DimProduct =
SUMMARIZE(
    Sales,
    Sales[ProductName],
    Sales[Category],
    "Avg Unit Price", AVERAGE(Sales[UnitPrice])
)`}</CodeBlock>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Creating the Region Dimension</h3>
        <CodeBlock language="DAX">{`DimRegion =
SUMMARIZE(
    Sales,
    Sales[Region],
    Sales[SalesRep]
)`}</CodeBlock>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Establishing Relationships</h3>
        <p className="text-foreground/90 leading-relaxed mb-3">
          Switch to the Model View. Delete any auto-detected relationships and manually build these:
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
              <TableRow>
                <TableCell className="font-medium">Sales → Date</TableCell>
                <TableCell>Sales[OrderDate]</TableCell>
                <TableCell>DateTable[Date]</TableCell>
                <TableCell>Single</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sales → Product</TableCell>
                <TableCell>Sales[ProductName]</TableCell>
                <TableCell>DimProduct[ProductName]</TableCell>
                <TableCell>Single</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sales → Region</TableCell>
                <TableCell>Sales[Region]</TableCell>
                <TableCell>DimRegion[Region]</TableCell>
                <TableCell>Single</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <ChapterImage
          src={imgStarSchema}
          alt="Power BI Model View showing star schema with Sales fact table connected to Date, Product, and Region dimensions"
        />

        <PillarLink
          chapter="data-modeling"
          label="Chapter 4: Data Modeling in our Ultimate Power BI Guide"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 3: DAX Measures */}
      <section id="dax-measures">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 3: Creating Core Sales Measures with DAX
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Now comes the engine of your dashboard. Measures are dynamic calculations that respond to whatever filters the user
          applies. Create a new table called <code className="bg-muted px-1.5 py-0.5 rounded text-sm">_Measures</code> (the underscore
          pushes it to the top of the field list) by going to{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Modeling &gt; New Table</code> and entering:{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">_Measures = ROW("placeholder", 1)</code>. Then create each measure
          inside this table.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Core Revenue Measures</h3>
        <CodeBlock language="DAX">{`Total Revenue = SUM(Sales[NetRevenue])

Total Cost = SUM(Sales[Cost])

Total Profit = [Total Revenue] - [Total Cost]

Profit Margin % = DIVIDE([Total Profit], [Total Revenue], 0)

Total Orders = DISTINCTCOUNT(Sales[OrderID])

Average Order Value = DIVIDE([Total Revenue], [Total Orders], 0)

Total Quantity = SUM(Sales[Quantity])`}</CodeBlock>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Time Intelligence Measures</h3>
        <CodeBlock language="DAX">{`Revenue LY =
    CALCULATE([Total Revenue], SAMEPERIODLASTYEAR(DateTable[Date]))

Revenue YoY Growth % =
    VAR Current = [Total Revenue]
    VAR Previous = [Revenue LY]
    RETURN DIVIDE(Current - Previous, Previous, 0)

Revenue MTD = TOTALMTD([Total Revenue], DateTable[Date])

Revenue YTD = TOTALYTD([Total Revenue], DateTable[Date])

Revenue QTD = TOTALQTD([Total Revenue], DateTable[Date])

Revenue Rolling 3M =
    CALCULATE(
        [Total Revenue],
        DATESINPERIOD(DateTable[Date], MAX(DateTable[Date]), -3, MONTH)
    )`}</CodeBlock>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Ranking & Comparison</h3>
        <CodeBlock language="DAX">{`Product Rank =
    RANKX(
        ALL(DimProduct[ProductName]),
        [Total Revenue],
        ,
        DESC,
        DENSE
    )

Category % of Total =
    DIVIDE(
        [Total Revenue],
        CALCULATE([Total Revenue], ALL(DimProduct[Category])),
        0
    )

Region % of Total =
    DIVIDE(
        [Total Revenue],
        CALCULATE([Total Revenue], ALL(DimRegion[Region])),
        0
    )`}</CodeBlock>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Conditional Formatting Helpers</h3>
        <CodeBlock language="DAX">{`YoY Color = IF([Revenue YoY Growth %] >= 0, "#00C853", "#FF1744")

Margin Color =
    SWITCH(
        TRUE(),
        [Profit Margin %] >= 0.3, "#00C853",
        [Profit Margin %] >= 0.15, "#FFC107",
        "#FF1744"
    )

// Formatted YoY Label for Card subtitle
Revenue YoY Label =
    VAR Growth = [Revenue YoY Growth %]
    VAR Arrow = IF(Growth >= 0, "▲", "▼")
    RETURN Arrow & " " & FORMAT(ABS(Growth), "0.0%") & " vs Last Year"`}</CodeBlock>

        <ProTip>
          <p><strong>Pro Tip:</strong> Notice how every division uses <code className="bg-muted px-1 py-0.5 rounded text-xs">DIVIDE()</code> instead
            of the <code className="bg-muted px-1 py-0.5 rounded text-xs">/</code> operator. Also notice how complex measures like YoY Growth
            use <code className="bg-muted px-1 py-0.5 rounded text-xs">VAR</code> to store intermediate results. VARs are evaluated once and
            cached, so if you reference the same calculation multiple times in a formula, VARs dramatically improve performance.</p>
        </ProTip>
      </section>

      <Separator className="my-10" />

      {/* Step 4: KPI Header */}
      <section id="kpi-header">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 4: Designing the KPI Header Row
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          The first thing any executive looks at is the top row of KPI cards. These must answer the question
          "How are we doing?" in under two seconds. We are going to build four cards: Total Revenue, Total Orders,
          Profit Margin, and Average Order Value.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Building Each Card</h3>
        <p className="text-foreground/90 leading-relaxed">
          Select the Card visual from the Visualizations pane. Drag your <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Total Revenue</code> measure
          into the Fields well. Resize the card to about one quarter of the page width. In the Format pane, set the display
          units to Millions (if applicable), set the font size to 28pt for the value, and add a title "Total Revenue" in 12pt.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          For the YoY comparison subtitle, use the "New Card" visual (available in recent Power BI updates) which supports
          reference labels. Repeat this process for Total Orders, Profit Margin %, and Average Order Value. Align all four
          cards in a perfectly even row using{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Format &gt; Align &gt; Distribute Horizontally</code>.
        </p>

        <ExpertNote>
          <p><strong>Expert Note:</strong> Resist the urge to add more than 4–6 KPI cards. Each additional card dilutes the impact
            of the others. If stakeholders want to see 15 metrics at a glance, that is a sign the dashboard needs multiple pages,
            not more cards on one page.</p>
        </ExpertNote>

        <ChapterImage
          src={imgKpiCards}
          alt="Four KPI cards showing Total Revenue, Total Orders, Profit Margin, and Average Order Value with year-over-year comparisons"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 5: Revenue Trend Line */}
      <section id="revenue-trend">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 5: Building the Revenue Trend Line Chart
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Below the KPI row, the most important visual is the revenue trend. This answers the question "Are we growing
          or shrinking?" at a glance. A line chart is the correct choice here because it shows continuity over time.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Configuration</h3>
        <p className="text-foreground/90 leading-relaxed">
          Select the Line Chart visual. Set the X-axis to <code className="bg-muted px-1.5 py-0.5 rounded text-sm">DateTable[Year-Month]</code>.
          Set the Y-axis to <code className="bg-muted px-1.5 py-0.5 rounded text-sm">[Total Revenue]</code>. Optionally, add a second line by
          dragging <code className="bg-muted px-1.5 py-0.5 rounded text-sm">[Revenue LY]</code> to the Y-axis as well. This creates an instant
          current-vs-previous-year comparison.
        </p>

        <CodeBlock language="DAX">{`// Optional: Revenue with Moving Average overlay
Revenue 3M Avg =
    AVERAGEX(
        DATESINPERIOD(DateTable[Date], MAX(DateTable[Date]), -3, MONTH),
        CALCULATE([Total Revenue])
    )`}</CodeBlock>

        <p className="text-foreground/90 leading-relaxed">
          Add this as a third line to smooth out monthly volatility and reveal the underlying trend. Format it as a
          dashed line with reduced opacity.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Formatting Best Practices</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
          <li>Remove the chart legend if you only have one series (it wastes space).</li>
          <li>If you have multiple series, move the legend to the top of the chart.</li>
          <li>Remove gridlines on the X-axis.</li>
          <li>Set the Y-axis to start at zero to avoid misleading scale distortion.</li>
          <li>Add data labels only to the last point on each line, not every point.</li>
        </ul>

        <ChapterImage
          src={imgRevenueTrend}
          alt="Power BI line chart showing monthly revenue trend with year-over-year comparison and 3-month moving average"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 6: Category & Regional */}
      <section id="category-regional">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 6: Adding Category and Regional Breakdowns
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Trend tells you the trajectory. Breakdowns tell you the <em>why</em>. You need at least two breakdown visuals:
          one by product category (what are we selling?) and one by region (where are we selling it?).
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Category Breakdown: Horizontal Bar Chart</h3>
        <p className="text-foreground/90 leading-relaxed">
          Use a Clustered Bar Chart (horizontal bars). Set the Y-axis to{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">DimProduct[Category]</code> and the X-axis to{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">[Total Revenue]</code>. Sort by Total Revenue descending.
          Add conditional formatting with a gradient from light blue to dark blue for in-bar data visualization.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Regional Breakdown: Donut Chart</h3>
        <p className="text-foreground/90 leading-relaxed">
          For regional breakdown with 4 regions, a Donut Chart works well. Set the Legend to{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">DimRegion[Region]</code> and the Values to{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">[Total Revenue]</code>. Alternatively, use a Treemap
          if you want to add a size dimension (Revenue) and a color dimension (Profit Margin).
        </p>

        <ChapterImage
          src={imgCategoryRegion}
          alt="Power BI category bar chart and regional donut chart showing sales breakdown by product and geography"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 7: Top Products Table */}
      <section id="top-products">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 7: Creating the Top Products Table
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          At the bottom of the dashboard, add a detail table for users who want to see the specific numbers. Use the
          Table or Matrix visual. Add these columns: ProductName, Category, Total Revenue, Total Quantity, Profit Margin %,
          Product Rank, and Revenue YoY Growth %.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Conditional Formatting Rules</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Column</TableHead>
                <TableHead>Formatting Rule</TableHead>
                <TableHead>Colors</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Profit Margin %</TableCell>
                <TableCell>Background color scale</TableCell>
                <TableCell>Red (&lt;15%) → Yellow (15-30%) → Green (&gt;30%)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">YoY Growth %</TableCell>
                <TableCell>Font color by sign</TableCell>
                <TableCell>Green for positive, Red for negative</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Product Rank</TableCell>
                <TableCell>Data bars</TableCell>
                <TableCell>Subtle gray bars, descending</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Total Revenue</TableCell>
                <TableCell>Bold + currency format</TableCell>
                <TableCell>$#,##0 with thousands separator</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-foreground/90 leading-relaxed mt-4">
          Set the table to show the top 10 products by default using a TopN filter on Product Rank.
        </p>
      </section>

      <Separator className="my-10" />

      {/* Step 8: Slicers */}
      <section id="slicers-interactivity">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 8: Adding Slicers and Interactivity
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Slicers transform a static report into an exploration tool. We need three slicers: a date range slicer,
          a region slicer, and a category slicer.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Date Range Slicer</h3>
        <p className="text-foreground/90 leading-relaxed">
          Add a Slicer visual. Drag <code className="bg-muted px-1.5 py-0.5 rounded text-sm">DateTable[Date]</code> into the Field well.
          In the Format pane, switch the slicer style to "Between" (range slider). Position this slicer prominently at
          the top of the page, next to or just below the KPI cards.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Region and Category Slicers</h3>
        <p className="text-foreground/90 leading-relaxed">
          Add two more slicers for <code className="bg-muted px-1.5 py-0.5 rounded text-sm">DimRegion[Region]</code> and{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">DimProduct[Category]</code>. Set these to "List" style with
          multi-select enabled (hold Ctrl to select multiple).
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Edit Interactions</h3>
        <p className="text-foreground/90 leading-relaxed mb-3">
          This is a step most beginners skip. Go to{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Format &gt; Edit Interactions</code> and configure:
        </p>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source Visual</TableHead>
                <TableHead>Target Visual</TableHead>
                <TableHead>Interaction Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Category Bar Chart</TableCell>
                <TableCell>KPI Cards</TableCell>
                <TableCell>Filter (not Highlight)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Regional Donut</TableCell>
                <TableCell>Revenue Trend Line</TableCell>
                <TableCell>Filter</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Products Table</TableCell>
                <TableCell>KPI Cards</TableCell>
                <TableCell>None (clicking a row should not change KPIs)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Date Slicer</TableCell>
                <TableCell>All Visuals</TableCell>
                <TableCell>Filter (default, keep this)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <ProTip>
          <p><strong>Pro Tip:</strong> Add a 'Clear All Filters' button. Go to{' '}
            <code className="bg-muted px-1 py-0.5 rounded text-xs">Insert &gt; Buttons &gt; Reset</code>. Place it near your slicers.
            Users constantly get confused when they forget they have filtered the page. A visible reset button saves support tickets.</p>
        </ProTip>
      </section>

      <Separator className="my-10" />

      {/* Step 9: Drill-Through */}
      <section id="drill-through">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 9: Building a Drill-Through Detail Page
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Your main dashboard page gives the overview. But when a manager sees that Electronics revenue dropped 15% YoY,
          they want to dig in. Instead of cramming that detail onto the main page, build a <strong>Drill-Through</strong> page.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Setting Up the Detail Page</h3>
        <p className="text-foreground/90 leading-relaxed">
          Create a new report page and name it "Product Detail." In the Visualizations pane, drag{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">DimProduct[ProductName]</code> into the Drill-Through filter well.
          This tells Power BI that this page is accessible by right-clicking any product in any visual on any other page.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Detail Page Layout</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Visual</TableHead>
                <TableHead>Content</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Header</TableCell>
                <TableCell>Product name (from drill-through context) + Category</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">KPI Cards</TableCell>
                <TableCell>Product-specific Revenue, Margin %, YoY Growth, Avg Order Value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Line Chart</TableCell>
                <TableCell>Monthly revenue trend for this specific product (current vs last year)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bar Chart</TableCell>
                <TableCell>Revenue by region for this product (where is it selling best?)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Table</TableCell>
                <TableCell>Individual order details: Date, Customer, Quantity, Revenue, Discount</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-foreground/90 leading-relaxed mt-4">
          Power BI automatically adds a back arrow button on the drill-through page. When the user right-clicks a product
          on the main page and selects "Drill through &gt; Product Detail," they land on this focused page with all visuals
          filtered to that specific product.
        </p>

        <ChapterImage
          src={imgDrillThrough}
          alt="Power BI drill-through detail page showing focused product analysis for Wireless Headphones with KPIs, trend, regional breakdown, and order history"
        />

        <PillarLink
          chapter="interactive-reports"
          label="Chapter 7: Building Interactive Reports in our Ultimate Power BI Guide"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 10: Color Theme */}
      <section id="color-theme">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 10: Applying a Professional Color Theme
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Nothing screams "amateur" louder than the default Power BI color palette. A custom theme ensures brand consistency
          and visual polish. Power BI themes are JSON files that define colors, fonts, and visual defaults.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">The ElitePick Sales Theme</h3>
        <p className="text-foreground/90 leading-relaxed mb-3">
          Save the following as <code className="bg-muted px-1.5 py-0.5 rounded text-sm">sales-theme.json</code> and apply it via{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">View &gt; Themes &gt; Browse for Themes</code>:
        </p>

        <CodeBlock language="JSON">{`{
  "name": "ElitePick Sales Dashboard",
  "dataColors": [
    "#1A73E8", "#00C853", "#FFC107",
    "#FF6D00", "#7C4DFF", "#00BCD4",
    "#FF1744", "#78909C"
  ],
  "background": "#F5F5F5",
  "foreground": "#1A1A2E",
  "tableAccent": "#1A73E8"
}`}</CodeBlock>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Color Assignment Strategy</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Primary metrics</TableCell>
                <TableCell><Badge variant="secondary" className="text-xs">#1A73E8 (Blue)</Badge></TableCell>
                <TableCell>Revenue, Orders, primary series</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Positive indicators</TableCell>
                <TableCell><Badge variant="secondary" className="text-xs">#00C853 (Green)</Badge></TableCell>
                <TableCell>Growth, above target, profit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Warning indicators</TableCell>
                <TableCell><Badge variant="secondary" className="text-xs">#FFC107 (Amber)</Badge></TableCell>
                <TableCell>Below target, needs attention</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Negative indicators</TableCell>
                <TableCell><Badge variant="secondary" className="text-xs">#FF1744 (Red)</Badge></TableCell>
                <TableCell>Decline, loss, critical alerts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Secondary/context</TableCell>
                <TableCell><Badge variant="secondary" className="text-xs">#78909C (Gray)</Badge></TableCell>
                <TableCell>Previous year, benchmarks, labels</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Step 11: Publishing */}
      <section id="publishing">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 11: Publishing and Sharing Your Dashboard
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Your dashboard is built. Now get it into the hands of stakeholders. Click{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Home &gt; Publish</code>. Select your workspace
          (create one called "Sales Analytics" if it does not exist). Power BI uploads the file to app.powerbi.com.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Configuring Scheduled Refresh</h3>
        <p className="text-foreground/90 leading-relaxed">
          In the Power BI Service, navigate to your dataset settings. Under Scheduled Refresh, enable it and set the
          frequency. For a sales dashboard, I recommend refreshing <strong>twice daily</strong>: once at 7 AM before the
          workday begins, and once at 6 PM to capture the full day's data.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Sharing Options</h3>
        <p className="text-foreground/90 leading-relaxed">
          For quick sharing, click the Share button and enter email addresses. For broader distribution, create a
          <strong> Power BI App</strong> from your workspace, which gives you a polished, read-only experience that non-technical
          users will appreciate. For embedding in your company's intranet or Teams channel, use the{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Embed &gt; SharePoint Online</code> or{' '}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">Embed &gt; Microsoft Teams</code> options.
        </p>

        <PillarLink
          chapter="publishing"
          label="Chapter 8: Publishing and Sharing in our Ultimate Power BI Guide"
        />
      </section>

      <Separator className="my-10" />

      {/* Step 12: Final Result */}
      <section id="final-result">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Step 12: The Final Result — Complete Dashboard Walkthrough
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Here is the finished product. A two-page interactive sales dashboard that transforms 10,000+ rows of raw
          transaction data into an executive-ready analytical tool. Let me walk you through how it all comes together.
        </p>

        <ChapterImage
          src={imgFinalResult}
          alt="Complete Power BI sales dashboard showing KPIs, revenue trend, category breakdown, regional donut, and top products table with full interactivity"
        />

        <p className="text-foreground/90 leading-relaxed mt-4">
          <strong>Page 1, the overview</strong>, answers three questions instantly: How much revenue are we generating (KPI cards),
          is the trend positive or negative (line chart), and where is the revenue coming from (category and region breakdowns).
          Any executive can glance at this page and know the state of the business in under five seconds.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          <strong>Page 2, the drill-through detail</strong>, answers the follow-up question: <em>Why?</em> When the VP notices
          Electronics declined, they right-click, drill through, and see exactly which products underperformed, in which regions,
          and during which months. No more waiting for the analyst to pull a custom report.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          This is the exact structure I use when building sales dashboards for clients. The data model, the measures,
          the visual hierarchy, and the interactivity pattern are all production-tested on real business data.
        </p>
      </section>

      <Separator className="my-10" />

      {/* Advanced Implementation - Upsell Bridge */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Taking It Further: What This Tutorial Does Not Cover
        </h2>
        <p className="text-foreground/90 leading-relaxed mb-4">
          This tutorial gives you a fully functional sales dashboard. But real-world deployments often require additional
          layers that go beyond what any tutorial can address in a single post:
        </p>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Advanced Requirement</TableHead>
                <TableHead>Why It Matters</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Row-Level Security</TableCell>
                <TableCell>Sales reps should only see their own pipeline. Regional managers see their region only.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Live Database Connection</TableCell>
                <TableCell>CSV works for tutorials but production dashboards need direct SQL or API connections.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Incremental Refresh</TableCell>
                <TableCell>With millions of rows, full refresh takes too long. Incremental refresh cuts it to minutes.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Custom Branding & Embedded</TableCell>
                <TableCell>White-label dashboards embedded into your product or client portal.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Automated ETL Pipeline</TableCell>
                <TableCell>Python or n8n workflows that clean and transform data before it reaches Power BI.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <CtaBanner variant="consultation" />
        <CtaBanner variant="linkedin" />
      </section>

      <Separator className="my-10" />

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Conclusion</h2>
        <p className="text-foreground/90 leading-relaxed">
          You have just built a complete, interactive sales dashboard in Power BI from scratch. Not just any dashboard,
          but one structured with a proper Star Schema, powered by a comprehensive set of DAX measures, designed with
          visual communication principles, and enhanced with slicers, cross-filtering, and drill-through interactivity.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          The techniques you learned here — from creating a custom date table to using VAR in DAX to configuring edit
          interactions — are the same techniques I use in every client project. The difference between an amateur dashboard
          and a professional one is not in the visuals. It is in the invisible decisions: the data model structure,
          the measure logic, and the interaction design.
        </p>

        <p className="text-foreground/90 leading-relaxed mt-4">
          Download the completed PBIX file, swap in your own data, and you have a production-ready sales reporting tool.
          Or use this as a portfolio piece to demonstrate your Power BI skills.
        </p>

        {/* Lead Magnet */}
        <div className="my-8 rounded-xl bg-gradient-to-r from-primary/10 to-chart-2/10 border border-primary/20 p-6 md:p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            🎁 Free Download: Completed Sales Dashboard PBIX File
          </h3>
          <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-sm">
            Get the finished PBIX file with all measures, visuals, and formatting applied.
            Also includes the sample dataset used in this tutorial. Just swap in your own data and you are ready to go.
          </p>
          <Button asChild>
            <Link to="/contact">
              Download Free PBIX File <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Continue Journey */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">🔗 Continue Your Power BI Journey</h3>
          <p className="text-sm text-muted-foreground mb-3">
            This tutorial is part of our comprehensive Power BI series. Here are your recommended next reads:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/blog/power-bi/ultimate-guide-custom-dashboards" className="text-primary hover:underline font-medium">
                📘 Pillar: The Ultimate Guide to Custom Power BI Dashboards
              </Link>
            </li>
            <li>
              <span className="text-muted-foreground">
                📊 Cluster #2: Mastering DAX Time Intelligence: YoY, MTD, YTD Patterns <Badge variant="outline" className="ml-2 text-xs">Coming Soon</Badge>
              </span>
            </li>
            <li>
              <span className="text-muted-foreground">
                🔌 Cluster #3: Connecting MySQL to Power BI for Real-Time Reporting <Badge variant="outline" className="ml-2 text-xs">Coming Soon</Badge>
              </span>
            </li>
            <li>
              <span className="text-muted-foreground">
                📅 Cluster #5: How to Create a Custom Date Table in Power BI <Badge variant="outline" className="ml-2 text-xs">Coming Soon</Badge>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SalesDashboardContent;
