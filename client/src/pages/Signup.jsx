// "use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Eye, EyeOff, Mail, Lock, User, Shield } from "lucide-react";
import toast from "react-hot-toast";
// import { useAuth } from "../context/AuthContext";
// import Spinner from "../components/Spinner";

// const Signup = () => {
//   const { handleSignup, handleAdminSignup, loading } = useAuth();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     role: "user",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleRoleChange = (role) => {
//     setFormData({ ...formData, role });
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     if (!formData.name || !formData.email || !formData.password) {
//       toast.error("⚠️ Please fill in all required fields");
//       return false;
//     }

//     if (formData.password.length < 8) {
//       toast.error("🔒 Password must be at least 8 characters");
//       return false;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       toast.error("❌ Passwords do not match");
//       return false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       toast.error("📧 Please enter a valid email address");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     try {
//       if (formData.role === "user") {
//         await handleSignup({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//         });
//       } else {
//         await handleAdminSignup({
//           name: formData.name,
//           email: formData.email,
//           userName: formData.username,
//           password: formData.password,
//         });
//       }

//       toast.success("🎉 Account created successfully!");
//       navigate("/login");
//     } catch {
//       toast.error("🚨 Failed to create account. Please try again.");
//     }
//   };

//   const handleGoogleSignup = () => {
//     toast("🌐 Google authentication will be implemented here", {
//       icon: "🔑",
//     });
//   };
("use client");

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import axios from "axios";
// import { Input } from "../components/ui/input";
// import { Button } from "../components/ui/button";
// import { Label } from "../components/ui/label";
// import { Eye, EyeOff } from "lucide-react";
import Spinner from "@/components/Spinner";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const API_BASE_URL = "http://localhost:5000/api/v1"; // full URL

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("⚠️ Please fill in all required fields");
      return false;
    }
    if (formData.password.length < 8) {
      toast.error("🔒 Password must be at least 8 characters");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("❌ Passwords do not match");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("📧 Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      let res;
      if (formData.role === "user") {
        res = await axios.post(`${API_BASE_URL}/auth/signup`, {
          fullName: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword, // ✅ added
        });
      } else {
        res = await axios.post(`${API_BASE_URL}/auth/admin/signup`, {
          fullName: formData.name,
          userName: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword, // ✅ added
        });
      }

      toast.success(res.data.message || "🎉 Account created successfully!");
      navigate("/verify-email");
    } catch (err) {
      console.error(err.response?.data);
      toast.error(err.response?.data?.message || "🚨 Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    toast("🌐 Google authentication will be implemented here", {
      icon: "🔑",
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F3F4F6] to-[#F9FAFB] p-4 font-poppins">
      <div className="w-full max-w-lg animate-fade-in-up">
        <Card className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-3xl">
          {/* Header */}
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-14 h-14 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center shadow-md">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Create Account
            </CardTitle>
            <CardDescription className="text-gray-500">
              Join thousands of users who trust our platform
            </CardDescription>
          </CardHeader>

          {/* Body */}
          <CardContent className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-3">
              <Label className="font-medium text-gray-700">Account Type</Label>
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant={formData.role === "user" ? "default" : "outline"}
                  className={`flex-1 transition-all duration-200 ${
                    formData.role === "user"
                      ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0 shadow-md"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleRoleChange("user")}
                >
                  <User className="w-4 h-4 mr-2" />
                  User
                </Button>
                <Button
                  type="button"
                  variant={formData.role === "admin" ? "default" : "outline"}
                  className={`flex-1 transition-all duration-200 ${
                    formData.role === "admin"
                      ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-0 shadow-md"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleRoleChange("admin")}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 rounded-md focus:ring-2 border-2 focus:ring-[#6366F1] hover:border-[#1E40AF] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 rounded-md focus:ring-2 border-2 focus:ring-[#6366F1] hover:border-[#1E40AF] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Username (Admin only) */}
              {formData.role === "admin" && (
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Choose a username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="pl-10 rounded-md focus:ring-2 border-2 focus:ring-[#6366F1] hover:border-[#1E40AF] transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 rounded-md focus:ring-2 border-2 focus:ring-[#6366F1] hover:border-[#1E40AF] transition-colors"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2 text-gray-500 hover:text-[#6366F1]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="********"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 rounded-md focus:ring-2 border-2 focus:ring-[#6366F1] hover:border-[#1E40AF] transition-colors"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2 text-gray-500 hover:text-[#6366F1]"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#906af9] to-[#2335fd] text-white font-semibold rounded-md shadow-md hover:opacity-90 transition-all duration-200"
                disabled={loading}
              >
                {loading && <Spinner />}
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white/70 backdrop-blur-md px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Signup */}
            <Button
              type="button"
              className="w-full flex items-center justify-center gap-2 border rounded-xl bg-white hover:bg-gray-100 shadow-sm transition hover:scale-105 duration-200"
              onClick={handleGoogleSignup}
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

            {/* Login Link */}
            <div className="text-center text-md">
              <span className="text-gray-500">Already have an account?</span>{" "}
              <Link
                to="/login"
                className="text-[#6366F1] hover:underline font-medium"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
