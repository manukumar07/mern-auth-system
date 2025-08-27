import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "react-hot-toast";
import { Mail, ArrowLeft, Send } from "lucide-react";
import { forgotPassword } from "@/services/authService";

const ForgotPasswordPage = () => {
  const [emailData, setEmailData] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!emailData.email) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const data = await forgotPassword(emailData.email);

      if (data?.success) {
        setEmailSent(true);
        toast.success(data.message || "Reset link sent! Check your email.");
        setEmailData({ email: "" });
      } else {
        toast.error(data?.message || "Failed to send reset email.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#FFFFFF] via-[#9CA3AF]/20 to-[#FFFFFF]">
      <div className="w-full max-w-md animate-fade-in-up">
        <Card className="bg-white/80 backdrop-blur-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.1),0_0_15px_rgba(37,99,235,0.5)] rounded-[12px]">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-gradient-to-r from-[#3709ee] to-[#60A5FA] rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-extrabold font-[Poppins] bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
              Reset Password
            </CardTitle>
            <CardDescription className="text-[#6B7280]">
              Enter your email address to reset your password
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {!emailSent ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="space-y-2 mt-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-[#9CA3AF]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={emailData.email}
                      onChange={(e) => setEmailData({ email: e.target.value })}
                      className="pl-10 border border-[#E5E7EB] hover:border-[#2563EB] transition-colors"
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#7125eb] to-[#1779f0] text-white flex items-center justify-center gap-2 disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Reset Link
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#22C55E]">Email Sent!</h3>
                <p className="text-sm text-[#6B7280] mt-2">
                  We've sent a password reset link to{" "}
                  <strong>{emailData.email}</strong>
                </p>

                <Button
                  className="w-full border bg-[#2563EB]  text-white"
                  onClick={() => setEmailSent(false)}
                >
                  Send Another Email
                </Button>
              </div>
            )}

            <div className="text-center">
              <Button
                variant="ghost"
                asChild
                className="hover:bg-[#2563EB] hover:text-white"
              >
                <Link to="/login">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Login
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
