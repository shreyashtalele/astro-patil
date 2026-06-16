"use client";

import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

const HeroVisual = dynamic(() => import("./HeroVisual"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pt-28 md:px-10 lg:min-h-screen lg:px-16 lg:pb-16 lg:pt-28"
    >
      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-b from-transparent to-[#0B0B1A]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-16">
        <HeroContent />

        {/* Visual only on lg+ */}
        <div className="hidden min-h-[420px] w-full items-center justify-center lg:flex xl:min-h-[520px]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
