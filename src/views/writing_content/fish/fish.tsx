import {
  AtlanticBluefinTuna,
  BlueRingedOctopus,
  LargemouthBass,
  OceanSunfish,
  PeacockMantisShrimp,
  Stripey,
  ThresherShark
} from "../../../assets/images";

export type Fishie = {
  date: Date;
  commonName: string;
  scientificName: string;
  image: string;
  rating: number | string;
  description: string;
  funFact: string;
};

export const Fishies: Fishie[] = [
  {
    date: new Date(2024, 0, 1),
    commonName: "Atlantic Bluefin Tuna",
    scientificName: "Thunnus thynnus",
    image: AtlanticBluefinTuna,
    rating: 10,
    description:
      "Tastes amazing in sushi, an absolute unit of a fish, and a great way to start the new year. One of the few fish that ranks so high not because it's a cool fish, but because it tastes so good.",
    funFact:
      "This is the largest tuna species, being built for speed with retractable fins and flush eyeballs, reaching speeds of 70 km/hr. That's faster than snail."
  },
  {
    date: new Date(2024, 0, 2),
    commonName: "Stripey",
    scientificName: "Microcanthus strigatus",
    image: Stripey,
    rating: 7,
    description: "Very aptly named.",
    funFact: "It has stripes"
  },
  {
    date: new Date(2024, 0, 3),
    commonName: "Largemouth Bass",
    scientificName: "Micropterus salmoides",
    image: LargemouthBass,
    rating: 7,
    description:
      "Tastes pretty good, has a large mouth, and also broke my fishing line once, making me pretty sad. I still like it though.",
    funFact:
      "Being a voracious carnivore and a top predator in the freshwater aquatic ecosystem, it will eat anything it can fit in its mouth, including fishing baits."
  },
  {
    date: new Date(2024, 0, 4),
    commonName: "Common Thresher Shark",
    scientificName: "Alopias vulpinus",
    image: ThresherShark,
    rating: 8,
    description:
      "One of the coolest sharks out there. Their tail can grow to be as long as its body, and they can whip it at 80 mph. I wonder if it nae naes that fast as well...",
    funFact: ""
  },
  {
    date: new Date(2024, 0, 5),
    commonName: "Peacock Mantis Shrimp",
    scientificName: "Odontodactylus scyllarus",
    image: PeacockMantisShrimp,
    rating: 10,
    description:
      "This small shrimp packs punches at 50 mph, and has the fastest punch in the animal kingdom. So fast, in fact, that it boils the water around it, creating a flash of light. It can break shellfish, your finger, and needs is usually kept in a bulleproof glass tank.",
    funFact: "It can also see 12 colors, compared to our measly 3."
  },
  {
    date: new Date(2024, 0, 6),
    commonName: "Ocean Sunfish",
    scientificName: "Mola mola",
    image: OceanSunfish,
    rating: 10,
    description:
      "They can grow up to 2 tons, and are the largest bony fish in the world. Though massive and weird looking, they're harmless and pretty stupid.",
    funFact:
      "These fish are so braindead, that aquariums will usually have circular tanks, nets in front of walls, or jets of water to keep them from swimming into walls and killing themselves."
  },
  {
    date: new Date(2024, 0, 7),
    commonName: "Blue-ringed octopus",
    scientificName: "Hapalochlaena lunulata",
    image: BlueRingedOctopus,
    rating: 10,
    description:
      "Beautiful but deadly octopus. The vemon from this bad boy can kill 26 grown adults in a few minutes. It's also the size of a golf ball, so it's pretty cute.",
    funFact: ""
  },
  {
    date: new Date(2024, 0, 8),
    commonName: "Atlantic Bluefin Tuna",
    scientificName: "Thunnus thynnus",
    image: AtlanticBluefinTuna,
    rating: 10,
    description:
      "Tastes amazing in sushi, an absolute unit of a fish, and a great way to start the new year. One of the few fish that ranks so high not because they",
    funFact:
      "This is the largest tuna species, being built for speed with retractable fins and flush eyeballs, reaching speeds of 70 km/hr. That's faster than snail, I think."
  },
  {
    date: new Date(2024, 0, 9),
    commonName: "Atlantic Bluefin Tuna",
    scientificName: "Thunnus thynnus",
    image: AtlanticBluefinTuna,
    rating: 10,
    description:
      "Tastes amazing in sushi, an absolute unit of a fish, and a great way to start the new year. One of the few fish that ranks so high not because they",
    funFact:
      "This is the largest tuna species, being built for speed with retractable fins and flush eyeballs, reaching speeds of 70 km/hr. That's faster than snail, I think."
  },
  {
    date: new Date(2024, 0, 10),
    commonName: "Atlantic Bluefin Tuna",
    scientificName: "Thunnus thynnus",
    image: AtlanticBluefinTuna,
    rating: 10,
    description:
      "Tastes amazing in sushi, an absolute unit of a fish, and a great way to start the new year. One of the few fish that ranks so high not because it's a cool fish, but because I love eating it so much.",
    funFact:
      "This is the largest tuna species, being built for speed with retractable fins and flush eyeballs, reaching speeds of 70 km/hr. That's faster than snail, I think."
  },
  {
    date: new Date(2024, 0, 11),
    commonName: "Atlantic Bluefin Tuna",
    scientificName: "Thunnus thynnus",
    image: AtlanticBluefinTuna,
    rating: 10,
    description:
      "Tastes amazing in sushi, an absolute unit of a fish, and a great way to start the new year. One of the few fish that ranks so high not because they",
    funFact:
      "This is the largest tuna species, being built for speed with retractable fins and flush eyeballs, reaching speeds of 70 km/hr. That's faster than snail, I think."
  },
  {
    date: new Date(2024, 0, 12),
    commonName: "Atlantic Bluefin Tuna",
    scientificName: "Thunnus thynnus",
    image: AtlanticBluefinTuna,
    rating: 10,
    description:
      "Tastes amazing in sushi, an absolute unit of a fish, and a great way to start the new year. One of the few fish that ranks so high not because they",
    funFact:
      "This is the largest tuna species, being built for speed with retractable fins and flush eyeballs, reaching speeds of 70 km/hr. That's faster than snail, I think."
  }
];
