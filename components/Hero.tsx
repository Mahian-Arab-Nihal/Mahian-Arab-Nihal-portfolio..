"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null
});

export default function Hero() {
  const scrollProgress = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let raf: number;
    const update = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const height = sectionRef.current.offsetHeight;
        const progress = Math.min(Math.max(-rect.top / (height * 0.8), 0), 1);
        scrollProgress.current = progress;
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden">
      <div className="absolute inset-0">
        <HeroScene scrollProgress={scrollProgress} />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-28 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 max-w-md text-sm text-bone2 md:text-base"
        >
          {profile.title} — {profile.subtitles.join(" · ")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display text-hero pointer-events-none max-w-4xl uppercase text-bone"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mt-8 max-w-lg text-balance text-lg leading-relaxed text-bone2 md:text-xl"
        >
          Building bold brand identities and clothing video ads that make businesses impossible to scroll past.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            data-cursor-hover
            className="rounded-full bg-flame px-7 py-3 text-sm font-medium text-ink transition-transform duration-300 ease-smooth hover:scale-[1.04]"
          >
            View the work
          </a>
          <a
            href="#contact"
            data-cursor-hover
            className="rounded-full border border-line px-7 py-3 text-sm font-medium text-bone transition-colors duration-300 ease-smooth hover:border-bone"
          >
            Start a project
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 pb-8 text-xs text-bone2 md:px-12">
        <span>Scroll</span>
        <span className="hidden md:inline">Brand · Video · Visual Strategy</span>
      </div>
    </section>
  );
}
