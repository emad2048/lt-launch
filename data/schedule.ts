import type { Schedule } from "./types";

export const garrisonSchedule: Schedule = [
  {
    name: "Garrison Week 1",
    days: [
      {
        name: "Monday",
        blocks: [
          { time: "0530-0630", title: "PT", category: "PT" },
          { time: "0900-0930", title: "Company formation / accountability", category: "Admin" },
          { time: "0930-1200", title: "Platoon training", details: "Squad drills, weapons maintenance", category: "Training" },
          { time: "1200-1300", title: "Lunch", category: "Admin" },
          { time: "1300-1700", title: "Admin / appointments", details: "Counseling, paperwork, coordination", category: "Admin" },
        ],
      },
      {
        name: "Tuesday",
        blocks: [
          { time: "0530-0630", title: "PT", category: "PT" },
          { time: "0900-1200", title: "Range or field prep", details: "As scheduled", category: "Training" },
          { time: "1200-1300", title: "Lunch", category: "Admin" },
          { time: "1300-1630", title: "Staff sync / training meetings", category: "Admin" },
        ],
      },
      {
        name: "Wednesday",
        blocks: [
          { time: "0530-0630", title: "PT", category: "PT" },
          { time: "0900-1130", title: "Professional development", details: "Reading, online courses, or leader development", category: "Training" },
          { time: "1130-1200", title: "Company formation", category: "Admin" },
          { time: "1200-1300", title: "Lunch", category: "Admin" },
          { time: "1300-1700", title: "Platoon time / one-on-ones", category: "Admin" },
        ],
      },
      {
        name: "Thursday",
        blocks: [
          { time: "0530-0630", title: "PT", category: "PT" },
          { time: "0900-1200", title: "Training execution", details: "Range, field, or sims as METL-driven", category: "Training" },
          { time: "1200-1300", title: "Lunch", category: "Admin" },
          { time: "1300-1700", title: "Maintenance / supply / admin", category: "Admin" },
        ],
      },
      {
        name: "Friday",
        blocks: [
          { time: "0530-0630", title: "PT", category: "PT" },
          { time: "0900-1000", title: "Company formation / safety brief", category: "Admin" },
          { time: "1000-1200", title: "Training or make-up admin", category: "Training" },
          { time: "1200-1300", title: "Lunch", category: "Admin" },
          { time: "1300-1500", title: "Week in review / prep for next week", category: "Admin" },
        ],
      },
    ],
  },
];

export const fieldSchedule: Schedule = [
  {
    name: "Field Week 1",
    days: [
      {
        name: "Monday",
        blocks: [
          { time: "0500-0600", title: "Reveille / chow", category: "Admin" },
          { time: "0600-0630", title: "Movement to training area", category: "Movement" },
          { time: "0630-1200", title: "Field training exercise", details: "Squad/platoon STX or scenario", category: "Training" },
          { time: "1200-1300", title: "Chow in field", category: "Admin" },
          { time: "1300-1700", title: "Continue FTX or range", category: "Training" },
          { time: "1700-1830", title: "Return to barracks / maintenance", category: "Movement" },
        ],
      },
      {
        name: "Tuesday",
        blocks: [
          { time: "0500-0600", title: "Reveille / chow", category: "Admin" },
          { time: "0600-0730", title: "Movement to range / training site", category: "Movement" },
          { time: "0730-1200", title: "Weapons qualification or live fire", category: "Training" },
          { time: "1200-1300", title: "Chow", category: "Admin" },
          { time: "1300-1630", title: "Continue range or transition to next event", category: "Training" },
          { time: "1630-1800", title: "Return / weapons draw down", category: "Movement" },
        ],
      },
      {
        name: "Wednesday",
        blocks: [
          { time: "0500-0600", title: "Reveille / chow", category: "Admin" },
          { time: "0600-1200", title: "Field exercise (tactical lane or STX)", category: "Training" },
          { time: "1200-1300", title: "Chow in field", category: "Admin" },
          { time: "1300-1700", title: "Field exercise continued", category: "Training" },
          { time: "1700-1830", title: "Return / AAR prep", category: "Movement" },
        ],
      },
      {
        name: "Thursday",
        blocks: [
          { time: "0500-0600", title: "Reveille / chow", category: "Admin" },
          { time: "0600-1130", title: "Full mission profile or capstone event", details: "As planned by training NCO", category: "Training" },
          { time: "1130-1230", title: "Chow / recovery", category: "Admin" },
          { time: "1230-1500", title: "AAR / equipment turn-in", category: "Admin" },
          { time: "1500-1700", title: "Movement back to garrison", category: "Movement" },
        ],
      },
      {
        name: "Friday",
        blocks: [
          { time: "0600-0700", title: "Reveille / final cleanup (field site)", category: "Admin" },
          { time: "0700-1000", title: "Movement to garrison / draw down", category: "Movement" },
          { time: "1000-1200", title: "Equipment turn-in / maintenance", category: "Admin" },
          { time: "1200-1300", title: "Lunch", category: "Admin" },
          { time: "1300-1500", title: "Week in review / safety / next week prep", category: "Admin" },
        ],
      },
    ],
  },
];
