"use client";

import { motion } from "framer-motion";
import { Moon, ArrowUp, TrendingUp } from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_LIGHT = "#FFD700";

function GlassCard({
  title,
  value,
  subtitle,
  icon,
  className,
  delay = 0,
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.7, delay },
        scale: { duration: 0.7, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute z-30 rounded-2xl border border-[#D4AF37]/35 bg-[#120b22]/60 px-3 py-2.5 shadow-[0_0_30px_rgba(212,175,55,0.15)] backdrop-blur-xl xl:px-4 xl:py-3 ${className}`}
    >
      <div className="flex items-center gap-2 xl:gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15 text-[#FFD700] xl:h-10 xl:w-10">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37] xl:text-[10px]">
            {title}
          </p>
          <p className="mt-0.5 truncate font-serif text-sm text-white xl:text-base">
            {value}
          </p>
          {subtitle && (
            <p className="mt-0.5 truncate text-[10px] text-[#E8C766]/75 xl:text-[11px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroVisual() {
  return (
    /*
      Only rendered on lg+ (parent hides it below lg).
      Size ramp: lg → 400×480px, xl → 500×580px
    */
    <div className="relative flex h-[420px] w-full max-w-[500px] items-center justify-center xl:h-[500px] xl:max-w-[600px]">
      {/* Glow blob */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[300px] w-[300px] rounded-full bg-[#D4AF37]/18 blur-[80px] xl:h-[380px] xl:w-[380px]"
      />

      {/* Orbit rings */}
      <div className="absolute h-[360px] w-[360px] rounded-full border border-[#D4AF37]/10 xl:h-[440px] xl:w-[440px]" />
      <div className="absolute h-[290px] w-[290px] rounded-full border border-[#D4AF37]/08 xl:h-[360px] xl:w-[360px]" />

      {/* Glass cards */}
      <GlassCard
        title="Moon Sign"
        value="Virgo"
        subtitle="Analytical • Practical"
        icon={<Moon size={15} />}
        className="left-0 top-8 w-[175px] xl:top-14 xl:w-[210px]"
        delay={0.2}
      />
      <GlassCard
        title="Ascendant"
        value="Leo"
        subtitle="Confident • Leader"
        icon={<ArrowUp size={15} />}
        className="right-0 top-16 w-[175px] xl:top-24 xl:w-[210px]"
        delay={0.45}
      />
      <GlassCard
        title="Current Focus"
        value="Career Growth"
        subtitle="Jupiter Favorable"
        icon={<TrendingUp size={15} />}
        className="bottom-6 left-1/2 w-[210px] -translate-x-1/2 xl:bottom-10 xl:w-[250px]"
        delay={0.7}
      />

      {/* Connector lines */}
      <svg
        className="absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 600 520"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M150 160 C190 200, 230 220, 275 242"
          fill="none"
          stroke={GOLD}
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.35"
        />
        <path
          d="M450 215 C415 228, 390 240, 355 255"
          fill="none"
          stroke={GOLD}
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.35"
        />
        <path
          d="M300 400 C300 430, 300 455, 300 478"
          fill="none"
          stroke={GOLD}
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.35"
        />
      </svg>

      {/* Star particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute z-20 h-0.5 w-0.5 rounded-full bg-[#FFD700]"
          style={{
            left: `${15 + ((i * 29) % 70)}%`,
            top: `${8 + ((i * 37) % 78)}%`,
            opacity: 0.2 + (i % 4) * 0.1,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.15, 0.65, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Main SVG mandala */}
      <motion.div
        initial={{ opacity: 0, scale: 0.82, rotate: -3 }}
        animate={{ opacity: 1, scale: [1, 1.02, 1], rotate: [-1, 1, -1] }}
        transition={{
          opacity: { duration: 0.9 },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-20 h-[300px] w-[300px] xl:h-[400px] xl:w-[400px]"
      >
        <svg viewBox="0 0 520 520" className="h-full w-full overflow-visible">
          <defs>
            <filter id="heroGoldGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="premiumGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="45%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B76E79" />
            </linearGradient>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.5" />
              <stop offset="55%" stopColor="#D4AF37" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "260px 260px" }}
          >
            <circle
              cx="260"
              cy="260"
              r="235"
              fill="none"
              stroke={GOLD}
              strokeOpacity="0.15"
            />
            <circle
              cx="260"
              cy="260"
              r="205"
              fill="none"
              stroke={GOLD}
              strokeOpacity="0.13"
              strokeDasharray="4 10"
            />
            <circle
              cx="260"
              cy="260"
              r="170"
              fill="none"
              stroke={GOLD}
              strokeOpacity="0.1"
            />
          </motion.g>

          <motion.path
            d="M260 25 L495 260 L260 495 L25 260 Z"
            fill="rgba(8,10,25,0.35)"
            stroke="url(#premiumGold)"
            strokeWidth="4"
            filter="url(#heroGoldGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M105 105 H415 V415 H105 Z"
            fill="rgba(255,215,0,0.02)"
            stroke={GOLD_LIGHT}
            strokeWidth="2.4"
            filter="url(#heroGoldGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, delay: 0.25 }}
          />

          {[
            "M260 25 L260 495",
            "M25 260 L495 260",
            "M105 105 L415 415",
            "M415 105 L105 415",
            "M260 25 L105 260 L260 495 L415 260 Z",
            "M25 260 L260 105 L495 260 L260 415 Z",
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke={GOLD_LIGHT}
              strokeWidth={i < 4 ? 1.5 : 1.2}
              opacity={i < 4 ? 0.65 : 0.42}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.5 + i * 0.12 }}
            />
          ))}

          <motion.g
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "260px 260px" }}
          >
            <circle cx="260" cy="260" r="80" fill="url(#centerGlow)" />
            <circle
              cx="260"
              cy="260"
              r="44"
              fill="none"
              stroke={GOLD_LIGHT}
              strokeWidth="1.4"
            />
            <path
              d="M260 210 L303 285 H217 Z"
              fill="none"
              stroke={GOLD_LIGHT}
              strokeWidth="1.3"
            />
            <path
              d="M260 310 L303 235 H217 Z"
              fill="none"
              stroke={GOLD_LIGHT}
              strokeWidth="1.3"
            />
            <circle
              cx="260"
              cy="260"
              r="10"
              fill={GOLD_LIGHT}
              filter="url(#heroGoldGlow)"
            />
          </motion.g>

          {[
            [260, 83, "1"],
            [335, 170, "12"],
            [398, 260, "10"],
            [335, 350, "9"],
            [260, 437, "7"],
            [185, 350, "6"],
            [122, 260, "4"],
            [185, 170, "2"],
          ].map(([x, y, text], i) => (
            <motion.text
              key={String(text)}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#FFE58A"
              fontSize="24"
              fontFamily="Cinzel, Georgia, serif"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.08 }}
            >
              {text}
            </motion.text>
          ))}

          {[
            [260, 150, "☉"],
            [185, 220, "☽"],
            [350, 220, "♃"],
            [175, 310, "♂"],
            [350, 310, "♀"],
            [260, 375, "♄"],
          ].map(([x, y, text], i) => (
            <motion.g
              key={String(text)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [1, 1.12, 1] }}
              transition={{
                opacity: { delay: 1.3 + i * 0.1 },
                scale: {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.25,
                },
              }}
            >
              <circle
                cx={x}
                cy={y}
                r="20"
                fill="#D4AF37"
                opacity="0.14"
                filter="url(#heroGoldGlow)"
              />
              <text
                x={x}
                y={Number(y) + 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFD700"
                fontSize="22"
                fontFamily="Georgia, serif"
              >
                {text}
              </text>
            </motion.g>
          ))}

          {[
            [260, 25],
            [495, 260],
            [260, 495],
            [25, 260],
            [105, 105],
            [415, 105],
            [415, 415],
            [105, 415],
          ].map(([x, y], i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="5"
              fill="#FFD700"
              filter="url(#heroGoldGlow)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.18,
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
