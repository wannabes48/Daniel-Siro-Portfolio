"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./reveal";

const FAQS = [
  {
    question: "Who owns the final product and code?",
    answer: "You do. Once the final payment is made, you own 100% of the intellectual property. I provide you with full access to the repository and all project assets, ensuring you have total control and are never \"locked in\" to a specific vendor or platform.",
  },
  {
    question: "How do you price your projects?",
    answer: "I work on a fixed-project basis rather than hourly rates. This ensures we are both focused on the final outcome and business value, not just the time spent. After an initial discovery call, I provide a detailed, itemized quote tailored to your specific requirements.",
  },
  {
    question: "What is your payment structure?",
    answer: "I follow a milestone-based payment schedule. Projects begin with a 50% commitment deposit to secure your spot in my development sprint. The remaining balance is split across key delivery milestones, such as Design Approval and Final Deployment, ensuring transparency throughout the build.",
  },
  {
    question: "What happens after the project is live?",
    answer: "I don't just \"hand over the keys.\" Every project includes a post-launch support period to ensure everything is running smoothly. I also offer long-term maintenance and growth packages to keep your systems secure, updated, and optimized as your business scales.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-32 pb-16 w-full" id="faq">
      <Reveal>
        <div className="flex items-center justify-between mb-4 border-b border-[var(--border)] pb-2">
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--fg-muted)]">
            FAQ
          </span>
          <Plus size={14} className="text-[var(--fg-muted)]" />
        </div>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--fg)] mb-12 tracking-[-0.01em]">
          Frequently Asked Questions
        </h2>
      </Reveal>

      <div className="flex flex-col border-b border-[var(--border)]">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={i} index={i}>
              <div className="border-t border-[var(--border)]">
                <button
                  className="w-full py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-[16px] font-medium text-[var(--fg)] pr-8">
                    {faq.question}
                  </span>
                  <span className="text-[var(--fg-muted)] flex-shrink-0">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.25, delay: 0.05, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pt-2 text-[15px] text-[var(--fg-secondary)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
