import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cloud, Database, Settings, Layers, Palette } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages & Frameworks",
      skills: ["C#", "ASP.NET Core", "Blazor (Server-side)", "EF Core", "JavaScript", "HTML", "CSS"],
      color: "bg-blue-500"
    },
    {
      icon: Layers,
      title: "Design Patterns",
      skills: ["CQRS", "Repository Pattern", "Unit of Work", "SOLID Principles"],
      color: "bg-purple-500"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["Azure Service Bus", "Redis Cache", "Azure Container Apps", "Azure Entra ID", "Azure Elastic Scale", "GitHub Actions"],
      color: "bg-green-500"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["SQL Server Management Studio (SSMS)", "Azure Elastic Scale (Sharding)", "Multi-Tenant Architecture"],
      color: "bg-orange-500"
    },
    {
      icon: Settings,
      title: "Tools & Practices",
      skills: ["GitHub", "Git", "Docker", "RESTful Services", "Nightly Builds", "Code Reviews"],
      color: "bg-red-500"
    },
    {
      icon: Palette,
      title: "UI Libraries",
      skills: ["MudBlazor", "Bootstrap", "React JS", "Responsive Design"],
      color: "bg-pink-500"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card border-0 group hover:scale-105 w-full max-w-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${category.color} rounded-full shadow-glow group-hover:animate-pulse`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="shadow-card bg-gradient-card border-0 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Architecture Expertise</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Specializations</h3>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Microservices Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Multi-Tenant Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">System Design for Scale</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Current Focus</h3>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Large Language Models (LLMs)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">AI Agents & Development Tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Cloud-Native Services</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;