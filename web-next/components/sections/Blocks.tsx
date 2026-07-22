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
      "Premium blocks across the society, from signature floral sectors (Rose, Tulip, Jasmine) through lettered blocks A to S. We help you match block, size, and budget with on-ground inventory.",
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
        <div className="reveal grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="eyebrow">Available Inventory</span>
            <h2 className="display-title mt-3">Blocks &amp; Plot Cuttings</h2>
            <div className="accent-rule mt-5" />
          </div>
          <p className="lede lg:max-w-[42ch] lg:text-right">
            Reference inventory for{" "}
            <strong className="font-semibold text-[var(--color-ink-800)]">
              Al Jalil Garden
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-[var(--color-ink-800)]">
              Al Noor Orchard
            </strong>
            . Availability and pricing change often, so contact us for live maps
            and current files.
          </p>
        </div>

        <div className="reveal mt-8 inline-flex max-w-full flex-wrap gap-2 rounded-full bg-[var(--color-surface)] p-1.5 shadow-[inset_4px_4px_10px_var(--color-neo-dark),inset_-4px_-4px_10px_var(--color-neo-light)]">
          {INVENTORY.map((i) => (
            <button
              key={i.id}
              type="button"
              onClick={() => setActive(i.id)}
              className={`rounded-full px-5 py-2.5 text-[0.84rem] font-semibold transition-all duration-300 outline-none sm:px-7 sm:text-[0.9rem] ${
                active === i.id
                  ? "bg-[var(--color-surface)] text-[var(--color-accent-600)] shadow-[inset_5px_5px_12px_var(--color-neo-dark),inset_-5px_-5px_12px_var(--color-neo-light)]"
                  : "text-[var(--color-ink-600)] hover:text-[var(--color-accent-500)]"
              }`}
              aria-pressed={active === i.id}
            >
              {i.title}
            </button>
          ))}
        </div>

        <article key={current.id} className="mt-8">
          <p className="lede mb-8 max-w-none">{current.intro}</p>

          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <div className="card p-6 sm:p-7">
              <p className="label-caps mb-5">
                Available block names
              </p>
              <div className="flex flex-wrap gap-2">
                {current.blocks.map((b) => (
                  <span
                    key={b}
                    className="neo-chip cursor-default rounded-xl px-3.5 py-2 text-[0.84rem] font-medium text-[var(--color-ink-700)] transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--color-accent-600)]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6 sm:p-7">
              <p className="label-caps mb-4">
                Residential cuttings
              </p>
              <div className="mb-7 flex flex-wrap gap-2">
                {current.residential.map((s) => (
                  <div
                    key={`r-${s.val}-${s.unit}`}
                    className="neo-chip inline-flex items-baseline gap-1.5 rounded-xl px-3.5 py-2"
                  >
                    <span className="num text-lg font-bold leading-none text-[var(--color-ink-800)]">
                      {s.val}
                    </span>
                    <span className="text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent-600)]">
                      {s.unit}
                    </span>
                  </div>
                ))}
              </div>

              <p className="label-caps mb-4">
                Commercial cuttings
              </p>
              <div className="mb-7 flex flex-wrap gap-2">
                {current.commercial.map((s) => (
                  <div
                    key={`c-${s.val}-${s.unit}`}
                    className="neo-chip inline-flex items-baseline gap-1.5 rounded-xl px-3.5 py-2"
                  >
                    <span className="num text-lg font-bold leading-none text-[var(--color-ink-800)]">
                      {s.val}
                    </span>
                    <span className="text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-600)]">
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
                className="btn btn-primary w-full justify-center"
              >
                <Compass size={18} strokeWidth={1.8} />
                360° Virtual Tour
              </a>
              <p className="mt-4 text-[0.84rem] text-[var(--color-ink-600)]">
                Developer overview:{" "}
                <a
                  href={current.developerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[var(--color-accent-500)]"
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
