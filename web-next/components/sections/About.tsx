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
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div className="reveal reveal-left">
            <span className="eyebrow">Who We Are</span>
            <h2 className="display-title mt-3">
              The Biggest &amp; Most Trusted Name in{" "}
              <span className="text-[var(--color-accent-500)]">
                Al Jalil Garden
              </span>
            </h2>
            <div className="accent-rule mt-5" />
            <p className="lede mt-6">
              Al Karam Real Estate is an authorized sub-dealer of{" "}
              <strong className="font-semibold text-[var(--color-ink-800)]">
                Al Jalil Developers
              </strong>
              , one of Pakistan&apos;s leading real estate and infrastructure
              companies. We specialize in property sales, purchases, and
              marketing across Lahore&apos;s most prestigious housing society.
            </p>
            <p className="lede mt-4">
              With our office on Main Boulevard, Al Jalil Garden (2 km from
              Faizpur Interchange), we provide on-ground support, transparent
              dealings, and personalized service to every client.
            </p>
            <ul className="mt-8 grid max-w-[560px] gap-3 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <li
                  key={f}
                  className="card flex items-center gap-3 px-4 py-3.5"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[var(--color-accent-500)]"
                    strokeWidth={1.8}
                  />
                  <span className="text-[0.94rem] font-medium text-[var(--color-ink-800)]">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-right relative">
            <div className="card relative overflow-hidden p-10 text-center sm:p-12">
              <Image
                src="/images/logo.png"
                alt="Al Karam Real Estate"
                width={180}
                height={56}
                className="relative z-10 mx-auto h-auto w-[180px]"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="mx-auto my-7 h-px w-28 bg-[var(--color-neo-dark)]" />
              <p className="label-caps mb-2">Partnered With</p>
              <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-accent-500)] sm:text-3xl">
                Al Jalil Developers
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                <span className="pill-verified">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-500)]" />
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
