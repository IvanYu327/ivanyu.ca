import playClickSound from "../utils/sound";

interface CardProps {
  logoSrc: string;
  title: string;
  description: string;
  href: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ExperienceCard({
  logoSrc,
  title,
  description,
  href,
  onMouseEnter,
  onMouseLeave,
  ...props
}: CardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center p-4 bg-white rounded-lg hover:bg-gray-200 transition-all"
      onMouseEnter={onMouseEnter || playClickSound}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      <div class="w-16 h-16 bg-gray-300 rounded-lg overflow-hidden mr-4">
        <img
          src={logoSrc}
          alt="Company Logo"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col">
        <span class="font-semibold text-lg">{title}</span>
        <span class="text-sm text-gray-600">{description}</span>
      </div>
    </a>
  );
}
