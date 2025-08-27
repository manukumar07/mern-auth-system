import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
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
import {
  Eye,
  EyeOff,
  ArrowLeft,
  CheckCircle,
  Lock,
  XCircle,
} from "lucide-react";
import { verifyResetToken, resetPassword } from "@/services/authService";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenStatus, setTokenStatus] = useState("checking");
  const navigate = useNavigate();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  // ✅ Verify Token Effect
  useEffect(() => {
    if (!token) return setTokenStatus("invalid");

    const verify = async () => {
      try {
        const data = await verifyResetToken(token);
        setTokenStatus(data.success ? "valid" : "invalid");
      } catch {
        setTokenStatus("invalid");
      }
    };

    verify();
  }, [token]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { newPassword, confirmPassword } = formData;

    if (!newPassword || newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return false;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasLowerCase = /[a-z]/.test(newPassword);
    const hasNumbers = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

    if (!(hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar)) {
      toast.error(
        "Password must contain uppercase, lowercase, numbers, and special characters"
      );
      return false;
    }

    return true;
  };

  // ✅ Reset Password Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const data = await resetPassword({
        token,
        newPassword: formData.newPassword,
      });

      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Server error");
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = () => {
    const password = formData.newPassword;
    const checks = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /\d/.test(password),
      /[!@#$%^&*(),.?":{}|<>]/.test(password),
    ];
    const strength = checks.filter(Boolean).length;

    if (strength <= 2) return { level: "weak", text: "Weak" };
    if (strength <= 3) return { level: "medium", text: "Medium" };
    if (strength <= 4) return { level: "good", text: "Good" };
    return { level: "strong", text: "Strong" };
  };

  const passwordStrength = getPasswordStrength();

  // Token status UI
  if (tokenStatus === "checking")
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
        <Card className="glass-card shadow-xl w-full max-w-md">
          <CardContent className="flex items-center justify-center p-8">
            <div className="text-center space-y-4">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-muted-foreground">Validating reset link...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );

  if (tokenStatus === "invalid" || tokenStatus === "expired")
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] p-4">
        <div className="w-full max-w-md animate-fade-in-up">
          <Card className="bg-[#FFFFFF]/80 backdrop-blur-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.1),0_0_15px_rgba(220,38,38,0.5)] rounded-[12px]">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-[#DC2626] rounded-full flex items-center justify-center">
                <XCircle className="w-8 h-8 text-[#FFFFFF]" />
              </div>
              <CardTitle className="text-2xl font-poppins font-bold text-[#DC2626]">
                {tokenStatus === "expired" ? "Link Expired" : "Invalid Link"}
              </CardTitle>
              <CardDescription className="text-[#6B7280]">
                {tokenStatus === "expired"
                  ? "This password reset link has expired. Please request a new one."
                  : "This password reset link is invalid or has been used already."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-[#7125EB] to-[#1779F0] text-[#FFFFFF] hover:opacity-90 transition"
                asChild
              >
                <Link to="/forgot-password">Request New Reset Link</Link>
              </Button>
              <Button
                className="w-full border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-[#FFFFFF] transition"
                asChild
              >
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Login
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );

  // Main form UI
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFFFFF] via-[#9CA3AF]/20 to-[#FFFFFF] p-4">
      <div className="w-full max-w-md animate-fade-in-up">
        <Card className="bg-[#FFFFFF]/80 backdrop-blur-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.1),0_0_15px_rgba(37,99,235,0.5)] rounded-[12px]">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-[#FFFFFF]" />
            </div>
            <CardTitle className="text-2xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
              Reset Password
            </CardTitle>
            <CardDescription className="text-[#6B7280]">
              {email
                ? `Create a new password for ${email}`
                : "Create a new password for your account"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* New Password */}
              <div className="space-y-2">
                <Label htmlFor="newPassword" className="text-[#111827]">
                  New Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[#9CA3AF]" />
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 border border-[#E5E7EB]"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-8 w-8"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-[#6B7280]" />
                    ) : (
                      <Eye className="h-4 w-4 text-[#6B7280]" />
                    )}
                  </Button>
                </div>

                {/* Password Strength Indicator */}
                {formData.newPassword && (
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span className="text-[#6B7280]">Password strength:</span>
                    <span
                      className={`font-medium ${
                        passwordStrength.level === "weak"
                          ? "text-[#DC2626]"
                          : passwordStrength.level === "medium"
                          ? "text-[#F59E0B]"
                          : passwordStrength.level === "good"
                          ? "text-[#2563EB]"
                          : "text-[#22C55E]"
                      }`}
                    >
                      {passwordStrength.text}
                    </span>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-8 w-8"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Password Match Indicator */}
                {formData.confirmPassword && (
                  <div className="flex items-center space-x-2 text-xs">
                    {formData.newPassword === formData.confirmPassword ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-[#22c55e]" />
                        <span className="text-success">Passwords match</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3 h-3 text-[#ef4444]" />
                        <span className="text-[#ef4444]">
                          Passwords don't match
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Password Requirements */}
              <div className="p-3 bg-[#f4f4f5] rounded-lg">
                <p className="text-xs font-medium mb-2">
                  Password must contain:
                </p>
                <div className="grid grid-cols-2 gap-1 text-xs text-[#71717a]">
                  {" "}
                  {/* muted-foreground */}
                  <div className="flex items-center space-x-1">
                    <CheckCircle
                      className={`w-3 h-3 ${
                        formData.newPassword.length >= 8
                          ? "text-[#22c55e]" /* success */
                          : "text-[#71717a]" /* muted-foreground */
                      }`}
                    />
                    <span>8+ characters</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle
                      className={`w-3 h-3 ${
                        /[A-Z]/.test(formData.newPassword)
                          ? "text-[#22c55e]"
                          : "text-[#71717a]"
                      }`}
                    />
                    <span>1 uppercase</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle
                      className={`w-3 h-3 ${
                        /[0-9]/.test(formData.newPassword)
                          ? "text-[#22c55e]"
                          : "text-[#71717a]"
                      }`}
                    />
                    <span>1 number</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle
                      className={`w-3 h-3 ${
                        /[^A-Za-z0-9]/.test(formData.newPassword)
                          ? "text-[#22c55e]"
                          : "text-[#71717a]"
                      }`}
                    />
                    <span>1 special char</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className={`w-full rounded-lg px-4 py-2 font-medium text-white  ${
                  isLoading
                    ? "bg-[#6B7280] cursor-not-allowed bg-gradient-to-r from-[#7125eb] to-[#1779f0]"
                    : "bg-[#3B82F6] hover:bg-[#2563EB] bg-gradient-to-r from-[#7125eb] to-[#1779f0]"
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Updating Password..." : "Update Password"}
              </Button>
            </form>

            {/* Back Link */}
            <div className="text-center mt-4">
              <Button
                asChild
                className="w-full rounded-lg px-4 py-2 font-medium  bg-[#F3F4F6] text-[#374151] hover:bg-[#1779f0] hover:text-[white]"
              >
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
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

export default ResetPasswordPage;
