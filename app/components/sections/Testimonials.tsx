"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

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

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) setCount(3);
      else if (window.innerWidth >= 768) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

const slideVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, ease: "easeOut" },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
    transition: { duration: 0.2, ease: "easeIn" },
  }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const isPaused = useRef(false);
  const visibleCount = useVisibleCount();
  const totalGroups = Math.ceil(testimonials.length / visibleCount);

  useEffect(() => {
    setIndex(0);
  }, [visibleCount]);

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + totalGroups) % totalGroups);
    },
    [totalGroups],
  );

  useEffect(() => {
    const t = setInterval(() => {
      if (!isPaused.current) go(1);
    }, AUTO_DELAY);
    return () => clearInterval(t);
  }, [go]);

  const visible = testimonials.slice(
    index * visibleCount,
    index * visibleCount + visibleCount,
  );

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-10 sm:py-12 lg:py-16"
      onMouseEnter={() => {
        isPaused.current = true;
      }}
      onMouseLeave={() => {
        isPaused.current = false;
      }}
      onTouchStart={() => {
        isPaused.current = true;
      }}
      onTouchEnd={() => {
        isPaused.current = false;
      }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.03] blur-3xl sm:h-[320px] sm:w-[320px]" />

      <div className="section-container relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/70 sm:w-10" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]/80">
              Testimonials
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/70 to-transparent sm:w-10" />
          </div>

          <h2
            className="
            font-semibold leading-tight text-white
            text-[24px]
            sm:text-[30px]
            md:text-[36px]
            lg:text-[42px]
          "
          >
            Trusted by clients across India
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#F2D6A0]/55 sm:mt-4 sm:text-[15px]">
            Real experiences from clients who received clarity through Vedic
            astrology, kundli reading, vastu, numerology and remedies.
          </p>
        </motion.div>

        {/* ── Carousel ── */}
        <div className="relative">
          {/* Nav arrows — md+ only, positioned outside carousel */}
          {totalGroups > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => go(-1)}
                className="
                  absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2
                  h-9 w-9 items-center justify-center
                  rounded-full border border-white/10 bg-[#0B0B1A]/80
                  text-[#F2D6A0]/60 backdrop-blur-sm
                  transition-all duration-200
                  hover:border-[#D4AF37]/30 hover:text-[#D4AF37]
                  md:flex
                  lg:-left-5
                "
              >
                <ChevronLeft size={17} />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => go(1)}
                className="
                  absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2
                  h-9 w-9 items-center justify-center
                  rounded-full border border-white/10 bg-[#0B0B1A]/80
                  text-[#F2D6A0]/60 backdrop-blur-sm
                  transition-all duration-200
                  hover:border-[#D4AF37]/30 hover:text-[#D4AF37]
                  md:flex
                  lg:-right-5
                "
              >
                <ChevronRight size={17} />
              </button>
            </>
          )}

          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${index}-${visibleCount}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
              >
                {visible.map((item, i) => (
                  <motion.article
                    key={`${item.name}-${index}-${i}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, delay: i * 0.06 }}
                    className="h-full"
                  >
                    <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#D4AF37]/25 via-white/8 to-transparent p-px">
                      <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#171124]/90 p-5 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(212,175,55,0.12)] sm:p-6">
                        {/* Top row */}
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]">
                            <Quote size={17} fill="currentColor" />
                          </div>
                          {item.highlight && (
                            <span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Review text */}
                        <p className="flex-1 text-[13px] leading-6 text-[#F2D6A0]/78 sm:text-sm sm:leading-7">
                          {item.text}
                        </p>

                        {/* Stars */}
                        <div className="mt-4 flex gap-1">
                          {Array.from({ length: item.rating }).map((_, si) => (
                            <Star
                              key={si}
                              size={12}
                              className="text-[#D4AF37]"
                              fill="currentColor"
                            />
                          ))}
                        </div>

                        {/* Author */}
                        <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F2D6A0] via-[#D4AF37] to-[#B76E79] text-xs font-bold text-[#0B0B1A]">
                            {item.name[0]}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white">
                              {item.name}
                            </h4>
                            <p className="mt-0.5 text-xs text-[#F2D6A0]/50">
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
        </div>

        {/* ── Dots — larger tap targets on mobile ── */}
        {totalGroups > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2.5 sm:mt-8">
            {Array.from({ length: totalGroups }).map((_, di) => (
              <button
                key={di}
                type="button"
                onClick={() => {
                  setDirection(di > index ? 1 : -1);
                  setIndex(di);
                }}
                aria-label={`Go to group ${di + 1}`}
                /* Outer div is 28px tall for tap target, dot is visual only */
                className="flex h-7 w-7 items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    di === index
                      ? "h-2 w-8 bg-[#D4AF37]"
                      : "h-2 w-2 bg-[#F2D6A0]/25 hover:bg-[#D4AF37]/50"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
