import React, { ReactNode } from "react";

import { ROUTES } from "../constants/routes";
import { BuildABoty, MindSpeechInterface } from "../views/projects";

type Project = {
  name: string;
  date: string;
  description: string;
  github: string;
  to: string;
  content?: ReactNode;
};

export const PROJECTS: Project[] = [
  {
    name: "Mind Speech Interface",
    date: "2021 - 2022",
    description: "Brain controlled communication using SSVEPs and LLMs.",
    github: "https://github.com/WATOLINK/mind-speech-interface-ssvep/tree/main",
    to: "",
    content: <MindSpeechInterface />
  },
  {
    name: "Crypto Cupid",
    date: "2023",
    description: "A decentralized anonymous human to human dating platform",
    github: "https://github.com/IvanYu327/CryptoCupid",
    to: ""
  },
  {
    name: "Free SpACE",
    date: "2021",
    description: "Esports bingo app to pair with tournament livestreams.",
    github: "https://github.com/IvanYu327/Free-SpACE",
    to: ""
  },
  {
    name: "Study Goose",
    date: "2021",
    description: "Student aid Discord bot and homework helper.",
    github: "https://github.com/IvanYu327/Study-Goose",
    to: ""
  },
  {
    name: "Tabis",
    date: "2021",
    description: "Sleep cycle analysis app.",
    github: "https://github.com/LavanSumanan/nathacks",
    to: ""
  },
  {
    name: "TimeLine",
    date: "2021",
    description: "Live business wait-time indicator.",
    github: "https://github.com/Arcslogger/TimeLine",
    to: ""
  },
  {
    name: "Spog",
    date: "2021",
    description: "Functional Lego replica of Boston Dynamic's Spot.",
    github: "https://github.com/IvanYu327/spog-the-dog",
    to: ""
  },
  {
    name: "Build a Bot-y",
    date: "2021",
    description: "Fitness planner Discord bot.",
    github: "https://github.com/IvanYu327/Build-a-Bot-y_EngHackQuests21",
    to: "",
    content: <BuildABoty />
  }
];

PROJECTS.forEach((entry) => {
  // Remove punctuation from entry.title
  const cleanedTitle = entry.name.replace(/[,:;'"!?]/g, "").toLowerCase();
  entry.to = ROUTES.WORK + "/" + cleanedTitle.replace(/ /g, "-");
});
