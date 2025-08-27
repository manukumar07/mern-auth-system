import { createContext, useState, useEffect, useContext } from "react";
import { signup, adminSignup, login, logout } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // User signup
  const handleSignup = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await signup(formData);
      setUser(res.user);
      localStorage.setItem("authUser", JSON.stringify(res.user));
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  // Admin signup
  const handleAdminSignup = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await adminSignup(formData);
      setUser(res.user);
      localStorage.setItem("authUser", JSON.stringify(res.user));
    } catch (err) {
      setError(err.response?.data?.message || "Admin signup failed");
    } finally {
      setLoading(false);
    }
  };

  // Login
  const handleLogin = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await login(formData);
      setUser(res.user);
      localStorage.setItem("authUser", JSON.stringify(res.user));
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      await logout();
      setUser(null);
      localStorage.removeItem("authUser");
    } catch (err) {
      setError(err.response?.data?.message || "Logout failed");
    } finally {
      setLoading(false);
    }
  };

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        handleSignup,
        handleAdminSignup,
        handleLogin,
        handleLogout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
