import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const userData = {
          id: decoded.id,
          email: decoded.email,
          role: decoded.role,
          name: decoded.fullName,
          token,
        };

        // Save user + token
        localStorage.setItem("authUser", JSON.stringify(userData));
        setUser(userData);

        toast.success("🎉 Google login successful!");
        navigate("/");
      } catch (err) {
        console.error("JWT decode error:", err);
        toast.error("Google login failed");
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  }, [token, navigate, setUser]);

  return <p className="text-center mt-10">Processing Google login...</p>;
};

export default OAuthSuccess;
