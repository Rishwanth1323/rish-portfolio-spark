import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Praxzen",
      position: "Software Engineer-1",
      location: "Hyderabad, India",
      period: "09/2024 – Present",
      type: "Full-time",
      achievements: [
        "Created scalable and loosely coupled backend microservices using ASP.NET Web APIs following CQRS and Repository Pattern",
        "Developed responsive UI using Blazor server-side with reusable components, leveraging MudBlazor and Bootstrap",
        "Built query and command handlers, abstracting business logic into service layers for clean, maintainable architecture",
        "Integrated with third-party Lab APIs and implemented RxNorm caching using Azure Redis Cache for fast, reliable data retrieval",
        "Used Azure Service Bus for robust and decoupled inter-microservice communication",
        "Designed and implemented multi-tenant sharded databases using Azure Elastic Scale",
        "Ensured secure multi-user access via Microsoft Entra ID, enabling login and role-based access",
        "Maintained high code quality and deployment reliability through CI/CD pipelines using GitHub Actions",
        "Used ASP.NET Blazor Hybrid templates with shared C# code and Razor components to support native platforms",
        "Participated actively in code reviews, mentored junior developers, and contributed to system design discussions"
      ],
      technologies: ["C#", "ASP.NET Core", "Blazor", "Azure", "Redis", "CQRS", "Microservices"]
    },
    {
      company: "Virtusa",
      position: "Developer Intern",
      location: "Remote",
      period: "05/2023 – 09/2024",
      type: "Internship",
      achievements: [
        "Contributed to the development of a Hospital Management System web application with focus on front-end development",
        "Designed and implemented user interfaces using React JS, HTML, and CSS",
        "Developed and integrated RESTful APIs with React components to ensure seamless user experience",
        "Enhanced application performance through effective use of React's state management and component lifecycle methods",
        "Conducted thorough code reviews and debugging to maintain high code quality"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "React JS", "HTML", "CSS", "REST APIs"]
    }
  ];

  const presentations = [
    "Deep Air Quality Forecasting Using Hybrid Deep Learning Framework",
    "Diagnosis of Depression Based on Four-Stream Model of Bi-LSTM and CNN From Audio and Text Information"
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building enterprise-scale applications with modern technologies
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">{exp.position}</CardTitle>
                    <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground mb-2">
                      <Building2 className="w-5 h-5" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <Badge variant="outline" className="w-fit border-primary text-primary">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Research Presentations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {presentations.map((presentation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{presentation}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;