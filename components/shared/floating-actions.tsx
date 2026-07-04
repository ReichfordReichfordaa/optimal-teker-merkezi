"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { LINKS } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/types";

export function FloatingActions({ dict }: { dict: Dictionary }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-4 bottom-4 z-40 flex gap-2 md:hidden"
    >
      <a
        href={LINKS.callPrimary}
        className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-obsidian py-3.5 text-sm font-medium text-white shadow-premium-lg active:scale-[0.98]"
      >
        <Phone className="h-4 w-4" strokeWidth={2} />
        {dict.buttons.call}
      </a>
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-medium text-white shadow-glow active:scale-[0.98]"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2} />
        {dict.buttons.whatsapp}
      </a>
    </motion.div>
  );
}
