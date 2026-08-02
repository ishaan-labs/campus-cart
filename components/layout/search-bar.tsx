"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  className?: string;
  placeholder?: string;
};

export function SearchBar({
  className,
  placeholder = "Search for books, electronics, furniture…",
}: SearchBarProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="h-10 rounded-full border-border/60 bg-muted/40 pl-10 shadow-none focus-visible:bg-background"
        aria-label="Search listings"
      />
    </div>
  );
}
