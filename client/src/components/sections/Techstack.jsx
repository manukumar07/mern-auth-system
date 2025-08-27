import React from "react";
import { Database, Code, Globe, Zap } from "lucide-react";

const technologies = [
  { icon: Database, name: "MongoDB", desc: "NoSQL Database" },
  { icon: Code, name: "Express.js", desc: "Backend Framework" },
  { icon: Globe, name: "React.js", desc: "Frontend Library" },
  { icon: Zap, name: "Node.js", desc: "Runtime Environment" },
];

const Techstack = () => {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-[#111827]">
            Built with Modern Technologies
          </h2>
          <p className="text-xl font-inter text-[#6B7280]">
            MERN stack with security-first architecture
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-[linear-gradient(to_right,#2563EB,#60A5FA)] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-glow">
                  <Icon className="w-8 h-8 text-[#FFFFFF]" />
                </div>

                {/* Title */}
                <h3 className="font-poppins font-semibold text-[#111827] mb-1">
                  {tech.name}
                </h3>

                {/* Desc */}
                <p className="text-sm font-inter text-[#6B7280]">{tech.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Techstack;
