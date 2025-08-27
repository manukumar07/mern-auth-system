import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "256-bit", label: "Encryption" },
    { value: "<100ms", label: "Response Time" },
    { value: "24/7", label: "Security Monitoring" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* ✅ Direct gradient using hex */}
      <div className="absolute inset-0 bg-gradient-to-r to-[#7f63fe] from-[#0948f5]  opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div
          className={`text-center space-y-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <Badge
            variant="secondary"
            className="mx-auto bg-[#6B7280] text-white font-poppins text-sm"
          >
            🔒 Production-Ready Authentication
          </Badge>

          {/* ✅ Gradient text */}
          <h1 className="text-4xl md:text-6xl font-poppins font-bold bg-gradient-to-r from-[#7d61f9] to-[#0948f5]  bg-clip-text text-transparent max-w-4xl mx-auto">
            Secure Authentication
            <span className="block">Made Simple</span>
          </h1>

          <p className="text-xl text-[#828996] max-w-2xl mx-auto font-inter">
            Complete MERN stack authentication solution with email verification,
            mobile OTP, role-based access, and enterprise-grade security
            features.
          </p>

          {/* ✅ Buttons with direct hex */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="bg-transparent border  text-white hover:bg-[#2563EB] bg-gradient-to-r from-[#967ffc] to-[#1D4ED8] hover:text-white transition-all"
            >
              <Link to="/signup">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-white border border-[#eff2f8] text-[#6B7280] hover:bg-[#2563EB] hover:text-white transition-all"
            >
              <Link to="/login">View Demo</Link>
            </Button>
          </div>

          {/* ✅ Stats section with gradient numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-[#E5E7EB]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-[linear-gradient(to_right,#2563EB,#9333EA)] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-[#6B7280]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
