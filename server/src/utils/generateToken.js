import jwt from "jsonwebtoken";

// 🔑 Generate JWT token
const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role,
            fullName: user.fullName,

        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
};

// Email verification token
const generateVerificationToken = (user) => {
    return jwt.sign({
        id: user._id
    },
        process.env.JWT_EMAIL_SECRET, { expiresIn: "10d" });
}

// JWT for password reset via email
const generateResetToken = (user) => {
    return jwt.sign(
        { id: user._id },
        process.env.JWT_RESET_SECRET,
        { expiresIn: "1h" }
    );
};

export { generateToken, generateVerificationToken, generateResetToken }