import Image from "next/image";
import { Facebook, MessageCircle } from "lucide-react";
import { BRAND, wa } from "@/lib/brand";
import TikTokIcon from "@/components/icons/TikTokIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative mt-8 overflow-hidden bg-[var(--color-ink-800)] text-white"
    >
      <div className="section-shell !py-12">
        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt={BRAND.name}
              width={140}
              height={42}
              className="h-auto w-[140px] brightness-0 invert"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="mt-5 max-w-[40ch] leading-[1.78] text-white/65">
              {BRAND.description}
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-[var(--color-accent-500)]"
                style={{
                  boxShadow:
                    "4px 4px 10px rgba(0,0,0,0.35), -3px -3px 8px rgba(255,255,255,0.06), inset 1px 1px 0 rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.06)",
                }}
                aria-label="Facebook"
              >
                <Facebook size={16} strokeWidth={1.8} />
              </a>
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-[var(--color-accent-500)]"
                style={{
                  boxShadow:
                    "4px 4px 10px rgba(0,0,0,0.35), -3px -3px 8px rgba(255,255,255,0.06), inset 1px 1px 0 rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.06)",
                }}
                aria-label="TikTok"
              >
                <TikTokIcon size={16} />
              </a>
              <a
                href={wa("Hello, I'm contacting Al Karam Real Estate.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-[var(--color-accent-500)]"
                style={{
                  boxShadow:
                    "4px 4px 10px rgba(0,0,0,0.35), -3px -3px 8px rgba(255,255,255,0.06), inset 1px 1px 0 rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.06)",
                }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[0.92rem] text-white/65">
              {[
                { href: "#about", label: "About Us" },
                { href: "#ceo", label: "Leadership" },
                { href: "#services", label: "Services" },
                { href: "#projects", label: "Project" },
                { href: "#blocks", label: "Blocks & sizes" },
                { href: "#payment", label: "Payment Plans" },
                {
                  href: wa(
                    "Hello, I'm reaching out from the Al Karam website."
                  ),
                  label: "Contact",
                  external: true,
                },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="transition-colors hover:text-[var(--color-accent-300)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-white">
              Resources
            </h4>
            <ul className="space-y-2.5 text-[0.92rem] text-white/65">
              {[
                {
                  href: BRAND.developer.alJalilPage,
                  label: "Al Jalil Garden",
                },
                { href: BRAND.developer.site, label: "Al Jalil Developers" },
                { href: BRAND.tours.alJalil, label: "Tour: Al Jalil" },
                { href: BRAND.tours.alNoor, label: "Tour: Al Noor" },
                {
                  href: BRAND.developer.alNoorPage,
                  label: "Al Noor (official)",
                },
                { href: BRAND.mapResource, label: "Al Jalil Garden Map" },
                { href: BRAND.facebook, label: "Facebook" },
                { href: BRAND.tiktok, label: "TikTok" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--color-accent-300)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[0.92rem] text-white/65">
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="num transition-colors hover:text-[var(--color-accent-300)]"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={wa("Hello, I'm contacting Al Karam Real Estate.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-accent-300)]"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={BRAND.officeMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-accent-300)]"
                >
                  Office on Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-7 text-[0.84rem] text-white/45">
          <p>
            &copy; 2021-{year} {BRAND.name}. All rights reserved.
          </p>
          <p>
            Sub-dealer of{" "}
            <a
              href={BRAND.developer.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent-400)] hover:underline"
            >
              Al Jalil Developers
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-[0.8rem] text-white/35">
          Powered by Solutions90 ·{" "}
          <a
            href="https://www.solutions90.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent-400)] transition-colors hover:underline"
          >
            solutions90.com
          </a>
        </p>
      </div>
    </footer>
  );
}
