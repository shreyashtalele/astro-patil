"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5],
        rootMargin: "-80px 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className={`transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#050510]/80 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex h-16 items-center justify-between lg:h-20">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="relative"
          >
            <h1 className="text-[15px] font-semibold tracking-[0.22em] text-[#F6DFA8] sm:text-lg lg:text-xl lg:tracking-[0.3em]">
              ASTROPATIL
            </h1>

            <span className="absolute -bottom-1 left-0 h-px w-14 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/70 to-transparent sm:w-16" />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  active === link.href
                    ? "text-[#D4AF37]"
                    : "text-[#F6DFA8]/65 hover:text-[#F6DFA8]"
                }`}
              >
                {link.label}

                {active === link.href && (
                  <motion.span
                    layoutId="desktop-active"
                    className="absolute -bottom-2 left-0 h-px w-full bg-[#D4AF37]"
                  />
                )}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group relative hidden items-center justify-center overflow-hidden rounded-full px-6 py-3 lg:flex"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37]" />
            <span className="absolute inset-[1px] rounded-full bg-[#080814] transition-opacity duration-300 group-hover:opacity-0" />

            <span className="relative text-xs font-bold uppercase tracking-[0.22em] text-[#F6DFA8] transition-colors duration-300 group-hover:text-[#070713]">
              Get Guidance
            </span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#F6DFA8] lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="section-container max-h-[calc(100vh-64px)] overflow-y-auto pb-4 lg:hidden"
            >
              <div className="rounded-2xl border border-[#D4AF37]/12 bg-[#050510]/95 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
                <div className="flex flex-col">
                  {links.map((link) => {
                    const isActive = active === link.href;

                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`border-b border-white/[0.07] py-3.5 text-base font-medium transition-colors last:border-b-0 ${
                          isActive ? "text-[#D4AF37]" : "text-[#F6DFA8]/82"
                        }`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-[#070713] shadow-[0_10px_30px_rgba(212,175,55,0.25)]"
                >
                  Get Guidance
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
