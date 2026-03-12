import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

const HOTSPOTS = [
  {
    href: "https://www.minttalentgroup.com/bershy",
    label: "Open Bershy on MINT Talent Group",
    className: styles.bershy,
  },
  {
    href: "https://www.minttalentgroup.com/creature-canyon",
    label: "Open Creature Canyon on MINT Talent Group",
    className: styles.creatureCanyon,
  },
  {
    href: "https://www.minttalentgroup.com/chuck-prophet-and-his-cumbia-shoes",
    label: "Open Chuck Prophet and His Cumbia Shoes on MINT Talent Group",
    className: styles.chuckProphet,
  },
  {
    href: "https://www.minttalentgroup.com/victor-jones",
    label: "Open Victor Jones on MINT Talent Group",
    className: styles.victorJones,
  },
  {
    href: "https://www.minttalentgroup.com/cardinal-bloom",
    label: "Open Cardinal Bloom on MINT Talent Group",
    className: styles.cardinalBloom,
  },
  {
    href: "https://www.minttalentgroup.com/wilby",
    label: "Open Wilby on MINT Talent Group",
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
