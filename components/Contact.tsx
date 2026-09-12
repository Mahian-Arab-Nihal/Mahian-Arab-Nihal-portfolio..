"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

type Status = "idle" | "error" | "success";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (!message || message.length < 10) nextErrors.message = "Tell me a bit more about the project.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("success");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:mahianarabnihal@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative border-t border-line px-6 py-28 md:px-12 md:py-36">
      <div className="grid gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-h2 uppercase text-bone">Start a project</h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-bone2">
            Have a brand or a clothing line that needs a stronger visual story? Send a few details and I'll get back to you.
          </p>
          <div className="mt-10 flex flex-col gap-2 text-sm text-bone2">
            <a data-cursor-hover href="mailto:shymol200932@gmail.com" className="w-fit text-bone transition-colors hover:text-flame">
              shymol200932@gmail.com
            </a>
            
              data-cursor-hover
              href={profile.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-bone transition-colors hover:text-flame"
            >
              Fiverr profile
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-bone2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              aria-invalid={Boolean(errors.name)}
              className="w-full rounded-lg border border-line bg-panel px-4 py-3 text-bone focus:border-flame focus:outline-none"
            />
            {errors.name && <p className="mt-1 text-xs text-flame2">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-bone2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              aria-invalid={Boolean(errors.email)}
              className="w-full rounded-lg border border-line bg-panel px-4 py-3 text-bone focus:border-flame focus:outline-none"
            />
            {errors.email && <p className="mt-1 text-xs text-flame2">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-bone2">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              aria-invalid={Boolean(errors.message)}
              className="w-full rounded-lg border border-line bg-panel px-4 py-3 text-bone focus:border-flame focus:outline-none"
            />
            {errors.message && <p className="mt-1 text-xs text-flame2">{errors.message}</p>}
          </div>

          <button
            type="submit"
            data-cursor-hover
            className="mt-2 rounded-full bg-flame px-7 py-3 text-sm font-medium text-ink transition-transform duration-300 ease-smooth hover:scale-[1.03]"
          >
            Send message
          </button>

          {status === "success" && (
            <p className="text-sm text-gold">Opening your email client to send this along — thank you.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}