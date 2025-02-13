import { createSignal } from "solid-js";
import { clickSound } from "../assets/sounds";

export default function playClickSound() {
  const audio = new Audio(clickSound);
  audio.play();
}
