import { ROUTES } from "../constants/routes";

type Project = {
  name: string;
  date: string;
  description: string;
  github: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Mind Speech Interface",
    date: "2021 - 2022",
    description: "Brain controlled communication using SSVEPs and LLMs.",
    github: "https://github.com/WATOLINK/mind-speech-interface-ssvep/tree/main"
  },
  {
    name: "Crypto Cupid",
    date: "2023",
    description: "Verified human web3 dating app.",
    github: "https://github.com/IvanYu327/CryptoCupid"
  },
  {
    name: "Free SpACE",
    date: "2021",
    description: "Esports bingo app to pair with tournament livestreams.",
    github: "https://github.com/IvanYu327/Free-SpACE"
  },
  {
    name: "Study Goose",
    date: "2021",
    description: "Student aid Discord bot and homework helper.",
    github: "https://github.com/IvanYu327/Study-Goose"
  },
  {
    name: "Tabis",
    date: "2021",
    description: "Sleep cycle analysis app.",
    github: "https://github.com/LavanSumanan/nathacks"
  },
  {
    name: "TimeLine",
    date: "2021",
    description: "Live business wait-time indicator.",
    github: "https://github.com/Arcslogger/TimeLine"
  },
  {
    name: "Spog",
    date: "2021",
    description: "Functional Lego replica of Boston Dynamic's Spot the Dog.",
    github: "https://github.com/IvanYu327/spog-the-dog"
  },
  {
    name: "Build a Bot-y",
    date: "2021",
    description: "Fitness planner Discord bot.",
    github: "https://github.com/IvanYu327/Build-a-Bot-y_EngHackQuests21"
  }
];
