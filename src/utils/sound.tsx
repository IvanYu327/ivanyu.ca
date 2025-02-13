import { createSignal } from "solid-js";
import { ClickSound, ValorantSound } from "../assets";

export default function playClickSound() {
  const audio = new Audio(ClickSound);
  audio.play();
}

export function testValorantSound() {
  const audio = new Audio(ValorantSound);
  audio.play();
}

export const valorantSound = (() => {
  const [isPlaying, setIsPlaying] = createSignal(false);
  const audio = new Audio(ValorantSound);
  audio.loop = true;

  return {
    isPlaying,
    play: () => {
      if (!isPlaying()) {
        audio.currentTime = 0;
        audio.play().then(() => setIsPlaying(true));
      }
    },
    stop: () => {
      if (audio && isPlaying()) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      }
    },
  };
})();
