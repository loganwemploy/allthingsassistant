import data from "../../twchurch.json";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { TwChurchTable } from "./twchurch-table";
import {
  organizationToTableRow,
  type OrganizationJson,
} from "./organization-to-table-row";
import styles from "./page.module.css";

export const metadata = {
  title: "TW Church | Spreadsheet",
};

export default function TwChurchPage() {
  const raw = data as { organizations?: OrganizationJson[]; companies?: unknown[] };
  const organizations =
    raw.organizations ??
    ([] as OrganizationJson[]);

  const companies = organizations.map(organizationToTableRow);

  return (
    <main className="page">
      <SiteHeader />
      <section className={styles.shell} aria-label="TW Church spreadsheet">
        <div className={styles.container}>
          <header className={styles.header}>
            <div>
              <div className={styles.eyebrow}>TW Church</div>
              <h1 className={styles.title}>Organization list</h1>
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
