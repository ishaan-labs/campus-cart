import Image from "next/image";
import { Camera, IndianRupee, Sparkles, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Camera,
    title: "Snap a photo",
    description: "Upload up to 6 images of your item.",
  },
  {
    icon: Sparkles,
    title: "AI writes it up",
    description: "Get a polished description in seconds.",
  },
  {
    icon: IndianRupee,
    title: "Smart pricing",
    description: "AI suggests a fair campus price.",
  },
  {
    icon: Tag,
    title: "Go live",
    description: "Publish and chat with buyers instantly.",
  },
];

export function SellOnCampus() {
  return (
    <section id="sell" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-foreground text-background">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-12 sm:px-12 sm:py-16 lg:px-14">
            <p className="text-sm font-medium text-background/60">For sellers</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Sell on Campus
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-background/70">
              Turn your unused stuff into cash. List in under 2 minutes with
              AI-assisted descriptions and pricing — built for how students
              actually sell.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {steps.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-background/10">
                    <Icon className="size-5 text-background/90" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-0.5 text-sm text-background/60">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="h-11 rounded-full bg-background px-8 text-foreground hover:bg-background/90"
              >
                Start selling — it&apos;s free
              </Button>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=900&fit=crop"
              alt="Students on campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-foreground lg:via-foreground/20 lg:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
