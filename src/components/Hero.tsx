import playClickSound from "../utils/sound";

export default function Hero() {
  return (
    <div>
      <div class="font-semibold text-lg">Hi, I'm Ivan 👋 </div>

      <div class="mt-2">
        I'm studying Computer Science at the University of Waterloo. A software
        engineer constantly exploring and pushing the bounderies of tech.
      </div>

      <div class="mt-2">
        Avid rock climber, Lego collector, and Tetris addict.
      </div>

      <div class="mt-2">
        Feel free to reach me at{" "}
        <a
          class="underline"
          href="mailto:i7yu@uwaterloo.ca"
          onMouseEnter={playClickSound}
        >
          i7yu@uwaterloo.ca
        </a>
      </div>
    </div>
  );
}
