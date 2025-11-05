import { Heart, Shield, Sparkles, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description: "We provide genuine spiritual guidance rooted in ancient wisdom and modern understanding",
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    description: "Our mission is to help you unlock your inner potential and spiritual strength",
  },
  {
    icon: Shield,
    title: "Privacy",
    description: "Your spiritual journey is sacred. We maintain complete confidentiality",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a supportive community of seekers on the path to enlightenment",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Mystical Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            MysticSoul India was born from a deep passion for spiritual wisdom and a desire to make authentic mystical guidance accessible to all seekers.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, MysticSoul India emerged from years of dedicated practice in tarot reading, Vedic astrology, and spiritual healing. What started as a personal journey of discovery has blossomed into a thriving community of spiritual seekers.
              </p>
              <p>
                Our founder recognized the growing need for authentic spiritual guidance in an increasingly complex world. By combining traditional wisdom with modern accessibility, we've created a sanctuary where ancient practices meet contemporary needs.
              </p>
              <p>
                Today, we're proud to serve thousands of clients across India, offering personalized consultations, curated spiritual products, and a supportive community for those on their mystical path.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-2xl p-1">
              <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-accent animate-float" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 mb-20 text-center animate-scale-in">
          <h2 className="text-3xl font-bold mb-6 text-accent">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            "To illuminate the path of spiritual seekers with authentic guidance, sacred tools, and a nurturing community, empowering individuals to unlock their highest potential and live in alignment with their true purpose."
          </p>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center animate-flip-in hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-card border border-lavender rounded-2xl p-12 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Certified & Trusted</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            All our practitioners are certified professionals with years of experience in their respective fields. We maintain the highest standards of authenticity and ethical practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Certified Tarot Readers", "Vedic Astrology Experts", "Reiki Masters", "Crystal Healers"].map(
              (cert, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium"
                >
                  {cert}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
