import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Smartphone } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in ASP.NET Core, Blazor, and modern web technologies",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Azure ecosystem specialist with microservices expertise",
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Multi-tenant sharded databases and Redis caching",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Blazor Hybrid for iOS and Android applications",
    },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about clean code, scalability, and system design to support millions of users
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Versatile and detail-oriented Full Stack Developer with experience in building 
                  enterprise-scale healthcare systems. Currently working at <strong>Praxzen</strong> as 
                  Software Engineer-1, developing scalable microservices and user interfaces.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Healthcare Systems</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">CQRS Architecture</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">SOLID Principles</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Code Reviews</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Technical Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing <strong>clean, maintainable code</strong> that follows industry best practices. 
                  My approach focuses on creating scalable architectures that can grow with business needs, 
                  while maintaining high performance and reliability for enterprise applications.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card border-0 group hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full shadow-glow group-hover:animate-pulse">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;