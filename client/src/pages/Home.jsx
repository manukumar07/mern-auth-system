import CTA from "../components/sections/CTA";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Techstack from "../components/sections/Techstack";
import Testimonial from "../components/sections/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Techstack />
      <Testimonial />
      <CTA />
    </div>
  );
};

export default Home;
