# 🔐 MERN Authentication System

> A secure, production-level authentication system built with the MERN stack. Includes full JWT-based authentication with refresh tokens, email verification, Google OAuth2 login, role-based access (Admin/User).

---

![MERN](https://img.shields.io/badge/MERN-stack-blue?logo=react)
![React](https://img.shields.io/badge/Frontend-React-61dafb?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)
![Express](https://img.shields.io/badge/API-Express.js-000000?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47a248?logo=mongodb)
![Auth](https://img.shields.io/badge/Auth-JWT%20%7C%20OAuth%20%7C%202FA-success)
![Status](https://img.shields.io/badge/Production--Ready-yes-brightgreen)
![License](https://img.shields.io/github/license/yourusername/mern-auth-system)

## 🚀 Features

- 🔐 **JWT Access + Refresh Tokens**
- 📧 **Email Verification on Registration**
- 🔁 **Refresh Token Rotation**
- 🔑 **Password Reset via Email (Link or OTP)**
- 🔒 **Secure Cookies (httpOnly, SameSite, Secure)**
- 🛂 **Role-Based Access Control (RBAC)**
- 🌐 **Google Login via OAuth2**
- 🔐 **Optional 2FA (via email or authenticator app)**
- 🛡 **Security: Helmet, CORS, Rate Limiting, XSS Protection**

---

## 🧱 Tech Stack

| Layer     | Tech                                      |
|-----------|-------------------------------------------|
| Frontend  | React, Tailwind CSS, Axios, Formik, joi   |
| Backend   | Node.js, Express.js, MongoDB, Mongoose    |
| Auth      | JWT, bcrypt, Google OAuth, passportjs, nodemailer , **SendGrid**    |
| Security  | Helmet, cors, express-rate-limit, xss-clean, mongo-sanitize |

---

## 📧 Email Integration (SendGrid)

We use **SendGrid** for transactional emails (signup confirmation, password reset, notifications).

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/manukumar07/mern-auth-system.git

# Move into the project directory
cd mern-auth-system

# Install dependencies
npm install

````

## ▶️ Running the Project

### server
```bash
cd server
npm run dev
````
### client
```bash
cd client
npm run dev
```
