import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js";
import { generateToken, generateResetToken, generateVerificationToken } from "../utils/generateToken.js";
import { sendWelcomeEmail, sendResetPasswordEmail, sendVerificationEmail } from "../services/emailService.js";


// 🧑‍💻 User Signup
const userSignup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // ✅ Check if required fields exist
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "❌ fullName, email, and password are required"
            });
        }

        // 🔍 Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({
            success: false,
            message: "❌ User already exists"
        });

        // 🛡 Create new user (password hashed in User model)
        const user = await User.create({
            fullName,
            email,
            password,
            role: "user"
        });

        // 🔑 Generate JWT token
        const token = generateToken(user);

        // Generate verification token
        const verificationToken = generateVerificationToken(user);
        user.verificationToken = verificationToken;
        user.verificationTokenExpiry = Date.now() + 24 * 60 * 60 * 1000;
        await user.save();

        // Send verification email
        await sendVerificationEmail(email, fullName, email, verificationToken);


        // 4️⃣ send welcome email
        await sendWelcomeEmail(email, fullName);

        // console.log(`✅ User created: ${user.email}`);
        res.status(201).json({
            success: true,
            message: "✅ User registered successfully",
            token,
            user: { id: user._id, fullName: user.fullName, email: user.email, role: user.role }
        });
    } catch (err) {
        // console.error("❌ Server Error:", err.message);
        res.status(500).json({
            success: false,
            message: "❌ Server Error",
            error: err.message
        });
    }
};

// 🛠 Admin Signup
const adminSignup = async (req, res) => {
    try {
        const { fullName, userName, email, password } = req.body;

        if (!fullName || !userName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "❌ fullName, userName, email, and password are required"
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({
            success: false, message: "❌ Admin already exists"
        });

        const admin = await User.create({ fullName, userName, email, password, role: "admin" });

        const token = generateToken(admin);


        // console.log(`🛡 Admin created: ${admin.email}`);
        res.status(201).json({
            success: true,
            message: "🛡 Admin registered successfully",
            token,
            user: {
                id: admin._id,
                fullName: admin.fullName,
                email: admin.email,
                role: admin.role
            }
        });
    } catch (err) {
        // console.error("❌ Server Error:", err.message);
        res.status(500).json({
            success: false,
            message: "❌ Server Error"
        });
    }
};

// 🔐 Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "❌ Email and password are required"
            });
        }

        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({
                success: false,
                message: "❌ Invalid credentials"
            });
        }


        const token = generateToken(user);
        // console.log(`🔑 User logged in: ${user.email}`);
        res.status(200).json({
            success: true,
            message: "🔑 Login successful",
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        // console.error("❌ Server Error:", err.message);
        res.status(500).json({
            success: false,
            message: "❌ Server Error"
        });
    }
};

// 🚪 Logout
const logout = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "🚪 Logged out successfully"
    });
};

// Email verification endpoint
const verifyEmail = async (req, res) => {
    try {
        // 🔹 Step 1: Extract token from query parameters
        const { token } = req.query;
        if (!token)
            return res.status(400).json({
                success: false,
                message: "❌ Invalid or missing token"
            });

        let decoded;

        // 🔹 Step 2: Verify the JWT token
        try {
            decoded = jwt.verify(token, process.env.JWT_EMAIL_SECRET);
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: "❌ Invalid or expired token"
            });
        }

        // 🔹 Step 3: Find user by decoded ID from token
        const user = await User.findById(decoded.id);

        // 🔹 Step 4: Check if user exists
        if (!user)
            return res.status(400).json({ success: false, message: "❌ User not found" });

        // 🔹 Step 5: Check if email is already verified
        if (user.isVerified)
            return res.status(400).json({ success: false, message: "ℹ️ Email already verified" });

        // 🔹 Step 6: Check if token matches the one stored in DB
        if (user.verificationToken !== token)
            return res.status(400).json({ success: false, message: "❌ Invalid token" });

        // 🔹 Step 7: Check if token has expired
        if (Date.now() > user.verificationTokenExpiry)
            return res.status(400).json({ success: false, message: "⏰ Token expired" });

        // 🔹 Step 8: Verify user and remove token fields
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiry = undefined;
        await user.save();

        res.status(200).json({
            success: true,
            message: "✅ Email verified successfully! You can now log in."
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "⚠️ Server error" });
    }
};

// 🔹 Request reset via email
const sendResetEmail = async (req, res) => {
    const { email, fullName } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });


        // Generate token
        const token = generateResetToken(user._id);
        user.resetPasswordToken = token;
        user.resetPasswordExpiry = Date.now() + 3600000; // 1 hour
        await user.save();

        await sendResetPasswordEmail(email, fullName, email, token);

        res.status(200).json({ success: true, message: "Reset link sent to your email" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// 🔹 Reset password via email token
const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        // 1️⃣ Verify token
        const decoded = jwt.verify(token, process.env.JWT_RESET_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // 2️⃣ Check stored token validity
        if (!user.resetPasswordToken || user.resetPasswordToken !== token) {
            return res.status(400).json({ success: false, message: "Invalid or expired token" });
        }

        // 3️⃣ Check expiry
        if (Date.now() > user.resetPasswordExpiry) {
            return res.status(400).json({ success: false, message: "Token has expired" });
        }

        // 4️⃣ Update password (hashing is auto handled in userSchema.pre("save"))
        user.password = newPassword;

        // clear reset fields
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiry = undefined;

        await user.save();

        return res.status(200).json({ success: true, message: "Password reset successfully" });

    } catch (err) {
        console.error("Reset password error:", err.message);
        return res.status(400).json({ success: false, message: "Invalid or expired token" });
    }
};

// 🔹 Verify reset token
export const verifyResetToken = async (req, res) => {
    const { token } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_RESET_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) return res.status(404).json({
            success: false,
            message: "User not found"
        });


        if (!user.resetPasswordToken || user.resetPasswordToken !== token)
            return res.status(400).json({
                success: false,
                message: "Invalid token"
            });

        if (Date.now() > user.resetPasswordExpiry)
            return res.status(400).json({
                success: false,
                message: "Token expired"
            });

        res.status(200).json({
            success: true,
            message: "Token valid"
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Invalid token"
        });
    }
};


// ✅ Export all controllers 
export { userSignup, adminSignup, login, logout, verifyEmail, sendResetEmail, resetPassword };
