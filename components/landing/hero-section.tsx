import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";

import { SearchBar } from "@/components/layout/search-bar";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Users, label: "SRM students only" },
  { icon: ShieldCheck, label: "Verified campus deals" },
  { icon: Sparkles, label: "AI-powered listings" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.93_0.04_250),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            Exclusively for SRM students
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Buy & sell on campus,{" "}
            <span className="text-primary">effortlessly.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            From textbooks to tech — find great deals from students you trust.
            List in minutes, meet on campus, save money.
          </p>

          <div className="mx-auto mt-8 max-w-xl">
            <SearchBar placeholder="What are you looking for?" />
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
  size="lg"
  className="h-11 rounded-full px-8"
  nativeButton={false}
  render={<Link href="/browse" />}
>
              Start browsing
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-11 rounded-full px-8">
              Sell something
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon className="size-4 text-primary" strokeWidth={2} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
