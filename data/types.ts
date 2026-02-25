export interface ScheduleBlock {
  time: string;
  title: string;
  details?: string;
  category?: string;
}

export interface ScheduleDay {
  name: string;
  date?: string;
  blocks: ScheduleBlock[];
}

export interface ScheduleWeek {
  name?: string;
  days: ScheduleDay[];
}

export type Schedule = ScheduleWeek[];

export type QuickLinkCategory =
  | "Personnel/Admin"
  | "Training"
  | "Maintenance/Logistics"
  | "Finance";

export interface QuickLink {
  id: string;
  title: string;
  url: string;
  category: QuickLinkCategory;
  description: string;
}

export type TemplateCategory =
  | "Counseling"
  | "Readiness"
  | "Property"
  | "Admin/Training";

export interface Template {
  id: string;
  title: string;
  filename: string;
  category: TemplateCategory;
  description: string;
}
