// import { Experience } from "../typings/types";

import {
  Cognixion,
  DeepBreathe,
  HTN2023,
  WatoLink,
  iVenuto
} from "../assets/images";

type Experience = {
  position: string;
  company: string;
  startYear: number;
  endYear: number | null;
  link: string;
  logo: string;
  color: string;
};

export const EXPERIENCES: Experience[] = [
  {
    position: "Backend Developer",
    company: "Hack the North",
    startYear: 2023,
    endYear: null,
    link: "https://hackthenorth.com/",
    logo: HTN2023,
    color: "#333333"
  },
  {
    position: "Software Engineering Intern",
    company: "Deep Breathe",
    startYear: 2023,
    endYear: null,
    link: "",
    logo: DeepBreathe,
    color: "#333333"
  },
  {
    position: "Software Team Lead",
    company: "WatoLink",
    startYear: 2021,
    endYear: 2023,
    link: "",
    logo: WatoLink,
    color: "#333333"
  },
  {
    position: "Frontend Developer",
    company: "Hack the North",
    startYear: 2023,
    endYear: 2023,
    link: "",
    logo: HTN2023,
    color: "#333333"
  },
  {
    position: "Software Engineering Intern",
    company: "iVenuto.com",
    startYear: 2023,
    endYear: 2023,
    link: "",
    logo: iVenuto,
    color: "#333333"
  },
  {
    position: "Software Developer Intern",
    company: "Cognixion",
    startYear: 2022,
    endYear: 2022,
    link: "",
    logo: Cognixion,
    color: "#1D2F2F"
  }
];

export default EXPERIENCES;
