import { Card } from "./ui/card";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2022 - Present",
    role: "Software Developer at Youngsoft india pvt ltd",
    description: "Leading development of web and mobile applications using React and React Native. Architecting scalable solutions."
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Experience</h2>
        
        <div className="space-y-6 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500" />
          
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover-lift border-2 hover:border-primary/20 md:ml-8 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute -left-8 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-border" />
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <h3>{exp.role}</h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                {exp.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            3+ years of professional experience delivering high-quality applications
          </p>
        </div>
      </div>
    </section>
  );
}
