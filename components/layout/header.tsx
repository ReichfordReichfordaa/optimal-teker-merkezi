"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { LINKS } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: { href: string; label: string }[] = useMemo(
    () => [
      { href: "#about", label: dict.nav.about },
      { href: "#services", label: dict.nav.services },
      { href: "#why", label: dict.nav.why },
      { href: "#gallery", label: dict.nav.gallery },
      { href: "#reviews", label: dict.nav.reviews },
      { href: "#contact", label: dict.nav.contact },
    ],
    [dict.nav.about, dict.nav.contact, dict.nav.gallery, dict.nav.reviews, dict.nav.services, dict.nav.why]
  );

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.12, 0.24, 0.4],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto flex h-[68px] w-full max-w-8xl items-center justify-between rounded-[2rem] border border-white/[0.06] bg-[rgba(10,10,10,.55)] px-4 shadow-[0_18px_60px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[18px] transition-all duration-300 ease-premium sm:h-[76px] sm:px-6 lg:px-7 ${
          scrolled ? "shadow-[0_18px_70px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.07)]" : ""
        }`}
      >
        <Link
          href={`/${locale}`}
          onClick={() => setOpen(false)}
          className="group shrink-0 rounded-full focus-visible:ring-offset-0"
          aria-label="Optimal"
        >
          <Logo
            tone="light"
            className="gap-3"
            markClassName="h-11 w-11 transition-transform duration-500 ease-premium group-hover:rotate-[18deg] group-hover:scale-105 sm:h-12 sm:w-12"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-full bg-white/[0.03] p-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => handleNavClick(item.href)}
                className="group relative rounded-full px-4 py-2.5 text-[15px] font-medium tracking-[-0.01em] text-[rgba(255,255,255,.82)] transition-colors duration-300 ease-premium hover:text-[#FF6A2A] focus-visible:ring-offset-0"
              >
                {isActive && (
                  <motion.span
                    layoutId="desktop-nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 rounded-full bg-[#FF6A2A] transition-all duration-300 ease-premium group-hover:w-5" />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher current={locale} tone="light" />
          <Button
            asChild
            variant="outline-inverse"
            size="sm"
            className="h-11 border-white/[0.08] bg-white/[0.05] px-4 text-white/85 hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
          >
            <a href={LINKS.callPrimary} aria-label={dict.buttons.call}>
              <Phone className="h-3.5 w-3.5" strokeWidth={2} />
              {dict.buttons.call}
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="h-11 bg-[#FF6A2A] px-5 text-[13px] font-semibold text-white shadow-[0_0_0_1px_rgba(255,106,42,0.24),0_10px_26px_rgba(255,106,42,0.18)] hover:-translate-y-0.5 hover:bg-[#ff783d] hover:shadow-[0_0_0_1px_rgba(255,106,42,0.32),0_14px_34px_rgba(255,106,42,0.28)]"
          >
            <a href="#contact" onClick={() => setActiveHref("#contact")}>
              {dict.buttons.contactUs}
            </a>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.06] text-white transition-colors duration-300 ease-premium hover:bg-white/[0.1] focus-visible:ring-offset-0 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -18, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 18, scale: 0.8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 w-full max-w-8xl overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[rgba(10,10,10,.72)] shadow-[0_22px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[18px] lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-3">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => handleNavClick(item.href)}
                    className="relative rounded-2xl px-4 py-4 text-[16px] font-medium tracking-[-0.01em] text-[rgba(255,255,255,.82)] transition-colors duration-300 ease-premium hover:bg-white/[0.06] hover:text-[#FF6A2A] focus-visible:ring-offset-0"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="mobile-nav-active"
                        className="absolute inset-0 rounded-2xl bg-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}

              <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/[0.08] px-1 pb-1 pt-4">
                <LanguageSwitcher current={locale} tone="light" />
                <Button
                  asChild
                  size="sm"
                  className="h-12 bg-[#FF6A2A] px-5 font-semibold text-white shadow-[0_0_0_1px_rgba(255,106,42,0.24),0_12px_28px_rgba(255,106,42,0.2)] hover:-translate-y-0.5 hover:bg-[#ff783d]"
                >
                  <a href="#contact" onClick={() => handleNavClick("#contact")}>
                    {dict.buttons.contactUs}
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
