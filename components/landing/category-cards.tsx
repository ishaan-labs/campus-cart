import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { categories } from "@/lib/data/landing";
import { cn } from "@/lib/utils";

export function CategoryCards() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        title="Shop by category"
        description="Browse what students near you are selling — from dorm essentials to graduation gear."
        action={
          <Button variant="ghost" className="hidden sm:inline-flex">
            View all
            <ArrowRight className="size-4" />
          </Button>
        }
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Card
              key={category.id}
              className="group cursor-pointer border-0 p-0 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-col items-center gap-3 p-5 text-center sm:p-6">
                <div
                  className={cn(
                    "flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                    category.color
                  )}
                >
                  <Icon className="size-6" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{category.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {category.count} listings
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
