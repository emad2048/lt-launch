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
