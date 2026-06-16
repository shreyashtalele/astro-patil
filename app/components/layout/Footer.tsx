import {
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20to%20book%20a%20consultation.",
    icon: <FaWhatsapp size={17} />,
    hover: "hover:border-[#25D366]/40 hover:text-[#25D366]",
    external: true,
  },
  {
    label: "Call",
    href: "tel:+917385803537",
    icon: <FaPhoneAlt size={14} />,
    hover: "hover:border-[#D4AF37]/40 hover:text-[#D4AF37]",
    external: false,
  },
  {
    label: "Email",
    href: "mailto:astropatilofficial@gmail.com",
    icon: <FaEnvelope size={14} />,
    hover: "hover:border-[#D4AF37]/40 hover:text-[#D4AF37]",
    external: false,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/astropatil_",
    icon: <FaInstagram size={16} />,
    hover: "hover:border-[#E1306C]/40 hover:text-[#E1306C]",
    external: true,
  },
  {
    label: "AstroTalk",
    href: "https://chat.astrotalk.com/BnlV/j0phqq83?slug=Trishit",
    icon: <span className="text-[11px] font-bold tracking-wide">AT</span>,
    hover: "hover:border-[#FF6B35]/40 hover:text-[#FF6B35]",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] py-10 sm:py-12 lg:py-16">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-[100px] w-[280px] rounded-full bg-[#D4AF37]/[0.03] blur-3xl sm:w-[380px]" />
      </div>

      <div className="section-container relative">
        {/* ── Main grid ──
            mobile  → 1 col, everything centred
            sm      → 2 col [brand | nav+connect]
            md      → 3 col [brand | nav | connect]
        */}
        <div className="grid gap-8 border-b border-white/[0.06] pb-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <a href="#home" className="inline-flex">
              <span className="text-sm font-semibold tracking-[0.22em] text-[#F2D6A0]">
                ASTRO PATIL
              </span>
            </a>
            <p className="mt-3 max-w-[220px] text-center text-sm leading-relaxed text-[#F2D6A0]/50 sm:max-w-none sm:text-left">
              Vedic Astrology, Vastu, Palmistry, Numerology, Face Reading and
              Remedies.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center">
            <h4 className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4AF37]/60">
              Navigation
            </h4>
            <nav className="flex flex-col items-center gap-2.5">
              {navLinks.map((link) => (
                <a /* <-- ADDED MISSING <a */
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#F2D6A0]/60 transition-colors duration-200 hover:text-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect —
              on sm (2-col) this sits below brand in col 2,
              on md (3-col) it gets its own column right-aligned
          */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4AF37]/60">
              Connect
            </h4>

            {/* Social icons —
                5 icons in a row can get tight on 320px.
                flex-wrap keeps them safe at any width.
            */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
              {socialLinks.map((s) => (
                <a /* <-- ADDED MISSING <a */
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/55 transition-all duration-300 hover:scale-105 ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <a /* <-- ADDED MISSING <a */
              href="tel:+917385803537"
              className="mt-3 text-xs text-[#F2D6A0]/35 transition-colors duration-200 hover:text-[#D4AF37]/70"
            >
              +91 73858 03537
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-2 pt-5 sm:flex-row">
          <p className="text-xs text-[#F2D6A0]/40">
            © {new Date().getFullYear()} Astro Patil. All rights reserved.
          </p>
          <p className="text-xs text-[#F2D6A0]/30">
            Vedic Astrology · Palmistry · Vastu
          </p>
        </div>
      </div>
    </footer>
  );
}
