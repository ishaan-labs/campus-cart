"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import { BrowseFilters } from "@/components/browse/browse-filters";
import { ProductCard } from "@/components/products/product-card";
import { SearchBar } from "@/components/layout/search-bar";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";
import {
  defaultFilters,
  filterProducts,
  type ProductFilters,
} from "@/lib/utils/filter-products";
import { cn } from "@/lib/utils";

export function BrowseProducts() {
  const [filters, setFilters] = useState<ProductFilters>(defaultFilters);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = useMemo(
    () => filterProducts(products, filters),
    [filters]
  );

  const updateFilters = (patch: Partial<ProductFilters>) => {
    setFilters((current) => ({ ...current, ...patch }));
  };

  const hasActiveFilters =
    filters.query !== "" ||
    filters.category !== "All" ||
    filters.priceRange !== "all" ||
    filters.condition !== "All";

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <SearchBar
          className="flex-1"
          placeholder="Search textbooks, laptops, bikes…"
          value={filters.query}
          onChange={(query) => updateFilters({ query })}
        />
        <Button
          variant="outline"
          className="shrink-0 lg:hidden"
          onClick={() => setShowMobileFilters((open) => !open)}
        >
          <SlidersHorizontal className="size-4" />
          Filters
        </Button>
      </div>

      <div
        className={cn(
          "rounded-2xl border border-border/60 bg-card/50 p-4 sm:p-5",
          !showMobileFilters && "hidden lg:block"
        )}
      >
        <BrowseFilters
          category={filters.category}
          priceRange={filters.priceRange}
          condition={filters.condition}
          sort={filters.sort}
          onCategoryChange={(category) => updateFilters({ category })}
          onPriceRangeChange={(priceRange) => updateFilters({ priceRange })}
          onConditionChange={(condition) => updateFilters({ condition })}
          onSortChange={(sort) => updateFilters({ sort })}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{filteredProducts.length}</span>{" "}
          {filteredProducts.length === 1 ? "listing" : "listings"}
          {hasActiveFilters ? " found" : " available"}
        </p>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFilters(defaultFilters)}
          >
            Clear filters
          </Button>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border/60 bg-muted/20 px-6 py-16 text-center">
          <p className="text-lg font-medium">No listings match your filters</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try adjusting your search or clearing some filters.
          </p>
          <Button
            variant="outline"
            className="mt-6 rounded-full"
            onClick={() => setFilters(defaultFilters)}
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
}
