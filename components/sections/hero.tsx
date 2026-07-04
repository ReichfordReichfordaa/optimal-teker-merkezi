"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Navigation, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlignmentReticle } from "@/components/shared/alignment-reticle";
import { LINKS, BRANDS_CARRIED } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/types";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-obsidian text-white">
      {/* Background placeholder — swap for real facility photography or a
          muted looping video of the workshop floor. Kept as an art-directed
          gradient + signature graphic so the page never looks "broken". */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a1a1d_0%,_#0A0A0B_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0)_0%,rgba(10,10,11,0.4)_70%,#0A0A0B_100%)]" />
        <AlignmentReticle className="absolute -right-[18%] top-1/2 h-[130vh] w-[130vh] -translate-y-1/2 opacity-70 sm:-right-[10%]" />
      </div>

      <div className="container relative flex max-w-8xl flex-1 flex-col justify-center pb-24 pt-32 lg:pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <Badge variant="dark">{dict.hero.eyebrow}</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-display-1 font-display font-bold text-white"
          >
            {dict.hero.headline}
            <br />
            <span className="text-accent">{dict.hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/60"
          >
            {dict.hero.subheadline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild variant="accent" size="lg">
              <a href={LINKS.callPrimary}>
                <Phone className="h-4 w-4" strokeWidth={2} />
                {dict.buttons.call}
              </a>
            </Button>
            <Button asChild variant="outline-inverse" size="lg">
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                {dict.buttons.whatsapp}
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/[0.08]">
              <a href={LINKS.mapsDirections} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4" strokeWidth={2} />
                {dict.buttons.directions}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Gauge-readout stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4 lg:mt-24"
        >
          {dict.hero.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-[12px] text-white/45">{s.label}</div>
            </div>
          ))}
          <div className="col-span-2 flex items-center gap-2 sm:col-span-1 sm:justify-end">
            {BRANDS_CARRIED.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/70"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label={dict.buttons.scrollToServices}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/40 transition-colors hover:text-white/70 sm:flex"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
        </motion.div>
      </a>
    </section>
  );
}
