import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section className="py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="rounded-2xl p-12 bg-gradient-to-r from-[#967ffc] to-[#1D4ED8] text-white shadow-xl">
        <h2 className="text-3xl md:text-4xl font-Inter font-bold mb-4">
          Ready to Secure Your App?
        </h2>
        <p className="text-xl text-[#E5E7EB] mb-8">
          Join thousands of developers who trust AuthPro for their
          authentication needs
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <Button
            asChild
            size="lg"
            className="bg-white text-[#2563EB] hover:bg-[#E5E7EB]"
          >
            <Link to="/signup">
              Start Building Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          {/* Secondary CTA */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-[#2563EB] hover:bg-white hover:text-[#2563EB]"
          >
            <Link to="/docs">View Documentation</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
