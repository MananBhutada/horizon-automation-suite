import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building2, 
  Landmark, 
  Trees, 
  Factory, 
  Waves,
  ArrowRight
} from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Smart Home Automation",
    description: "Transform your living space with intelligent lighting, climate control, security systems, and voice-activated automation.",
    tags: ["Residential", "Voice Control", "Energy Saving"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Smart Office Automation",
    description: "Boost productivity with automated meeting rooms, occupancy-based lighting, and integrated building management systems.",
    tags: ["Corporate", "Productivity", "HVAC"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Landmark,
    title: "Smart Corporate Solutions",
    description: "Enterprise-grade automation for large campuses with centralized control, analytics, and energy optimization.",
    tags: ["Enterprise", "Analytics", "Scalable"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Trees,
    title: "Free-Space Automation",
    description: "Intelligent management for parks, outdoor venues, and public spaces with weather-adaptive lighting and irrigation.",
    tags: ["Outdoor", "Public Spaces", "Weather-Adaptive"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    description: "IIoT solutions for manufacturing with predictive maintenance, process optimization, and real-time monitoring.",
    tags: ["Manufacturing", "Predictive", "OEE"],
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Waves,
    title: "Fisheries & Water Monitoring",
    description: "Scientific-grade aquaculture monitoring with pH, dissolved oxygen, temperature, and turbidity sensors.",
    tags: ["Aquaculture", "Scientific", "Real-time"],
    gradient: "from-teal-500 to-cyan-500",
  },
];

export function SolutionsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Comprehensive IoT Solutions for Every Industry
          </h2>
          <p className="text-muted-foreground text-lg">
            From residential spaces to industrial facilities, we deliver tailored automation 
            solutions that drive efficiency and intelligence.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${solution.gradient}`} />
              
              <div className="p-6">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${solution.gradient} bg-opacity-10 mb-4`}>
                  <solution.icon className="h-6 w-6 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {solution.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link to={`/solutions#${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="ghost" className="p-0 h-auto text-accent hover:text-accent/80 group/btn">
                    Explore Solution
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/consultancy">
            <Button variant="teal" size="lg">
              Talk to Our Automation Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
