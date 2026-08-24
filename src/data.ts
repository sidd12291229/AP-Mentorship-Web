import type {
  Subject,
  CoverField,
  LibraryBranch,
  EventItem,
  Mentor,
  LedgerStat,
  FeedbackQuote,
  ContactLine,
  NavItem,
} from "./types";

export const navItems: NavItem[] = [
  { path: "/about", label: "About" },
  { path: "/subjects", label: "Subjects" },
  { path: "/library", label: "Library" },
  { path: "/events", label: "Events" },
  { path: "/mentors", label: "Mentors" },
  { path: "/impact", label: "Impact" },
  { path: "/contact", label: "Contact Us" },
];

export const discordInviteCode = "replace-with-amn-invite";
export const web3FormsAccessKey = "33a4c03c-6a8a-48be-a22d-f5cd1f6a5e03";

export const coverFields: CoverField[] = [
  { label: "Program", value: "AP Mentor Network" },
  { label: "Status", value: "Student\u2011led, volunteer\u2011run" },
  { label: "Cost to join", value: "$0.00" },
  { label: "Members enrolled", value: "247", filled: true },
  { label: "Subjects covered", value: "6", filled: true },
  { label: "Workshops held", value: "31", filled: true },
  { label: "Schools reached", value: "12", filled: true },
];

export const subjects: Subject[] = [
  {
    id: "biology",
    dept: "sci",
    tag: "[SCI]",
    name: "AP Biology",
    description:
      "Unit-by-unit review notes matched to the current CED, plus a running glossary of terms that show up on free-response questions.",
    channel: "#ap-biology",
    link: "https://discord.gg/replace-with-amn-invite", // TODO: replace with the real ap-biology channel link
  },
  {
    id: "chemistry",
    dept: "sci",
    tag: "[SCI]",
    name: "AP Chemistry",
    description:
      "Reaction-type breakdowns, stoichiometry drills, and a lab report template pulled from AMN's own workshop set.",
    channel: "#ap-chemistry",
    link: "https://discord.gg/replace-with-amn-invite", // TODO: replace with the real ap-chemistry channel link
  },
  {
    id: "physics",
    dept: "sci",
    tag: "[SCI]",
    name: "AP Physics 1",
    description:
      "Separate tracks for algebra-based and calculus-based physics, with worked free-response sets sorted by unit.",
    channel: "#ap-physics",
    link: "https://discord.gg/replace-with-amn-invite", // TODO: replace with the real ap-physics channel link
  },
  {
    id: "calculus",
    dept: "math",
    tag: "[MATH]",
    name: "AP Calculus AB / BC",
    description:
      "A single problem set per unit, checked by a mentor, with the BC-only topics marked separately so AB students can skip them.",
    channel: "#ap-calculus",
    link: "https://discord.gg/replace-with-amn-invite", // TODO: replace with the real ap-calculus channel link
  },
  {
    id: "literature",
    dept: "hum",
    tag: "[HUM]",
    name: "AP English Literature",
    description:
      "Annotated model essays for all three free-response types, plus a running list of texts past cohorts have written about.",
    channel: "#ap-lit",
    link: "https://discord.gg/replace-with-amn-invite", // TODO: replace with the real ap-lit channel link
  },
  {
    id: "ushistory",
    dept: "hum",
    tag: "[HUM]",
    name: "AP US History",
    description:
      "Period-by-period timelines cross-referenced to the DBQ and LEQ rubrics, with a mentor-graded practice essay each month.",
    channel: "#ap-ushistory",
    link: "https://discord.gg/replace-with-amn-invite", // TODO: replace with the real ap-ushistory channel link
  },
];

export const libraryTree: LibraryBranch[] = [
  {
    subject: "AP Physics 1",
    units: [
      {
        unit: "Unit 1 \u2014 Kinematics and Dynamics",
        resources: [
          {
            title: "AP Physics 101: Kinematics and Dynamics Lesson 1 slides (PDF)",
            downloadUrl: "/downloads/ap-physics-1-kinematics-lesson-1.pdf",
          },
        ],
      },
      {
        unit: "Unit 6 \u2014 Rotational Motion",
        resources: [
          {
            title: "Workshop slides (PDF)",
            downloadUrl: "/downloads/ap-physics-1-unit-6-slides.pdf",
          },
          { title: "Workshop recording (49 min)" },
          { title: "Practice free-response set, with mentor answer key" },
        ],
      },
      {
        unit: "Unit 7 \u2014 Oscillations",
        resources: [
          { title: "Workshop slides (PDF)" },
          { title: "Formula reference sheet" },
        ],
      },
    ],
  },
  {
    subject: "AP Calculus BC",
    units: [
      {
        unit: "Unit 10 \u2014 Infinite Sequences and Series",
        resources: [
          { title: "Convergence test flowchart" },
          { title: "Practice problem set, with mentor answer key" },
        ],
      },
    ],
  },
  {
    subject: "AP US History",
    units: [
      {
        unit: "Period 6 \u2014 1865 to 1898",
        resources: [
          { title: "Annotated DBQ example, scored 6/6" },
          { title: "Key terms and figures list" },
        ],
      },
    ],
  },
];

export const events: EventItem[] = [
  {
    date: "Sep 3",
    time: "6:30 PM ET",
    subject: "AP Chemistry",
    topic: "Equilibrium review",
    presenter: "Priya N.",
  },
  {
    date: "Sep 10",
    time: "7:00 PM ET",
    subject: "AP Calculus BC",
    topic: "Series convergence tests",
    presenter: "Marcus T.",
  },
  {
    date: "Sep 17",
    time: "6:00 PM ET",
    subject: "AP History",
    topic: "DBQ workshop, live grading",
    presenter: "Henry O.",
  },
  {
    date: "Sep 24",
    time: "6:30 PM ET",
    subject: "AP Physics 1",
    topic: "Rotational motion review",
    presenter: "Henry O.",
  },
];

export const mentors: Mentor[] = [
  {
    name: "Henry Y.",
    subjects: "AP Biology, AP World History",
    background: "Scored 5s on AP World, AP Bio, AP Physics I",
    status: "Founder",
  },
  {
    name: "Raymon Z.",
    subjects: "AP Lit, AP Physics I",
    background: "Scored 5s on AP Lit, AP Physics I, AP Chem, AP Calc AB",
    status: "Mentor",
  },
  {
    name: "Jayden L.",
    subjects: "AP Macro, AP Stats",
    background: "Scored 5s on AP Macro, AP Physics I, AP Stats",
    status: "Mentor",
  },
  {
    name: "Howie X.",
    subjects: "AP Calc AB/BC",
    background: "Scored 5 on AP Calc AB, 4s on AP Chem and Physics I",
    status: "Mentor",
  },
  {
    name: "Ethan Y.",
    subjects: "AP Chem",
    background: "Scored Blank on AP Chem and AP Bio",
    status: "Mentor",
  },
];

export const ledgerStats: LedgerStat[] = [
  { label: "Members", value: "247" },
  { label: "Active mentors", value: "14" },
  { label: "Schools reached", value: "12" },
  { label: "Total workshop attendance", value: "1,180" },
  { label: "Events hosted", value: "31" },
  { label: "Resources filed in the library", value: "96" },
];

export const feedbackQuotes: FeedbackQuote[] = [
  {
    quote:
      "The rotational motion workshop covered the one topic my teacher rushed through in April. It made the FRQ section make sense.",
    source: "Anonymous, AP Physics 1 workshop attendee",
  },
  {
    quote:
      "I used the DBQ examples to see what a 6/6 actually looks like. That was more useful than any rubric handout.",
    source: "Anonymous, AP US History workshop attendee",
  },
  {
    quote:
      "Having a mentor check my essay before I turned it in to my teacher caught mistakes I'd been repeating all year.",
    source: "Anonymous, AP English Literature workshop attendee",
  },
];