import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils/format";
import { cn } from "@/lib/utils";
import type { Listing } from "@/lib/data/landing";

type ProductCardProps = {
  listing: Listing;
  className?: string;
};

export function ProductCard({ listing, className }: ProductCardProps) {
  return (
    <Card
      className={cn(
        "group cursor-pointer overflow-hidden border-0 bg-card p-0 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 border-0 bg-background/90 backdrop-blur-sm"
        >
          {listing.condition}
        </Badge>
      </div>

      <div className="space-y-1.5 p-4">
        <p className="text-xl font-semibold tracking-tight">
          {formatPrice(listing.price)}
        </p>
        <h3 className="line-clamp-2 text-sm leading-snug font-medium text-foreground/90">
          {listing.title}
        </h3>
        <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
          <span>{listing.campus}</span>
          <span>{listing.postedAt}</span>
        </div>
      </div>
    </Card>
  );
}
