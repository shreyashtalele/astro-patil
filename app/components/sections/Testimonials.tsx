"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sakshi",
    role: "Mumbai",
    text: "Incredibly accurate birth chart reading. The predictions aligned perfectly with events in my life.",
    rating: 5,
  },
  {
    name: "Piyush",
    role: "Nashik",
    text: "I was skeptical at first, but the kundli reading was so accurate it left me speechless.",
    rating: 5,
  },
  {
    name: "Vaishnavi",
    role: "Nagpur",
    text: "The marriage compatibility reading gave us deep clarity before our wedding.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Aishwarya",
    role: "Mumbai",
    text: "Career guidance was spot on. Helped me make a major decision with confidence.",
    rating: 5,
  },
  {
    name: "Dipanshu",
    role: "Kolkata",
    text: "Very accurate predictions and helpful guidance. Highly recommended.",
    rating: 5,
  },
  {
    name: "Priya",
    role: "Pune",
    text: "The gemstone recommendation made a noticeable difference in just weeks.",
    rating: 5,
    highlight: true,
  },
];

const AUTO_DELAY = 4500;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [visibleCount, setVisibleCount] = useState(1);
  const isPaused = useRef(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const totalGroups = Math.ceil(testimonials.length / visibleCount);

  useEffect(() => {
    setIndex(0);
  }, [visibleCount]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % totalGroups);
  }, [totalGroups]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) next();
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, [next]);

  const visibleTestimonials = useMemo(() => {
    const start = index * visibleCount;
    return testimonials.slice(start, start + visibleCount);
  }, [index, visibleCount]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 32 : -32,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -32 : 32,
      scale: 0.98,
      transition: {
        duration: 0.22,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-16 lg:py-20"
      onMouseEnter={() => {
        isPaused.current = true;
      }}
      onMouseLeave={() => {
        isPaused.current = false;
      }}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-3xl sm:h-[360px] sm:w-[360px]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center lg:mb-10"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/70 sm:w-10" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]/80 sm:text-sm sm:tracking-[0.28em]">
              Testimonials
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/70 to-transparent sm:w-10" />
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[46px]">
            Trusted by clients across India
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#F2D6A0]/60 sm:mt-5 sm:text-base sm:leading-7">
            Real experiences from clients who received clarity through Vedic
            astrology, kundli reading, vastu, numerology and remedies.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${index}-${visibleCount}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6"
            >
              {visibleTestimonials.map((item, i) => (
                <motion.article
                  key={`${item.name}-${index}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.35,
                      delay: i * 0.05,
                    },
                  }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#D4AF37]/30 via-white/10 to-transparent p-px">
                    <div className="relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#171124]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_0_42px_rgba(212,175,55,0.14)] sm:min-h-[250px] sm:p-6">
                      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-3xl" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_48%)]" />

                      <div className="relative mb-5 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] sm:h-12 sm:w-12">
                          <Quote size={20} fill="currentColor" />
                        </div>

                        {item.highlight && (
                          <span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37] sm:text-[10px]">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="relative flex-1 text-sm leading-6 text-[#F2D6A0]/80 sm:text-[15px] sm:leading-7">
                        {item.text}
                      </p>

                      <div className="relative mt-5 flex gap-1.5">
                        {Array.from({ length: item.rating }).map(
                          (_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={15}
                              className="text-[#D4AF37]"
                              fill="currentColor"
                            />
                          ),
                        )}
                      </div>

                      <div className="relative mt-5 flex items-center gap-4 border-t border-white/10 pt-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F2D6A0] via-[#D4AF37] to-[#B76E79] text-sm font-bold text-[#0B0B1A] sm:h-12 sm:w-12">
                          {item.name[0]}
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-xs text-[#F2D6A0]/50">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: totalGroups }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => {
                setDirection(dotIndex > index ? 1 : -1);
                setIndex(dotIndex);
              }}
              aria-label={`Go to testimonial group ${dotIndex + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIndex === index
                  ? "w-9 bg-[#D4AF37]"
                  : "w-2 bg-[#F2D6A0]/25 hover:bg-[#D4AF37]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
