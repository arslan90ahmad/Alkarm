"use client";

import { motion } from "framer-motion";
import { Compass, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BRAND, wa } from "@/lib/brand";

const STATS = [
  { value: 500, suffix: "+", label: "Properties Sold" },
  { value: 1800, suffix: "+", label: "Happy Clients" },
  { value: 4, suffix: "+", label: "Years of Trust" },
];

const MARQUEE_ITEMS = [
  "Al Jalil Garden",
  "LDA Approved",
  "Authorized Sub-Dealer",
  "500+ Properties Sold",
  "Lahore's Premier Estate",
  "360° Virtual Tour",
  "Easy Installment Plans",
  "Gated Community",
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        const dur = 1800;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref} className="num">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const headline = ["Building Dreams.", "Delivering Trust."];

  return (
    <section
      id="hero"
      className="relative isolate h-[100svh] min-h-[640px] flex flex-col justify-center overflow-hidden pt-24 pb-24 sm:pb-20"
    >
      {/* Animated gradient mesh — replaces Three.js canvas */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 720px at 20% 30%, rgba(79,168,255,0.32), transparent 60%), radial-gradient(700px 540px at 80% 20%, rgba(110,177,240,0.18), transparent 60%), radial-gradient(600px 520px at 70% 90%, rgba(232,198,114,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -z-10 left-[-12%] top-[18%] w-[520px] h-[520px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(79,168,255,0.45), transparent 70%)",
          animation: "orb-drift 12s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -z-10 right-[-8%] top-[55%] w-[460px] h-[460px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(232,198,114,0.32), transparent 70%)",
          animation: "orb-drift 14s ease-in-out infinite reverse",
        }}
      />

      {/* Grid line overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div className="section-shell w-full">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-5 self-start"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-emerald-500)] relative">
            <span className="absolute inset-0 rounded-full bg-[var(--color-emerald-500)] animate-ping opacity-60" />
          </span>
          <span className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-ink-200)]">
            Authorized Sub-Dealer · Al Jalil Developers
          </span>
        </motion.div>

        <h1 className="font-[family-name:var(--font-heading)] font-medium leading-[1.02] tracking-[-0.018em] text-[clamp(1.9rem,4.5vw,3.65rem)] max-w-[12ch]">
          {headline.map((line, li) => (
            <span key={li} className="block">
              {line.split(" ").map((word, wi) => (
                <span
                  key={wi}
                  className="inline-block whitespace-nowrap mr-[0.22em]"
                >
                  {word.split("").map((ch, ci) => (
                    <motion.span
                      key={ci}
                      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.25 + (li * 8 + wi * 3 + ci) * 0.02,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className={`inline-block ${
                        li === 1
                          ? "bg-gradient-to-r from-[var(--color-azure-400)] via-[var(--color-azure-500)] to-[var(--color-champagne-400)] bg-clip-text text-transparent"
                          : ""
                      }`}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-5 max-w-[56ch] text-[clamp(0.95rem,1.05vw,1.04rem)] text-[var(--color-ink-200)] leading-[1.7]"
        >
          Your premier gateway to luxury living in Al Jalil Garden Housing
          Scheme — Lahore&apos;s most prestigious gated community development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" data-magnet className="btn btn-primary">
            <Compass size={18} strokeWidth={1.8} />
            Explore Projects
          </a>
          <a
            href={wa(
              "Hello, I'd like to get in touch with Al Karam Real Estate."
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-magnet
            className="btn btn-outline"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            Talk on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-[620px]"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="glass px-3 py-3.5 sm:px-5 sm:py-4 text-left"
            >
              <div className="font-[family-name:var(--font-heading)] text-[clamp(1.25rem,2.1vw,1.75rem)] leading-none text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 text-[0.62rem] sm:text-[0.7rem] tracking-[0.16em] uppercase text-[var(--color-ink-300)]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 overflow-hidden border-y border-[var(--color-ink-700)] bg-[rgba(7,14,28,0.42)] backdrop-blur-md py-2.5"
      >
        <div className="flex gap-10 whitespace-nowrap animate-[marquee_38s_linear_infinite]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span
                key={i}
                className="font-[family-name:var(--font-heading)] text-[0.96rem] text-[var(--color-ink-300)] flex items-center gap-10"
              >
                {item}
                <span className="text-[var(--color-champagne-400)]">✦</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
