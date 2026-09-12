"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";
import { getAssistantReply, quickQuestions } from "@/lib/assistant";
import { profile } from "@/lib/data";

type Message = { role: "user" | "assistant"; text: string };

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: `Hi, I'm a quick assistant for ${profile.name}'s work. Ask me about projects, skills, or how to get in touch.` }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = getAssistantReply(trimmed);
    setMessages((prev) => [...prev, { role: "user", text: trimmed }, { role: "assistant", text: reply }]);
    setInput("");
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        data-cursor-hover
        aria-label={open ? "Close assistant" : "Open assistant"}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.06 }}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-flame text-ink shadow-[0_0_30px_rgba(255,75,43,0.4)] md:bottom-8 md:right-8"
      >
        {open ? <X size={22} /> : <Sparkles size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="AI assistant"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 left-4 z-40 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-line bg-panel md:bottom-28 md:left-auto md:right-8 md:w-96"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div>
                <p className="text-sm font-medium text-bone">Ask about Nihal</p>
                <p className="text-xs text-bone2">Projects · Skills · Availability</p>
              </div>
              <button aria-label="Close assistant" onClick={() => setOpen(false)} className="text-bone2 hover:text-bone">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] whitespace-pre-line rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "assistant"
                      ? "bg-panel2 text-bone"
                      : "ml-auto bg-flame text-ink"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="flex flex-wrap gap-2 border-t border-line px-5 py-3">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-line px-3 py-1.5 text-xs text-bone2 transition-colors hover:border-flame hover:text-bone"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-line px-4 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question..."
                aria-label="Message"
                className="flex-1 bg-transparent px-2 py-2 text-sm text-bone placeholder:text-bone2 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-flame text-ink"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
