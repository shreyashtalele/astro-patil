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
    <footer className="relative overflow-hidden border-t border-white/[0.06] px-4 py-10 sm:px-6 lg:px-16">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-[120px] w-[300px] rounded-full bg-[#D4AF37]/[0.03] blur-3xl sm:w-[400px]" />
      </div>

      <div className="section-container relative">
        {/* Main grid */}
        <div className="grid gap-8 border-b border-white/[0.06] pb-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="inline-flex">
              <span className="text-sm font-semibold tracking-[0.22em] text-[#F2D6A0]">
                ASTRO PATIL
              </span>
            </a>
            <p className="mt-3 max-w-[240px] text-center text-sm leading-relaxed text-[#F2D6A0]/50 md:max-w-none md:text-left">
              Vedic Astrology, Vastu, Palmistry, Numerology, Face Reading and
              Remedies.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-2 md:items-center">
            <h4 className="mb-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4AF37]/60">
              Navigation
            </h4>
            <nav className="flex flex-col items-center gap-2 md:items-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#F2D6A0]/60 transition-colors duration-200 hover:text-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4AF37]/60">
              Connect
            </h4>

            {/* Social icons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-end">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/55 transition-all duration-300 hover:scale-105 sm:h-10 sm:w-10 ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Direct contact shortcut */}
            <a
              href="tel:+917385803537"
              className="mt-1 text-xs text-[#F2D6A0]/35 transition-colors duration-200 hover:text-[#D4AF37]/70"
            >
              +91 73858 03537
            </a>
          </div>
        </div>

        {/* Bottom bar */}
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
