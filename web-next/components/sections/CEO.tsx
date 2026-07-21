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
    <section id="ceo" className="relative">
      <div className="section-shell">
        <span className="eyebrow">Leadership</span>

        <div className="mt-8 grid lg:grid-cols-[minmax(0,440px)_1fr] gap-12 lg:gap-20 items-start">
          {/* Sticky photo column (innovation) */}
          <div className="lg:sticky lg:top-32">
            <div className="relative reveal">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[28px] -z-10 blur-2xl opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79,168,255,0.35), rgba(232,198,114,0.22))",
                }}
              />
              <div className="relative rounded-[24px] overflow-hidden glass border-[var(--color-ink-500)]">
                <Image
                  src="/images/ceo.png"
                  alt="Sheikh Zaheer Ghazanfar"
                  width={640}
                  height={800}
                  className="w-full h-auto"
                  style={{ width: "auto", height: "auto" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-200)] via-transparent to-transparent"
                />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl text-white">
                    Sheikh Zaheer Ghazanfar
                  </h3>
                  <p className="text-[0.82rem] tracking-[0.16em] uppercase text-[var(--color-azure-400)] mt-1">
                    Chief Executive Officer · {`Al Karam`}
                  </p>
                  <p className="text-[0.72rem] text-[var(--color-ink-200)] mt-1">
                    Authorized Dealer since 2021
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="accent-rule mb-7" />
            <p className="lede max-w-none">
              Under the visionary leadership of{" "}
              <strong className="text-white">Sheikh Zaheer Ghazanfar</strong> —
              an <strong className="text-white">Authorized Dealer since 2021</strong>,
              Sales &amp; Strategic Partner, and professional builder — Al Karam
              Real Estate has grown to become the biggest and most trusted real
              estate partner in Al Jalil Garden Housing Scheme and Al Noor
              Orchard. His commitment to transparency, customer satisfaction,
              and ethical business practices has established Al Karam as the
              go-to name for property investment in Lahore.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                "Authorized Dealer · since 2021",
                "Sales & Strategic Partner",
                "Professional Builder",
              ].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.76rem] text-[var(--color-ink-100)] border border-[var(--color-azure-600)]/40 bg-[var(--color-azure-glow)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-azure-400)]" />
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="group glass p-6 rounded-2xl flex items-start gap-5 hover:translate-y-[-2px] hover:border-[var(--color-azure-500)] transition-all duration-500"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-azure-glow)] border border-[var(--color-azure-600)]/40">
                    <v.icon
                      size={22}
                      strokeWidth={1.6}
                      className="text-[var(--color-azure-400)]"
                    />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] text-2xl text-white">
                      {v.title}
                    </h4>
                    <p className="mt-1 text-[var(--color-ink-200)]">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
