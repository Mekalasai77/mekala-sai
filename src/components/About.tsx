import { Card } from "./ui/card";
import { Code2, Smartphone, Layers } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm a passionate developer focused on creating seamless digital experiences across web and mobile platforms. With over 3 years of professional experience, I've helped businesses bring their ideas to life through clean, efficient code and intuitive interfaces.
            </p>
            <p className="text-lg text-muted-foreground">
              My expertise lies in the React ecosystem, where I build scalable applications that prioritize performance, accessibility, and user experience. I believe in writing maintainable code and staying current with industry best practices.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="p-6 hover-lift border-2 hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2">Web Development</h3>
                  <p className="text-muted-foreground">
                    Building responsive web applications with React, TypeScript, and modern frameworks
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift border-2 hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2">Mobile Development</h3>
                  <p className="text-muted-foreground">
                    Creating cross-platform mobile apps using React Native for iOS and Android
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift border-2 hover:border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/30">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2">Full Stack Solutions</h3>
                  <p className="text-muted-foreground">
                    Delivering end-to-end solutions from frontend interfaces to backend integration
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
