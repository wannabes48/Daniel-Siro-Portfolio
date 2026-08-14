"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  index?: number;
}

export function Reveal({ children, className = "", index = 0 }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      custom={index}
      className={className}
    >
      {children}
    </motion.div>
  );
}
