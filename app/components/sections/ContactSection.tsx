"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "7385803537",
    href: "tel:7385803537",
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
  },
];

export default function ContactSection() {
  const [error, setError] = useState("");

  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !phone || !service || !message) {
      setError("Please fill all fields before sending.");
      return;
    }

    const cleanPhone = phone.replace(/\s+/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError("Please enter a valid 10 digit Indian mobile number.");
      return;
    }

    const ownerNumber = "917385803537";

    const text = `New Astrology Enquiry

Name: ${name}
Phone: ${cleanPhone}
Service: ${service}

Message:
${message}`;

    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(212,175,55,0.04),transparent_70%)]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center lg:mb-10"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#D4AF37]/70 sm:text-sm">
              Get in Touch
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[44px]">
            Start your guidance journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#F2D6A0]/55 sm:text-base">
            Share your concern and connect directly on WhatsApp for a private
            astrology consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
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
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={
                    item.label === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#D4AF37]/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05]">
                    <Icon size={17} className="text-[#D4AF37]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-[#F2D6A0]/35">
                      {item.label}
                    </p>
                    <p className="break-words text-sm text-[#F2D6A0]/80">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.a
              href="https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#c9a037] via-[#f0d060] to-[#c9a037] px-5 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(212,175,55,0.22)]"
            >
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 backdrop-blur-md sm:p-6"
          >
            <form onSubmit={handleWhatsApp} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  aria-label="Your name"
                  required
                  className="min-h-11 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-sm text-[#F2D6A0]/80 placeholder:text-[#F2D6A0]/25 focus:border-[#D4AF37]/40 focus:outline-none"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter mobile number"
                  aria-label="Mobile number"
                  required
                  className="min-h-11 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-sm text-[#F2D6A0]/80 placeholder:text-[#F2D6A0]/25 focus:border-[#D4AF37]/40 focus:outline-none"
                />
              </div>

              <select
                name="service"
                defaultValue=""
                aria-label="Select astrology service"
                required
                className="min-h-11 rounded-xl border border-white/[0.08] bg-[#141426] px-3.5 py-2.5 text-sm text-[#F2D6A0]/80 focus:border-[#D4AF37]/40 focus:outline-none"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Kundli Reading">Kundli Reading</option>
                <option value="Marriage Compatibility">
                  Marriage Compatibility
                </option>
                <option value="Career Guidance">Career Guidance</option>
                <option value="Vastu Consultation">Vastu Consultation</option>
                <option value="Numerology">Numerology</option>
                <option value="Face Reading">Face Reading</option>
                <option value="Palmistry">Palmistry</option>
              </select>

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us what you'd like guidance on..."
                aria-label="Message"
                required
                className="min-h-32 resize-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-sm text-[#F2D6A0]/80 placeholder:text-[#F2D6A0]/25 focus:border-[#D4AF37]/40 focus:outline-none"
              />

              {error && (
                <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-400">
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.05] py-3 text-sm font-medium text-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37]/10"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
