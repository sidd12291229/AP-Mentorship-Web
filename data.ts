import type {
  Subject,
  CoverField,
  LibraryBranch,
  EventItem,
  Mentor,
  Milestone,
  JoinPath,
  LedgerStat,
  FeedbackQuote,
  ContactLine,
  NavItem,
} from "./types";

export const navItems: NavItem[] = [
  { id: "subjects", label: "Subjects" },
  { id: "library", label: "Library" },
  { id: "events", label: "Events" },
  { id: "mentors", label: "Mentors" },
  { id: "about", label: "About" },
  { id: "join", label: "Join" },
  { id: "impact", label: "Impact" },
  { id: "contact", label: "Contact" },
];

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
  },
  {
    id: "chemistry",
    dept: "sci",
    tag: "[SCI]",
    name: "AP Chemistry",
    description:
      "Reaction-type breakdowns, stoichiometry drills, and a lab report template pulled from AMN's own workshop set.",
    channel: "#ap-chemistry",
  },
  {
    id: "physics",
    dept: "sci",
    tag: "[SCI]",
    name: "AP Physics 1 / 2 / C",
    description:
      "Separate tracks for algebra-based and calculus-based physics, with worked free-response sets sorted by unit.",
    channel: "#ap-physics",
  },
  {
    id: "calculus",
    dept: "math",
    tag: "[MATH]",
    name: "AP Calculus AB / BC",
    description:
      "A single problem set per unit, checked by a mentor, with the BC-only topics marked separately so AB students can skip them.",
    channel: "#ap-calculus",
  },
  {
    id: "literature",
    dept: "hum",
    tag: "[HUM]",
    name: "AP English Literature",
    description:
      "Annotated model essays for all three free-response types, plus a running list of texts past cohorts have written about.",
    channel: "#ap-lit",
  },
  {
    id: "ushistory",
    dept: "hum",
    tag: "[HUM]",
    name: "AP US History",
    description:
      "Period-by-period timelines cross-referenced to the DBQ and LEQ rubrics, with a mentor-graded practice essay each month.",
    channel: "#ap-ushistory",
  },
];

export const libraryTree: LibraryBranch[] = [
  {
    subject: "AP Physics 1",
    units: [
      {
        unit: "Unit 6 \u2014 Rotational Motion",
        resources: [
          "Workshop slides (PDF)",
          "Workshop recording (49 min)",
          "Practice free-response set, with mentor answer key",
        ],
      },
      {
        unit: "Unit 7 \u2014 Oscillations",
        resources: ["Workshop slides (PDF)", "Formula reference sheet"],
      },
    ],
  },
  {
    subject: "AP Calculus BC",
    units: [
      {
        unit: "Unit 10 \u2014 Infinite Sequences and Series",
        resources: [
          "Convergence test flowchart",
          "Practice problem set, with mentor answer key",
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
          "Annotated DBQ example, scored 6/6",
          "Key terms and figures list",
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
    subject: "AP US History",
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
    name: "Henry O.",
    subjects: "AP Physics, AP Biology, AP World History",
    background: "Scored 5 on all three",
    status: "Mentor",
  },
  {
    name: "Priya N.",
    subjects: "AP Chemistry, AP Biology",
    background: "Scored 5, 5. Second-year mentor.",
    status: "Mentor",
  },
  {
    name: "Marcus T.",
    subjects: "AP Calculus AB / BC",
    background: "Scored 5 on BC as a junior",
    status: "Mentor",
  },
  {
    name: "Dana K.",
    subjects: "AP English Literature",
    background: "Scored 5. Runs the essay review queue.",
    status: "Lead mentor",
  },
];

export const milestones: Milestone[] = [
  { year: "2023", text: "Three students start a study group for AP Physics 1." },
  { year: "2024", text: "The group opens a Discord server and adds AP Chemistry and Calculus." },
  { year: "2024", text: "First formal workshop schedule. AP Biology and AP US History added." },
  { year: "2025", text: "AP English Literature added. AMN reaches students at 12 schools." },
];

export const joinPaths: JoinPath[] = [
  {
    title: "Join as a student",
    description:
      "Free access to every subject channel, the resource library, and the workshop schedule.",
    ctaLabel: "Join on Discord",
    ctaHref: "https://discord.gg/replace-with-amn-invite",
    variant: "primary",
  },
  {
    title: "Become a mentor",
    description:
      "Teach a subject you've already taken. Mentors set their own hours and pick their own subjects.",
    ctaLabel: "Apply to mentor",
    ctaHref: "mailto:mentors@amn.example.org",
    variant: "ghost",
  },
  {
    title: "Bring AMN to my school",
    description: "Start a local chapter and connect your classmates to the wider network.",
    ctaLabel: "Start a chapter",
    ctaHref: "mailto:chapters@amn.example.org",
    variant: "ghost",
  },
  {
    title: "Partner with AMN",
    description: "For schools, teachers, and nonprofits interested in working with the network.",
    ctaLabel: "Get in touch",
    ctaHref: "mailto:partners@amn.example.org",
    variant: "ghost",
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

export const contactLines: ContactLine[] = [
  { label: "General contact", value: "hello@amn.example.org", href: "mailto:hello@amn.example.org" },
  { label: "Suggest a workshop topic", value: "workshops@amn.example.org", href: "mailto:workshops@amn.example.org" },
  { label: "Request a subject", value: "subjects@amn.example.org", href: "mailto:subjects@amn.example.org" },
  { label: "Report an issue", value: "issues@amn.example.org", href: "mailto:issues@amn.example.org" },
  { label: "Anonymous feedback", value: "Use the form", href: "#contact-form" },
];
