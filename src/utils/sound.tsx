import { createSignal } from "solid-js";
import { ClickSound, ValorantSound } from "../assets";

const [mute, setMute] = createSignal(true);

export function useMute() {
  return [mute, setMute] as const;
}

export default function playClickSound() {
  if (mute()) return;
  const audio = new Audio(ClickSound);
  audio.play().catch(() => {});
}

export const valorantSound = (() => {
  const [isPlaying, setIsPlaying] = createSignal(false);
  const audio = new Audio(ValorantSound);
  audio.loop = true;

  return {
    isPlaying,
    play: () => {
      if (mute() || isPlaying()) return;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          audio.pause();
          setIsPlaying(false);
        });
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
