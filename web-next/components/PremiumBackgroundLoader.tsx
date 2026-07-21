"use client";

import dynamic from "next/dynamic";

const PremiumBackground = dynamic(
  () =>
    import("./PremiumBackground").catch((err) => {
      console.warn("[PremiumBackground] failed to load:", err);
      return { default: () => null };
    }),
  { ssr: false }
);

export default function PremiumBackgroundLoader() {
  return <PremiumBackground />;
}
