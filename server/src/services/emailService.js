
import nodemailer from "nodemailer";
import { welcomeTemplate } from "../utils/templates/welcomeTemplate.js";
import dotenv from "dotenv";
import { verifyEmailTemplate } from "../utils/templates/verifyEmailTemplate.js";
import { resetPasswordTemplate } from "../utils/templates/resetPasswordTemplate.js";

dotenv.config();

const transport = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
    },
});

const sendWelcomeEmail = async (to, fullName, replyToEmail) => {
    try {
        const htmlTemplate = welcomeTemplate(fullName);
        const info = await transport.sendMail({
            from: `"Manu Kumar" <manukumarpal34@gmail.com>`,
            to: to,
            replyTo: replyToEmail || undefined,
            subject: "🎉 Welcome to Mern-auth",
            html: htmlTemplate,

        });

        console.log("✅ Email sent:");
    } catch (err) {
        console.error("❌ Email failed:", err);
    }
};

const sendVerificationEmail = async (to, FullName, replyToEmail, verificationToken) => {
    try {
        const verifyLink = `${process.env.CLIENT_URL}/verify-email?token=${verificationToken}&email=${to}`;
        // console.log("Verification Link:", verifyLink);
        const htmlTemplate = verifyEmailTemplate(FullName, verifyLink);

        const info = await transport.sendMail({
            from: `"Manu Kumar" <manukumarpal34@gmail.com>`,
            to,
            replyTo: replyToEmail || undefined,
            subject: "🔒 Verify Your Email",
            html: htmlTemplate,
        });

        console.log("✅ Verification email sent:");
    } catch (err) {
        console.error("❌ Verification email failed:", err);
    }
};

const sendResetPasswordEmail = async (to, replyToEmail, fullName, token) => {


    const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${token}&email=${to}`;
    const htmlTemplate = resetPasswordTemplate(fullName, resetLink);


    await transport.sendMail({
        from: `"Manu Kumar" <manukumarpal34@gmail.com>`,
        to,
        replyTo: replyToEmail || undefined,
        subject: "🔑 Reset Your Password",
        html: htmlTemplate,
    });

    console.log("✅ Reset password email sent");
};


export { sendWelcomeEmail, sendVerificationEmail, sendResetPasswordEmail }