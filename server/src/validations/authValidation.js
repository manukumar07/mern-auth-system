import Joi from "joi";

// 👤 User Signup Validation
const userSignupSchema = Joi.object({
    fullName: Joi.string()
        .min(3)
        .max(50)
        .trim()
        .required()
        .messages({
            "string.empty": "👤 Full name is required", "string.min": "👤 Full name must be at least 3 characters",
        }),
    email: Joi.string()
        .email()
        .lowercase()
        .trim()
        .required()
        .messages({
            "string.empty": "📧 Email is required", "string.email": "📧 Please enter a valid email",
        }),
    password: Joi.string()
        .min(6)
        .max(30)
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])"))
        .required()
        .messages({
            "string.empty": "🔑 Password is required", "string.pattern.base": "🔑 Password must have uppercase, lowercase, number, and special character",
            "string.min": "🔑 Password must be at least 6 characters",
        }),
    confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .messages({
            "any.only": "🔑 Passwords do not match",
        }),
});

// 🛠 Admin Signup Validation
const adminSignupSchema = Joi.object({
    fullName: Joi.string().min(3).max(50).trim().required(),
    userName: Joi.string().min(3).max(30).trim().required(),
    email: Joi.string().email().lowercase().trim().required(),
    password: Joi.string()
        .min(6)
        .max(30)
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])"))
        .required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

// 🔐 Login Validation
const loginSchema = Joi.object({
    email: Joi.string().email().lowercase().trim().required(),
    password: Joi.string().required(),
});

export { loginSchema, adminSignupSchema, userSignupSchema };