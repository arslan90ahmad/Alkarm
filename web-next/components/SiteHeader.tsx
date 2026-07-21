"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BRAND, wa } from "@/lib/brand";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-premium)] ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-3 sm:gap-4 overflow-hidden transition-all duration-500 ease-[var(--ease-premium)] ${
          scrolled
            ? "max-w-[1130px] rounded-full px-4 py-2 sm:px-7"
            : "max-w-[1340px] rounded-full px-5 py-2.5 sm:px-10"
        }`}
        style={{
          backgroundColor: scrolled
            ? "rgba(7,14,28,0.72)"
            : "rgba(7,14,28,0)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: scrolled ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(22px) saturate(140%)" : "blur(0px)",
          WebkitBackdropFilter: scrolled
            ? "blur(22px) saturate(140%)"
            : "blur(0px)",
          boxShadow: scrolled
            ? "0 14px 44px rgba(0,0,0,0.45)"
            : "0 14px 44px rgba(0,0,0,0)",
          transitionProperty:
            "background-color, border-color, backdrop-filter, -webkit-backdrop-filter, box-shadow, max-width, padding",
          transitionDuration: "500ms",
          transitionTimingFunction: "var(--ease-premium)",
        }}
      >
        <a
          href="#hero"
          className="flex items-center gap-2 shrink-0 pl-1 sm:pl-2"
          aria-label={BRAND.name}
        >
          <Image
            src="/images/logo.png"
            alt={BRAND.name}
            width={392}
            height={205}
            priority
            sizes="80px"
            className={`w-auto transition-all duration-500 ease-[var(--ease-premium)] ${
              scrolled ? "h-8" : "h-10"
            }`}
          />
        </a>

        <nav
          className="flex shrink-0 items-center gap-1.5 sm:gap-2"
          aria-label="Quick actions"
        >
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <a
              href={BRAND.tours.alJalil}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-[0.78rem] font-medium tracking-[0.06em] text-[var(--color-ink-200)] rounded-full border border-[var(--color-ink-600)] hover:text-white hover:border-[var(--color-azure-500)] hover:bg-[var(--color-azure-glow)] transition-all duration-300"
            >
              Al-Jalil 360°
            </a>
            <a
              href={BRAND.tours.alNoor}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-[0.78rem] font-medium tracking-[0.06em] text-[var(--color-ink-200)] rounded-full border border-[var(--color-ink-600)] hover:text-white hover:border-[var(--color-azure-500)] hover:bg-[var(--color-azure-glow)] transition-all duration-300"
            >
              Al-Noor 360°
            </a>
          </div>
          <a
            href={wa(
              "Hello, I'd like to get in touch with Al Karam Real Estate."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center px-3.5 py-1.5 sm:px-4 text-[0.72rem] sm:text-[0.74rem] font-semibold tracking-[0.12em] uppercase rounded-full text-white border border-[var(--color-azure-600)]/40 transition-all duration-300 hover:brightness-110"
            style={{
              background:
                "linear-gradient(135deg, var(--color-azure-500), var(--color-azure-700))",
              boxShadow: "0 2px 10px rgba(79,168,255,0.22)",
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
