import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, MessageCircle } from "lucide-react";
import PublicNavbar from "@/components/layout/PublicNavbar";
import GridBackground from "@/components/layout/GridBackground";

const Contact = () => {
  return (
    <GridBackground className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <PublicNavbar />
      <div className="max-w-[1140px] mx-auto px-6 py-20 md:py-24 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B1220] mb-4">
            Registration and Contact Us
          </h1>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white border-0 shadow-lg rounded-[18px]">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold text-[#146EF5] flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Online Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base text-[#0B1220]/80 mb-6 leading-relaxed">
                Ready to start your English learning journey? Register now through our existing portal.
              </p>
              <Button asChild className="bg-[#146EF5] hover:bg-[#146EF5]/90 text-white">
                <Link to="/auth">
                  Go to Registration
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg rounded-[18px]">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold text-[#7C3AED] flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Question Form
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base text-[#0B1220]/80 mb-6 leading-relaxed">
                Have specific questions about our program? Submit your inquiries through our dedicated question form.
              </p>
              <Button asChild className="bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo38sWaoRYfd6JUnOfG098T_kmqfwa206rQheDd9ffXcsC7A/viewform" target="_blank" rel="noopener noreferrer">
                  Submit Questions
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Discord Community Card - Full Width */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-0 shadow-lg rounded-[18px]">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold text-[#5865F2] flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Join Our Discord Community
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base text-[#0B1220]/80 mb-6 leading-relaxed max-w-2xl mx-auto">
                Connect with fellow students, tutors, and volunteers in our vibrant Discord community. Get real-time support, participate in group discussions, and stay updated with the latest program announcements and events.
              </p>
              <Button asChild className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white px-8 py-3">
                <a href="https://discord.gg/QbJa3zmXfE" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Discord Server
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </GridBackground>
  );
};

export default Contact;