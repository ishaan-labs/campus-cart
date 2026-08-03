import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, MessageCircle, ShieldAlert } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils/format";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/browse"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to browse
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted ring-1 ring-border/50 lg:aspect-square">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{product.condition}</Badge>
                <Badge variant="outline" className="gap-1">
                  <MapPin className="size-3" />
                  {product.campus}
                </Badge>
                <Badge variant="outline">{product.category}</Badge>
              </div>

              <h1 className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                {product.title}
              </h1>

              <p className="mt-3 text-3xl font-semibold tracking-tight">
                {formatPrice(product.price)}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Listed {product.postedAt} by{" "}
                <span className="font-medium text-foreground">
                  {product.sellerName}
                </span>
              </p>

              <div className="mt-8 space-y-3">
                <Button size="lg" className="h-11 w-full rounded-full sm:w-auto sm:px-8">
                  <MessageCircle className="size-4" />
                  Contact seller
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 w-full rounded-full sm:w-auto sm:px-8"
                >
                  <ShieldAlert className="size-4" />
                  Report listing
                </Button>
              </div>

              <div className="mt-10 rounded-2xl border border-border/60 bg-muted/20 p-5">
                <h2 className="text-sm font-semibold">Description</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                Product details page — chat and reporting will be available in a
                future update.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
