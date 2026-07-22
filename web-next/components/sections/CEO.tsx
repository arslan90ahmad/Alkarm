import Image from "next/image";
import { Shield, Users, Zap } from "lucide-react";

const VALUES = [
  {
    icon: Shield,
    title: "Integrity First",
    desc: "Every transaction is built on trust, paperwork, and full transparency.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    desc: "Personalised, on-ground service for every family we work with.",
  },
  {
    icon: Zap,
    title: "Results Driven",
    desc: "500+ properties placed with 1,800+ satisfied clients across Lahore.",
  },
];

export default function CEO() {
  return (
    <section id="ceo" className="relative section-muted">
      <div className="section-shell">
        <div className="section-center mx-auto">
          <span className="eyebrow">Leadership</span>
          <div className="accent-rule mt-5" />
        </div>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="reveal mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-none">
            <div className="card relative overflow-hidden !rounded-[22px]">
              <Image
                src="/images/ceo.png"
                alt="Sheikh Zaheer Ghazanfar"
                width={640}
                height={800}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-6 pt-20">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white sm:text-[1.75rem]">
                  Sheikh Zaheer Ghazanfar
                </h3>
                <p className="mt-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-200)]">
                  Chief Executive Officer · Al Karam
                </p>
                <p className="mt-1 text-[0.88rem] font-medium text-white/90">
                  Authorized Dealer since 2021
                </p>
              </div>
            </div>
          </div>

          <div className="reveal flex flex-col justify-center">
            <p className="lede max-w-none text-[1.08rem]">
              Under the visionary leadership of{" "}
              <strong className="font-semibold text-[var(--color-ink-800)]">
                Sheikh Zaheer Ghazanfar
              </strong>
              , an{" "}
              <strong className="font-semibold text-[var(--color-ink-800)]">
                Authorized Dealer since 2021
              </strong>
              , Sales &amp; Strategic Partner, and professional builder. Al
              Karam Real Estate has grown to become the biggest and most trusted
              real estate partner in Al Jalil Garden Housing Scheme and Al Noor
              Orchard. His commitment to transparency, customer satisfaction,
              and ethical business practices has established Al Karam as the
              go-to name for property investment in Lahore.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Authorized Dealer · since 2021",
                "Sales & Strategic Partner",
                "Professional Builder",
              ].map((c) => (
                <span
                  key={c}
                  className="neo-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.8rem] font-semibold text-[var(--color-accent-700)]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-500)]" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="card flex items-start gap-4 p-6">
              <div className="neo-chip flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[var(--color-accent-500)]">
                <v.icon size={22} strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-ink-800)]">
                  {v.title}
                </h4>
                <p className="card-desc mt-1.5">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
