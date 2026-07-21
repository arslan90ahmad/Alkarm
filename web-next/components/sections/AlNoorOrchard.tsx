import {
  MapPin,
  Waves,
  Compass,
  ArrowUpRight,
  Anchor,
  Building2,
  Home,
  Repeat2,
} from "lucide-react";
import { wa, BRAND } from "@/lib/brand";

/** Live availability — West Marina is the main attraction at Al Noor Orchard.
    Marina Canal Front Sector-A plots are open for sale. */
const LISTINGS = [
  {
    plot: "996",
    size: "06 Marla",
    block: "Marina Canal Front",
    sector: "Sector-A",
    highlight: true,
  },
  {
    plot: "224",
    size: "05 Marla",
    block: "Marina Terranova",
    sector: "Sector-A",
  },
  {
    plot: "412",
    size: "03 Marla",
    block: "Marina Lakeside",
    sector: "Sector-B",
  },
  {
    plot: "MSC",
    size: "05 Marla",
    block: "Marina Sports City",
    sector: "—",
  },
];

const SECTORS = [
  "West Marina",
  "West Marina Sports City",
  "Marina Sports City Residencia",
  "Executive Cottages",
];

export default function AlNoorOrchard() {
  return (
    <section id="al-noor-orchard" className="relative">
      <div className="section-shell">
        <div className="reveal max-w-3xl">
          <span className="eyebrow">Our Project</span>
          <h2 className="display-title mt-3">Al Noor Orchard</h2>
          <div className="accent-rule mt-5" />
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-8">
          {/* Live listings + overview */}
          <div className="reveal">
            <div className="glass p-7 sm:p-9 rounded-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="pill-verified">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald-500)]" />
                  LDA Approved
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-champagne-400)] border border-[var(--color-champagne-400)]/30 bg-[var(--color-champagne-400)]/[0.06]">
                  Waterfront Living
                </span>
              </div>
              <p className="flex items-center gap-2 text-[var(--color-azure-300)] text-[0.94rem]">
                <MapPin size={16} strokeWidth={1.8} />
                Jaranwala Road, west of Lahore — featuring the signature{" "}
                <strong className="text-white">West Marina</strong> waterfront
              </p>
              <p className="mt-5 lede max-w-none">
                Al Noor Orchard&apos;s crown jewel is{" "}
                <strong className="text-white">West Marina</strong> — with
                Marina Canal Front, Marina Sports City, Marina Sports City
                Residencia, and Executive Cottages &amp; blocks. Right now,{" "}
                <strong className="text-white">
                  Marina Canal Front Sector-A
                </strong>{" "}
                plots are available for sale.
              </p>

              {/* Live availability table */}
              <div className="mt-8">
                <p className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-ink-300)] mb-4">
                  Available now — West Marina
                </p>
                <div className="overflow-hidden rounded-2xl border border-[var(--color-ink-600)]">
                  {/* header */}
                  <div className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto_auto] gap-3 px-4 py-3 bg-[rgba(255,255,255,0.03)] text-[0.66rem] tracking-[0.18em] uppercase text-[var(--color-ink-400)]">
                    <span>Plot</span>
                    <span>Block / Sector</span>
                    <span className="text-right">Size</span>
                    <span className="hidden sm:block text-right">Inquire</span>
                  </div>
                  {LISTINGS.map((l) => (
                    <a
                      key={l.plot}
                      href={wa(
                        `Hello, I'm interested in Plot ${l.plot} (${l.size}) — ${l.block}${
                          l.sector !== "—" ? ` ${l.sector}` : ""
                        }, West Marina, Al Noor Orchard.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-magnet
                      className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto_auto] gap-3 items-center px-4 py-4 border-t border-[var(--color-ink-700)] hover:bg-[var(--color-azure-glow)] transition-colors duration-300 group"
                    >
                      <span className="num text-lg font-semibold text-white leading-none min-w-[2.5rem]">
                        {l.plot}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.92rem] text-white truncate">
                          {l.block}
                        </span>
                        <span className="block text-[0.74rem] text-[var(--color-ink-300)]">
                          {l.sector !== "—" ? l.sector : "West Marina"}
                          {l.highlight && (
                            <span className="ml-2 text-[var(--color-emerald-500)]">
                              ● Canal front
                            </span>
                          )}
                        </span>
                      </span>
                      <span className="inline-flex items-baseline gap-1 justify-self-end">
                        <span className="num text-base font-semibold text-[var(--color-azure-300)] leading-none">
                          {l.size.split(" ")[0]}
                        </span>
                        <span className="text-[0.7rem] tracking-[0.1em] uppercase text-[var(--color-ink-300)]">
                          {l.size.split(" ")[1]}
                        </span>
                      </span>
                      <span className="hidden sm:inline-flex items-center justify-end text-[var(--color-azure-400)] group-hover:translate-x-0.5 transition-transform">
                        <ArrowUpRight size={16} strokeWidth={2} />
                      </span>
                    </a>
                  ))}
                </div>
                <p className="mt-3 text-[0.82rem] text-[var(--color-ink-300)]">
                  Availability and pricing change often — tap any plot to
                  confirm on WhatsApp, or visit our office for a physical tour.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BRAND.tours.alNoor}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnet
                  className="btn btn-primary"
                >
                  <Compass size={18} strokeWidth={1.8} />
                  360° Virtual Tour
                </a>
                <a
                  href={BRAND.developer.alNoorPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Official Site
                </a>
              </div>

              {/* Sell-your-file callout */}
              <div className="mt-7 pt-6 border-t border-[var(--color-ink-700)] flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--color-champagne-400)]/[0.08] border border-[var(--color-champagne-400)]/30">
                  <Repeat2
                    size={20}
                    strokeWidth={1.6}
                    className="text-[var(--color-champagne-400)]"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-[family-name:var(--font-heading)] text-xl text-white">
                    Want to sell your file?
                  </h4>
                  <p className="mt-1 text-[0.9rem] text-[var(--color-ink-200)]">
                    Share the details and we&apos;ll buy it from you directly —
                    fast, transparent, and hassle-free.
                  </p>
                </div>
                <a
                  href={wa(
                    "Hello, I'd like to sell my file. Here are the details:"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnet
                  className="btn btn-gold shrink-0"
                >
                  Sell to us
                </a>
              </div>
            </div>
          </div>

          {/* Sectors + cuttings sidebar */}
          <div className="reveal">
            <div className="glass p-7 sm:p-9 rounded-2xl h-full">
              <p className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-champagne-400)] mb-2">
                The Marina
              </p>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl text-white">
                Sectors &amp; Blocks
              </h3>
              <div className="accent-rule mt-4" />

              <div className="mt-8 grid gap-3">
                {SECTORS.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl border border-[var(--color-ink-700)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--color-azure-600)]/40 hover:bg-[var(--color-azure-glow)] transition-all duration-300"
                  >
                    <Waves
                      size={20}
                      strokeWidth={1.5}
                      className="text-[var(--color-azure-400)] shrink-0"
                    />
                    <span className="text-[0.9rem] text-[var(--color-ink-100)]">
                      {s}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-[var(--color-ink-700)]">
                <p className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-ink-300)] mb-4">
                  We deal in
                </p>
                <div className="grid gap-2.5">
                  <span className="flex items-center gap-2.5 text-[0.88rem] text-[var(--color-ink-100)]">
                    <Anchor
                      size={16}
                      strokeWidth={1.6}
                      className="text-[var(--color-azure-400)]"
                    />
                    Residential plots — 3, 5, 8, 10 Marla &amp; 1, 2 Kanal
                  </span>
                  <span className="flex items-center gap-2.5 text-[0.88rem] text-[var(--color-ink-100)]">
                    <Building2
                      size={16}
                      strokeWidth={1.6}
                      className="text-[var(--color-azure-400)]"
                    />
                    Commercial plots — every major cutting
                  </span>
                  <span className="flex items-center gap-2.5 text-[0.88rem] text-[var(--color-ink-100)]">
                    <Home
                      size={16}
                      strokeWidth={1.6}
                      className="text-[var(--color-azure-400)]"
                    />
                    Ready-built homes &amp; cottages
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
