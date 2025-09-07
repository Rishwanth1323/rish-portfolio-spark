import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Clean background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Photo Section - Placeholder for user to add */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Placeholder for profile photo */}
              <div className="w-80 h-80 rounded-full bg-muted border-8 border-white shadow-elegant flex items-center justify-center">
                <div className="text-muted-foreground text-lg">
                  Profile Photo
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Gourishetty <span className="bg-gradient-primary bg-clip-text text-transparent">Rishwanth</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-8 text-primary">
                Full Stack Software Engineer
              </h2>
            </div>

            <div className="animate-slide-up mb-12">
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Versatile developer specializing in building enterprise-scale healthcare systems 
                with <span className="text-primary font-semibold">ASP.NET Core</span>, 
                <span className="text-primary font-semibold"> Azure</span>, and 
                <span className="text-primary font-semibold"> microservice architecture</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="group shadow-lg">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4" />
                Hyderabad, India
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 9121491239
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                rishwanthg1323@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;