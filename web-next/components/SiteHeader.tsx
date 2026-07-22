"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { BRAND, wa } from "@/lib/brand";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#blocks", label: "Blocks" },
  { href: "#payment", label: "Payment" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-3.5">
      <div
        className={`mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 rounded-[18px] px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          solid
            ? "bg-[var(--color-surface)] shadow-[6px_6px_14px_var(--color-neo-dark),-5px_-5px_12px_var(--color-neo-light)]"
            : "bg-[rgba(10,16,28,0.55)] shadow-[0_8px_28px_rgba(0,0,0,0.35)] ring-1 ring-white/15 backdrop-blur-xl"
        }`}
      >
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2"
          aria-label={BRAND.name}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt={BRAND.name}
            width={392}
            height={205}
            priority
            sizes="120px"
            className={`w-auto transition-all duration-300 ${
              solid ? "h-9" : "h-9 brightness-0 invert"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-[0.88rem] font-semibold transition-colors duration-300 ${
                solid
                  ? "text-[var(--color-ink-700)] hover:text-[var(--color-accent-500)]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={BRAND.phoneHref}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-[0.86rem] font-semibold transition-colors ${
              solid
                ? "text-[var(--color-ink-800)] shadow-[4px_4px_10px_var(--color-neo-dark),-4px_-4px_10px_var(--color-neo-light)] hover:text-[var(--color-accent-500)]"
                : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
            }`}
          >
            <Phone
              size={15}
              className={solid ? "text-[var(--color-accent-500)]" : "text-[var(--color-accent-300)]"}
              strokeWidth={2}
            />
            {BRAND.phone}
          </a>
          <a
            href={wa(
              "Hello, I'd like to sell my file. Here are the details:"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn !px-4 !py-2 !text-[0.8rem] ${
              solid ? "btn-outline" : "btn-primary"
            }`}
          >
            Sell your file
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl lg:hidden ${
            solid
              ? "text-[var(--color-ink-800)] shadow-[4px_4px_10px_var(--color-neo-dark),-4px_-4px_10px_var(--color-neo-light)]"
              : "bg-white/10 text-white ring-1 ring-white/20"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`mx-auto mt-2 w-full max-w-[1320px] overflow-hidden transition-[max-height,opacity] duration-300 ease-[var(--ease-premium)] lg:hidden ${
          open ? "max-h-[100svh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="rounded-[18px] bg-[var(--color-surface)] px-4 py-5 shadow-[6px_6px_14px_var(--color-neo-dark),-5px_-5px_12px_var(--color-neo-light)]"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-0.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[0.98rem] font-semibold text-[var(--color-ink-800)] hover:text-[var(--color-accent-500)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-2.5 pt-1">
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center gap-2 text-[0.92rem] font-semibold text-[var(--color-ink-800)]"
            >
              <Phone
                size={16}
                className="text-[var(--color-accent-500)]"
                strokeWidth={2}
              />
              {BRAND.phone}
            </a>
            <a
              href={wa(
                "Hello, I'd like to sell my file. Here are the details:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Sell your file
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={BRAND.tours.alJalil}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !py-2.5 text-center"
              >
                Al-Jalil 360°
              </a>
              <a
                href={BRAND.tours.alNoor}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !py-2.5 text-center"
              >
                Al-Noor 360°
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
