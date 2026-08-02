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

export type Listing = {
  id: string;
  title: string;
  price: number;
  campus: string;
  condition: "New" | "Like New" | "Good" | "Fair";
  category: string;
  image: string;
  postedAt: string;
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

export const featuredListings: Listing[] = [
  {
    id: "1",
    title: "MacBook Air M1 — 8GB/256GB",
    price: 52000,
    campus: "KTR",
    condition: "Like New",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=450&fit=crop",
    postedAt: "2h ago",
  },
  {
    id: "2",
    title: "Engineering Mathematics — Kreyszig",
    price: 350,
    campus: "KTR",
    condition: "Good",
    category: "Books",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=450&fit=crop",
    postedAt: "5h ago",
  },
  {
    id: "3",
    title: "Sony WH-1000XM4 Headphones",
    price: 12500,
    campus: "Ramapuram",
    condition: "Like New",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1618366712010-f8ae0c045a22?w=600&h=450&fit=crop",
    postedAt: "1d ago",
  },
  {
    id: "4",
    title: "Study Desk with Drawer",
    price: 2800,
    campus: "KTR",
    condition: "Good",
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=450&fit=crop",
    postedAt: "1d ago",
  },
  {
    id: "5",
    title: "PlayStation 5 + 2 Controllers",
    price: 38000,
    campus: "Delhi NCR",
    condition: "Like New",
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=450&fit=crop",
    postedAt: "2d ago",
  },
  {
    id: "6",
    title: "Road Bike — Hero Sprint",
    price: 6500,
    campus: "KTR",
    condition: "Good",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1485965120189-e220f721d03f?w=600&h=450&fit=crop",
    postedAt: "3d ago",
  },
  {
    id: "7",
    title: "Nike Air Force 1 — Size 9",
    price: 4200,
    campus: "Ramapuram",
    condition: "Like New",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=450&fit=crop",
    postedAt: "3d ago",
  },
  {
    id: "8",
    title: "iPad Air 5th Gen — 64GB",
    price: 38000,
    campus: "KTR",
    condition: "Like New",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=450&fit=crop",
    postedAt: "4d ago",
  },
];
