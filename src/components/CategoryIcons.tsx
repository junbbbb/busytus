import React from 'react';

const SharedDefs = () => (
  <defs>
    <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.12" />
    </filter>
  </defs>
);

export const PlungerIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 drop-shadow-sm">
    <SharedDefs />
    <defs>
      <linearGradient id="wood" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#E6B981" /><stop offset="100%" stopColor="#B48044" /></linearGradient>
      <linearGradient id="rubber" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FF7676" /><stop offset="100%" stopColor="#D32F2F" /></linearGradient>
    </defs>
    <g filter="url(#soft-shadow)">
      <rect x="28" y="10" width="8" height="34" rx="4" fill="url(#wood)" />
      <rect x="29" y="10" width="2" height="34" fill="#FFF" opacity="0.3" />
      <path d="M14 42 C14 32, 50 32, 50 42 L54 54 C54 58, 10 58, 10 54 Z" fill="url(#rubber)" />
      <ellipse cx="32" cy="54" rx="22" ry="5" fill="#B71C1C" />
      <path d="M18 42 C18 36, 32 36, 32 42" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </g>
  </svg>
);

export const WrenchIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 drop-shadow-sm">
    <SharedDefs />
    <defs>
      <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F1F5F9" /><stop offset="50%" stopColor="#94A3B8" /><stop offset="100%" stopColor="#475569" /></linearGradient>
    </defs>
    <g filter="url(#soft-shadow)" transform="rotate(45 32 32)">
      <rect x="26" y="24" width="12" height="32" rx="6" fill="url(#metal)" />
      <circle cx="32" cy="18" r="14" fill="url(#metal)" />
      <circle cx="32" cy="18" r="6" fill="#F6F6F6" />
      <path d="M18 18 L46 18 L46 6 L18 6 Z" fill="#F6F6F6" />
      <rect x="28" y="26" width="3" height="28" rx="1.5" fill="#FFF" opacity="0.6" />
    </g>
  </svg>
);

export const BroomIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 drop-shadow-sm">
    <SharedDefs />
    <defs>
      <linearGradient id="bristles" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FDE68A" /><stop offset="100%" stopColor="#D97706" /></linearGradient>
      <linearGradient id="stick" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#6EE7B7" /><stop offset="100%" stopColor="#047857" /></linearGradient>
    </defs>
    <g filter="url(#soft-shadow)" transform="rotate(20 32 32)">
      <rect x="28" y="6" width="8" height="36" rx="4" fill="url(#stick)" />
      <rect x="29" y="6" width="2" height="36" fill="#FFF" opacity="0.4" />
      <path d="M20 40 L44 40 L54 58 C54 62, 10 62, 10 58 Z" fill="url(#bristles)" />
      <rect x="18" y="38" width="28" height="8" rx="4" fill="#065F46" />
      <path d="M24 46 L20 58 M32 46 L32 58 M40 46 L44 58" stroke="#92400E" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </g>
  </svg>
);

export const LeakIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 drop-shadow-sm">
    <SharedDefs />
    <defs>
      <linearGradient id="water" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#93C5FD" /><stop offset="100%" stopColor="#2563EB" /></linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFF" stopOpacity="0.9" /><stop offset="100%" stopColor="#94A3B8" stopOpacity="0.3" /></linearGradient>
    </defs>
    <g filter="url(#soft-shadow)">
      <path d="M28 14 C28 14, 12 34, 12 46 C12 54.8, 19.2 62, 28 62 C36.8 62, 44 54.8, 44 46 C44 34, 28 14, 28 14 Z" fill="url(#water)" />
      <path d="M20 46 C20 40, 26 34, 28 32" stroke="#FFF" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <circle cx="44" cy="40" r="16" fill="url(#glass)" stroke="#64748B" strokeWidth="4" />
      <line x1="56" y1="52" x2="64" y2="60" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
      <path d="M36 34 Q44 28 50 36" stroke="#FFF" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
    </g>
  </svg>
);

export const ACIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 drop-shadow-sm">
    <SharedDefs />
    <defs>
      <linearGradient id="ac-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFF" /><stop offset="100%" stopColor="#CBD5E1" /></linearGradient>
    </defs>
    <g filter="url(#soft-shadow)">
      <rect x="6" y="14" width="52" height="26" rx="6" fill="url(#ac-body)" stroke="#94A3B8" strokeWidth="2" />
      <rect x="14" y="28" width="36" height="6" rx="3" fill="#64748B" />
      <circle cx="50" cy="21" r="2.5" fill="#10B981" />
      <rect x="8" y="16" width="50" height="4" fill="#FFF" opacity="0.8" />
      <path d="M22 48 L42 48 M16 56 L48 56" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
    </g>
  </svg>
);

export const RollerIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 drop-shadow-sm">
    <SharedDefs />
    <defs>
      <linearGradient id="paint" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6EE7B7" /><stop offset="100%" stopColor="#059669" /></linearGradient>
      <linearGradient id="handle" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FCA5A5" /><stop offset="100%" stopColor="#DC2626" /></linearGradient>
    </defs>
    <g filter="url(#soft-shadow)" transform="rotate(-15 32 32)">
      <rect x="14" y="10" width="36" height="18" rx="8" fill="url(#paint)" />
      <rect x="14" y="12" width="36" height="6" fill="#FFF" opacity="0.3" />
      <path d="M50 19 L58 19 L58 42 L32 42 L32 48" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="28" y="48" width="8" height="16" rx="4" fill="url(#handle)" />
      <rect x="29" y="48" width="2" height="16" fill="#FFF" opacity="0.4" />
    </g>
  </svg>
);

export const HouseIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 drop-shadow-sm">
    <SharedDefs />
    <defs>
      <linearGradient id="house-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FEF08A" /><stop offset="100%" stopColor="#F59E0B" /></linearGradient>
      <linearGradient id="roof" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FDA4AF" /><stop offset="100%" stopColor="#E11D48" /></linearGradient>
    </defs>
    <g filter="url(#soft-shadow)">
      <rect x="14" y="32" width="36" height="26" fill="url(#house-body)" />
      <polygon points="6,32 32,10 58,32" fill="url(#roof)" />
      <rect x="26" y="42" width="12" height="16" fill="#78350F" />
      <rect x="14" y="32" width="36" height="4" fill="#FFF" opacity="0.4" />
      <path d="M50 14 L52 20 L58 22 L52 24 L50 30 L48 24 L42 22 L48 20 Z" fill="#FDE047" />
      <path d="M14 10 L15 13 L18 14 L15 15 L14 18 L13 15 L10 14 L13 13 Z" fill="#FDE047" />
    </g>
  </svg>
);

export const GridIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 drop-shadow-sm">
    <SharedDefs />
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#C084FC" /><stop offset="100%" stopColor="#7E22CE" /></linearGradient>
      <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#60A5FA" /><stop offset="100%" stopColor="#1D4ED8" /></linearGradient>
      <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34D399" /><stop offset="100%" stopColor="#047857" /></linearGradient>
      <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FBBF24" /><stop offset="100%" stopColor="#B45309" /></linearGradient>
    </defs>
    <g filter="url(#soft-shadow)">
      <rect x="12" y="12" width="18" height="18" rx="6" fill="url(#g1)" />
      <rect x="34" y="12" width="18" height="18" rx="6" fill="url(#g2)" />
      <rect x="12" y="34" width="18" height="18" rx="6" fill="url(#g3)" />
      <rect x="34" y="34" width="18" height="18" rx="6" fill="url(#g4)" />
      <rect x="14" y="14" width="6" height="6" rx="2" fill="#FFF" opacity="0.4" />
      <rect x="36" y="14" width="6" height="6" rx="2" fill="#FFF" opacity="0.4" />
      <rect x="14" y="36" width="6" height="6" rx="2" fill="#FFF" opacity="0.4" />
      <rect x="36" y="36" width="6" height="6" rx="2" fill="#FFF" opacity="0.4" />
    </g>
  </svg>
);
