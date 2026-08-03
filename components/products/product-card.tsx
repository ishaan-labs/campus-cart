import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Product } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils/format";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className={cn("block", className)}>
      <Card className="group h-full cursor-pointer overflow-hidden border-0 bg-card p-0 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 border-0 bg-background/90 backdrop-blur-sm"
          >
            {product.condition}
          </Badge>
          <Badge
            variant="outline"
            className="absolute top-3 right-3 gap-1 border-0 bg-background/90 backdrop-blur-sm"
          >
            <MapPin className="size-3" />
            {product.campus}
          </Badge>
        </div>

        <div className="space-y-1.5 p-4">
          <p className="text-xl font-semibold tracking-tight">
            {formatPrice(product.price)}
          </p>
          <h3 className="line-clamp-2 text-sm leading-snug font-medium text-foreground/90 transition-colors group-hover:text-primary">
            {product.title}
          </h3>
          <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
            <span>{product.sellerName}</span>
            <span>{product.postedAt}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
