import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 bg-muted/30 border-2 border-border rounded-full flex items-center justify-center shadow-lg">
                <div className="text-muted-foreground text-center p-8">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="text-sm">Your Profile Photo</p>
                  <p className="text-xs text-muted-foreground/60">Upload your professional headshot</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/20 rounded-full"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Gourishetty Rishwanth
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-primary">
                Full Stack Software Engineer
              </h2>
            </div>

            <div className="animate-slide-up mb-8">
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Versatile developer specializing in building enterprise-scale healthcare systems 
                with <span className="text-primary font-semibold">ASP.NET Core</span>, 
                <span className="text-primary font-semibold"> Azure</span>, and 
                <span className="text-primary font-semibold"> microservice architecture</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up">
              <Button size="lg" className="group">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Hyderabad, India
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 9121491239
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;