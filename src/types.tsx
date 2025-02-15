export type Experience = {
  logoSrc: string;
  bgSrc?: string;
  width?: number;
  bgOffsetY?: number;
  title: string;
  description: string;
  href: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  tag?: string;
};
