"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function FutureCTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Retina-aware resize
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();

    type Particle = {
      ox: number;
      oy: number;
      x: number;
      y: number;
      r: number;
      speed: number;
      angle: number;
      opacity: number;
    };

    let particles: Particle[] = [];

    const buildParticles = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      // Fewer particles on small screens for perf
      const count = w < 480 ? 24 : 45;
      particles = Array.from({ length: count }, () => ({
        ox: Math.random() * w,
        oy: Math.random() * h,
        x: 0,
        y: 0,
        r: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.004 + 0.002,
        angle: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.45 + 0.12,
      }));
    };

    buildParticles();

    const onResize = () => {
      resize();
      buildParticles();
    };
    window.addEventListener("resize", onResize);

    let frame: number;
    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.angle += p.speed;
        p.x = p.ox + Math.cos(p.angle) * 28;
        p.y = p.oy + Math.sin(p.angle) * 18;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.opacity})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0720]/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_50%,rgba(55,20,100,0.28),transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_50%_70%,rgba(212,175,55,0.05),transparent_70%)]" />

      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/50 sm:w-12" />
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4AF37]/60 sm:text-xs">
            Book a Session
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4AF37]/50 sm:w-12" />
        </motion.div>

        {/* Heading — no forced <br> on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <h2 className="mb-4 text-[28px] font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px]">
            Still confused about{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#c9a84c] via-[#F2D6A0] to-[#c9a84c] bg-clip-text text-transparent">
                your future?
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            </span>
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mb-8 max-w-md px-2 text-sm leading-relaxed text-[#F2D6A0]/50 sm:mb-10 sm:px-0 sm:text-[15px]"
        >
          Get personalised guidance rooted in ancient Vedic wisdom. Your clarity
          is one conversation away.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <motion.a
            href="https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20personal%20astrology%20guidance."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#c9a037] via-[#f0d060] to-[#c9a037] px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(212,175,55,0.28)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">Chat on WhatsApp</span>
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-[#F2D6A0]/65 backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/30 hover:text-[#F2D6A0]/85"
          >
            View Services
          </motion.a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-5 text-[11px] tracking-wide text-[#F2D6A0]/30"
        >
          5000+ consultations · 100% confidential · Vedic astrology
        </motion.p>
      </div>
    </section>
  );
}
