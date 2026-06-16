"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 73858 03537",
    href: "tel:+917385803537",
  },
  {
    icon: Mail,
    label: "Email",
    value: "astropatilofficial@gmail.com",
    href: "mailto:astropatilofficial@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, India",
    href: "https://maps.google.com/?q=Pune,India",
    external: true,
  },
];

const services = [
  "Kundli Reading",
  "Marriage Compatibility",
  "Career Guidance",
  "Vastu Consultation",
  "Numerology",
  "Face Reading",
  "Palmistry",
];

const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-[#F2D6A0]/80 placeholder:text-[#F2D6A0]/25 focus:border-[#D4AF37]/40 focus:outline-none transition-colors duration-200 min-h-[44px]";

export default function ContactSection() {
  const [error, setError] = useState("");

  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !phone || !service || !message) {
      setError("Please fill all fields before sending.");
      return;
    }

    const clean = phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(clean)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    const text = `New Astrology Enquiry\n\nName: ${name}\nPhone: ${clean}\nService: ${service}\n\nMessage:\n${message}`;
    window.open(
      `https://wa.me/917385803537?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-10 sm:py-12 lg:py-16"
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(212,175,55,0.04),transparent_70%)]" />

      <div className="section-container relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4AF37]/70 sm:text-xs">
              Get in Touch
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
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
            Start your guidance journey
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#F2D6A0]/55 sm:mt-4 sm:text-[15px]">
            Share your concern and connect directly on WhatsApp for a private
            astrology consultation.
          </p>
        </motion.div>

        {/* ── Two-column layout ──
            mobile  → single column, info on top, form below
            lg+     → side by side [0.9fr | 1.1fr]
        */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
          {/* ── Left — contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-3"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#D4AF37]/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06]">
                    <Icon size={16} className="text-[#D4AF37]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-[#F2D6A0]/35">
                      {item.label}
                    </p>
                    {/*
                      Email: break-all on xs screens (320–479px),
                      break-words on 480px+ — avoids overflow without
                      breaking mid-character on wider screens
                    */}
                    <p className="mt-0.5 text-sm text-[#F2D6A0]/80 break-all min-[480px]:break-words">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="mt-1 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#c9a037] via-[#f0d060] to-[#c9a037] px-5 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(212,175,55,0.2)] transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(212,175,55,0.35)]"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </motion.a>

            {/* Trust note */}
            <p className="text-center text-[11px] text-[#F2D6A0]/30">
              100% private · No data stored · Direct consultation
            </p>
          </motion.div>

          {/* ── Right — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 backdrop-blur-md sm:p-6"
          >
            <form
              onSubmit={handleWhatsApp}
              noValidate
              className="flex flex-col gap-4"
            >
              {/*
                Name + Phone:
                  < 480px  → stacked (1 col)
                  ≥ 480px  → side by side (2 col)
              */}
              <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  aria-label="Your name"
                  autoComplete="name"
                  className={inputClass}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Mobile number"
                  aria-label="Mobile number"
                  autoComplete="tel"
                  inputMode="numeric"
                  maxLength={10}
                  className={inputClass}
                />
              </div>

              {/* Service select */}
              <select
                name="service"
                defaultValue=""
                aria-label="Select astrology service"
                className={`${inputClass} cursor-pointer appearance-none bg-[#141426]`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-[#141426]">
                    {s}
                  </option>
                ))}
              </select>

              {/* Message */}
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us what you'd like guidance on..."
                aria-label="Your message"
                className={`${inputClass} min-h-[120px] resize-none`}
              />

              {/* Error */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-xs text-red-400"
                >
                  {error}
                </motion.p>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="w-full rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] py-3.5 text-sm font-medium text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/12 active:scale-[0.98]"
              >
                Send via WhatsApp →
              </motion.button>

              <p className="text-center text-[11px] text-[#F2D6A0]/30">
                You'll be redirected to WhatsApp to send your message
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
