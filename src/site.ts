/**
 * Every fact this site states about its owner, in one place.
 *
 * The rule for this file: nothing goes in that a reader cannot check. Each
 * certification carries the issuer's own verification URL. The client figure is
 * the Fiverr profile's public aggregate, linked so anyone can confirm it. There
 * are no ratings, project counts, accuracy figures, time savings or guarantees,
 * because none of those were ever measured here.
 */

export const SITE = {
  brand: "ElitePick AI",
  owner: "Muneeb Shafiq",
  title: "AI Engineer",
  employer: "Symufolk",
  location: "Lahore, Pakistan",
  timezone: "UTC+5",
  email: "muneebzehel@gmail.com",
  portfolio: "https://www.muneebshafiq.me",
  github: "https://github.com/munib123",
  linkedin: "https://www.linkedin.com/in/muneebshafiq-ai/",
  fiverr: "https://www.fiverr.com/muneebisfast",
  resume: "/Muneeb_Shafiq_Resume.pdf",
  /** His own commitment, not a service-level promise. */
  replyTime: "I reply within one business day.",
} as const;

/**
 * The public Fiverr aggregate, and only the aggregate. The individual reviews
 * are real but they belong to the clients who wrote them, so the site states
 * the summary and links to the profile where it can be verified.
 */
export const CLIENT_PROOF = {
  clients: 8,
  countries: 5,
  rating: "4.9/5",
  href: SITE.fiverr,
} as const;

export type Certification = {
  title: string;
  issuer: string;
  /** The issuer's own verification page. Null where the issuer never issued one. */
  verifyUrl: string | null;
};

/** Ten real certifications. Nine link to the issuer's verification page. */
export const CERTIFICATIONS: Certification[] = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI and Stanford University via Coursera",
    verifyUrl: "https://coursera.org/verify/DC81HIYAW44V",
  },
  {
    title: "Linear Algebra for Machine Learning and Data Science",
    issuer: "DeepLearning.AI via Coursera",
    verifyUrl: "https://coursera.org/verify/FNPGZ6ROSMM6",
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    verifyUrl: "https://www.hackerrank.com/certificates/99b02fd3d6aa",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    verifyUrl: null,
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    verifyUrl: "https://www.hackerrank.com/certificates/f41e94bf3be1",
  },
  {
    title: "Harnessing the Power of Data with Power BI",
    issuer: "Microsoft via Coursera",
    verifyUrl: "https://coursera.org/verify/21XC6JL9KW9K",
  },
  {
    title: "Extract, Transform and Load Data in Power BI",
    issuer: "Microsoft via Coursera",
    verifyUrl: "https://coursera.org/verify/4UN4U8USQH3U",
  },
  {
    title: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Microsoft via Coursera",
    verifyUrl: "https://coursera.org/verify/4YIQULOVG3DB",
  },
  {
    title: "Tools for Data Science",
    issuer: "IBM via Coursera",
    verifyUrl: "https://coursera.org/verify/4NFBNTKYA25Q",
  },
  {
    title: "What is Data Science?",
    issuer: "IBM via Coursera",
    verifyUrl: "https://coursera.org/verify/ATRVMQZ2U3SX",
  },
];

/**
 * What the practice actually takes on. Described as kinds of work rather than
 * priced packages, because there are no fixed prices, turnarounds or tiers here.
 */
export const WORK = [
  {
    heading: "Dashboards and reporting",
    body: "Power BI and the data plumbing behind it: cleaning the source, modelling it, and building the report someone actually opens on a Monday morning. This is most of what past clients have hired me for.",
  },
  {
    heading: "Retrieval and document systems",
    body: "Question answering grounded in your own documents, so the answer cites the source rather than inventing one. Retrieval, chunking and evaluation, not a wrapper around a chat box.",
  },
  {
    heading: "Automation and agent pipelines",
    body: "Python and n8n workflows, and the multi-agent pipelines I build in my day job: scoped permissions, human approval gates between phases, and an audit log of what ran.",
  },
] as const;
