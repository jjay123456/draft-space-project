import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Volume2, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await signIn(email, password);
    
    if (error) {
      if (error.message.includes("Email not confirmed")) {
        setError("Please check your email and click the verification link before signing in.");
      } else if (error.message.includes("Invalid login credentials")) {
        setError("Invalid email or password. Please check your credentials.");
      } else {
        setError(error.message);
      }
    } else {
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
        duration: 2000,
      });
      navigate("/dashboard");
    }
    
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await signUp(email, password, firstName, lastName);
    
    if (error) {
      if (error.message.includes("User already registered")) {
        setError("This email is already registered. Try signing in instead.");
      } else {
        setError(error.message);
      }
    } else {
      toast({
        title: "Account created successfully!",
        description: "Please check your email to verify your account before signing in.",
        duration: 5000,
      });
      // Clear the form
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      // Switch to sign in mode
      setIsSignUp(false);
    }
    
    setLoading(false);
  };

  const handleSubmit = isSignUp ? handleSignUp : handleSignIn;

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl hover:bg-background/90 transition-all duration-300 hover:scale-105 group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="text-sm font-medium">Back to Home</span>
      </Button>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Volume2 className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl text-foreground">iHear</span>
          </div>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>
            Sign in to your account or create a new one to start learning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <div className="grid w-full grid-cols-2 gap-2 mb-6">
              <Button 
                variant={!isSignUp ? "default" : "outline"} 
                onClick={() => !isSignUp ? null : toggleMode()}
                className="w-full"
              >
                Log In
              </Button>
              <Button 
                variant={isSignUp ? "default" : "outline"} 
                onClick={() => isSignUp ? null : toggleMode()}
                className="w-full"
              >
                Sign Up
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={isSignUp ? "Create a password" : "Enter your password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={isSignUp ? 6 : undefined}
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {isSignUp && (
                  <p className="text-xs text-muted-foreground">
                    Password must be at least 6 characters long
                  </p>
                )}
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading 
                  ? (isSignUp ? "Creating account..." : "Signing in...") 
                  : (isSignUp ? "Sign Up" : "Log In")
                }
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}