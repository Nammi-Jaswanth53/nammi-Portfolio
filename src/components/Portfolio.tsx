import Navigation from "./Navigation";
import Hero from "./Hero";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-3">Jaswanth Nammi</h3>
              <p className="text-muted-foreground text-sm">
                Full Stack Developer crafting exceptional digital experiences with modern technologies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:jaswanthnammi145@gmail.com" className="hover:text-primary transition-colors">Email</a></li>
                <li><a href="https://www.linkedin.com/in/jaswanth-nammi-94a447318" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="http://github.com/Nammi-Jaswanth53" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Jaswanth Nammi. Crafted with passion and modern technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;