"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, CheckCircle, Lock } from "lucide-react";

import careerImg from "../../assets/image/career.png";
import faceImg from "../../assets/image/facereading.png";
import financeImg from "../../assets/image/finance.png";
import kundliImg from "../../assets/image/kundalireading.png";
import marriageImg from "../../assets/image/marraige.png";
import moneyImg from "../../assets/image/money.png";
import muhurtaImg from "../../assets/image/muhurta.png";
import numerologyImg from "../../assets/image/numerology.png";
import palmistryImg from "../../assets/image/palmistry.png";
import vastuImg from "../../assets/image/vastu.png";

type Service = {
  title: string;
  desc: string;
  image: StaticImageData;
};

const services: Service[] = [
  {
    title: "Kundli Reading",
    desc: "In-depth birth chart analysis to uncover life patterns, strengths, and future possibilities with precise astrological insights.",
    image: kundliImg,
  },
  {
    title: "Palmistry",
    desc: "Hand analysis to reveal personality traits, life direction, health indicators, and hidden potential.",
    image: palmistryImg,
  },
  {
    title: "Face Reading",
    desc: "Understand personality traits, emotions, behavior patterns, and life tendencies through facial analysis.",
    image: faceImg,
  },
  {
    title: "Vastu Consultation",
    desc: "Align your home or workspace with Vastu principles to attract positivity, growth, and balance.",
    image: vastuImg,
  },
  {
    title: "Marriage Compatibility",
    desc: "Detailed kundli matching to evaluate emotional, mental, and spiritual compatibility for long-term harmony.",
    image: marriageImg,
  },
  {
    title: "Career & Education Guidance",
    desc: "Clarity on job opportunities, promotions, government roles, and academic direction based on planetary alignment.",
    image: careerImg,
  },
  {
    title: "Numerology",
    desc: "Discover your life path, destiny numbers, and how they influence decisions, relationships, and success.",
    image: numerologyImg,
  },
  {
    title: "Muhurta",
    desc: "Find the perfect time for weddings, business launches, travel, and major life events.",
    image: muhurtaImg,
  },
  {
    title: "Money & Growth",
    desc: "Understand financial blocks, money flow, and growth opportunities to build better stability and prosperity.",
    image: moneyImg,
  },
  {
    title: "Finance Guidance",
    desc: "Astrological guidance for income, savings, investments, and financial decision-making.",
    image: financeImg,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-3xl sm:h-[350px] sm:w-[350px]" />

      <div className="section-container relative z-10 text-[#F2D6A0]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center md:text-left"
        >
          <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
            <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/70 to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#D4AF37]/70 sm:text-[13px]">
              What I Offer
            </span>
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:mx-0 lg:text-[42px]">
            Astrology services for every important life decision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#171124]/80 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:shadow-[0_24px_70px_rgba(212,175,55,0.10)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0B1A] sm:aspect-[16/11] lg:aspect-[16/10]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority={i === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#171124]" />
                <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#171124] to-transparent" />
              </div>

              <div className="relative flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6">
                <h3 className="mb-3 text-lg font-semibold leading-snug text-white">
                  {service.title}
                </h3>

                <p className="text-sm leading-6 text-[#F2D6A0]/68">
                  {service.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-5 backdrop-blur-md sm:px-8"
        >
          <div className="grid grid-cols-1 gap-4 text-xs text-[#F2D6A0]/65 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, text: "9+ Years Experience" },
              { icon: Users, text: "5000+ Clients Guided" },
              { icon: CheckCircle, text: "Root Cause Analysis" },
              { icon: Lock, text: "100% Confidential" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3 sm:justify-start"
                >
                  <Icon size={14} className="shrink-0 text-[#D4AF37]" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
