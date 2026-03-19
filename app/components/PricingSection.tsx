import { Check } from "lucide-react";

const PAYPAL_LABEL = "PayPal";

type PricingCard = {
  title: string;
  price: string;
  subtitle?: string;
  bullets: string[];
  icon: "leaf" | "briefcase" | "rocket" | "star";
};

const cards: PricingCard[] = [
  {
    title: "Starter Package",
    price: "$300 / month",
    bullets: ["10 hours per month", "Email management", "Calendar scheduling", "Document prep & data entry"],
    icon: "leaf",
  },
  {
    title: "Business Builder Package",
    price: "$550 / month",
    bullets: [
      "20 hours per month",
      "All Starter services, plus;",
      "Travel arrangements & research",
      "Social media posting support",
    ],
    icon: "briefcase",
  },
  {
    title: "Executive Package",
    price: "$1,000 / month",
    bullets: [
      "40 hours per month",
      "All Business Builder services, plus:",
      "Project management support",
      "Invoicing & expense tracking",
    ],
    icon: "rocket",
  },
  {
    title: "Custom Package",
    price: "Contact for pricing",
    bullets: ["Flexible hours", "Mix & match services", "Designed for special projects or seasonal help"],
    icon: "star",
  },
];

function Icon({ name }: { name: PricingCard["icon"] }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none" } as const;
  const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

  switch (name) {
    case "leaf":
      return (
        <svg {...common} aria-hidden="true">
          <path
            {...stroke}
            d="M7 21c6.5 0 12-5.5 12-12V4h-5c-6.5 0-12 5.5-12 12v5h5Z"
          />
          <path {...stroke} d="M7 21c0-6 5-11 12-11" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
          <path {...stroke} d="M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
          <path {...stroke} d="M4 12h16" />
          <path {...stroke} d="M10 12v2h4v-2" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common} aria-hidden="true">
          <path {...stroke} d="M14 9l1-5 5 1-3 4" />
          <path {...stroke} d="M6 18c-1 0-2-1-2-2 0-6 6-12 12-12 1 0 2 1 2 2 0 6-6 12-12 12Z" />
          <path {...stroke} d="M6 18l-2 2" />
          <path {...stroke} d="M9 14l1 1" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} aria-hidden="true">
          <path
            {...stroke}
            d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.8L12 3Z"
          />
        </svg>
      );
  }
}

export function PricingSection() {
  return (
    <div className="grid fourCol pricingGrid">
      {cards.map((c) => (
        <div key={c.title} className="pricingCard card">
          <div className="pricingIcon" aria-hidden="true">
            <Icon name={c.icon} />
          </div>
          <div className="pricingTitle">{c.title}</div>
          <div className="pricingPrice">{c.price}</div>
          <ul className="pricingBullets">
            {c.bullets.map((b) => (
              <li key={b}>
                <Check className="pricingBulletIcon" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="pricingPayPal" aria-label="PayPal available">
            {PAYPAL_LABEL}
          </div>
        </div>
      ))}
    </div>
  );
}

