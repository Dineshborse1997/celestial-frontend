import { useState } from "react";
import ProductCard, { Product } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import tarotImage from "@/assets/product-tarot.jpg";
import crystalImage from "@/assets/product-crystal.jpg";
import jewelryImage from "@/assets/product-jewelry.jpg";

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

const allProducts: Product[] = [
  {
    id: "1",
    name: "Celestial Tarot Deck",
    category: "Tarot Cards",
    price: 2499,
    image: tarotImage,
    description: "Hand-illustrated 78-card deck with mystical purple and gold imagery",
    inStock: true,
    isNew: true,
    rating: 5,
  },
  {
    id: "2",
    name: "Amethyst Energy Crystal",
    category: "Crystals",
    price: 1899,
    image: crystalImage,
    description: "Natural amethyst cluster for spiritual healing and meditation",
    inStock: true,
    rating: 5,
  },
  {
    id: "3",
    name: "Moon Phase Necklace",
    category: "Jewelry",
    price: 3299,
    image: jewelryImage,
    description: "Sterling silver pendant featuring celestial moon phases",
    inStock: true,
    isNew: true,
    rating: 4,
  },
  {
    id: "4",
    name: "Oracle Card Set",
    category: "Tarot Cards",
    price: 1999,
    image: tarotImage,
    description: "44-card oracle deck for daily guidance and inspiration",
    inStock: true,
    rating: 4,
  },
  {
    id: "5",
    name: "Rose Quartz Heart",
    category: "Crystals",
    price: 1299,
    image: crystalImage,
    description: "Polished rose quartz for love and emotional healing",
    inStock: false,
    rating: 5,
  },
  {
    id: "6",
    name: "Chakra Bracelet",
    category: "Jewelry",
    price: 2199,
    image: jewelryImage,
    description: "Seven chakra stones in elegant gold-plated setting",
    inStock: true,
    rating: 5,
  },
];

const categories = ["All", "Tarot Cards", "Crystals", "Jewelry"];

const Shop = ({ onAddToCart }: ShopProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sacred Shop
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover mystical tools and treasures for your spiritual journey
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-lavender focus:border-accent focus:ring-accent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground hover:bg-gold"
                    : "border-lavender hover:border-accent hover:text-accent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                delay={index * 0.05}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-xl text-muted-foreground mb-4">No products found</p>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
