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
  Ramp1,
  RiotLogo,
  ZapinApp,
} from '../assets';
import { Experience } from '../types';
import { valorantSound } from '../utils/sound';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection() {
  return (
    <div class="pt-4">
      <span class="font-semibold text-lg">Experience</span>
      {experiences.map((exp, index) => (
        <ExperienceCard exp={exp} />
      ))}
    </div>
  );
}

const experiences: Experience[] = [
  {
    logoSrc: RampLogo,
    bgSrc: Ramp1,
    bgOffsetY: -30,
    title: 'Ramp',
    description: 'Accounting',
    href: 'https://ramp.com/',
    logoScale: 100,
    logoBackgroundColor: '#DDF41B',
  },
  {
    logoSrc: RiotLogo,
    bgSrc: Cypher,
    title: 'Riot Games',
    description: 'Valorant Agents',
    href: 'https://www.riotgames.com/',
    onMouseEnter: valorantSound.play,
    onMouseLeave: valorantSound.stop,
    tag: 'Internship',
    logoScale: 100,
    logoBackgroundColor: '#C3222C',
  },
  {
    logoSrc: KikoffLogo,
    bgSrc: Kikoff1,
    bgOffsetY: -90,
    title: 'Kikoff',
    description: 'Building Credit',
    href: 'https://kikoff.com/',
    logoScale: 100,
    logoBackgroundColor: '#18BC28',
  },
  {
    logoSrc: ComposerLogo,
    bgSrc: Composer1,
    width: 350,
    bgOffsetY: -70,
    title: 'Composer',
    description: 'Trading Infrastructure',
    href: 'https://composer.trade/',
    logoScale: 100,
    logoBackgroundColor: '#0E1212',
  },
  {
    logoSrc: HackTheNorthLogo,
    bgSrc: HackTheNorth1,
    bgOffsetY: -60,
    title: 'Hack the North',
    description: "Canada's Largest Hackathon",
    href: 'https://hackthenorth.com/',
    logoScale: 100,
    logoBackgroundColor: '#12181D',
  },
  {
    logoSrc: DeepBreatheLogo,
    bgSrc: LungUltrasound,
    width: 300,
    bgOffsetY: -60,
    title: 'DeepBreathe AI',
    description: 'Lung Ultrasound AI',
    href: 'https://deepbreathe.ai/',
    logoScale: 100,
    logoBackgroundColor: '#101010',
  },
  {
    logoSrc: iVenutoLogo,
    bgSrc: ZapinApp,
    width: 250,
    bgOffsetY: -20,
    title: 'iVenuto.com',
    description: 'Visitor Management Software',
    href: 'https://www.ivenuto.com/',
    logoScale: 100,
    logoBackgroundColor: '#F6F6F6',
  },
  {
    logoSrc: CognixionLogo,
    bgSrc: Cognixion1,
    width: 250,
    bgOffsetY: -100,
    title: 'Cognixion',
    description: 'Mind Controlled AI',
    href: 'https://www.cognixion.com/',
    logoScale: 100,
    logoBackgroundColor: '#172423',
  },
];
