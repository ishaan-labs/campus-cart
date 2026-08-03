import { BrowseProducts } from "@/components/browse/browse-products";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function BrowsePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Browse products
            </h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Discover deals from SRM students — textbooks, tech, furniture, and
              more across all campuses.
            </p>
          </div>
          <BrowseProducts />
        </div>
      </main>
      <Footer />
    </>
  );
}
