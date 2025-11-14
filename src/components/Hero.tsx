import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import jaswanthPhoto from "@/assets/jaswanth-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60 glow-shadow" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/60 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/40 rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-6">
            {/* Enhanced Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src={jaswanthPhoto} 
                  alt="Jaswanth Nammi - Full Stack Developer" 
                  className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-background shadow-2xl hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <h1 className="hero-title animate-in slide-in-from-bottom-10 duration-700">
              Hi, I'm <span className="gradient-text">Jaswanth Nammi</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-10 duration-700 delay-200">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-10 duration-700 delay-300">
              Crafting beautiful, scalable, and user-centered digital experiences with cutting-edge technologies. 
              Passionate about clean code, modern design, and solving complex problems.
            </p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-4 animate-in slide-in-from-bottom-10 duration-700 delay-400">
              {['React', 'TypeScript', 'Node.js', 'Tailwind', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground glow-shadow transition-all duration-300 hover:scale-105 text-base px-8"
              onClick={() => scrollToSection('projects')}
            >
              <span>View My Work</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 text-base px-8"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8 animate-in slide-in-from-bottom-10 duration-700 delay-600">
            <a
              href="https://www.linkedin.com/in/jaswanth-nammi-94a447318"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group p-4 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="http://github.com/Nammi-Jaswanth53"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group p-4 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('skills')}
          className="p-2 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 animate-bounce"
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;