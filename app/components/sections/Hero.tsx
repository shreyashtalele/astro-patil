"use client";

import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

const HeroVisual = dynamic(() => import("./HeroVisual"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-b from-transparent to-[#0B0B1A]" />

      {/*
        Single padding wrapper — no duplication between section + grid.
        pt accounts for fixed navbar height:
          mobile  → 56px navbar + 16px gap = pt-20
          sm      → 64px navbar + 16px gap = pt-24
          lg      → 80px navbar + 24px gap = pt-32
      */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-7xl
          px-4 pb-14 pt-20
          sm:px-6 sm:pb-16 sm:pt-24
          md:px-8 md:pb-18
          lg:px-8 lg:pb-20 lg:pt-32
          xl:px-10
          grid items-center gap-10
          lg:grid-cols-[1.05fr_0.95fr] lg:gap-8
          xl:gap-14
        "
      >
        <HeroContent />

        {/* Visual — lg+ only */}
        <div className="hidden min-h-[420px] w-full items-center justify-center lg:flex xl:min-h-[500px]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
