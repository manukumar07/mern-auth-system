import apiClient from "../utils/apiClient";

// ✅ User Signup
export const signup = async (data) => {
  const res = await apiClient.post("/auth/signup", data);
  return res.data;
};

// ✅ Admin Signup
export const adminSignup = async (data) => {
  const res = await apiClient.post("/auth/admin/signup", data);
  return res.data;
};

// ✅ Login
export const login = async (data) => {
  const res = await apiClient.post("/auth/login", data);
  return res.data;
};

// ✅ Logout
export const logout = async () => {
  const res = await apiClient.post("/auth/logout");
  return res.data;
};


// ✅ Forgot Password
export const forgotPassword = async (email) => {
  const res = await apiClient.post("/auth/forgot-password", { email });
  return res.data;
};



// ✅ Verify Email
export const verifyEmail = async (token) => {
  const res = await apiClient.get(`/auth/verify-email?token=${token}`);
  return res.data;
};


// ✅ Verify Reset Token
export const verifyResetToken = async (token) => {
  const res = await apiClient.post("/auth/verify-reset-token", { token });
  return res.data;
};

// ✅ Reset Password
export const resetPassword = async ({ token, newPassword }) => {
  const res = await apiClient.post("/auth/reset-password", { token, newPassword });
  return res.data;
};


// ✅ Google Login (OAuth Redirect)
export const googleLogin = () => {
  // redirect user to backend Google OAuth route
  window.location.href = `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/v1/auth/google`;
};