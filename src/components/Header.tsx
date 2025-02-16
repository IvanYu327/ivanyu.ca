import { FaSolidVolumeHigh, FaSolidVolumeXmark } from "solid-icons/fa";
import IconButton from "./shared/IconButton";
import Line from "./shared/Line";
import { useMute } from "../utils/sound";

export default function Header() {
  const [mute, setMute] = useMute();

  return (
    <header class="my-4">
      <div class="flex justify-between items-center">
        <a href="/" class="cursor-pointer">
          <p>ivan yu</p>
        </a>
        {mute() ? (
          <IconButton
            icon={FaSolidVolumeXmark}
            size="sm"
            onClick={() => setMute(false)}
          />
        ) : (
          <IconButton
            icon={FaSolidVolumeHigh}
            size="sm"
            onClick={() => setMute(true)}
          />
        )}
      </div>
      <Line />
    </header>
  );
}
