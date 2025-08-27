import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Lightbulb,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Manu Kumar Pal",
      role: "Full-Stack Developer",
      bio: "Passionate full-stack engineer building secure, scalable, and developer-friendly solutions with a focus on user experience and performance.",
      avatar: "/images/myphoto.png",
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ceaef9] to-[#603ef7] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-[fadeInUp_0.8s_ease-out_forwards]">
            <span className="inline-block bg-[#6B7280] text-[#FFFFFF] px-3 py-1 rounded-lg text-sm mb-4">
              🚀 About AuthPro
            </span>

            <h1 className="text-4xl md:text-6xl font-[Inter] font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7d61f9] to-[#0948f5]">
              Building the Future of
              <span className="block">Authentication</span>
            </h1>

            <p className="text-2xl text-[#383839] max-w-3xl mx-auto">
              We're on a mission to make authentication simple, secure, and
              accessible for developers everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-[#111827] text-center">
                Our Mission
              </h2>
              <p className="text-lg text-[#6B7280] mb-6 font-inter">
                Authentication shouldn't be complex, insecure, or time-consuming
                to implement. We believe every developer deserves access to
                enterprise-grade authentication tools without the enterprise
                complexity.
              </p>
              <p className="text-lg text-[#6B7280] mb-8 font-inter">
                AuthPro was created to bridge this gap, providing a complete,
                secure, and developer-friendly authentication solution that
                scales with your needs.
              </p>
            </div>

            {/* Right Card */}
            <div className="relative animate-fade-in-up">
              <Card className="glass-card p-8 animate-floating shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-4 text-[#111827]">
                    Built with Passion
                  </h3>
                  <p className="text-[#6B7280] font-inter">
                    Every line of code is written with care, every feature
                    designed with the developer experience in mind.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#E5E7EB]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-[#111827]">
              Meet the Team
            </h2>
            <p className="text-xl text-[#6B7280] font-inter">
              The passionate people behind AuthPro
            </p>
          </div>

          {/* Team Grid */}
          <div className="flex flex-col items-center gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="glass-card hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  width: "600px",
                }}
              >
                <CardContent className="p-6 text-center">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden group-hover:scale-105 transition-transform">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-poppins font-semibold mb-1 text-[#111827]">
                    {member.name}
                  </h3>

                  <p className="text-[#2563EB] font-medium mb-3 font-inter">
                    {member.role}
                  </p>

                  <p className="text-[#6B7280] text-sm mb-4 font-inter">
                    {member.bio}
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-[#111827] hover:bg-[#2563EB] hover:text-white"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-[#111827] hover:bg-[#2563EB] hover:text-white"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-[#111827] hover:bg-[#2563EB] hover:text-white"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <div className="rounded-2xl p-12 text-white bg-[#4F46E5] bg-gradient-to-r from-[#967ffc] to-[#1D4ED8]">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 floating text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of developers who trust AuthPro for their
              authentication needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-[#4F46E5] hover:bg-gray-100"
                asChild
              >
                <Link to="/signup">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-[#4F46E5] hover:bg-white hover:text-[#4F46E5]"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
