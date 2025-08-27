import rateLimit from "express-rate-limit";

// ⏱ Rate limiter
export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max requests per window
    message: "⚠️ Too many requests from this IP, try again later",
});
