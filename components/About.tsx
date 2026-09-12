"use client";

import { motion } from "framer-motion";
import { profile, timeline } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative border-t border-line px-6 py-28 md:px-12 md:py-36">
      <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-h2 uppercase text-bone">About</h2>
          <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-bone2">
            {profile.about}
          </p>
        </motion.div>

        <div className="flex flex-col">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="group grid grid-cols-[100px_1fr] gap-6 border-t border-line py-8 last:border-b"
            >
              <span className="text-sm text-flame">{item.year}</span>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wide text-bone transition-colors duration-300 group-hover:text-flame">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-bone2 md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
