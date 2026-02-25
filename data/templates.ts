import type { Template } from "./types";

export const templates: Template[] = [
  {
    id: "initial-counseling",
    title: "Initial Counseling (Leader)",
    filename: "initial-counseling-leader.docx",
    category: "Counseling",
    description:
      "Standard format for initial leader counseling when a soldier joins your team or you assume responsibility. Use it within the first 30 days to set expectations and document goals.",
  },
  {
    id: "quarterly-counseling",
    title: "Quarterly Counseling",
    filename: "quarterly-counseling.docx",
    category: "Counseling",
    description:
      "Quarterly performance and professional development counseling. Use it to document progress, update objectives, and prepare for NCOER/OER support forms.",
  },
  {
    id: "corrective-action",
    title: "Corrective Action / Memorandum of Reprimand",
    filename: "corrective-action-mor.docx",
    category: "Counseling",
    description:
      "Template for formal corrective action or memorandum of reprimand. Use it when you need to document misconduct or substandard performance in writing.",
  },
  {
    id: "medical-readiness-checklist",
    title: "Medical Readiness Checklist",
    filename: "medical-readiness-checklist.pdf",
    category: "Readiness",
    description:
      "Checklist for tracking medical and dental readiness (PHA, immunizations, dental). Use it to brief your platoon’s readiness status or prep for SRP.",
  },
  {
    id: "deployment-readiness",
    title: "Deployment Readiness Checklist",
    filename: "deployment-readiness-checklist.pdf",
    category: "Readiness",
    description:
      "Pre-deployment checklist for personnel, admin, and family readiness. Use it when preparing a soldier or section for deployment or rotation.",
  },
  {
    id: "hand-receipt",
    title: "Hand Receipt (DA 2062)",
    filename: "hand-receipt-da2062.docx",
    category: "Property",
    description:
      "Hand receipt format for signing for property. Use it when assuming or transferring property accountability or sub-hand-receipting to subordinates.",
  },
  {
    id: "shortage-annex",
    title: "Shortage Annex (DA 2062)",
    filename: "shortage-annex-da2062.docx",
    category: "Property",
    description:
      "Annex to document shortages when signing for property. Use it to protect yourself and the unit when property is missing or damaged at turn-in.",
  },
  {
    id: "layout-inventory",
    title: "Layout / Inventory Worksheet",
    filename: "layout-inventory-worksheet.docx",
    category: "Property",
    description:
      "Worksheet for conducting layout or inventory of property. Use it during 100% inventories, change-of-responsibility layouts, or command supply discipline inspections.",
  },
  {
    id: "training-schedule-memo",
    title: "Training Schedule Memo",
    filename: "training-schedule-memo.docx",
    category: "Admin/Training",
    description:
      "Memo format for publishing weekly or monthly training schedules. Use it to formally announce training plans to the company or higher.",
  },
  {
    id: "memo-for-record",
    title: "Memo for Record (MFR)",
    filename: "memo-for-record.docx",
    category: "Admin/Training",
    description:
      "General memo for record template. Use it to document meetings, decisions, or events that need to be captured for the record but don’t require a formal memo.",
  },
];
