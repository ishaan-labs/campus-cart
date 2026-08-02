import { CategoryCards } from "@/components/landing/category-cards";
import { FeaturedListings } from "@/components/landing/featured-listings";
import { HeroSection } from "@/components/landing/hero-section";
import { SellOnCampus } from "@/components/landing/sell-on-campus";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategoryCards />
        <FeaturedListings />
        <SellOnCampus />
      </main>
      <Footer />
    </>
  );
}
