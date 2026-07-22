"use client";

import { Compass, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { wa } from "@/lib/brand";

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
        const dur = 1600;
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
  return (
    <>
      <section
        id="hero"
        className="relative isolate flex min-h-[92svh] flex-col justify-center overflow-hidden px-4 pb-24 pt-24 sm:px-6 sm:pb-28"
      >
        <div
          aria-hidden="true"
          className="hero-bg-anim absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)",
          }}
        />
        {/* Stronger left vignette so copy stays readable over the photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,14,26,0.92) 0%, rgba(8,14,26,0.78) 38%, rgba(8,14,26,0.45) 68%, rgba(8,14,26,0.55) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(8,14,26,0.55)] via-transparent to-[rgba(8,14,26,0.88)]"
        />

        <div className="section-shell !py-0 relative z-10 w-full">
          <div className="hero-anim hero-anim-d1 mb-7 inline-flex items-center gap-2.5 rounded-full bg-black/35 px-4 py-2 ring-1 ring-white/25 backdrop-blur-md">
            <span className="relative h-2 w-2 rounded-full bg-[var(--color-emerald-400)]">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-emerald-400)] opacity-60" />
            </span>
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white">
              Authorized Sub-Dealer · Al Jalil Developers
            </span>
          </div>

          <h1 className="hero-anim hero-anim-d2 max-w-[15ch] font-[family-name:var(--font-heading)] text-[clamp(2.4rem,5.8vw,4.1rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
            Building Dreams.
            <br />
            Delivering{" "}
            <span className="text-[var(--color-accent-300)]">Trust.</span>
          </h1>

          <p className="hero-anim hero-anim-d3 mt-7 max-w-[48ch] text-[clamp(1.02rem,1.5vw,1.15rem)] font-medium leading-[1.75] text-white/95 drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
            Your premier gateway to luxury living in Al Jalil Garden Housing
            Scheme, Lahore&apos;s most prestigious gated community development.
          </p>

          <div className="hero-anim hero-anim-d4 mt-9 flex flex-wrap items-center gap-3.5">
            <a href="#projects" data-magnet className="btn btn-primary btn-pill">
              <Compass size={17} strokeWidth={1.8} />
              Explore Projects
            </a>
            <a
              href={wa(
                "Hello, I'd like to get in touch with Al Karam Real Estate."
              )}
              target="_blank"
              rel="noopener noreferrer"
              data-magnet
              className="btn btn-pill bg-white/15 text-white ring-1 ring-white/50 backdrop-blur-md hover:bg-white/25"
            >
              <MessageCircle size={17} strokeWidth={1.8} />
              Talk on WhatsApp
            </a>
          </div>

          <div className="hero-anim hero-anim-d5 mt-9 grid max-w-[620px] grid-cols-3 gap-3 sm:gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-[18px] bg-black/40 px-3 py-4 ring-1 ring-white/20 backdrop-blur-md sm:px-5 sm:py-5"
              >
                <div className="font-[family-name:var(--font-heading)] text-[clamp(1.4rem,2.4vw,1.95rem)] font-bold leading-none text-white">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white/80 sm:text-[0.72rem]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 overflow-hidden border-t border-white/10 bg-[rgba(8,14,26,0.72)] py-3 backdrop-blur-md"
        >
          <div className="flex gap-10 whitespace-nowrap animate-[marquee_38s_linear_infinite]">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
              (item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 font-[family-name:var(--font-heading)] text-[0.95rem] font-medium text-white/80"
                >
                  {item}
                  <span className="text-[var(--color-accent-300)]">✦</span>
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
