import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Compass, 
  Cog, 
  Factory, 
  Waves,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  Award,
  Clock
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "System Design & Architecture",
    description: "Our expert architects will design a comprehensive IoT ecosystem tailored to your specific requirements, ensuring scalability, security, and seamless integration.",
    features: [
      "Requirements analysis & discovery",
      "System architecture blueprints",
      "Network topology design",
      "Security assessment & planning",
      "Technology stack selection",
      "Budget & timeline estimation",
    ],
  },
  {
    icon: Cog,
    title: "Custom IoT Deployment",
    description: "End-to-end implementation services from hardware installation to software configuration, ensuring a smooth transition to smart operations.",
    features: [
      "Hardware procurement & installation",
      "Network infrastructure setup",
      "Software & firmware deployment",
      "System integration & testing",
      "Staff training & documentation",
      "Go-live support & monitoring",
    ],
  },
  {
    icon: Factory,
    title: "Industrial & Corporate Automation",
    description: "Specialized IIoT solutions for manufacturing excellence with predictive maintenance, process optimization, and real-time analytics.",
    features: [
      "SCADA & HMI integration",
      "PLC programming & optimization",
      "OEE & KPI dashboards",
      "Predictive maintenance systems",
      "Quality control automation",
      "Compliance & reporting tools",
    ],
  },
  {
    icon: Waves,
    title: "Fisheries & Environmental Monitoring",
    description: "Scientific-grade monitoring solutions for aquaculture operations with advanced water quality sensors and AI-powered analytics.",
    features: [
      "Multi-parameter water quality monitoring",
      "Automated feeding systems",
      "Disease prediction algorithms",
      "Environmental impact assessment",
      "Regulatory compliance reporting",
      "Remote farm management platform",
    ],
  },
];

const caseStudies = [
  {
    client: "TechPark India",
    industry: "Corporate Campus",
    description: "Deployed 500+ smart devices across 5 buildings, achieving 32% energy savings.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop",
  },
  {
    client: "BlueWater Aquafarms",
    industry: "Fisheries",
    description: "Implemented real-time monitoring for 50 ponds, reducing mortality by 45%.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
  },
  {
    client: "Sterling Manufacturing",
    industry: "Industrial",
    description: "IIoT deployment across 3 plants with predictive maintenance, 28% uptime improvement.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=300&h=200&fit=crop",
  },
];

const Consultancy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-hero-gradient text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Enterprise Consultancy</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                  Expert IoT Consulting & Implementation
                </h1>
                <p className="text-xl text-slate-300 mb-8">
                  Our team of automation experts will guide you through every step 
                  of your digital transformation journey, from concept to deployment.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-accent" />
                    <span>500+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-accent" />
                    <span>Expert Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span>ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6">Request a Consultation</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                      <Input placeholder="Last Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    </div>
                    <Input placeholder="Work Email" type="email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    <Input placeholder="Company Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                    <select className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white/80">
                      <option value="" className="text-gray-800">Select Interest</option>
                      <option value="home" className="text-gray-800">Smart Home</option>
                      <option value="office" className="text-gray-800">Smart Office</option>
                      <option value="industrial" className="text-gray-800">Industrial IoT</option>
                      <option value="fisheries" className="text-gray-800">Fisheries Monitoring</option>
                    </select>
                    <Textarea placeholder="Tell us about your project" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]" />
                    <Button variant="hero" className="w-full">
                      Submit Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Comprehensive Consulting Services
              </h2>
              <p className="text-muted-foreground text-lg">
                From initial concept to full deployment, our expert team provides 
                end-to-end IoT consulting services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div 
                  key={service.title}
                  className="bg-card rounded-2xl border border-border p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Case Studies</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Success Stories
              </h2>
              <p className="text-muted-foreground text-lg">
                See how we've helped organizations transform their operations with IoT.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div 
                  key={study.client}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <img 
                    src={study.image} 
                    alt={study.client}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs text-accent font-medium uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                      {study.client}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {study.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Form */}
        <section className="py-20 lg:hidden">
          <div className="container mx-auto px-4">
            <div className="bg-accent-gradient p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
              <form className="space-y-4">
                <Input placeholder="Full Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Input placeholder="Work Email" type="email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Input placeholder="Company Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Textarea placeholder="Tell us about your project" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Button variant="glass" className="w-full">
                  Submit Request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consultancy;
