/**
 * Sections that anticipate common objections to hiring a personal/virtual
 * assistant and reframe them with how Akilah addresses or eliminates the concern.
 */

const SECTIONS = [
  {
    id: "cost",
    objection: "It’s expensive to have a personal assistant",
    headline: "It pays for itself—in time and revenue.",
    body: "A personal assistant isn’t a luxury; it’s a leverage tool. When you stop spending 20+ hours a month on email, calendar, and follow-ups, you free that time for work that grows revenue. Akilah’s rates are flexible—retainer, project-based, or hourly—so you invest what fits your business. The goal is simple: you make more and keep more of your time.",
  },
  {
    id: "delegate",
    objection: "I don’t know what to delegate",
    headline: "We figure that out together—in one call.",
    body: "Not sure where to start? The discovery call is built for exactly that. We look at what’s eating your hours, what you procrastinate on, and what only you should be doing. Akilah has over 20 years of executive support; she’s seen every kind of workflow. You leave the call with a clear picture of what to hand off first—no guesswork.",
  },
  {
    id: "train",
    objection: "I don’t have time to train someone",
    headline: "Minimal training—she’s done this for two decades.",
    body: "Akilah doesn’t need to be taught the basics. She comes with systems, judgment, and experience from elite executive roles. The discovery call sets your preferences and priorities; from there, she aligns to how you work. Any process we document becomes repeatable, so “training” is mostly a one-time alignment, not an ongoing drain.",
  },
  {
    id: "trust",
    objection: "I’m not comfortable sharing calendars and sensitive info",
    headline: "Discretion and professionalism are non‑negotiable.",
    body: "Your calendar, clients, and communications are sensitive. Akilah has spent 20+ years handling confidential executive-level work. Clear boundaries, confidentiality, and reliability are standard—not extras. If you need an NDA or specific protocols, we put them in place from day one so you can delegate with confidence.",
  },
  {
    id: "control",
    objection: "I’m worried it won’t be done my way",
    headline: "Your standards and style drive how she works.",
    body: "The discovery call isn’t just about tasks—it’s about how you like things done. Communication preferences, tone, follow-through, and priorities are all on the table. We start with a defined scope and clear expectations so nothing’s left to chance. Akilah’s job is to operate as your right hand, not to reinvent your way of working.",
  },
  {
    id: "past",
    objection: "I’ve been let down by assistants before",
    headline: "Clear expectations and communication from the start.",
    body: "Bad experiences usually come from fuzzy expectations and poor fit. With All Things Assistant LLC, we set scope and outcomes in the discovery call so you and Akilah are aligned before any work begins. Her track record and MBA-backed professionalism mean you’re not taking a shot in the dark—you’re hiring someone who’s built a career on reliability and follow-through.",
  },
  {
    id: "enough-work",
    objection: "I’m not sure I have enough work for an assistant",
    headline: "You do—you just haven’t added it up.",
    body: "Inbox triage, scheduling, rescheduling, follow-ups, research, and travel can easily add up to 10+ hours a week. Many of those tasks feel “small” until you stop doing them. The discovery call surfaces where your time actually goes. And with flexible retainer or hourly options, you only pay for what you need—no need to invent busywork.",
  },
  {
    id: "employee",
    objection: "Wouldn’t an employee be better?",
    headline: "A VA gives you support without the overhead.",
    body: "An employee means payroll tax, benefits, equipment, and the pressure to keep someone busy full-time. A virtual assistant gives you executive-level support when you need it—no benefits, no office, no fixed 40 hours. For many leaders, a VA is the right step before or instead of a full-time hire. You get the leverage without the logistics.",
  },
];

export function ObjectionsSections() {
  return (
    <section id="objections" className="section" aria-label="Common concerns about hiring an assistant">
      <div className="container">
        <div className="sectionHead">
          <div className="eyebrow">Common concerns</div>
          <h2 className="h2 pinline">
            <span>We’ve heard them—here’s how we meet them.</span>
          </h2>
          <p className="muted" style={{ marginTop: 8, maxWidth: "42ch" }}>
            Anticipating your objections so you can decide with clarity. Every concern below is something Akilah and All Things Assistant LLC are built to address.
          </p>
        </div>

        <div className="grid twoCol" style={{ gap: 20 }}>
          {SECTIONS.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="card pad"
              style={{ scrollMarginTop: "1.5rem" }}
            >
              <div className="eyebrow" style={{ marginBottom: 6 }}>
                Objection: {s.objection}
              </div>
              <h3 className="h2 pinline" style={{ marginTop: 0, fontSize: "1.25rem" }}>
                <span>{s.headline}</span>
              </h3>
              <p className="muted" style={{ marginBottom: 0, lineHeight: 1.55 }}>
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
