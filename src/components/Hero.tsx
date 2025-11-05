import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4 animate-[fade-in-up_0.8s_ease-out]">
          <h1 className="text-5xl md:text-7xl tracking-tight gradient-text">
            Sai Mekala
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Web & Mobile App Developer
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Available for new opportunities</span>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-[fade-in-up_0.8s_ease-out_0.2s_both]">
          Specialized in React and React Native with 3+ years of experience building modern, user-centric applications
        </p>

        <div className="flex gap-4 justify-center pt-4 animate-[fade-in-up_0.8s_ease-out_0.4s_both]">
          <Button onClick={() => scrollToSection("contact")} size="lg" className="shadow-lg shadow-primary/20">
            Get in Touch
          </Button>
          <Button 
            onClick={() => scrollToSection("about")} 
            variant="outline" 
            size="lg"
          >
            Learn More
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
}
