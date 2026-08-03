"use client";

import {
  productCategories,
  productConditions,
  priceRanges,
  sortOptions,
  type ProductCategory,
  type ProductCondition,
  type PriceRangeId,
  type SortOption,
} from "@/lib/data/products";
import { FilterChip } from "@/components/browse/filter-chip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type BrowseFiltersProps = {
  category: ProductCategory | "All";
  priceRange: PriceRangeId;
  condition: ProductCondition | "All";
  sort: SortOption;
  onCategoryChange: (category: ProductCategory | "All") => void;
  onPriceRangeChange: (range: PriceRangeId) => void;
  onConditionChange: (condition: ProductCondition | "All") => void;
  onSortChange: (sort: SortOption) => void;
};

export function BrowseFilters({
  category,
  priceRange,
  condition,
  sort,
  onCategoryChange,
  onPriceRangeChange,
  onConditionChange,
  onSortChange,
}: BrowseFiltersProps) {
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Category
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <FilterChip
            label="All"
            active={category === "All"}
            onClick={() => onCategoryChange("All")}
          />
          {productCategories.map((item) => (
            <FilterChip
              key={item}
              label={item}
              active={category === item}
              onClick={() => onCategoryChange(item)}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
        <div>
          <p className="mb-2.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Price
          </p>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range) => (
              <FilterChip
                key={range.id}
                label={range.label}
                active={priceRange === range.id}
                onClick={() => onPriceRangeChange(range.id)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Condition
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterChip
              label="All"
              active={condition === "All"}
              onClick={() => onConditionChange("All")}
            />
            {productConditions.map((item) => (
              <FilterChip
                key={item}
                label={item}
                active={condition === item}
                onClick={() => onConditionChange(item)}
              />
            ))}
          </div>
        </div>

        <div className="lg:min-w-[180px]">
          <p className="mb-2.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Sort by
          </p>
          <Select value={sort} onValueChange={(value) => onSortChange(value as SortOption)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
