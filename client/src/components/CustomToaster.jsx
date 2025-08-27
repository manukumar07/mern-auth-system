"use client";

import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "#FFFFFF",
          color: "#111827",
          border: "1px solid #E5E7EB",
          fontFamily: "Inter, Poppins, sans-serif",
          borderRadius: "0.75rem",
          padding: "12px 16px",
          fontSize: "0.9rem",
          fontWeight: 500,
        },
        // ✅ Success toast
        success: {
          style: {
            background: "#22C55E",
            color: "#FFFFFF",
          },
          iconTheme: {
            primary: "#FFFFFF",
            secondary: "#22C55E",
          },
        },
        // ✅ Error toast
        error: {
          style: {
            background: "#DC2626",
            color: "#FFFFFF",
          },
          iconTheme: {
            primary: "#FFFFFF",
            secondary: "#DC2626",
          },
        },
        // ✅ Loading toast
        loading: {
          style: {
            background: "#2563EB",
            color: "#FFFFFF",
          },
          iconTheme: {
            primary: "#FFFFFF",
            secondary: "#2563EB",
          },
        },
      }}
    />
  );
};

export default CustomToaster;
