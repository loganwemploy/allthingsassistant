import data from "../../twchurch.json";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { TwChurchTable } from "./twchurch-table";
import styles from "./page.module.css";

type Company = Record<string, unknown>;

export const metadata = {
  title: "TW Church | Spreadsheet",
};

export default function TwChurchPage() {
  const companies = (data as { companies: Company[] }).companies ?? [];

  return (
    <main className="page">
      <SiteHeader />
      <section className={styles.shell} aria-label="TW Church spreadsheet">
        <div className={styles.container}>
          <header className={styles.header}>
            <div>
              <div className={styles.eyebrow}>TW Church</div>
              <h1 className={styles.title}>Company list</h1>
              <p className={styles.subtitle}>
                Filter, search, and page through the dataset. Citations are available as
                source links where provided.
              </p>
            </div>
          </header>

          <TwChurchTable companies={companies} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

