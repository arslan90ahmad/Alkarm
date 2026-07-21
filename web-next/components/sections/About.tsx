import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "LDA Approved Projects",
  "Transparent Dealings",
  "On-Ground Support",
  "Easy Installment Plans",
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-shell">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <span className="eyebrow">Who We Are</span>
            <h2 className="display-title mt-3">
              The Biggest &amp; Most Trusted Name in{" "}
              <span className="bg-gradient-to-r from-[var(--color-azure-400)] to-[var(--color-champagne-400)] bg-clip-text text-transparent">
                Al Jalil Garden
              </span>
            </h2>
            <div className="accent-rule mt-5" />
            <p className="lede mt-6">
              Al Karam Real Estate is an authorized sub-dealer of{" "}
              <strong className="text-white font-semibold">
                Al Jalil Developers
              </strong>{" "}
              — one of Pakistan&apos;s leading real estate and infrastructure
              companies. We specialize in property sales, purchases, and
              marketing across Lahore&apos;s most prestigious housing society.
            </p>
            <p className="lede mt-4">
              With our office on Main Boulevard, Al Jalil Garden (2 km from
              Faizpur Interchange), we provide on-ground support, transparent
              dealings, and personalized service to every client.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mt-8 max-w-[560px]">
              {FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl glass"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[var(--color-emerald-400)] shrink-0"
                    strokeWidth={1.6}
                  />
                  <span className="text-[0.94rem] text-[var(--color-ink-100)]">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Innovation: floating glass card with partner crest */}
          <div className="reveal relative">
            <div
              className="absolute -inset-6 -z-10 rounded-3xl blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(79,168,255,0.35), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="glass p-10 rounded-3xl text-center relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-32 -right-24 w-72 h-72 rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-azure-500), transparent 70%)",
                }}
              />
              <Image
                src="/images/logo.png"
                alt="Al Karam Real Estate"
                width={180}
                height={56}
                className="mx-auto h-auto w-[180px] relative z-10"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="my-7 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[var(--color-ink-500)] to-transparent" />
              <p className="text-[0.7rem] tracking-[0.32em] uppercase text-[var(--color-ink-300)] mb-3">
                Partnered With
              </p>
              <p className="font-[family-name:var(--font-heading)] text-3xl text-[var(--color-champagne-400)]">
                Al Jalil Developers
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                <span className="pill-verified">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald-500)]" />
                  Verified Partner
                </span>
                <span className="pill-verified">LDA Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
