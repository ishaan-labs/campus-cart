import {
  BookOpen,
  Laptop,
  Shirt,
  Sofa,
  Bike,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  count: number;
  color: string;
};

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    icon: Laptop,
    count: 142,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "2",
    name: "Books",
    slug: "books",
    icon: BookOpen,
    count: 89,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "3",
    name: "Fashion",
    slug: "fashion",
    icon: Shirt,
    count: 56,
    color: "bg-pink-50 text-pink-600",
  },
  {
    id: "4",
    name: "Furniture",
    slug: "furniture",
    icon: Sofa,
    count: 34,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "5",
    name: "Sports",
    slug: "sports",
    icon: Bike,
    count: 28,
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: "6",
    name: "Gaming",
    slug: "gaming",
    icon: Gamepad2,
    count: 47,
    color: "bg-violet-50 text-violet-600",
  },
];
