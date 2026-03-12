import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

const HOTSPOTS = [
  {
    href: "https://www.minttalentgroup.com/",
    label: "Open the MINT Talent Group website",
    className: styles.mintLogo,
  },
  {
    href: "https://www.google.com/maps/dir/?api=1&destination=615+Red+River+St,+Austin,+TX+78701",
    label: "Get directions to Swan Dive at 615 Red River St, Austin, TX 78701",
    className: styles.venue,
  },
  {
    href: "https://schedule.sxsw.com/events/MS64552",
    label: "Open Bershy on the SXSW schedule",
    className: styles.bershy,
  },
  {
    href: "https://schedule.sxsw.com/artists/2238745",
    label: "Open Creature Canyon on the SXSW schedule",
    className: styles.creatureCanyon,
  },
  {
    href: "https://schedule.sxsw.com/artists/2242559",
    label: "Open Chuck Prophet and His Cumbia Shoes on the SXSW schedule",
    className: styles.chuckProphet,
  },
  {
    href: "https://schedule.sxsw.com/artists/2238744",
    label: "Open Victor Jones on the SXSW schedule",
    className: styles.victorJones,
  },
  {
    href: "https://schedule.sxsw.com/artists/2238746",
    label: "Open Cardinal Bloom on the SXSW schedule",
    className: styles.cardinalBloom,
  },
  {
    href: "https://schedule.sxsw.com/artists/2240070",
    label: "Open Wilby on the SXSW schedule",
    className: styles.wilby,
  },
  {
    href: "https://www.sxsw.com/",
    label: "Open the SXSW website",
    className: styles.sxsw,
  },
] as const;

export const metadata: Metadata = {
  title: "MINT Showcase Flyer",
  description: "Interactive flyer for the MINT Talent Group showcase.",
};

export default function MintPage() {
  return (
    <main className={styles.page}>
      <div className={styles.flyerShell}>
        <Image
          src="/mint-showcase-flyer.png"
          alt="MINT Talent Group showcase flyer"
          width={832}
          height={1120}
          priority
          className={styles.flyer}
        />

        {HOTSPOTS.map((hotspot) => (
          <a
            key={hotspot.href}
            href={hotspot.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={hotspot.label}
            className={`${styles.hotspot} ${hotspot.className}`}
          >
            <span className={styles.srOnly}>{hotspot.label}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
