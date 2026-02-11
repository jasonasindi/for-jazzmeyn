import { Heart, MapPin, Clock, Calendar, Utensils, Palette } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const events = [
  {
    day: "Friday",
    date: "February 13",
    time: "8:00 PM",
    title: "Dinner at Aera",
    description: "An intimate evening to kick off our Valentine's weekend",
    icon: Utensils,
    location: "Aera Restaurant",
  },
  {
    day: "Saturday",
    date: "February 14",
    time: "5:00 PM",
    title: "Pottery Class",
    description: "Creating something beautiful together, just like us",
    icon: Palette,
    location: "Artventures",
  },
  {
    day: "Saturday",
    date: "February 14",
    time: "9:00 PM",
    title: "Dinner at Joey",
    description: "A perfect ending to our perfect Valentine's Day",
    icon: Utensils,
    location: "Joey Sherway",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Romantic roses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy/60 via-burgundy/40 to-background" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <Heart className="w-10 h-10 text-blush mx-auto mb-6 animate-float" />
          <p className="font-body text-blush/90 tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in-up">
            Valentine's Weekend 2025
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 animate-fade-in-up-delay-1 leading-tight">
            Jazzmeyn
          </h1>
          <p className="font-display text-xl md:text-2xl text-blush/90 italic animate-fade-in-up-delay-2">
            Our weekend awaits, my love
          </p>
          <div className="mt-12 animate-fade-in-up-delay-3">
            <div className="w-px h-16 bg-gradient-to-b from-blush/60 to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-primary tracking-[0.25em] uppercase text-xs font-body mb-3">
              Our Plans
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              The Itinerary
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-rose-gold/40 to-transparent" />

            <div className="space-y-16">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`relative pl-16 md:pl-20 animate-fade-in-up-delay-${index + 1}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md" />

                  <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs tracking-wider uppercase text-muted-foreground font-body">
                        {event.day}, {event.date}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <event.icon className="w-5 h-5 text-primary/70" />
                    </div>

                    <p className="font-body text-muted-foreground text-sm mb-4 italic">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs text-secondary-foreground">
                      <span className="flex items-center gap-1.5 bg-secondary rounded-full px-3 py-1.5">
                        <Clock className="w-3 h-3" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5 bg-secondary rounded-full px-3 py-1.5">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="pb-20 text-center px-6">
        <Heart className="w-5 h-5 text-primary mx-auto mb-4 animate-pulse-soft" />
        <p className="font-display text-lg text-muted-foreground italic">
          Happy Valentine's Day, Jazzmeyn
        </p>
      </section>
    </div>
  );
};

export default Index;
