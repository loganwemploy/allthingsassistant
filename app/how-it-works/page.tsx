import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PageHero } from "../components/PageHero";

export const metadata = {
  title: "How It Works | All Things Assistant",
  description:
    "From overwhelmed to in control — a simple 3-step process: Discovery, Alignment, and Execution. FAQ included.",
};

const FAQ = [
  { q: "Is an NDA available?", a: "Yes. We put NDAs or specific confidentiality protocols in place at the start if you need them." },
  { q: "What happens on the Discovery Call?", a: "We map what's eating your time—email backlog, scheduling gaps, pending follow-ups—and identify the first tasks to hand off." },
  { q: "What tools do you use?", a: "We work with what you already use: email, calendar, docs, and task management." },
  { q: "How fast is turnaround time?", a: "During onboarding we agree on response windows and what counts as urgent, so expectations stay clear." },
  { q: "Do you offer retainer vs hourly?", a: "Both. Retainers provide consistent weekly capacity; hourly works for seasonal or project needs." },
  { q: "How do we communicate?", a: "Email, scheduled check-ins, and a lightweight task channel—picked to match how you prefer to work." },
];

const STEPS = [
  { num: "01", title: "Discovery", label: "Step 1 of 3", desc: "Discovery and priority mapping around your current bottlenecks." },
  { num: "02", title: "Alignment", label: "Step 2 of 3", desc: "Workflow alignment, boundaries, and communication cadence." },
  { num: "03", title: "Execution", label: "Step 3 of 3", desc: "Ongoing execution with reliable follow-through and calm operational control." },
];

export default function HowItWorksPage() {
  return (
    <main className="page">
      <SiteHeader />

      <PageHero
        page="hiw"
        eyebrow="How it works"
        title="From overwhelmed to in control — without the learning curve"
        description="A straightforward process to get your time back. No onboarding chaos, no buzzwords."
        mobileDescription="A straightforward process."
      />

      <section className="hiw-process">
        <div className="container hiw-process-inner">
          <div className="hiw-process-grid">
            {STEPS.map((step) => (
              <div key={step.num} className="hiw-card">
                <span className="hiw-step-num">{step.num}</span>
                <div>
                  <span className="hiw-step-label">{step.label}</span>
                  <h2 className="hiw-step-title">{step.title}</h2>
                  <p className="hiw-step-desc">
                    <span className="desktop-only">{step.desc}</span>
                    <span className="mobile-only">{step.desc === "Discovery and priority mapping around your current bottlenecks." ? "Map your bottlenecks." : step.desc === "Workflow alignment, boundaries, and communication cadence." ? "Align workflows and cadence." : "Reliable execution, calm control."}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="hiw-cta">
            <Link href="/#booking" className="btn btnPrimary">Book a Discovery Call</Link>
            <span className="hiw-cta-link">
              <Link href="/pricing" className="navLink">View pricing →</Link>
            </span>
          </div>
        </div>
      </section>

      <section className="hiw-faq">
        <div className="container hiw-faq-inner">
          <p className="eyebrow hiw-faq-eyebrow">FAQ</p>
          <h2 className="heroTitle hiw-faq-title">Answers before we begin</h2>
          <div className="hiw-faq-grid">
            {FAQ.map((f) => (
              <details key={f.q} className="hiw-faq-item">
                <summary className="hiw-faq-q">{f.q}</summary>
                <p className="hiw-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
