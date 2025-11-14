import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="glass-card hover-lift gradient-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:jaswanthnammi145@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      jaswanthnammi145@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift gradient-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a 
                      href="tel:+919182329227"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9182329227
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift gradient-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/jaswanth-nammi-94a447318"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex-1 p-4 glass-card rounded-xl hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-center group"
              >
                <Linkedin className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-muted-foreground">LinkedIn</span>
              </a>
              <a
                href="http://github.com/Nammi-Jaswanth53"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex-1 p-4 glass-card rounded-xl hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-center group"
              >
                <Github className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-muted-foreground">GitHub</span>
              </a>
            </div>
          </div>

          <Card className="glass-card gradient-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background/50 border-border focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background/50 border-border focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-2 bg-background/50 border-border focus:border-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
