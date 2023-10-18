import React, { ReactNode } from "react";

import { ROUTES } from "../constants/routes";
import { BMEtoCS, WebsiteDysmorphia, Blocks } from "../views/writing_content";

type Entry = {
  title: string;
  created: string;
  lastUpdated: string;
  to: string;
  content?: ReactNode;
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
    title: "Biomedical Engineering to Computer Science. Why?",
    created: "10-07-2023",
    lastUpdated: "10-17-2023",
    to: "",
    content: <BMEtoCS />
  },
  {
    title: "Website dysmorphia",
    created: "10-07-2023",
    lastUpdated: "10-17-2023",
    to: "",
    content: <WebsiteDysmorphia />
  },
  {
    title: "word of the day",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "Fast blocks",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: "",
    content: <Blocks />
  }
];

WRITING.forEach((entry) => {
  // Remove punctuation from entry.title
  const cleanedTitle = entry.title.replace(/[.,:;'"!?]/g, "").toLowerCase();
  entry.to = ROUTES.WRITING + "/" + cleanedTitle.replace(/ /g, "-");
});
