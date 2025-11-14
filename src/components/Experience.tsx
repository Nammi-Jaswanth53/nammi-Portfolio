import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      type: "work",
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      icon: Briefcase,
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Improved application performance by 40% through optimization.",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Bachelor's in Computer Science",
      company: "University of Technology",
      period: "2016 - 2020",
      description: "Graduated with honors. Specialized in software engineering and web development. Active member of coding clubs and hackathons.",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className={`reveal relative ${
                    index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                  } md:w-[calc(50%-2rem)]`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-auto md:right-[-2.3rem] lg:right-[-2.3rem] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>

                  <Card className="glass-card hover-lift gradient-border ml-16 md:ml-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/20 text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                              {exp.period}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium mb-3">
                            {exp.company}
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
