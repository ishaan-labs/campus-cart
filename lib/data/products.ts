export type ProductCondition = "New" | "Like New" | "Good" | "Fair";

export type Campus = "KTR" | "Ramapuram" | "Delhi NCR";

export type ProductCategory =
  | "Electronics"
  | "Books"
  | "Fashion"
  | "Furniture"
  | "Sports"
  | "Gaming";

export type Product = {
  id: string;
  title: string;
  price: number;
  campus: Campus;
  condition: ProductCondition;
  category: ProductCategory;
  image: string;
  postedAt: string;
  postedDaysAgo: number;
  sellerName: string;
  description: string;
};

export const productCategories: ProductCategory[] = [
  "Electronics",
  "Books",
  "Fashion",
  "Furniture",
  "Sports",
  "Gaming",
];

export const productConditions: ProductCondition[] = [
  "New",
  "Like New",
  "Good",
  "Fair",
];

export const campuses: Campus[] = ["KTR", "Ramapuram", "Delhi NCR"];

export const priceRanges = [
  { id: "all", label: "Any price", min: 0, max: Infinity },
  { id: "under-500", label: "Under ₹500", min: 0, max: 500 },
  { id: "500-2000", label: "₹500 – ₹2,000", min: 500, max: 2000 },
  { id: "2000-10000", label: "₹2,000 – ₹10,000", min: 2000, max: 10000 },
  { id: "10000-plus", label: "₹10,000+", min: 10000, max: Infinity },
] as const;

export type PriceRangeId = (typeof priceRanges)[number]["id"];

export type SortOption = "newest" | "price-asc" | "price-desc" | "title-asc";

export const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest first" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "title-asc", label: "Title: A – Z" },
];

export const products: Product[] = [
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
    postedDaysAgo: 0,
    sellerName: "Arjun K.",
    description:
      "Barely used MacBook Air M1 in space grey. Perfect for coding and design work. Includes original charger and box. Battery cycle count under 120.",
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
    postedDaysAgo: 0,
    sellerName: "Priya M.",
    description:
      "10th edition Kreyszig with minimal highlighting. Ideal for MA101 and engineering maths courses. Pickup from NH hostel block.",
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
    postedDaysAgo: 1,
    sellerName: "Rahul S.",
    description:
      "Industry-leading noise cancellation. Used for one semester only. Comes with carrying case and aux cable.",
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
    postedDaysAgo: 1,
    sellerName: "Sneha V.",
    description:
      "Compact desk ideal for hostel rooms. Sturdy wooden top with one drawer. Moving out of hostel — must sell this week.",
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
    postedDaysAgo: 2,
    sellerName: "Karan D.",
    description:
      "Disc edition PS5 with two DualSense controllers. Includes Spider-Man 2 and FIFA 24 discs. No issues, smoke-free room.",
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
    postedDaysAgo: 3,
    sellerName: "Vikram N.",
    description:
      "Lightweight road bike, great for campus commutes. Recently serviced with new brake pads. Helmet included free.",
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
    postedDaysAgo: 3,
    sellerName: "Ananya R.",
    description:
      "White AF1s worn twice. Original box included. Size UK 9 / EU 43. No scuffs or yellowing.",
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
    postedDaysAgo: 4,
    sellerName: "Meera T.",
    description:
      "Starlight iPad Air with Apple Pencil 2nd gen bundle. Used for note-taking in lectures. Screen protector applied from day one.",
  },
  {
    id: "9",
    title: "Casio fx-991EX Calculator",
    price: 900,
    campus: "KTR",
    condition: "Good",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1587145668770-62ef891dae23?w=600&h=450&fit=crop",
    postedAt: "4d ago",
    postedDaysAgo: 4,
    sellerName: "Rohan P.",
    description:
      "Allowed in SRM exams. Fully functional with cover. Perfect for engineering students taking MA101 and physics papers.",
  },
  {
    id: "10",
    title: 'Dell 24" Full HD Monitor',
    price: 7500,
    campus: "KTR",
    condition: "Good",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=450&fit=crop",
    postedAt: "5d ago",
    postedDaysAgo: 5,
    sellerName: "Aditya L.",
    description:
      "1080p IPS panel, ideal for dual-monitor coding setup. Includes HDMI cable and adjustable stand. No dead pixels.",
  },
  {
    id: "11",
    title: "White Lab Coat — Size M",
    price: 250,
    campus: "Ramapuram",
    condition: "Like New",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=450&fit=crop",
    postedAt: "5d ago",
    postedDaysAgo: 5,
    sellerName: "Divya H.",
    description:
      "Required for chemistry and biology lab sessions. Worn twice, freshly washed. Embroidery-ready for name tag.",
  },
  {
    id: "12",
    title: "Logitech G502 Hero Mouse",
    price: 2200,
    campus: "Delhi NCR",
    condition: "Like New",
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=450&fit=crop",
    postedAt: "6d ago",
    postedDaysAgo: 6,
    sellerName: "Nikhil B.",
    description:
      "High-DPI gaming mouse with adjustable weights. Used one semester for Valorant and assignments. Original packaging included.",
  },
  {
    id: "13",
    title: "Introduction to Algorithms — CLRS",
    price: 800,
    campus: "KTR",
    condition: "Good",
    category: "Books",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=450&fit=crop",
    postedAt: "6d ago",
    postedDaysAgo: 6,
    sellerName: "Sanjay G.",
    description:
      "Classic CLRS textbook for CSE students. Some pencil notes in margins. Covers DSA courses across all semesters.",
  },
  {
    id: "14",
    title: "Mini Fridge for Hostel — 47L",
    price: 4500,
    campus: "KTR",
    condition: "Good",
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1571175443240-dc17fbfc8029?w=600&h=450&fit=crop",
    postedAt: "1w ago",
    postedDaysAgo: 7,
    sellerName: "Kavya J.",
    description:
      "Compact fridge fits under hostel desk. Quiet compressor, energy efficient. Graduating — available before end of month.",
  },
  {
    id: "15",
    title: "Keychron K2 Mechanical Keyboard",
    price: 5500,
    campus: "Ramapuram",
    condition: "Like New",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=450&fit=crop",
    postedAt: "1w ago",
    postedDaysAgo: 7,
    sellerName: "Varun C.",
    description:
      "Hot-swappable brown switches, RGB backlight, Mac/Windows compatible. Perfect for CS students who type a lot.",
  },
  {
    id: "16",
    title: "Yonex Badminton Racket + Cover",
    price: 1800,
    campus: "Delhi NCR",
    condition: "Good",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=450&fit=crop",
    postedAt: "1w ago",
    postedDaysAgo: 8,
    sellerName: "Isha P.",
    description:
      "Lightweight racket with new grip tape. Used for intra-college tournaments. Cover and one shuttlecock pack included.",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export const featuredProducts = products.slice(0, 8);
