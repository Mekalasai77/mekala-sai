import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-6">Get in Touch</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <Card className="p-8 md:p-12 border-2 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="mb-4">Let's Connect</h3>
                <p className="text-muted-foreground">
                  Whether you have a project in mind, need technical consultation, or just want to chat about React and React Native, feel free to reach out.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:sai.mekala@example.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">Mekalasai77@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="mb-4">Find Me Online</h3>
              
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a 
                  href="https://linkedin.com/in/sai-mekala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
              </Button>

              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a 
                  href="https://github.com/Mekalasai77" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
              </Button>

              <div className="pt-4">
                <Button className="w-full shadow-lg shadow-primary/20" size="lg" asChild>
                  <a href="mailto:Mekalasai77@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground">
          <p>© 2025 Sai Mekala. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
}
