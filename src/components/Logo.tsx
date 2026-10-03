'use client';

import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  variant?: 'full' | 'icon-only';
}

export const Logo: React.FC<LogoProps> = ({
  size = 52,
  showText = true,
  className = "",
  variant = "full"
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
      >
          <defs>
            {/* Subtle, muted luxury champagne gold */}
            <linearGradient id="goldGradientRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EADDC9" />
              <stop offset="30%" stopColor="#CBB18B" />
              <stop offset="60%" stopColor="#B39364" />
              <stop offset="85%" stopColor="#8C6E3F" />
              <stop offset="100%" stopColor="#D9C5A8" />
            </linearGradient>

            <linearGradient id="goldIconGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F2E8D8" />
              <stop offset="45%" stopColor="#CBB18B" />
              <stop offset="100%" stopColor="#967746" />
            </linearGradient>

            <radialGradient id="deepBlackCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E2024" />
              <stop offset="70%" stopColor="#0D0E10" />
              <stop offset="100%" stopColor="#050506" />
            </radialGradient>

            {/* Arcs for top and bottom text */}
            <path id="topTextArc" d="M 28,100 A 72,72 0 1,1 172,100" fill="none" />
            <path id="bottomTextArc" d="M 172,100 A 72,72 0 0,1 28,100" fill="none" />
          </defs>

          {/* Outer Gold Fine Border */}
          <circle cx="100" cy="100" r="97" stroke="url(#goldGradientRing)" strokeWidth="1.75" strokeOpacity="0.75" />
          
          {/* Main Dark Ring with Gold Edges */}
          <circle cx="100" cy="100" r="92" stroke="url(#goldGradientRing)" strokeWidth="8" fill="#0C0D0F" />

          {/* Top Wordmark Text: ALSADDAH RESTAURANT */}
          <text fill="url(#goldIconGrad)" fontSize="11" fontWeight="700" letterSpacing="3">
            <textPath href="#topTextArc" startOffset="50%" textAnchor="middle">
              ALSADDAH RESTAURANT
            </textPath>
          </text>

          {/* Bottom Wordmark Text: مطعم السدة • አል ሰዳህ ሬስቶራንት */}
          <text fill="#CBB18B" fontSize="10" fontWeight="600">
            <textPath href="#bottomTextArc" startOffset="50%" textAnchor="middle">
              مطعم السدة • አል ሰዳህ ሬስቶራንት
            </textPath>
          </text>

          {/* Inner Gold Bevel Ring */}
          <circle cx="100" cy="100" r="62" stroke="url(#goldGradientRing)" strokeWidth="2" strokeOpacity="0.8" />
          
          {/* Black Center Core */}
          <circle cx="100" cy="100" r="59" fill="url(#deepBlackCore)" />

          {/* Golden Stars on Ring */}
          <polygon points="100,22 102,27 107,28 103,31 104,36 100,33 96,36 97,31 93,28 98,27" fill="url(#goldIconGrad)" />
          <polygon points="100,178 102,173 107,172 103,169 104,164 100,167 96,164 97,169 93,172 98,173" fill="url(#goldIconGrad)" />

          {/* Center Fork & Culinary Emblem */}
          <g transform="translate(100, 100)">
            {/* Subtle Radiant Core */}
            <circle cx="0" cy="0" r="30" fill="#C5A880" fillOpacity="0.08" />

            {/* Fork Icon */}
            <path
              d="M -13,-28 C -13,-21 -10,-15 -6,-13 L -6,18 C -6,22 -3,25 0,25 C 3,25 6,22 6,18 L 6,-13 C 10,-15 13,-21 13,-28 L 10.5,-28 C 10.5,-22 8.5,-17 4.5,-16 L 4.5,-28 L 2.2,-28 L 2.2,-16 L -2.2,-16 L -2.2,-28 L -4.5,-28 L -4.5,-16 C -8.5,-17 -10.5,-22 -10.5,-28 Z"
              fill="url(#goldIconGrad)"
            />

            {/* Decorative Symmetrical Golden Accents */}
            <path
              d="M -22,-2 C -22,9 -15,16 -8,18 C -12,12 -13,5 -13,-2 Z"
              fill="url(#goldGradientRing)"
              fillOpacity="0.4"
            />
            <path
              d="M 22,-2 C 22,9 15,16 8,18 C 12,12 13,5 13,-2 Z"
              fill="url(#goldGradientRing)"
              fillOpacity="0.4"
            />
          </g>
        </svg>

      {/* Accompanying Typography if enabled */}
      {showText && variant === 'full' && (
        <div className="flex flex-col text-start leading-tight">
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-wider text-base sm:text-lg text-neutral-900 dark:text-neutral-50">
              AL-SADDAH
            </span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-amber-900/10 text-amber-800 dark:text-amber-300 font-medium">
              مطعم السدة
            </span>
          </div>
          <span className="text-[11px] font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
            Yemeni Restaurant • Addis Ababa
          </span>
        </div>
      )}
    </div>
  );
};
