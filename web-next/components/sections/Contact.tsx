import { MapPin, Phone, MessageCircle, Facebook } from "lucide-react";
import { BRAND, wa } from "@/lib/brand";
import TikTokIcon from "@/components/icons/TikTokIcon";

const CHANNELS = [
  {
    icon: MapPin,
    title: "Office Address",
    body: (
      <a
        href={BRAND.officeMap}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open office location in Google Maps"
        className="transition-colors hover:text-[var(--color-accent-500)]"
      >
        {BRAND.officeAddressLines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Phone Number",
    body: (
      <a
        href={BRAND.phoneHref}
        className="num transition-colors hover:text-[var(--color-accent-500)]"
      >
        {BRAND.phone}
      </a>
    ),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    body: (
      <a
        href={wa(
          "Hello, I'd like to chat on WhatsApp with Al Karam Real Estate."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-[var(--color-accent-500)]"
      >
        Chat on WhatsApp
      </a>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative section-muted">
      <div className="section-shell">
        <div className="section-center mx-auto max-w-2xl">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="display-title mt-3">
            Let&apos;s find your dream property.
          </h2>
          <div className="accent-rule mt-5" />
          <p className="lede mt-6 mx-auto">
            Visit our office or reach out through any channel below. We&apos;re
            always ready to help you make the right investment.
          </p>
        </div>

        <div className="mt-8 grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="reveal space-y-4">
            {CHANNELS.map((c) => (
              <div key={c.title} className="card flex items-start gap-4 p-5">
                <div className="neo-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[var(--color-accent-500)]">
                  <c.icon size={18} strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h4 className="label-caps mb-1.5">{c.title}</h4>
                  <div className="text-[0.98rem] font-semibold leading-snug text-[var(--color-ink-800)]">
                    {c.body}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-center gap-3 pt-2 lg:justify-start">
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="neo-chip flex h-11 w-11 items-center justify-center rounded-xl text-[var(--color-ink-700)] transition-all duration-300 hover:text-[var(--color-accent-500)]"
              >
                <Facebook size={18} strokeWidth={1.75} />
              </a>
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="neo-chip flex h-11 w-11 items-center justify-center rounded-xl text-[var(--color-ink-700)] transition-all duration-300 hover:text-[var(--color-accent-500)]"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          <div className="reveal flex h-full items-center">
            <div className="card flex w-full flex-col justify-center !rounded-[22px] p-8 sm:p-10">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-ink-800)] sm:text-[1.85rem]">
                Message us instantly
              </h3>
              <p className="card-desc mt-3 max-w-none text-[1.02rem]">
                For the fastest reply, message us on WhatsApp. Our team will get
                back to you as soon as possible.
              </p>

              <a
                href={wa(
                  "Hello, I'd like to send a message to Al Karam Real Estate."
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-magnet
                className="btn btn-primary mt-7 w-full justify-center"
              >
                <MessageCircle size={18} strokeWidth={1.8} />
                Message on WhatsApp
              </a>

              <div className="mt-8 border-t border-[var(--color-neo-dark)]/50 pt-7">
                <p className="label-caps mb-2">Or call directly</p>
                <a
                  href={BRAND.phoneHref}
                  className="num text-[1.85rem] font-bold tracking-tight text-[var(--color-ink-800)] transition-colors hover:text-[var(--color-accent-500)] sm:text-3xl"
                >
                  {BRAND.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
