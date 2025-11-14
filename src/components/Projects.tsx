import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    technologies: ["React", "API Integration", "Chart.js", "CSS3"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media App",
    description: "A social networking platform with real-time messaging, post sharing, and user interaction features.",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&q=80",
    technologies: ["React Native", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Learning Management System",
    description: "An educational platform with course management, video streaming, progress tracking, and interactive assignments.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift gradient-border group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 text-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 gap-2"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/40 hover:bg-primary/10 gap-2"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;