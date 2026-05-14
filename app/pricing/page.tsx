import Link from "next/link";
import { Check } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PageHero } from "../components/PageHero";

export const metadata = {
  title: "Pricing | All Things Assistant",
  description:
    "Flat monthly retainers from $300–$1,000. No surprises, no contracts. Pick the tier that fits your weekly task volume.",
};

const TIERS = [
  {
    title: "Starter",
    price: "$300",
    period: "/month",
    hours: "10 hours",
    features: ["Email management", "Calendar scheduling", "Document prep & data entry"],
  },
  {
    title: "Business",
    price: "$550",
    period: "/month",
    hours: "20 hours",
    features: ["All Starter services", "Travel arrangements & research", "Social media posting support"],
    featured: true,
  },
  {
    title: "Executive",
    price: "$1,000",
    period: "/month",
    hours: "40 hours",
    features: ["All Business services", "Project management support", "Invoicing & expense tracking"],
  },
  {
    title: "Custom",
    price: "Let's talk",
    period: "",
    hours: "Flexible",
    features: ["Mix & match services", "Special projects", "Seasonal or part-time"],
  },
];

const TIERS_DATA = TIERS as Array<(typeof TIERS)[number] & { featured?: true }>;

export default function PricingPage() {
  return (
    <main className="page">
      <SiteHeader />

      <PageHero
        page="pr"
        eyebrow="Pricing"
        title="Flat monthly retainer. No surprises."
        description="Pick a tier based on weekly task volume. All plans include one-week turnaround and unlimited revisions."
        mobileDescription="Pick a tier based on your volume."
      />

      <section className="pr-grid-section">
        <div className="container">
          <div className="pricingGrid">
            {TIERS_DATA.map((tier) => (
              <div
                key={tier.title}
                className={`pricingCard ${tier.featured ? "pricingCardFeatured" : ""} ${tier.title === "Custom" ? "pricingCardCustom" : ""}`}
              >
                {tier.featured && (
                  <span className="pricingPopularBadge">Most popular — best value</span>
                )}
                {tier.title === "Custom" ? (
                  <Link href="/contact" className="pricingCardCustomLink" aria-label="Contact us about a custom plan">
                    <div>
                      <div className="pricingCardHours">
                        {tier.hours}
                      </div>
                      <div className="pricingCardPrice">
                        {tier.price}
                      </div>
                    </div>
                    <ul className="pricingFeatureList">
                      {tier.features.map((f) => (
                        <li key={f} className="pricingFeatureItem">
                          <Check size={14} strokeWidth={2.5} className="pricingFeatureIcon" aria-hidden />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pricingPaypalLabel">
                      Let&apos;s build your plan →
                    </div>
                  </Link>
                ) : (<>
                  <div>
                    <div className={`pricingCardHours ${tier.featured ? "pricingCardHoursFeatured" : ""}`}>
                      {tier.hours}
                    </div>
                    <div className={`pricingCardPrice ${tier.featured ? "pricingCardPriceFeatured" : ""}`}>
                      {tier.price}
                      {tier.period && <span className="pricingCardPeriod">{tier.period}</span>}
                    </div>
                  </div>
                  <ul className="pricingFeatureList">
                    {tier.features.map((f) => (
                      <li key={f} className={`pricingFeatureItem ${tier.featured ? "pricingFeatureItemFeatured" : ""}`}>
                        <Check size={14} strokeWidth={2.5} className={`pricingFeatureIcon ${tier.featured ? "pricingFeatureIconFeatured" : ""}`} aria-hidden />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`pricingPaypalLabel ${tier.featured ? "pricingPaypalLabelFeatured" : ""}`}>
                    PayPal accepted
                  </div>
                </>)}
              </div>
            ))}
          </div>
          <p className="pr-helper">
            <span className="desktop-only">Not sure which tier fits?{" "}</span>
            <span className="mobile-only">Not sure?{" "}</span>
            <Link href="/#booking" className="pr-helper-link">Book a free Discovery Call →</Link>
          </p>
        </div>
      </section>

      <section className="pr-cta-section">
        <div className="container">
          <p className="eyebrow pr-cta-eyebrow">Next step</p>
          <h2 className="heroTitle pr-cta-title">Book a Discovery Call</h2>
          <p className="muted pr-cta-text">
            <span className="desktop-only">We&apos;ll review your workload, answer questions, and recommend the right tier.</span>
            <span className="mobile-only">We&apos;ll recommend the right tier.</span>
          </p>
          <div className="pr-cta-btns">
            <Link href="/#booking" className="btn btnPrimary">Book a Discovery Call</Link>
            <Link href="/services" className="btn pr-cta-btn-outline">View services</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
