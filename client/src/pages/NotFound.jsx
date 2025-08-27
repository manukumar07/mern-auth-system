import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2563EB] to-[#9333EA] px-4">
      <div className="text-center animate-fadeIn">
        {/* 404 Number */}
        <h1 className="text-8xl font-extrabold text-white drop-shadow-lg animate-bounce">
          404
        </h1>

        {/* Message */}
        <p className="text-2xl mt-4 text-white/90 font-light animate-fadeIn delay-200">
          Oops! The page you are looking for doesn’t exist.
        </p>

        {/* Button */}
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-white text-[#2563EB] font-semibold rounded-xl shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300 animate-fadeIn delay-500"
        >
          ⬅ Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
