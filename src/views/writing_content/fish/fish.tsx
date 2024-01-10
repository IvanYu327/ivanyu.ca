export type Fishie = {
  date: Date;
  commonName: string;
  scientificName: string;
  url: string;
  image: string;
  description: string;
  rating: number;
};

export const Fishies: Fishie[] = [
  {
    date: new Date(2024, 0, 1),
    commonName: "Atlantic Bluefin Tuna",
    scientificName: "Thunnus thynnus",
    url: "https://en.wikipedia.org/wiki/Atlantic_bluefin_tuna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Thunnus_thynnus_-_Gervais.jpg/440px-Thunnus_thynnus_-_Gervais.jpg",
    description:
      "The Atlantic bluefin tuna is a species of tuna in the family Scombridae. It is variously known as the northern bluefin tuna, giant bluefin tuna, and formerly as the tunny. Atlantic bluefins are native to both the western and eastern Atlantic Ocean, as well as the Mediterranean Sea.",
    rating: 4
  }
];
