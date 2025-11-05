import { ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard, { Product } from "@/components/ProductCard";
import { CartItem } from "@/components/Cart";
import heroImage from "@/assets/hero-bg.jpg";
import tarotImage from "@/assets/product-tarot.jpg";
import crystalImage from "@/assets/product-crystal.jpg";
import jewelryImage from "@/assets/product-jewelry.jpg";

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

const featuredProducts: Product[] = [
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
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    review: "The tarot reading was incredibly accurate and insightful. Highly recommend!",
    service: "Tarot Reading",
  },
  {
    id: 2,
    name: "Rahul Kapoor",
    rating: 5,
    review: "Amazing crystal collection! The energy is palpable. Life-changing experience.",
    service: "Crystal Healing",
  },
  {
    id: 3,
    name: "Anjali Mehta",
    rating: 5,
    review: "Professional, genuine, and deeply spiritual. The consultation exceeded my expectations.",
    service: "Spiritual Consultation",
  },
];

const Home = ({ onAddToCart }: HomeProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 31, 94, 0.7), rgba(74, 31, 94, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-background" />
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-slide-up">
            Unlock Your{" "}
            <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
              Mystical Journey
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Discover sacred wisdom through tarot readings, spiritual consultations, and mystical products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-gold text-lg px-8 py-6 animate-glow-pulse"
            >
              <Link to="/consultation">
                Book Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              <Link to="/shop">Explore Products</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-8 border-b border-primary-foreground/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "5000+", label: "Readings Completed" },
              { number: "4.9★", label: "Average Rating" },
              { number: "100%", label: "Certified Practitioners" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Sacred Tools for Your Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated mystical products to enhance your spiritual practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link to="/shop">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-accent rounded-full animate-float" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-gold rounded-full animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-accent">
              What Our Clients Say
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Real experiences from our mystical community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg border border-accent/30 animate-scale-in hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-10 h-10 text-accent mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div>
                  <p className="font-semibold text-accent">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/70">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
