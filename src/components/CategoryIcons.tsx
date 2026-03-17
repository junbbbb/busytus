import React from 'react';

/**
 * Nano Banana 2.0 Icon Style (Latest)
 * Characteristics: 
 * - 2D Flat Duotone
 * - High Contrast (Slate-800 + Amber-500)
 * - Geometric Silhouettes
 * - Consistent Rounded Corners
 * - No Gradients or Shadows
 */

const PrimaryColor = "#1E293B"; // Slate-800
const AccentColor = "#F59E0B";  // Amber-500 (Vibrant Accent)

export const PlungerIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-200 group-hover:scale-110">
    {/* Handle */}
    <rect x="29" y="6" width="6" height="30" rx="3" fill={PrimaryColor} />
    {/* Cup Base (Duotone Accent) */}
    <path d="M12 50C12 41.1634 19.1634 34 28 34H36C44.8366 34 52 41.1634 52 50V52H12V50Z" fill={AccentColor} />
    {/* Cup Bottom (Primary) */}
    <path d="M10 52H54V56C54 57.1046 53.1046 58 52 58H12C10.8954 58 10 57.1046 10 56V52Z" fill={PrimaryColor} />
  </svg>
);

export const WrenchIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-200 group-hover:scale-110">
    <path d="M48.5 15.5C46.5 13.5 43.5 12.5 40 12.5C33 12.5 27.5 18 27.5 25C27.5 28.5 29 31.5 31 33.5L10 54.5L14.5 59L35.5 38C37.5 40 40.5 41.5 44 41.5C51 41.5 56.5 36 56.5 29C56.5 25.5 55.5 22.5 53.5 20.5L58 16L53 11L48.5 15.5Z" fill={AccentColor} />
    <path d="M10 54.5L14.5 59L33.5 40L29 35.5L10 54.5Z" fill={PrimaryColor} />
    <path d="M44 41.5C51 41.5 56.5 36 56.5 29C56.5 25.5 55.5 22.5 53.5 20.5L46.5 27.5L41.5 22.5L48.5 15.5C46.5 13.5 43.5 12.5 40 12.5C33 12.5 27.5 18 27.5 25C27.5 28.5 29 31.5 31 33.5L44 41.5Z" fill={PrimaryColor} fillOpacity="0.85" />
    <circle cx="42" cy="27" r="4" fill="white" />
  </svg>
);

export const BroomIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-200 group-hover:scale-110">
    {/* Stick */}
    <rect x="36" y="4" width="6" height="42" rx="3" transform="rotate(20 36 4)" fill={PrimaryColor} />
    {/* Bristle Head (Duotone Accent) */}
    <path d="M12 52L18 34H46L52 52C52 55.3137 49.3137 58 46 58H18C14.6863 58 12 55.3137 12 52Z" fill={AccentColor} />
    {/* Band (Primary) */}
    <rect x="16" y="34" width="32" height="8" rx="2" fill={PrimaryColor} />
    {/* Details */}
    <path d="M22 48V54M32 48V54M42 48V54" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const LeakIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-200 group-hover:scale-110">
    {/* Water Drop (Accent) */}
    <path d="M32 6C32 6 12 30 12 44C12 55.0457 20.9543 64 32 64C43.0457 64 52 55.0457 52 44C52 30 32 6 32 6Z" fill={AccentColor} />
    {/* Highlight */}
    <path d="M24 44C24 39.5817 27.5817 36 32 36" stroke="white" strokeWidth="4" strokeLinecap="round" />
    {/* Search/Inspect Tool (Primary) */}
    <circle cx="46" cy="46" r="10" fill="white" stroke={PrimaryColor} strokeWidth="4" />
    <path d="M53 53L60 60" stroke={PrimaryColor} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

export const ACIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-200 group-hover:scale-110">
    {/* AC Body (Accent) */}
    <rect x="6" y="14" width="52" height="30" rx="6" fill={AccentColor} />
    {/* Front Panel (Primary) */}
    <rect x="6" y="14" width="52" height="30" rx="6" stroke={PrimaryColor} strokeWidth="4" />
    <rect x="14" y="32" width="36" height="4" rx="2" fill={PrimaryColor} />
    <circle cx="50" cy="22" r="2.5" fill={PrimaryColor} />
    {/* Air Flow */}
    <path d="M20 52L18 60M32 52V62M44 52L46 60" stroke={PrimaryColor} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const RollerIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-200 group-hover:scale-110">
    {/* Roller (Accent) */}
    <rect x="10" y="10" width="40" height="24" rx="12" fill={AccentColor} />
    <rect x="10" y="10" width="40" height="24" rx="12" stroke={PrimaryColor} strokeWidth="4" />
    {/* Handle (Primary) */}
    <path d="M50 22H58V46H32V52" stroke={PrimaryColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="28" y="52" width="8" height="10" rx="2" fill={PrimaryColor} />
  </svg>
);

export const HouseIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-200 group-hover:scale-110">
    {/* House Shape (Accent) */}
    <path d="M10 32V58H54V32L32 10L10 32Z" fill={AccentColor} />
    {/* Outline (Primary) */}
    <path d="M10 32L32 10L54 32V58H10V32Z" stroke={PrimaryColor} strokeWidth="4" strokeLinejoin="round" />
    {/* Door (Primary) */}
    <rect x="26" y="44" width="12" height="14" rx="1" fill={PrimaryColor} />
    {/* Sparkle (White) */}
    <path d="M46 14L48 20L54 22L48 24L46 30L44 24L38 22L44 20Z" fill="white" />
  </svg>
);

export const GridIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-200 group-hover:scale-110">
    <rect x="10" y="10" width="20" height="20" rx="5" fill={PrimaryColor} />
    <rect x="34" y="10" width="20" height="20" rx="5" fill={PrimaryColor} />
    <rect x="10" y="34" width="20" height="20" rx="5" fill={PrimaryColor} />
    <rect x="34" y="34" width="20" height="20" rx="5" fill={AccentColor} />
  </svg>
);
