import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 transition-opacity hover:opacity-80", className)}
    >
      <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <ShoppingBag className="size-5" strokeWidth={2.25} />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-tight">Campus Cart</span>
        <span className="text-[11px] font-medium text-muted-foreground">
          SRM Marketplace
        </span>
      </div>
    </Link>
  );
}
