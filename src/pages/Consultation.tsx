import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Check, Sparkles } from "lucide-react";
import consultationBg from "@/assets/consultation-bg.jpg";

interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  benefits: string[];
  popular?: boolean;
}

const services: Service[] = [
  {
    id: "tarot",
    name: "Tarot Reading",
    duration: "45 minutes",
    price: 2999,
    description: "Gain clarity and insight into your life's questions through the ancient wisdom of tarot",
    benefits: [
      "Personalized card reading",
      "Life guidance and clarity",
      "Relationship insights",
      "Career direction",
    ],
    popular: true,
  },
  {
    id: "astrology",
    name: "Vedic Astrology",
    duration: "60 minutes",
    price: 3999,
    description: "Discover your cosmic blueprint and life path through detailed astrological analysis",
    benefits: [
      "Birth chart analysis",
      "Life predictions",
      "Compatibility reading",
      "Remedial solutions",
    ],
  },
  {
    id: "spiritual",
    name: "Spiritual Consultation",
    duration: "30 minutes",
    price: 1999,
    description: "One-on-one guidance for your spiritual journey and personal growth",
    benefits: [
      "Spiritual guidance",
      "Energy healing advice",
      "Meditation techniques",
      "Chakra balancing tips",
    ],
  },
];

const Consultation = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section
        className="relative py-20 mb-12"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 31, 94, 0.8), rgba(74, 31, 94, 0.6)), url(${consultationBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-primary-foreground animate-fade-in">
            Book Your Mystical Consultation
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-slide-up">
            Connect with our certified practitioners for personalized spiritual guidance
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-flip-in ${
                selectedService === service.id
                  ? "border-accent shadow-xl shadow-accent/20"
                  : "border-lavender"
              }`}
              onClick={() => setSelectedService(service.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}

              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.name}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>

                <div className="space-y-2 mb-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="text-3xl font-bold text-accent mb-4">
                  ₹{service.price}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full transition-all ${
                    selectedService === service.id
                      ? "bg-accent text-accent-foreground hover:bg-gold animate-glow-pulse"
                      : "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                  size="lg"
                >
                  {selectedService === service.id ? "Selected" : "Select Service"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        {selectedService && (
          <div className="text-center animate-scale-in">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-gold text-lg px-12 py-6 animate-glow-pulse"
            >
              Proceed to Booking
            </Button>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-card border border-lavender rounded-lg p-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Choose Your Service",
                description: "Select the consultation type that resonates with you",
              },
              {
                step: "2",
                title: "Book Your Session",
                description: "Pick a convenient date and time slot",
              },
              {
                step: "3",
                title: "Receive Guidance",
                description: "Connect with our expert and gain clarity",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
