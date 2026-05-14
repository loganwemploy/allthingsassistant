interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  page: "svc" | "hiw" | "pr" | "ct";
}

export function PageHero({ eyebrow, title, description, page }: PageHeroProps) {
  return (
    <section className={`section ${page}-hero`}>
      <div className={`container ${page}-hero-inner`}>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={`heroTitle ${page}-hero-title`}>{title}</h1>
        <p className={`muted ${page}-hero-sub mobile-clamp-2`}>{description}</p>
      </div>
    </section>
  );
}
