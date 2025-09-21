import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Volume2, Users, BookOpen, Accessibility, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import heroDemo from "@/assets/hero-demo.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">iHear</span>
          </div>
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8">
              <Link to="/courses" className="text-foreground hover:text-primary transition-colors font-medium">Courses</Link>
              <Link to="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</Link>
              <Link to="#accessibility" className="text-foreground hover:text-primary transition-colors font-medium">Accessibility</Link>
              <Link to="#help" className="text-foreground hover:text-primary transition-colors font-medium">Help</Link>
            </div>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link to="/auth">Log In</Link>
            </Button>
            <Button asChild>
              <Link to="/auth">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Cool Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-accent/15 to-success/15 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-success/20 to-primary/20 rounded-full blur-md animate-pulse delay-500"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        {/* Container Scroll Content */}
        <ContainerScroll
          titleComponent={
            <div className="text-center relative z-0">
              <Badge variant="secondary" className="mb-6 animate-fade-in bg-primary/10 border-primary/20">
                <Accessibility className="h-3 w-3 mr-1" />
                WCAG 2.2 AA Compliant
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Accessible Learning for Everyone
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in leading-relaxed max-w-4xl mx-auto">
                iHear is a completely free accessible learning platform designed specifically for hearing-impaired students. 
                Every course includes captions, transcripts, and adaptive learning features - all at no cost.
              </p>
              <div className="flex justify-center animate-fade-in">
                <Button size="lg" className="px-12 py-4 text-lg hover-scale" asChild>
                  <Link to="/auth">
                    <span className="flex items-center">
                      Start Learning Free 
                      <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          }
        >
          <img
            src={heroDemo}
            alt="iHear accessible learning platform interface with captions and educational features"
            className="mx-auto rounded-2xl object-cover h-full w-full shadow-2xl"
            draggable={false}
          />
        </ContainerScroll>
        
        {/* Smooth Transition Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20"></div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-secondary/10 to-background">
        {/* Professional Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-accent/5 to-success/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Sample Testimonials</h2>
              <p className="text-lg text-muted-foreground">Demo feedback from our platform (placeholder content)</p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="course-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Sample testimonial text about the platform's accessibility features. 
                  This is placeholder content for demonstration purposes."
                </p>
                <div className="font-medium">Sample Student Name</div>
                <div className="text-sm text-muted-foreground">Demo Course Field</div>
              </CardContent>
            </Card>

            <Card className="course-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Sample testimonial about live session features and accessibility. 
                  This is demonstration content only."
                </p>
                <div className="font-medium">Example User Name</div>
                <div className="text-sm text-muted-foreground">Sample Subject Area</div>
              </CardContent>
            </Card>

            <Card className="course-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Sample educator feedback about platform accessibility features. 
                  This is placeholder testimonial content."
                </p>
                <div className="font-medium">Sample Instructor Name</div>
                <div className="text-sm text-muted-foreground">Demo Course Instructor</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gradient-to-r from-secondary/20 via-primary-subtle/10 to-accent-subtle/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Built for Accessibility</h2>
            <p className="text-lg text-muted-foreground">Every feature is designed with hearing-impaired learners in mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="course-card group">
              <CardContent className="p-6 text-center">
                <Volume2 className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Always-On Captions</h3>
                <p className="text-muted-foreground">
                  Every video includes professional captions with customizable styling for optimal readability.
                </p>
                <Button variant="ghost" className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="course-card group">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Full Transcripts</h3>
                <p className="text-muted-foreground">
                  Complete lesson transcripts with searchable content and downloadable formats.
                </p>
                <Button variant="ghost" className="mt-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="course-card group">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-success mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Live Sessions</h3>
                <p className="text-muted-foreground">
                  Interactive Zoom sessions with real-time captions and collaborative learning.
                </p>
                <Button variant="ghost" className="mt-4 group-hover:bg-success group-hover:text-success-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Free Learning Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join students in our accessible learning platform with full support features - completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-scale" asChild>
                <Link to="/auth">Start Learning Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-scale" asChild>
                <Link to="/auth">Explore Free Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">X,XXX+</div>
              <div className="text-muted-foreground">Sample: Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">XXX+</div>
              <div className="text-muted-foreground">Sample: Free Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">XX%</div>
              <div className="text-muted-foreground">Sample: Satisfaction Rate</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl font-bold text-warning">X.X</span>
                <Star className="h-6 w-6 fill-warning text-warning" />
              </div>
              <div className="text-muted-foreground">Sample: Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Volume2 className="h-5 w-5 text-primary" />
                <span className="font-bold">iHear</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making learning accessible for everyone, everywhere.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/courses" className="hover:text-foreground transition-colors">Courses</Link></li>
                <li><Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Live Sessions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Accessibility Guide</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-foreground transition-colors">Accessibility Statement</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 iHear. All rights reserved. Built with accessibility in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
