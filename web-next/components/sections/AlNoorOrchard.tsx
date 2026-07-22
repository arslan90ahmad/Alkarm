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

/** Live availability: West Marina is the main attraction at Al Noor Orchard.
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
    sector: "",
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
    <section id="al-noor-orchard" className="relative section-muted">
      <div className="section-shell">
        <div className="reveal section-center mx-auto max-w-2xl">
          <span className="eyebrow">Our Project</span>
          <h2 className="display-title mt-3">Al Noor Orchard</h2>
          <div className="accent-rule mt-5" />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <span className="pill-verified">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-500)]" />
              LDA Approved
            </span>
            <span className="badge-featured">Waterfront Living</span>
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-[0.92rem] text-[var(--color-ink-600)]">
            <MapPin
              size={16}
              strokeWidth={1.8}
              className="text-[var(--color-accent-500)]"
            />
            Jaranwala Road, west of Lahore, featuring the signature{" "}
            <strong className="text-[var(--color-ink-800)]">West Marina</strong>{" "}
            waterfront
          </p>
          <p className="lede mt-5">
            Al Noor Orchard&apos;s crown jewel is{" "}
            <strong className="font-semibold text-[var(--color-ink-800)]">
              West Marina
            </strong>
            , with Marina Canal Front, Marina Sports City, Marina Sports City
            Residencia, and Executive Cottages &amp; blocks. Right now,{" "}
            <strong className="font-semibold text-[var(--color-ink-800)]">
              Marina Canal Front Sector-A
            </strong>{" "}
            plots are available for sale.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal">
            <div className="card p-6 sm:p-8">
              <p className="mb-4 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-600)]">
                Available now: West Marina
              </p>
              <div className="overflow-hidden rounded-[20px] shadow-[inset_5px_5px_12px_var(--color-neo-dark),inset_-5px_-5px_12px_var(--color-neo-light)]">
                <div className="grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-600)] sm:grid-cols-[auto_1fr_auto_auto]">
                  <span>Plot</span>
                  <span>Block / Sector</span>
                  <span className="text-right">Size</span>
                  <span className="hidden text-right sm:block">Inquire</span>
                </div>
                {LISTINGS.map((l) => (
                  <a
                    key={l.plot}
                    href={wa(
                      `Hello, I'm interested in Plot ${l.plot} (${l.size}), ${l.block}${
                        l.sector ? ` ${l.sector}` : ""
                      }, West Marina, Al Noor Orchard.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-magnet
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-[var(--color-neo-dark)]/30 px-4 py-4 transition-colors hover:bg-[var(--color-accent-50)]/50 sm:grid-cols-[auto_1fr_auto_auto]"
                  >
                    <span className="num min-w-[2.5rem] text-lg font-bold leading-none text-[var(--color-ink-800)]">
                      {l.plot}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[0.92rem] font-medium text-[var(--color-ink-800)]">
                        {l.block}
                      </span>
                      <span className="block text-[0.74rem] text-[var(--color-ink-600)]">
                        {l.sector || "West Marina"}
                        {l.highlight && (
                          <span className="ml-2 text-[var(--color-emerald-600)]">
                            ● Canal front
                          </span>
                        )}
                      </span>
                    </span>
                    <span className="justify-self-end text-[0.9rem] font-semibold text-[var(--color-accent-500)]">
                      {l.size}
                    </span>
                    <span className="hidden justify-end text-[var(--color-accent-500)] transition-transform group-hover:translate-x-0.5 sm:inline-flex">
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-3 text-[0.84rem] text-[var(--color-ink-600)]">
                Availability and pricing change often, so tap any plot to confirm
                on WhatsApp, or visit our office for a physical tour.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
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
                  className="btn btn-outline-dark"
                >
                  Official Site
                </a>
              </div>

              <div className="mt-7 flex flex-col gap-4 border-t border-[var(--color-neo-dark)]/40 pt-6 sm:flex-row sm:items-center">
                <div className="neo-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[var(--color-accent-500)]">
                  <Repeat2 size={20} strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-ink-800)]">
                    Want to sell your file?
                  </h4>
                  <p className="mt-1 text-[0.9rem] text-[var(--color-ink-600)]">
                    Share the details and we&apos;ll buy it from you directly:
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
                  className="btn btn-primary shrink-0"
                >
                  Sell to us
                </a>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="card h-full p-6 sm:p-8">
              <p className="mb-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-500)]">
                The Marina
              </p>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-ink-800)]">
                Sectors &amp; Blocks
              </h3>
              <div className="accent-rule mt-4" />

              <div className="mt-7 grid gap-3">
                {SECTORS.map((s) => (
                  <div
                    key={s}
                    className="neo-chip flex items-center gap-3 rounded-xl px-3 py-3 transition-all hover:-translate-y-0.5"
                  >
                    <Waves
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-[var(--color-accent-500)]"
                    />
                    <span className="text-[0.9rem] font-medium text-[var(--color-ink-800)]">
                      {s}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-[var(--color-neo-dark)]/40 pt-6">
                <p className="mb-4 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-600)]">
                  We deal in
                </p>
                <div className="grid gap-2.5">
                  <span className="flex items-center gap-2.5 text-[0.88rem] text-[var(--color-ink-600)]">
                    <Anchor
                      size={16}
                      strokeWidth={1.6}
                      className="text-[var(--color-accent-500)]"
                    />
                    Residential plots: 3, 5, 8, 10 Marla &amp; 1, 2 Kanal
                  </span>
                  <span className="flex items-center gap-2.5 text-[0.88rem] text-[var(--color-ink-600)]">
                    <Building2
                      size={16}
                      strokeWidth={1.6}
                      className="text-[var(--color-accent-500)]"
                    />
                    Commercial plots of every major cutting
                  </span>
                  <span className="flex items-center gap-2.5 text-[0.88rem] text-[var(--color-ink-600)]">
                    <Home
                      size={16}
                      strokeWidth={1.6}
                      className="text-[var(--color-accent-500)]"
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
