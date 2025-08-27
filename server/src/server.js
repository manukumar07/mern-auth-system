import express from "express";
import helmet from "helmet";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import { ConnectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import { limiter } from "./middlewares/rateLimiter.js";
import passport from "./config/passport.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// 🔒 Protects app by setting secure HTTP headers
app.use(helmet());

// 🌍 Enables CORS only for allowed origins
app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173", // ✅ frontend URL
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);


app.use(passport.initialize());
// app.use(passport.session());


// ✅ Parse URL-encoded bodies
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));


// 🛡 Prevents MongoDB operator injection in queries
app.use(mongoSanitize());

// 📦 Parses incoming JSON request bodies
app.use(express.json());

// 📦 Parses URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// ⏱ Rate limiter to prevent abuse (e.g., DDOS/brute-force)
app.use(limiter);

// 🛣 Routes
app.use("/api/v1/auth", authRoutes);


// ⚠️ Error handler
app.use((err, req, res, next) => {
    console.error("❌", err.stack);
    res.status(500).json({ message: "Server Error" });
});

ConnectDB();
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});