import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent">
            Gourishetty Rishwanth
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-white/90">
            Full Stack Software Engineer
          </h2>
        </div>

        <div className="animate-slide-up mb-12">
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Versatile developer specializing in building enterprise-scale healthcare systems 
            with <span className="text-primary-glow font-semibold">ASP.NET Core</span>, 
            <span className="text-primary-glow font-semibold"> Azure</span>, and 
            <span className="text-primary-glow font-semibold"> microservice architecture</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="premium" size="lg" className="group">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
            <Github className="w-5 h-5" />
            View Projects
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Hyderabad, India
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            +91 9121491239
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            rishwanthg1323@gmail.com
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;