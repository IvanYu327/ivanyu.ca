import { IconTypes } from "solid-icons";
import { JSX } from "solid-js";

interface IconButtonProps {
  icon: IconTypes | ((props: { size?: number; class?: string }) => JSX.Element);
  href: string;
  className?: string;
}

export default function IconButton({
  icon: Icon,
  href,
  className,
}: IconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      class={`inline-flex items-center justify-center transition cursor-pointer ${className}`}
    >
      <Icon
        size={24}
        class="text-gray-500 hover:text-black transition cursor-pointer"
      />
    </a>
  );
}

// Custom X icon that behaves like a solid-icon for this purpose
export function XIcon(props: { size?: number; class?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={props.size || 24}
      height={props.size || 24}
      class={props.class}
      fill="currentColor"
      stroke="currentColor"
    >
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  );
}
