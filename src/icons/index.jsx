// Inline SVG icons — Phosphor / Lucide style.
// All accept { size, color, strokeWidth } and inherit currentColor by default.

const base = (size, color) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: color || 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export const IdCard = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <circle cx="9" cy="12" r="2.4" />
    <path d="M5 17c.6-1.7 2-2.6 4-2.6s3.4.9 4 2.6" />
    <path d="M15 10.5h4M15 13.5h3" />
  </svg>
);

export const Eye = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Clipboard = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 4h6v3H9z" />
    <path d="M9 11h6M9 14h6M9 17h4" />
  </svg>
);

export const ChartBar = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);

export const Check = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M4 12.5 9 17.5 20 6.5" />
  </svg>
);

export const Ban = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m5.6 5.6 12.8 12.8" />
  </svg>
);

export const Bolt = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

export const Lock = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

export const Bell = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2.5h-15L6 16Z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </svg>
);

export const Upload = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M12 4v12" />
    <path d="m6 10 6-6 6 6" />
    <path d="M4 20h16" />
  </svg>
);

export const Home = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v10h12V10" />
  </svg>
);

export const Truck = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M2 7h11v10H2z" />
    <path d="M13 10h5l3 3v4h-8" />
    <circle cx="6" cy="18" r="1.8" />
    <circle cx="17" cy="18" r="1.8" />
  </svg>
);

export const Car = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M4 14V11l2-5h12l2 5v3" />
    <path d="M2 14h20v4H2z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);

export const Building = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M5 21V5a2 2 0 0 1 2-2h6l4 4v14" />
    <path d="M5 21h16" />
    <path d="M9 8h4M9 12h4M9 16h4" />
  </svg>
);

export const Factory = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M3 21V11l5 3V11l5 3V11l6 4v6Z" />
    <path d="M7 21v-4M12 21v-4M17 21v-4" />
  </svg>
);

export const Package = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="m12 3 9 4.5v9L12 21l-9-4.5v-9L12 3Z" />
    <path d="M3 7.5 12 12l9-4.5M12 12v9" />
  </svg>
);

export const HardHat = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M3 17h18M5 17v-2a7 7 0 0 1 14 0v2" />
    <path d="M10 10V7h4v3" />
  </svg>
);

export const Mail = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="m3 7 9 7 9-7" />
  </svg>
);

export const Phone = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const Pin = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ArrowRight = ({ size = 16, color }) => (
  <svg {...base(size, color)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ArrowDown = ({ size = 16, color }) => (
  <svg {...base(size, color)}>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </svg>
);

export const AlertTriangle = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M12 4 2.5 20h19L12 4Z" />
    <path d="M12 10v5" />
    <circle cx="12" cy="17.5" r="0.6" fill={color || 'currentColor'} />
  </svg>
);

export const Hourglass = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M6 3h12M6 21h12" />
    <path d="M6 3c0 5 6 5 6 9s-6 4-6 9" />
    <path d="M18 3c0 5-6 5-6 9s6 4 6 9" />
  </svg>
);

export const Fingerprint = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <path d="M6 13a6 6 0 0 1 12 0v2" />
    <path d="M9 13a3 3 0 0 1 6 0v3" />
    <path d="M12 13v5" />
    <path d="M4.5 9a8 8 0 0 1 15 0" />
    <path d="M9 21c0-2 .5-3 .5-5" />
  </svg>
);

export const Network = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <circle cx="12" cy="12" r="2.5" />
    <circle cx="4" cy="6" r="1.6" />
    <circle cx="20" cy="6" r="1.6" />
    <circle cx="4" cy="18" r="1.6" />
    <circle cx="20" cy="18" r="1.6" />
    <path d="m5.5 7 5 4M18.5 7l-5 4M5.5 17l5-4M18.5 17l-5-4" />
  </svg>
);

export const Globe = ({ size = 20, color }) => (
  <svg {...base(size, color)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);
