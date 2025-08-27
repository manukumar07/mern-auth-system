import express from "express";
import { userSignup, adminSignup, login, logout, verifyEmail, sendResetEmail, resetPassword, verifyResetToken } from "../controllers/authController.js";
import { validate } from "../middlewares/validate.js";
import { userSignupSchema, adminSignupSchema, loginSchema } from "../validations/authValidation.js";
import passport from "../config/passport.js";
import { generateToken } from "../utils/generateToken.js";

const router = express.Router();

// 🧑‍💻 Auth routes with validation
router.post("/signup", validate(userSignupSchema), userSignup);
router.post("/admin/signup", validate(adminSignupSchema), adminSignup);
router.post("/login", validate(loginSchema), login);
router.post("/logout", logout);
router.get("/verify-email", verifyEmail);
router.post("/forgot-password", sendResetEmail);
router.post("/reset-password", resetPassword);
router.post("/verify-reset-token", verifyResetToken);

// 🌐 Google OAuth Start
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// 🌐 Google OAuth Callback
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: `${process.env.CLIENT_URL}/login`,
        session: false,
    }),
    (req, res) => {
        // ✅ Generate JWT from user ID
        const token = generateToken(req.user._id);

        // Redirect with token back to frontend
        res.redirect(`${process.env.CLIENT_URL}/oauth-success?token=${token}`);
    }
);

export default router;
