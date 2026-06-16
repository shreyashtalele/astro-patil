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
      className="relative scroll-mt-24 overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:py-18 lg:px-16 lg:py-20"
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-16 w-full bg-gradient-to-b from-[#0B0B1A] to-transparent" />

      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-3xl sm:h-[360px] sm:w-[360px]" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mx-auto w-full max-w-[225px] shrink-0 sm:max-w-[250px] md:max-w-[270px] lg:max-w-[320px]"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#D4AF37]/15 to-[#B76E79]/[0.08] opacity-60 blur-xl" />

            <div className="relative rounded-2xl bg-gradient-to-br from-[#D4AF37]/40 via-[#D4AF37]/10 to-[#B76E79]/25 p-[1.5px]">
              <div className="relative overflow-hidden rounded-2xl bg-[#0d0b1a]">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/Image.png"
                    alt="Astro Patil - Vedic Astrologer and Astrology Consultant"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 225px, (max-width: 768px) 250px, (max-width: 1024px) 270px, 320px"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b1a]/70 via-transparent to-[#0d0b1a]/20" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute -bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-[#D4AF37]/20 bg-[#0d0b1a]/90 px-3 py-2 backdrop-blur-md sm:left-auto sm:right-[-18px] sm:translate-x-0"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[10px] text-[#D4AF37]">
                ✦
              </div>

              <div>
                <p className="mb-0.5 text-[11px] font-medium leading-none text-white">
                  Vedic Certified
                </p>
                <p className="text-[10px] leading-none text-[#F2D6A0]/40">
                  Since 2009
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex w-full flex-col justify-center text-center md:text-left"
          >
            <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#D4AF37]/60 sm:text-[13px]">
                About Us
              </span>
            </div>

            <h2 className="mx-auto mb-5 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:mx-0 lg:text-[42px]">
              Rooted in tradition,{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F2D6A0] bg-clip-text text-transparent">
                guided by stars
              </span>
            </h2>

            <div className="mx-auto max-w-2xl md:mx-0">
              <p className="mb-3 text-sm leading-relaxed text-[#F2D6A0]/55 sm:text-[15px]">
                I am a Software Engineer and a dedicated Astrologer with 9 years
                of professional experience, proudly carrying forward a sacred
                20+ year family legacy in Vedic Astrology, Palmistry, Vastu
                Shastra, Numerology, Face Reading, and Lal Kitab ✨.
              </p>

              <p className="mb-3 text-sm leading-relaxed text-[#F2D6A0]/55 sm:text-[15px]">
                By blending the analytical precision of a tech professional with
                deep ancestral wisdom, I provide highly accurate chart readings
                and palm analysis. My approach focuses on identifying the root
                causes of life’s challenges and offering effective, time-tested
                remedies.
              </p>

              <p className="mb-6 text-sm leading-relaxed text-[#F2D6A0]/55 sm:text-[15px]">
                Integrating these ancient sciences with Yoga 🧘, I offer a
                holistic path to help you navigate career, relationships,
                health, and life decisions with clarity, confidence, and peace
                of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 min-[430px]:grid-cols-3">
              {stats.map((stat, i) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                    className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 text-center transition-colors duration-300 hover:border-[#D4AF37]/20 md:items-start md:text-left"
                  >
                    <Icon size={14} className="text-[#D4AF37]/60" />

                    <p className="text-lg font-semibold leading-none text-white">
                      {stat.value}
                    </p>

                    <p className="text-[11px] leading-tight text-[#F2D6A0]/40">
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
