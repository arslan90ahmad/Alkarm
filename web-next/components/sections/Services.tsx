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
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  cta: { label: string; href: string; external?: boolean };
  /** Bento positioning */
  span: string;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Sale & Purchase",
    desc: "Buying and selling plots, commercial units, and homes across Al Jalil Garden and Al Noor Orchard — every cutting from 3, 5, 8, 10 Marla to 1 & 2 Kanal. Selling a file? Share the details and we'll buy it from you directly.",
    icon: Building2,
    cta: {
      label: "Get in touch",
      href: wa(
        "Hello, I'm interested in Sale & Purchase assistance (Al Karam Real Estate)."
      ),
      external: true,
    },
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    num: "02",
    title: "Property Marketing",
    desc: "Strategic campaigns that put your property in front of our 1,800+ buyer network — for the fastest sale and best return.",
    icon: Megaphone,
    cta: {
      label: "Get in touch",
      href: wa(
        "Hello, I'm interested in Property Marketing (Al Karam Real Estate)."
      ),
      external: true,
    },
    span: "md:col-span-2",
  },
  {
    num: "03",
    title: "File Verification",
    desc: "Thorough verification of property documentation and ownership history. Every transaction legally sound, fully transparent.",
    icon: FileCheck2,
    cta: {
      label: "Get in touch",
      href: wa(
        "Hello, I'm interested in File Verification (Al Karam Real Estate)."
      ),
      external: true,
    },
    span: "",
  },
  {
    num: "04",
    title: "Virtual Site Tours",
    desc: "Can't visit in person? Walk the entire development through our immersive 360° tour from anywhere in the world.",
    icon: Compass,
    cta: { label: "Take the tour", href: BRAND.tours.alJalil, external: true },
    span: "",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="section-shell">
        <div className="reveal max-w-3xl">
          <span className="eyebrow">What We Do</span>
          <h2 className="display-title mt-3">Services that move you in.</h2>
          <div className="accent-rule mt-5" />
        </div>

        {/* Bento grid (innovation) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 md:auto-rows-[minmax(220px,auto)] gap-4 sm:gap-5">
          {SERVICES.map((s) => (
            <a
              key={s.num}
              href={s.cta.href}
              target={s.cta.external ? "_blank" : undefined}
              rel={s.cta.external ? "noopener noreferrer" : undefined}
              data-magnet
              className={`group reveal relative overflow-hidden rounded-2xl p-7 sm:p-8 glass hover:border-[var(--color-azure-500)] transition-all duration-500 ${s.span}`}
            >
              {/* Hover gradient border via pseudo-element */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(360px 220px at var(--mx,30%) var(--my,30%), rgba(79,168,255,0.20), transparent 60%)",
                }}
              />
              <div className="relative flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <div className="num text-[0.78rem] tracking-[0.32em] text-[var(--color-ink-400)]">
                    {s.num}
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-[var(--color-ink-300)] group-hover:text-[var(--color-azure-400)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
                    strokeWidth={1.5}
                  />
                </div>

                <div
                  className={`mt-${s.featured ? "8" : "5"} w-14 h-14 rounded-2xl flex items-center justify-center border ${
                    s.featured
                      ? "border-[var(--color-azure-600)]/40 bg-[var(--color-azure-glow)]"
                      : "border-[var(--color-ink-600)] bg-[var(--color-ink-700)]"
                  }`}
                >
                  <s.icon
                    size={s.featured ? 30 : 24}
                    strokeWidth={1.4}
                    className={
                      s.featured
                        ? "text-[var(--color-azure-400)]"
                        : "text-[var(--color-azure-400)]"
                    }
                  />
                </div>

                <h3
                  className={`font-[family-name:var(--font-heading)] text-white mt-5 ${
                    s.featured ? "text-[2.2rem] leading-[1.05]" : "text-2xl"
                  }`}
                >
                  {s.title}
                </h3>

                <p
                  className={`mt-3 text-[var(--color-ink-200)] leading-[1.75] ${
                    s.featured ? "text-[1.02rem] max-w-[42ch]" : "text-[0.94rem]"
                  }`}
                >
                  {s.desc}
                </p>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.16em] uppercase font-semibold text-[var(--color-azure-400)]">
                    {s.cta.label}
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
