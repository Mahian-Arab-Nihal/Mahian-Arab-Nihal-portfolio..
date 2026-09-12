"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

const allSkills = skillGroups.flatMap((group) =>
  group.items.map((item) => ({ item, group: group.label }))
);

function polarToXY(radius: number, angleDeg: number) {
  const angle = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
}

export default function TechStack() {
  const radius = 220;
  const step = 360 / allSkills.length;

  return (
    <section id="toolkit" className="relative border-t border-line px-6 py-28 md:px-12 md:py-36">
      <h2 className="font-display text-h2 uppercase text-bone">Toolkit</h2>
      <p className="mt-4 max-w-md text-bone2">Software, skills, and the certification behind the work.</p>

      <div className="relative mx-auto mt-20 hidden aspect-square max-w-2xl items-center justify-center md:flex">
        <svg className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          {allSkills.map((_, i) => {
            const { x, y } = polarToXY(radius, i * step - 90);
            return (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke="rgba(245,242,234,0.1)"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-flame bg-panel text-center"
        >
          <span className="font-display text-lg uppercase text-bone">Brand +</span>
          <span className="font-display text-lg uppercase text-flame">AI Design</span>
        </motion.div>

        {allSkills.map((skill, i) => {
          const { x, y } = polarToXY(radius, i * step - 90);
          return (
            <motion.div
              key={skill.item}
              data-cursor-hover
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              whileHover={{ scale: 1.08 }}
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
              className="absolute w-36 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-line bg-panel2 px-3 py-3 text-center"
            >
              <p className="text-xs leading-snug text-bone">{skill.item}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16 grid gap-8 md:hidden">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="font-display text-xl uppercase text-flame">{group.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full border border-line px-4 py-2 text-sm text-bone2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
