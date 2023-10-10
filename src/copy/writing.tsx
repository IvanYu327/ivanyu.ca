import React, { ReactNode } from "react";

import { ROUTES } from "../constants/routes";
import BMEtoCS from "../views/writing/BMEtoCS";
import Blocks from "../views/writing/Blocks";

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
    title: "Biomedical Engineering to Computer Science",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: "",
    content: <BMEtoCS />
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
  },
  {
    title: "18.943",
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
