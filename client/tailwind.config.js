
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        border: "#E5E7EB", // gray-200
        input: "#F9FAFB", // gray-50
        ring: "#3B82F6", // blue-500
        background: "#FFFFFF",
        foreground: "#111827", // gray-900

        primary: {
          DEFAULT: "#2563EB", // blue-600
          foreground: "#FFFFFF",
          light: "#60A5FA", // blue-400
          dark: "#1E40AF", // blue-800
        },
        secondary: {
          DEFAULT: "#6B7280", // gray-500
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#DC2626", // red-600
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#9CA3AF", // gray-400
          foreground: "#1F2937", // gray-800
        },
        accent: {
          DEFAULT: "#10B981", // emerald-500
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#F3F4F6", // gray-100
          foreground: "#111827", // gray-900
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#111827",
        },
        success: {
          DEFAULT: "#22C55E", // green-500
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          foreground: "#111827",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #2563EB, #60A5FA)",
        "gradient-secondary": "linear-gradient(to right, #6B7280, #9CA3AF)",
        "gradient-hero": "linear-gradient(to bottom right, #2563EB, #9333EA)", // blue → purple
        "gradient-card": "linear-gradient(to bottom, #FFFFFF, #F3F4F6)",
      },
      boxShadow: {
        glow: "0 0 15px rgba(37, 99, 235, 0.5)", // blue glow
        primary: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        accordionDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        floating: "floating 3s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        bounce: "bounce 2s infinite",
        pulse: "pulse 2s infinite",
        rotate: "rotate 1s linear infinite",
        "accordion-down": "accordionDown 0.2s ease-out",
        "accordion-up": "accordionUp 0.2s ease-out",
      },
    },
  },
  plugins: [],
} 
