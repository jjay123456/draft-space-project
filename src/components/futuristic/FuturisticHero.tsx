import { BookOpen, GraduationCap, Zap } from 'lucide-react';

const FuturisticHero = () => {
  return (
    <div className="relative w-full bg-background py-20 overflow-hidden">
      {/* Floating Digital Icons */}
      <div className="absolute inset-0 opacity-10">
        <BookOpen 
          className="absolute top-20 left-[10%] w-12 h-12 text-primary animate-pulse" 
          style={{ animationDelay: '0s' }}
        />
        <GraduationCap 
          className="absolute top-32 right-[15%] w-16 h-16 text-accent animate-pulse" 
          style={{ animationDelay: '1s' }}
        />
        <Zap 
          className="absolute bottom-20 left-[20%] w-10 h-10 text-warning animate-pulse" 
          style={{ animationDelay: '2s' }}
        />
        <BookOpen 
          className="absolute bottom-32 right-[25%] w-14 h-14 text-primary animate-pulse" 
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
          Meet Our Tutors
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our team of expert educators ready to guide you through your learning journey 
          with cutting-edge teaching methods and personalized support.
        </p>
      </div>

      {/* Light Scan Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent transform -skew-x-12 translate-x-full animate-pulse" 
           style={{ animationDuration: '3s' }} />
    </div>
  );
};

export default FuturisticHero;