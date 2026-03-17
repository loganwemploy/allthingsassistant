import Firecrawl from "@mendable/firecrawl-js";

/**
 * Firecrawl client for scraping and crawling web pages.
 * Uses FIRECRAWL_API_KEY from env (e.g. .env.local).
 */
function getFirecrawlClient(): Firecrawl {
  const apiKey = process.env.FIRECRAWL_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Missing FIRECRAWL_API_KEY. Add it to .env.local (see .env.example)."
    );
  }
  return new Firecrawl({ apiKey });
}

/**
 * Scrape a single URL and return markdown (LLM-ready) or other formats.
 */
export async function scrapeUrl(
  url: string,
  options?: { formats?: ("markdown" | "html" | "rawHtml")[] }
) {
  const client = getFirecrawlClient();
  return client.scrape(url, {
    formats: options?.formats ?? ["markdown"],
  });
}

/**
 * Start a crawl job (returns job id; use getCrawlStatus to poll).
 */
export async function startCrawl(
  url: string,
  options?: { limit?: number; scrapeOptions?: { formats?: ("markdown" | "html")[] } }
) {
  const client = getFirecrawlClient();
  return client.startCrawl(url, {
    limit: options?.limit ?? 10,
    scrapeOptions: options?.scrapeOptions ?? { formats: ["markdown"] },
  });
}

/**
 * Get status and results of a crawl job.
 */
export async function getCrawlStatus(crawlId: string) {
  const client = getFirecrawlClient();
  return client.getCrawlStatus(crawlId);
}

export { getFirecrawlClient };
