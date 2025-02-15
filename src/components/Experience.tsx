import {
  Cognixion1,
  CognixionLogo,
  Composer1,
  ComposerLogo,
  Cypher,
  DeepBreatheLogo,
  HackTheNorth1,
  HackTheNorthLogo,
  iVenutoLogo,
  Kikoff1,
  KikoffLogo,
  LungUltrasound,
  RampLogo,
  RiotLogo,
  ZapinApp,
} from "../assets";
import { Experience } from "../types";
import { valorantSound } from "../utils/sound";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <div class="pt-4">
      <span class="font-semibold text-lg" onClick={valorantSound.play}>
        Engineering
      </span>
      {experiences.map((exp, index) => (
        <ExperienceCard exp={exp} />
      ))}
    </div>
  );
}

const experiences: Experience[] = [
  //   {
  //     logoSrc: RampLogo, // Reuse RiotLogo or update with different logos if needed
  //     title: "Ramp",
  //     description: "Incoming Fall 2025",
  //     href: "https://ramp.com/",
  //   },
  {
    logoSrc: RiotLogo,
    bgSrc: Cypher,
    title: "Riot Games",
    description: "Valorant Agents",
    href: "https://www.riotgames.com/",
    onMouseEnter: valorantSound.play,
    onMouseLeave: valorantSound.stop,
    tag: "Internship",
  },
  {
    logoSrc: KikoffLogo,
    bgSrc: Kikoff1,
    bgOffsetY: -90,
    title: "Kikoff",
    description: "Building Credit",
    href: "https://kikoff.com/",
  },
  {
    logoSrc: ComposerLogo,
    bgSrc: Composer1,
    width: 350,
    bgOffsetY: -70,
    title: "Composer",
    description: "Trading Infrastructure",
    href: "https://composer.trade/",
  },
  {
    logoSrc: HackTheNorthLogo,
    bgSrc: HackTheNorth1,
    bgOffsetY: -60,
    title: "Hack the North",
    description: "Canada's Largest Hackathon",
    href: "https://hackthenorth.com/",
  },
  {
    logoSrc: DeepBreatheLogo,
    bgSrc: LungUltrasound,
    width: 300,
    bgOffsetY: -60,
    title: "DeepBreathe AI",
    description: "Lung Ultrasound AI",
    href: "https://deepbreathe.ai/",
  },
  {
    logoSrc: iVenutoLogo,
    bgSrc: ZapinApp,
    width: 250,
    bgOffsetY: -20,
    title: "iVenuto.com",
    description: "Visitor Management Software",
    href: "https://www.ivenuto.com/",
  },
  {
    logoSrc: CognixionLogo,
    bgSrc: Cognixion1,
    width: 250,
    bgOffsetY: -100,
    title: "Cognixion",
    description: "Mind Controlled AI",
    href: "https://www.cognixion.com/",
  },
];
