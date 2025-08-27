import mongoose from "mongoose";
import bcrypt from "bcrypt";


// 🧑‍💻 Define Mongoose Schema
const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        userName: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
        },
        googleId: {
            type: String,
            sparse: true
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        verificationToken: {
            type: String
        },
        verificationTokenExpiry: {
            type: Date
        },
        resetPasswordToken: {
            type: String,
        },
        resetPasswordExpiry: {
            type: Date,
        },
    },
    { timestamps: true }
);

// 🔒 Encrypt password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    if (!this.password) return next();


    // Generate salt (10 rounds)
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);    // Hash password with salt
    next(); // Continue to next middleware
});

// 🔑 Password match method
userSchema.methods.matchPassword = async function (enteredPassword) {
    if (!this.password) return false;
    return await bcrypt.compare(enteredPassword, this.password);
};

// 📝 Export the model
const User = mongoose.model("UserAuth", userSchema);
export default User;

