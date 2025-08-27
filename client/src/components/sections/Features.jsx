import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";
import { Shield, Mail, Smartphone, Users, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "JWT authentication with HTTP-only secure cookies and comprehensive security middleware",
  },
  {
    icon: Mail,
    title: "Email Verification",
    description:
      "Secure email verification with OTP for account activation and security",
  },
  {
    icon: Smartphone,
    title: "Mobile OTP",
    description:
      "Multi-channel password reset with mobile OTP for enhanced security",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description:
      "Flexible user and admin roles with granular permission controls",
  },
  {
    icon: Lock,
    title: "Password Security",
    description:
      "Bcrypt encryption with strong validation and secure reset flows",
  },
  {
    icon: Zap,
    title: "Modern Stack",
    description:
      "Built with MongoDB, Express.js, React, and Node.js for scalability",
  },
];

const Features = () => (
  <section className="py-20 bg-[#F3F4F6]">
    {" "}
    {/* ✅ bg-muted/30 replaced with hex */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-Inter font-bold mb-4  ">
          Everything You Need for Authentication
        </h2>
        <p className="text-xl text-[#6B7280] max-w-2xl mx-auto font-Inter">
          From basic login to advanced security features, AuthPro provides a
          complete solution
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-white/80 backdrop-blur-md border border-[#E5E7EB] shadow-md rounded-xl hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CardHeader>
              {/* ✅ Gradient background on icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-[#967ffc] to-[#1D4ED8] rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-poppins text-[#111827]">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-[#6B7280] font-inter">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
