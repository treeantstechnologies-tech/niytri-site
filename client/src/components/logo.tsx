interface LogoProps {
  className?: string;
  idSuffix?: string; // unique per usage so gradient IDs don't collide
}

export default function Logo({ className = "h-10 w-auto", idSuffix = "nav" }: LogoProps) {
  const gid = `niytri-grad-${idSuffix}`;
  return (
    <svg
      viewBox="0 0 236 48"
      className={className}
      role="img"
      aria-label="NIYTRI AI"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="hsl(265 89% 58%)" />
          <stop offset="1" stopColor="hsl(190 90% 45%)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="13" fill={`url(#${gid})`} />
      <path
        d="M15 33 V15 L33 33 V15"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="15" cy="33" r="2.7" fill="#fff" />
      <circle cx="33" cy="15" r="2.7" fill="#fff" />
      <circle cx="24" cy="24" r="2.2" fill="#fff" />
      <text
        x="58"
        y="33.5"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        fontWeight="700"
        fontSize="26"
        letterSpacing="3"
        fill="currentColor"
      >
        NIYTRI
      </text>
      <text
        x="187"
        y="33.5"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        fontWeight="700"
        fontSize="26"
        letterSpacing="1"
        fill={`url(#${gid})`}
      >
        AI
      </text>
    </svg>
  );
}
