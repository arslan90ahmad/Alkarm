"use client";

import {
  Building2,
  Megaphone,
  FileCheck2,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { wa, BRAND } from "@/lib/brand";

type Service = {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
  cta: { label: string; href: string; external?: boolean };
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Sale & Purchase",
    desc: "Buy and sell plots and homes across Al Jalil Garden and Al Noor Orchard. Selling a file? We buy directly.",
    icon: Building2,
    cta: {
      label: "Get in touch",
      href: wa(
        "Hello, I'm interested in Sale & Purchase assistance (Al Karam Real Estate)."
      ),
      external: true,
    },
  },
  {
    num: "02",
    title: "Property Marketing",
    desc: "Strategic campaigns that put your listing in front of our 1,800+ buyer network for a faster sale.",
    icon: Megaphone,
    cta: {
      label: "Get in touch",
      href: wa(
        "Hello, I'm interested in Property Marketing (Al Karam Real Estate)."
      ),
      external: true,
    },
  },
  {
    num: "03",
    title: "File Verification",
    desc: "Full document and ownership checks so every transaction stays legal, clear, and transparent.",
    icon: FileCheck2,
    cta: {
      label: "Get in touch",
      href: wa(
        "Hello, I'm interested in File Verification (Al Karam Real Estate)."
      ),
      external: true,
    },
  },
  {
    num: "04",
    title: "Virtual Site Tours",
    desc: "Can't visit in person? Walk the development through our immersive 360° tour from anywhere.",
    icon: Compass,
    cta: { label: "Take the tour", href: BRAND.tours.alJalil, external: true },
  },
];

export default function Services() {
  return (
    <section id="services" className="relative section-muted">
      <div className="section-shell">
        <div className="reveal section-center mx-auto max-w-2xl">
          <span className="eyebrow">What We Do</span>
          <h2 className="display-title mt-3">Services that move you in.</h2>
          <div className="accent-rule mt-5" />
        </div>

        <div className="mt-8 reveal stagger grid grid-cols-1 gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <a
              key={s.num}
              href={s.cta.href}
              target={s.cta.external ? "_blank" : undefined}
              rel={s.cta.external ? "noopener noreferrer" : undefined}
              data-magnet
              className="card group grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 p-6 sm:p-7"
            >
              <div className="neo-chip flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-[var(--color-accent-500)]">
                <s.icon size={26} strokeWidth={1.6} />
              </div>

              <div className="min-w-0 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="num text-[0.72rem] font-bold tracking-[0.18em] text-[var(--color-accent-500)]">
                      {s.num}
                    </span>
                    <h3 className="mt-1 font-[family-name:var(--font-heading)] text-[1.2rem] font-bold leading-tight text-[var(--color-ink-800)]">
                      {s.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-[var(--color-ink-400)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent-500)]"
                    strokeWidth={1.8}
                  />
                </div>

                <p className="card-desc mt-2.5 line-clamp-3">{s.desc}</p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-[var(--color-accent-600)]">
                  {s.cta.label}
                  <ArrowUpRight size={14} strokeWidth={2.2} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
