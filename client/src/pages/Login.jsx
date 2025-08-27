"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Checkbox } from "../components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, Shield } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import { googleLogin } from "@/services/authService";

const Login = () => {
  const { handleLogin, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await handleLogin({
        email: formData.email,
        password: formData.password,
      });

      toast.success("You have been successfully logged in 🎉");
      navigate("/");
    } catch {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    toast("Redirecting to Google Authentication...", { icon: "🔑" });

    setTimeout(() => {
      googleLogin();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F3F4F6] to-[#F9FAFB] p-4 font-poppins">
      <div className="w-full max-w-lg animate-fade-in-up">
        <Card className="backdrop-blur-xl bg-white/70 border border-white/20 shadow-2xl rounded-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center shadow-md">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 rounded-md focus:ring-2 border-2 focus:ring-[#6366F1] hover:border-[#1E40AF] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#6366F1] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 rounded-md focus:ring-2 border-2 focus:ring-[rgb(195,108,246)] hover:border-[#1E40AF] transition-colors"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-8 w-8 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, rememberMe: checked })
                  }
                  className="border-gray-400 data-[state=checked]:bg-purple-500 data-[state=checked]:text-white hover:bg-purple-200 hover:border-purple-400"
                />
                <Label
                  htmlFor="rememberMe"
                  className="text-sm text-gray-400 cursor-pointer"
                >
                  Remember me for 30 days
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-[#906af9] to-[#2335fd] text-white shadow-lg hover:opacity-90 transition"
                disabled={loading}
              >
                {loading && <Spinner />}
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white/70 px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Login */}
            <Button
              type="button"
              className="w-full flex items-center justify-center gap-2 border rounded-xl bg-white hover:bg-gray-100 shadow-sm transition hover:scale-105 duration-200"
              onClick={handleGoogleLogin}
            >
              {/* Google SVG Icon */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.94 0 6.62 1.7 8.15 3.13l5.98-5.98C34.08 3.5 29.46 1.5 24 1.5 14.89 1.5 7.27 6.92 4.17 14.69l7.44 5.77C13.08 14.19 18.08 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.53 24.5c0-1.54-.14-3.02-.39-4.45H24v8.4h12.7c-.55 2.85-2.2 5.26-4.67 6.9l7.32 5.68C43.81 37.56 46.53 31.51 46.53 24.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.61 28.19c-.48-1.42-.75-2.92-.75-4.69s.27-3.27.75-4.69L4.17 13.04A22.463 22.463 0 0 0 1.5 23.5c0 3.7.9 7.18 2.67 10.46l7.44-5.77z"
                />
                <path
                  fill="#34A853"
                  d="M24 46.5c6.46 0 11.88-2.13 15.84-5.78l-7.32-5.68c-2.03 1.38-4.66 2.23-8.52 2.23-5.92 0-10.92-4.69-12.39-10.96l-7.44 5.77C7.27 41.08 14.89 46.5 24 46.5z"
                />
              </svg>

              <span className="text-gray-700 font-medium">
                Sign in with Google
              </span>
            </Button>

            {/* Signup Link */}
            <div className="text-center text-md">
              <span className="text-gray-500">Don’t have an account?</span>{" "}
              <Link
                to="/signup"
                className="text-[#6366F1] hover:underline font-medium"
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
