import {
  CognixionLogo,
  ComposerLogo,
  DeepBreatheLogo,
  HackTheNorthLogo,
  iVenutoLogo,
  KikoffLogo,
  RampLogo,
  RiotLogo,
} from "../assets";
import playClickSound from "../utils/sound";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div class="pt-4">
      <span class="font-semibold text-lg">Engineering</span>
      {experiences.map((exp, index) => (
        <ExperienceCard
          logoSrc={exp.logoSrc}
          title={exp.title}
          description={exp.description}
          href={exp.href}
        />
      ))}
    </div>
  );
}

const experiences = [
  //   {
  //     logoSrc: RampLogo, // Reuse RiotLogo or update with different logos if needed
  //     title: "Ramp",
  //     description: "Incoming Fall 2025",
  //     href: "https://ramp.com/",
  //   },
  {
    logoSrc: RiotLogo,
    title: "Riot Games",
    description: "Valorant Agents",
    href: "https://www.riotgames.com/",
  },
  {
    logoSrc: KikoffLogo,
    title: "Kikoff",
    description: "Building Credit",
    href: "https://kikoff.com/",
  },
  {
    logoSrc: ComposerLogo,
    title: "Composer",
    description: "Trading Infrastructure",
    href: "https://composer.trade/",
  },
  {
    logoSrc: HackTheNorthLogo,
    title: "Hack the North",
    description: "Canada's Largest Hackathon",
    href: "https://hackthenorth.com/",
  },
  {
    logoSrc: DeepBreatheLogo,
    title: "DeepBreathe AI",
    description: "Lung Ultrasound AI",
    href: "https://www.riotgames.com/",
  },
  {
    logoSrc: iVenutoLogo,
    title: "iVenuto.com",
    description: "Visitor Management Software",
    href: "https://www.ivenuto.com/",
  },
  {
    logoSrc: CognixionLogo,
    title: "Cognixion",
    description: "Assistive Brain Computer Interfaces",
    href: "https://www.cognixion.com/",
  },
];
