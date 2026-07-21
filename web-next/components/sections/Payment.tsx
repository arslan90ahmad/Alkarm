import {
  Clock,
  Shield,
  CheckCircle2,
  Users,
  Check,
} from "lucide-react";
import { wa } from "@/lib/brand";

const HIGHLIGHTS = [
  { icon: Clock, title: "Quick Processing", desc: "File submission to possession in days." },
  { icon: Shield, title: "LDA Approved Plots", desc: "Fully legal & government certified." },
  { icon: CheckCircle2, title: "No Hidden Charges", desc: "100% transparent pricing — guaranteed." },
  { icon: Users, title: "1,800+ Families Served", desc: "Trusted partner across Lahore." },
];

const FEATURES = [
  "3 Equal Installments",
  "Possession on Down Payment",
  "All Plot Sizes (3, 5, 10, 15 Marla)",
  "Multiple Blocks Available",
  "On-Ground Ready Plots",
];

export default function Payment() {
  return (
    <section id="payment" className="relative">
      <div className="section-shell">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          <div className="reveal">
            <span className="eyebrow">Easy Financing</span>
            <h2 className="display-title mt-3">
              Flexible{" "}
              <span className="bg-gradient-to-r from-[var(--color-azure-400)] to-[var(--color-champagne-400)] bg-clip-text text-transparent">
                Payment Plans
              </span>
            </h2>
            <div className="accent-rule mt-5" />
            <p className="lede mt-6">
              We believe everyone deserves their dream property. Our easy
              installment plans make home ownership accessible and stress-free.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.title}
                  className="glass p-5 rounded-2xl flex items-start gap-4 hover:border-[var(--color-azure-500)] transition-all duration-500"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center bg-[var(--color-azure-glow)] border border-[var(--color-azure-600)]/40">
                    <h.icon
                      size={18}
                      strokeWidth={1.8}
                      className="text-[var(--color-azure-400)]"
                    />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">
                      {h.title}
                    </strong>
                    <span className="text-[0.88rem] text-[var(--color-ink-300)]">
                      {h.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured plan card */}
          <div className="reveal relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[28px] blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(232,198,114,0.30), transparent 70%)",
              }}
            />
            <div
              className="relative rounded-[24px] p-8 sm:p-10 overflow-hidden glass"
              style={{
                background:
                  "linear-gradient(160deg, rgba(232,198,114,0.10), rgba(255,255,255,0.03) 40%, rgba(79,168,255,0.06))",
                borderColor: "rgba(232,198,114,0.32)",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,198,114,0.42), transparent 70%)",
                }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.66rem] tracking-[0.24em] uppercase font-semibold text-[var(--color-navy-200)] bg-[var(--color-champagne-400)]">
                  Featured Deal
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-4xl mt-5 text-white">
                  6-Month Plan
                </h3>
                <p className="text-[var(--color-ink-300)] mt-1">
                  Al Jalil Garden Housing Scheme
                </p>

                <ul className="mt-7 space-y-3.5">
                  {FEATURES.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-[var(--color-ink-100)]"
                    >
                      <span className="w-6 h-6 rounded-full flex items-center justify-center bg-[var(--color-emerald-500)]/15 border border-[var(--color-emerald-500)]/40 shrink-0">
                        <Check
                          size={13}
                          strokeWidth={3}
                          className="text-[var(--color-emerald-400)]"
                        />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={wa(
                    "Hello, I'd like to inquire about the featured 6-Month payment plan (Al Jalil Garden)."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnet
                  className="btn btn-primary w-full justify-center mt-8"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
