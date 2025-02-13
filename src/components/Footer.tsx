import { JSX } from "solid-js";
import IconButton, { XIcon } from "./shared/IconButton";
import Line from "./shared/Line";

import { ImGithub, ImLinkedin } from "solid-icons/im";

const socialLinks = [
  { icon: ImGithub, href: "https://github.com/IvanYu327" },
  { icon: ImLinkedin, href: "https://www.linkedin.com/in/ivanyu327/" },
  { icon: XIcon, href: "https://x.com/ivanyuuuuu" },
];

export default function Footer() {
  return (
    <footer class="my-4">
      <Line class="absolute left-0 w-screen" />

      <div class="flex justify-between items-center mt-4 py-4">
        <span class="italic">made by and about ivan yu</span>
        <div class="flex space-x-4">
          {socialLinks.map(({ icon, href }) => (
            <IconButton icon={icon} href={href} />
          ))}
        </div>
      </div>
    </footer>
  );
}
