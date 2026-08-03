import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/products/product-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/lib/data/products";

export function FeaturedListings() {
  return (
    <section
      id="featured"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionHeader
        title="Featured listings"
        description="Fresh picks from students across SRM campuses."
        action={
          <Button
            variant="outline"
            className="hidden rounded-full sm:inline-flex"
            render={<Link href="/browse" />}
          >
            See all listings
            <ArrowRight className="size-4" />
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Button variant="outline" className="rounded-full" render={<Link href="/browse" />}>
          See all listings
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
