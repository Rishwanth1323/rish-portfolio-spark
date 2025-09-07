import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech (Information Technology)",
      institution: "CVR College of Engineering",
      location: "Hyderabad",
      period: "05/2019 – 05/2023",
      grade: "8.0 CGPA",
      type: "Bachelor's Degree"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      location: "Hyderabad",
      period: "05/2017 – 05/2019",
      grade: "85%",
      type: "Higher Secondary"
    },
    {
      degree: "SSC",
      institution: "Sri Chaitanya High School",
      location: "Hyderabad",
      period: "05/2016 – 05/2017",
      grade: "8.7 GPA",
      type: "Secondary School"
    }
  ];

  const certifications = [
    {
      title: "Oracle Java SE 8 Programmer-I",
      issuer: "Oracle",
      icon: "☕"
    },
    {
      title: "Database Programming with SQL",
      issuer: "Oracle",
      icon: "🗄️"
    },
    {
      title: "Artificial Intelligence Certification",
      issuer: "SSC NASSCOM (skillup online)",
      icon: "🤖"
    }
  ];

  const interests = [
    "Tech Trend Enthusiast – Following MCPs, LLMs, AI Agents",
    "Active Blog Reader – Industry news and development tools",
    "Scalability & System Architecture – System design for millions of users",
    "Learning by Experimentation – Hands-on with trending tools and cloud services"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <GraduationCap className="w-8 h-8" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">{edu.degree}</CardTitle>
                      <p className="text-lg font-semibold text-muted-foreground">{edu.institution}</p>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {edu.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Grade: {edu.grade}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Award className="w-8 h-8" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{cert.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary">{cert.title}</h4>
                        <p className="text-muted-foreground">Issued by {cert.issuer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technical Interests */}
            <Card className="shadow-card bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Technical Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{interest}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;