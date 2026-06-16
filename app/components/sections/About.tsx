"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Clock } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Clock, value: "9+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Clients Guided" },
  { icon: Sparkles, value: "20+", label: "Years Legacy" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-16 lg:py-24"
    >
      {/* Top fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-16 w-full bg-gradient-to-b from-[#0B0B1A] to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[240px] w-[240px] -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.02] blur-3xl sm:h-[320px] sm:w-[320px]" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mx-auto w-full max-w-[200px] shrink-0 sm:max-w-[230px] md:max-w-full"
          >
            {/* Glow halo */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#D4AF37]/12 to-[#B76E79]/[0.06] opacity-60 blur-xl" />

            {/* Portrait frame */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#D4AF37]/40 via-[#D4AF37]/10 to-[#B76E79]/25 p-[1.5px]">
              <div className="relative overflow-hidden rounded-2xl bg-[#0d0b1a]">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/Image.png"
                    alt="Astro Patil - Vedic Astrologer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 230px, (max-width: 1024px) 280px, 320px"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b1a]/70 via-transparent to-[#0d0b1a]/15" />
              </div>
            </div>

            {/* Certified badge — positioned inside frame to avoid overflow */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute -bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-xl border border-[#D4AF37]/20 bg-[#0d0b1a]/90 px-3 py-2 backdrop-blur-md sm:-bottom-4 md:left-auto md:right-0 md:translate-x-0"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[9px] text-[#D4AF37]">
                ✦
              </div>
              <div>
                <p className="text-[11px] font-medium leading-none text-white">
                  Vedic Certified
                </p>
                <p className="mt-0.5 text-[10px] leading-none text-[#F2D6A0]/40">
                  Since 2009
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex w-full flex-col justify-center pt-6 text-center md:pt-0 md:text-left"
          >
            {/* Eyebrow */}
            <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4AF37]/60 sm:text-xs">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-5 text-[28px] font-semibold leading-tight text-white sm:text-3xl md:text-[32px] lg:text-[38px] xl:text-[42px]">
              Rooted in tradition,{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F2D6A0] bg-clip-text text-transparent">
                guided by stars
              </span>
            </h2>

            {/* Body text */}
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-[#F2D6A0]/55 sm:text-[15px]">
                I am a Software Engineer and a dedicated Astrologer with 9 years
                of professional experience, proudly carrying forward a sacred
                20+ year family legacy in Vedic Astrology, Palmistry, Vastu
                Shastra, Numerology, Face Reading, and Lal Kitab ✨.
              </p>
              <p className="text-sm leading-relaxed text-[#F2D6A0]/55 sm:text-[15px]">
                By blending the analytical precision of a tech professional with
                deep ancestral wisdom, I provide highly accurate chart readings
                and palm analysis. My approach focuses on identifying root
                causes and offering effective, time-tested remedies.
              </p>
              <p className="pb-2 text-sm leading-relaxed text-[#F2D6A0]/55 sm:text-[15px]">
                Integrating these ancient sciences with Yoga 🧘, I offer a
                holistic path to help you navigate career, relationships,
                health, and life decisions with clarity and confidence.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 text-center transition-colors duration-300 hover:border-[#D4AF37]/20 sm:p-4 md:items-start md:text-left"
                  >
                    <Icon
                      size={13}
                      className="text-[#D4AF37]/60 sm:size-[14px]"
                    />
                    <p className="text-base font-semibold leading-none text-white sm:text-lg">
                      {stat.value}
                    </p>
                    <p className="text-[10px] leading-tight text-[#F2D6A0]/40 sm:text-[11px]">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
