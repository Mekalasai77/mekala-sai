import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Next.js",
      "Redux",
      "React Query"
    ]
  },
  {
    title: "Mobile",
    skills: [
      "React Native",
      "iOS Development",
      "Android Development",
      "Expo",
      "Mobile UI/UX",
      "Native Modules",
      "App Store Deployment"
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "REST APIs",
      "GraphQL",
      "Node.js",
      "Firebase",
      "Jest",
      "Webpack",
      "CI/CD",
      "Agile/Scrum"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card key={category.title} className="p-6 hover-lift border-2 hover:border-primary/20" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                <h3>{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-default transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
