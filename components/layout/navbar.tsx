import { Menu } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { SearchBar } from "@/components/layout/search-bar";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Logo />

          <div className="hidden flex-1 md:block md:max-w-xl lg:max-w-2xl">
            <SearchBar />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Browse
            </Button>
            <Button size="sm" className="rounded-full px-5">
              Log in
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
              <Menu className="size-5" />
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
