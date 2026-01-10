import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building2, Factory, Home, Waves } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-iot-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Enterprise IoT Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              End-to-End Smart{" "}
              <span className="gradient-text">Automation & IoT</span>{" "}
              Solutions
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Transforming homes, offices, and industries with intelligent automation. 
              From smart buildings to aquaculture monitoring – we deliver connected excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/solutions">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400 mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start items-center opacity-60">
                <span className="text-white font-semibold">TATA</span>
                <span className="text-white font-semibold">Reliance</span>
                <span className="text-white font-semibold">Mahindra</span>
                <span className="text-white font-semibold">L&T</span>
              </div>
            </div>
          </div>

          {/* Visual - Solution Icons Grid */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/30 rounded-full blur-2xl animate-glow" />
                  <div className="relative w-32 h-32 rounded-full bg-accent-gradient flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">IoT</span>
                  </div>
                </div>
              </div>

              {/* Orbiting Icons */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 animate-float">
                <div className="glass-card p-4 rounded-xl">
                  <Home className="h-8 w-8 text-accent" />
                  <p className="text-xs text-white/80 mt-2">Smart Home</p>
                </div>
              </div>

              <div className="absolute top-1/2 right-8 -translate-y-1/2 animate-float" style={{ animationDelay: "-1.5s" }}>
                <div className="glass-card p-4 rounded-xl">
                  <Building2 className="h-8 w-8 text-accent" />
                  <p className="text-xs text-white/80 mt-2">Smart Office</p>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: "-3s" }}>
                <div className="glass-card p-4 rounded-xl">
                  <Factory className="h-8 w-8 text-accent" />
                  <p className="text-xs text-white/80 mt-2">Industrial</p>
                </div>
              </div>

              <div className="absolute top-1/2 left-8 -translate-y-1/2 animate-float" style={{ animationDelay: "-4.5s" }}>
                <div className="glass-card p-4 rounded-xl">
                  <Waves className="h-8 w-8 text-accent" />
                  <p className="text-xs text-white/80 mt-2">Fisheries</p>
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                <circle cx="250" cy="250" r="120" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="5,5" className="opacity-30" />
                <circle cx="250" cy="250" r="180" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="5,5" className="opacity-20" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
