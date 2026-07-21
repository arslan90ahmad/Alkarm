"use client";

import { useState } from "react";
import { BRAND } from "@/lib/brand";
import { ArrowUpRight, Compass } from "lucide-react";

type InventoryItem = {
  id: string;
  title: string;
  intro: string;
  blocks: string[];
  residential: { val: number | string; unit: string }[];
  commercial: { val: number | string; unit: string }[];
  tour: string;
  developerLink: string;
};

const INVENTORY: InventoryItem[] = [
  {
    id: "al-jalil-inventory",
    title: "Al Jalil Garden Housing Scheme",
    intro:
      "Premium blocks across the society — from signature floral sectors (Rose, Tulip, Jasmine) through lettered blocks A–S. We help you match block, size, and budget with on-ground inventory.",
    blocks: [
      "Rose",
      "Tulip",
      "Jasmine",
      "Block A",
      "Block B",
      "Block C",
      "Block D",
      "Block E",
      "Block F",
      "Block G",
      "Block H",
      "Block I",
      "Block J",
      "Block K",
      "Block L",
      "Block M",
      "Block N",
      "Block O",
      "Block P",
      "Block Q",
      "Block R",
      "Block S",
    ],
    residential: [
      { val: 3, unit: "Marla" },
      { val: 5, unit: "Marla" },
      { val: 8, unit: "Marla" },
      { val: 10, unit: "Marla" },
      { val: 1, unit: "Kanal" },
      { val: 2, unit: "Kanal" },
    ],
    commercial: [
      { val: 1, unit: "Marla" },
      { val: 2, unit: "Marla" },
      { val: 4, unit: "Marla" },
      { val: 5, unit: "Marla" },
      { val: 8, unit: "Marla" },
    ],
    tour: BRAND.tours.alJalil,
    developerLink: BRAND.developer.alJalilPage,
  },
  {
    id: "al-noor",
    title: "Al Noor Orchard",
    intro:
      "Al Noor Orchard is an LDA-approved community along Jaranwala / Sharaqpur Road (west of Lahore), developed as a sister offering to Al Jalil Garden with gated security, underground utilities, mosques, schools, healthcare, and waterfront-style sectors like West Marina and Marina Sports City.",
    blocks: [
      "Block A",
      "Block B",
      "A-Extension",
      "Block C",
      "Block D",
      "West Marina",
      "Executive",
      "Marina Sports City",
      "Marina Sports City Residencia",
    ],
    residential: [
      { val: 3, unit: "Marla" },
      { val: 5, unit: "Marla" },
      { val: 10, unit: "Marla" },
      { val: 1, unit: "Kanal" },
      { val: 2, unit: "Kanal" },
    ],
    commercial: [
      { val: 2, unit: "Marla" },
      { val: 4, unit: "Marla" },
      { val: 8, unit: "Marla" },
    ],
    tour: BRAND.tours.alNoor,
    developerLink: BRAND.developer.alNoorPage,
  },
];

export default function Blocks() {
  const [active, setActive] = useState(INVENTORY[0].id);
  const current = INVENTORY.find((i) => i.id === active)!;

  return (
    <section id="blocks" className="relative">
      <div className="section-shell">
        <div className="reveal grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <span className="eyebrow">Available Inventory</span>
            <h2 className="display-title mt-3">
              Blocks &amp; Plot Cuttings
            </h2>
            <div className="accent-rule mt-5" />
          </div>
          <p className="lede lg:text-right">
            Reference inventory for{" "}
            <strong className="text-white">Al Jalil Garden</strong> and{" "}
            <strong className="text-white">Al Noor Orchard</strong>. Availability
            and pricing change often — contact us for live maps and current
            files.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="reveal mt-10 inline-flex p-1.5 rounded-full glass">
          {INVENTORY.map((i) => (
            <button
              key={i.id}
              onClick={() => setActive(i.id)}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-[0.82rem] sm:text-[0.88rem] font-medium tracking-[0.04em] transition-all duration-400 ${
                active === i.id
                  ? "bg-gradient-to-r from-[var(--color-azure-600)] to-[var(--color-azure-700)] text-white shadow-[0_6px_24px_rgba(79,168,255,0.3)]"
                  : "text-[var(--color-ink-200)] hover:text-white"
              }`}
            >
              {i.title}
            </button>
          ))}
        </div>

        <article key={current.id} className="reveal mt-8">
          <p className="lede max-w-none mb-8">{current.intro}</p>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
            {/* Block matrix — innovation: animated grid of pills */}
            <div className="glass p-7 rounded-2xl">
              <p className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-ink-300)] mb-5">
                Available block names
              </p>
              <div className="flex flex-wrap gap-2">
                {current.blocks.map((b, i) => (
                  <span
                    key={b}
                    style={{
                      animationDelay: `${i * 30}ms`,
                    }}
                    className="px-3.5 py-2 rounded-lg text-[0.84rem] text-[var(--color-ink-100)] border border-[var(--color-ink-600)] bg-[rgba(255,255,255,0.025)] hover:border-[var(--color-azure-500)] hover:bg-[var(--color-azure-glow)] hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Sizes panel */}
            <div className="glass p-7 rounded-2xl">
              <p className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-ink-300)] mb-4">
                Residential cuttings
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {current.residential.map((s) => (
                  <div
                    key={`r-${s.val}-${s.unit}`}
                    className="inline-flex items-baseline gap-1.5 px-3.5 py-2 rounded-lg border border-[var(--color-azure-600)]/40 bg-[var(--color-azure-glow)]"
                  >
                    <span className="num text-lg font-semibold text-white leading-none">
                      {s.val}
                    </span>
                    <span className="text-[0.74rem] tracking-[0.12em] uppercase text-[var(--color-azure-300)]">
                      {s.unit}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-ink-300)] mb-4">
                Commercial cuttings
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {current.commercial.map((s) => (
                  <div
                    key={`c-${s.val}-${s.unit}`}
                    className="inline-flex items-baseline gap-1.5 px-3.5 py-2 rounded-lg border border-[var(--color-champagne-400)]/30 bg-[var(--color-champagne-400)]/[0.06]"
                  >
                    <span className="num text-lg font-semibold text-white leading-none">
                      {s.val}
                    </span>
                    <span className="text-[0.74rem] tracking-[0.12em] uppercase text-[var(--color-champagne-300)]">
                      {s.unit}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={current.tour}
                target="_blank"
                rel="noopener noreferrer"
                data-magnet
                className="btn btn-gold w-full justify-center"
              >
                <Compass size={18} strokeWidth={1.8} />
                360° Virtual Tour
              </a>
              <p className="mt-4 text-[0.84rem] text-[var(--color-ink-300)]">
                Developer overview:{" "}
                <a
                  href={current.developerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-azure-400)] inline-flex items-center gap-1"
                >
                  official page <ArrowUpRight size={12} strokeWidth={2} />
                </a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
