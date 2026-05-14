interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  mobileDescription?: string;
  page: "svc" | "hiw" | "pr" | "ct";
}

export function PageHero({ eyebrow, title, description, mobileDescription, page }: PageHeroProps) {
  return (
    <section className={`section ${page}-hero`}>
      <div className={`container ${page}-hero-inner`}>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={`heroTitle ${page}-hero-title`}>{title}</h1>
        <p className={`muted ${page}-hero-sub`}>
          <span className="desktop-only">{description}</span>
          <span className="mobile-only">{mobileDescription || description}</span>
        </p>
      </div>
    </section>
  );
}
