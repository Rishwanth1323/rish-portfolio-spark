import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">Gourishetty Rishwanth</h3>
            <p className="text-muted-foreground">Full Stack Software Engineer</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=rishwanthg1323@gmail.com', '_blank')}
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </button>
            <a
              href="https://github.com/rishwanth23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © 2024 Gourishetty Rishwanth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;