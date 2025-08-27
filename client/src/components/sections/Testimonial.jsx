import React from "react";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";

// ✅ Testimonials data
const testimonials = [
  {
    name: "Manu Kumar",
    role: "Full stack developer",
    content: "AuthPro saved us months of development time.",
    rating: 5,
  },
  {
    name: "Manu Kumar",
    role: "Frontend Developer",
    content: "Clean implementation, great documentation.",
    rating: 4,
  },
  {
    name: "Manu",
    role: " backend Developer",
    content: "Our users love the smooth authentication flow. ",
    rating: 4.2,
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up text-[#111827] font-[Poppins,sans-serif]">
            Trusted by Developers
          </h2>
          <p className="text-xl text-[#6B7280] font-[Inter,sans-serif]">
            See what teams are saying about AuthPro
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300 animate-scale-in bg-gradient-to-b from-[#FFFFFF] to-[#F9FAFB] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
            >
              <CardContent className="p-6">
                {/* Rating stars */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 animate-star-glow text-[#2d1bf8] fill-[#8415eb]"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="mb-4 animate-fade-in text-[#374151] font-[Inter,sans-serif] text-base">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-semibold text-[#111827] font-[Poppins,sans-serif]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#6B7280] font-[Inter,sans-serif]">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
