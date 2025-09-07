import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rishwanthg1323@gmail.com",
      href: "mailto:rishwanthg1323@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9121491239",
      href: "tel:+919121491239"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Plot Number 88, Meerpet, Hyderabad, Telangana, India - 500097",
      href: "https://maps.google.com/?q=Meerpet,Hyderabad,Telangana,India"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "rishwanth23",
      href: "https://github.com/rishwanth23"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to build something amazing? I'm always interested in discussing new opportunities and innovative projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-glow bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="group"
                  >
                    <Card className="shadow-card hover:shadow-hover transition-all duration-300 bg-white/5 border-white/20 hover:bg-white/10 group-hover:scale-105">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                            <contact.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-white/70 font-medium">{contact.label}</p>
                          <p className="text-white font-semibold truncate">{contact.value}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>

              <div className="text-center space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="premium" 
                    size="lg" 
                    className="group"
                    onClick={() => window.open('mailto:rishwanthg1323@gmail.com', '_self')}
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                    onClick={() => window.open('https://github.com/rishwanth23', '_blank')}
                  >
                    <Github className="w-5 h-5" />
                    View GitHub
                  </Button>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-white/70 text-sm">
                    Open to opportunities in <strong className="text-white">Full Stack Development</strong>, 
                    <strong className="text-white"> Cloud Architecture</strong>, and 
                    <strong className="text-white"> Enterprise Software Solutions</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;