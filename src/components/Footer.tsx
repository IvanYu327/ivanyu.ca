import { createResource, JSX } from "solid-js";
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

async function fetchLastCommit() {
  const repo = "IvanYu327/ivanyu.ca";
  const url = `https://api.github.com/repos/${repo}/commits/main`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return new Date(data.commit.committer.date).toLocaleString();
  } catch (error) {
    console.error("Error fetching last commit:", error);
    return "Loading ...";
  }
}

export default function Footer() {
  const [lastUpdate] = createResource(fetchLastCommit);

  return (
    <footer class="my-4">
      <Line class="absolute left-0 w-screen" />

      <div class="flex justify-between items-center mt-4 py-4">
        <div>
          <div class="italic">made by and about ivan yu</div>
          <div class="italic text-sm">
            last update: {lastUpdate() || "loading..."}
          </div>
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
