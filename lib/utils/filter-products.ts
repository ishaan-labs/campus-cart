import {
  priceRanges,
  type PriceRangeId,
  type Product,
  type ProductCategory,
  type ProductCondition,
  type SortOption,
} from "@/lib/data/products";

export type ProductFilters = {
  query: string;
  category: ProductCategory | "All";
  priceRange: PriceRangeId;
  condition: ProductCondition | "All";
  sort: SortOption;
};

export const defaultFilters: ProductFilters = {
  query: "",
  category: "All",
  priceRange: "all",
  condition: "All",
  sort: "newest",
};

function matchesQuery(product: Product, query: string): boolean {
  if (!query.trim()) return true;

  const normalized = query.toLowerCase().trim();

  return (
    product.title.toLowerCase().includes(normalized) ||
    product.category.toLowerCase().includes(normalized) ||
    product.sellerName.toLowerCase().includes(normalized) ||
    product.campus.toLowerCase().includes(normalized)
  );
}

function sortProducts(items: Product[], sort: SortOption): Product[] {
  const sorted = [...items];

  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "title-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "newest":
    default:
      return sorted.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);
  }
}

export function filterProducts(
  items: Product[],
  filters: ProductFilters
): Product[] {
  const range = priceRanges.find((item) => item.id === filters.priceRange);

  const filtered = items.filter((product) => {
    if (!matchesQuery(product, filters.query)) return false;
    if (filters.category !== "All" && product.category !== filters.category) {
      return false;
    }
    if (filters.condition !== "All" && product.condition !== filters.condition) {
      return false;
    }
    if (range && (product.price < range.min || product.price > range.max)) {
      return false;
    }
    return true;
  });

  return sortProducts(filtered, filters.sort);
}
