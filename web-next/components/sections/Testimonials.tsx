import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Al Karam made our dream of owning a home in Al Jalil Garden a reality. Transparent, professional, and always available. Truly the best real estate team in Lahore.",
    name: "Muhammad Asif",
    role: "5 Marla Plot, Rose Block",
    initials: "MA",
  },
  {
    text: "We purchased two plots through Al Karam. Sheikh Zaheer and his team handled everything flawlessly: file verification, transfer, everything was crystal clear.",
    name: "Sara Noor",
    role: "10 Marla Plot, Tulip Block",
    initials: "SN",
  },
  {
    text: "The 360° virtual tour sold me before I even visited. Al Karam's guidance throughout the process was exceptional. I'd recommend them to every investor.",
    name: "Zubair Khan",
    role: "1 Kanal Plot, Jasmine Block",
    initials: "ZK",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-muted">
      <div className="section-shell">
        <div className="reveal section-center mx-auto max-w-2xl">
          <span className="eyebrow">Client Stories</span>
          <h2 className="display-title mt-3">Trusted by 1,800+ Families</h2>
          <div className="accent-rule mt-5" />
        </div>

        <div className="mt-8 reveal stagger grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="card relative overflow-hidden p-7"
            >
              <Quote
                size={44}
                strokeWidth={1}
                className="absolute right-5 top-5 text-[var(--color-accent-200)]"
              />
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={15}
                    className="fill-[var(--color-accent-500)] text-[var(--color-accent-500)]"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <p className="card-desc leading-[1.78]">
                {t.text}
              </p>
              <div className="mt-7 flex items-center gap-4 border-t border-[var(--color-neo-dark)]/50 pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-500)] text-sm font-bold text-white shadow-[5px_5px_12px_var(--color-neo-dark),-3px_-3px_8px_var(--color-neo-light)]">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-ink-800)]">
                    {t.name}
                  </div>
                  <div className="text-[0.82rem] font-medium text-[var(--color-ink-600)]">
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
