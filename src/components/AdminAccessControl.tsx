import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Eye, EyeOff } from "lucide-react";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useToast } from "@/hooks/use-toast";

interface AdminAccessControlProps {
  onAdminAccess: () => void;
}

export const AdminAccessControl = ({ onAdminAccess }: AdminAccessControlProps) => {
  const [accessCode, setAccessCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const { updateRole } = useUserProfile();
  const { toast } = useToast();

  // Admin access codes (in production, this would be more secure)
  const ADMIN_CODES = [
    "IHEAR-ADMIN-2024",
    "ENGLISH-MASTER-ADMIN",
    "ACCESSIBILITY-ADMIN-KEY"
  ];

  const handleAccessSubmit = async () => {
    if (!accessCode.trim()) {
      toast({
        title: "Access code required",
        description: "Please enter an admin access code",
        variant: "destructive"
      });
      return;
    }

    if (!ADMIN_CODES.includes(accessCode.toUpperCase())) {
      toast({
        title: "Invalid access code",
        description: "The admin access code you entered is not valid",
        variant: "destructive"
      });
      setAccessCode("");
      return;
    }

    setLoading(true);
    try {
      await updateRole('admin');
      toast({
        title: "Admin access granted",
        description: "You now have administrative privileges",
      });
      onAdminAccess();
    } catch (error) {
      toast({
        title: "Error granting access",
        description: "Failed to update your role. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Admin Access Required</CardTitle>
          <p className="text-muted-foreground">
            This area is restricted to iHear administrators only. 
            Please enter your admin access code to continue.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="accessCode">Admin Access Code</Label>
            <div className="relative">
              <Input
                id="accessCode"
                type={showCode ? "text" : "password"}
                placeholder="Enter admin access code"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAccessSubmit()}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          
          <Button 
            onClick={handleAccessSubmit} 
            className="w-full"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Access Admin Panel"}
          </Button>
          
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Don't have an admin code? Contact the system administrator.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};