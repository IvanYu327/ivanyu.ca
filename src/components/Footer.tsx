import { JSX } from "solid-js";
import IconButton, { XIcon } from "./shared/IconButton";
import Line from "./shared/Line";

import { ImGithub, ImLinkedin } from "solid-icons/im";
import { FaBrandsInstagram } from "solid-icons/fa";

const socialLinks = [
  { icon: ImGithub, href: "https://github.com/IvanYu327" },
  { icon: ImLinkedin, href: "https://www.linkedin.com/in/ivanyu327/" },
  { icon: XIcon, href: "https://x.com/ivanyuuuuu" },
  { icon: FaBrandsInstagram, href: "https://www.instagram.com/ivanyuuu/" },
];

export default function Footer() {
  return (
    <footer class="my-4">
      <Line class="absolute left-0 w-screen" />

      <div class="flex justify-between items-center mt-4 py-4">
        <div>
          <div class="italic">made by and about ivan yu</div>
          <div class="italic text-sm">last update: 9:28pm 02/15/2024</div>
        </div>
        <div class="flex space-x-4">
          {socialLinks.map(({ icon, href }) => (
            <IconButton icon={icon} href={href} />
          ))}
        </div>
      </div>
    </footer>
  );
}
