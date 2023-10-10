import { ROUTES } from "../constants/routes";

type Entry = {
  title: string;
  created: string;
  lastUpdated: string;
  to: string;
  content?: React.FC;
};

export const WRITING: Entry[] = [
  {
    title: "fish are friends, sometimes food",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "large tanks review",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "quotes that change how I viewed life",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "monkeys my girlfriend thinks I look like",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "Biomedical Engineering to Computer Science",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "colour blind design",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "word of the day",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  }
];

WRITING.forEach((entry) => {
  // Remove punctuation from entry.title
  const cleanedTitle = entry.title.replace(/[.,:;'"!?]/g, "").toLowerCase();
  entry.to = ROUTES.WRITING + "/" + cleanedTitle.replace(/ /g, "-");
});
