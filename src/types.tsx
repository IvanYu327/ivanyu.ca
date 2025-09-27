export type Experience = {
  logoSrc: string;
  bgSrc?: string;
  width?: number;
  bgOffsetY?: number;
  logoScale?: number; // Integer percentage (e.g., 80 = 80% of original size)
  logoBackgroundColor?: string; // CSS color value for the rounded square background
  title: string;
  description: string;
  href: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  tag?: string;
};
