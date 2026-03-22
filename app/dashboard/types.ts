export type TipVariant = "highlight" | "note" | "warning";

export type LeadDetail = { label: string; value: string; href?: string };

export type Lead = {
  id: string;
  company: string;
  jobTitle: string;
  location: string;
  details: LeadDetail[];
  tip: string;
  tipVariant?: TipVariant;
  jobUrl?: string | null;
};

export type WeekLeadsData = {
  weekLabel: string;
  pageTitle: string;
  pageSubtitle: string;
  leads: Lead[];
  friendNotesHeading: string;
  friendNotes: string[];
};
