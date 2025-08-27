import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E7EB]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        {/* Brand & Description */}
        <Link
          to="/"
          className="flex justify-center items-center space-x-2 font-poppins font-bold text-2xl bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent mb-2"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#FFFFFF]" />
          </div>
          AuthPro
        </Link>

        <p className="text-[#434446] text-md max-w-xl mx-auto mb-4">
          Secure, scalable authentication solution for modern applications.
          Built with security-first principles and developer experience in mind.
        </p>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-[#E5E7EB] mt-6">
          <p className="text-[#6B7280] text-sm">
            © {currentYear} AuthPro. Made with ❤️ Manu Kumar Pal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
