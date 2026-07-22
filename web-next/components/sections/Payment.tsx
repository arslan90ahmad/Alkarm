import { Clock, Shield, CheckCircle2, Users, Check } from "lucide-react";
import { wa } from "@/lib/brand";

const HIGHLIGHTS = [
  {
    icon: Clock,
    title: "Quick Processing",
    desc: "File submission to possession in days.",
  },
  {
    icon: Shield,
    title: "LDA Approved Plots",
    desc: "Fully legal & government certified.",
  },
  {
    icon: CheckCircle2,
    title: "No Hidden Charges",
    desc: "100% transparent pricing, guaranteed.",
  },
  {
    icon: Users,
    title: "1,800+ Families Served",
    desc: "Trusted partner across Lahore.",
  },
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
    <section id="payment" className="relative section-muted">
      <div className="section-shell">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="reveal flex flex-col">
            <span className="eyebrow">Easy Financing</span>
            <h2 className="display-title mt-3">
              Flexible{" "}
              <span className="text-[var(--color-accent-500)]">
                Payment Plans
              </span>
            </h2>
            <div className="accent-rule mt-5" />
            <p className="lede mt-6">
              We believe everyone deserves their dream property. Our easy
              installment plans make home ownership accessible and stress-free.
            </p>

            <div className="mt-8 grid flex-1 content-start gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="card flex items-start gap-3.5 p-5">
                  <div className="neo-chip flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[var(--color-accent-500)]">
                    <h.icon size={18} strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <strong className="block text-[0.98rem] font-semibold text-[var(--color-ink-800)]">
                      {h.title}
                    </strong>
                    <span className="card-desc mt-1 block text-[0.9rem]">
                      {h.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex">
            <div className="card flex w-full flex-col !rounded-[22px] p-8 sm:p-10">
              <span className="inline-flex w-fit items-center rounded-full bg-[var(--color-accent-500)] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white shadow-[4px_4px_10px_rgba(31,92,134,0.3),-2px_-2px_6px_rgba(255,255,255,0.5)]">
                Featured Deal
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-ink-800)] sm:text-[2.15rem]">
                6-Month Plan
              </h3>
              <p className="mt-1.5 text-[1rem] font-medium text-[var(--color-ink-600)]">
                Al Jalil Garden Housing Scheme
              </p>

              <ul className="mt-8 flex-1 space-y-3.5">
                {FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-[0.98rem] font-medium text-[var(--color-ink-700)]"
                  >
                    <span className="neo-chip flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[var(--color-emerald-600)]">
                      <Check size={13} strokeWidth={3} />
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
                className="btn btn-primary mt-8 w-full justify-center"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
