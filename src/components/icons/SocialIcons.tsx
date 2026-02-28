type IconProps = {
  className?: string;
  strokeWidth?: number;
};

export const LinkedInIcon = ({ className = "h-5 w-5", strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7.5 9.5v7" />
    <path d="M7.5 7h.01" />
    <path d="M11 9.5v7" />
    <path d="M11 12.5c.7-1.2 2.5-1.5 3.5-.2v4.2" />
  </svg>
);

export const FacebookIcon = ({ className = "h-5 w-5", strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M13.5 8H12a2 2 0 0 0-2 2v2H8.5v2H10v4h2.5v-4h2l.5-2H12.5v-2c0-.28.22-.5.5-.5h1v-2z" />
  </svg>
);

export const InstagramIcon = ({ className = "h-5 w-5", strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1.2" />
  </svg>
);

export const XIcon = ({ className = "h-5 w-5", strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4 4l7.5 9L4 20h4.5l4.3-5.2L16.5 20H20l-7.7-9.5L20 4h-4.5l-3.8 4.6L8.5 4z" />
  </svg>
);
