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

## **📸 UI Preview**  

<img width="1920" height="901" alt="screencapture-localhost-5173-2025-08-27-22_55_30" src="https://github.com/user-attachments/assets/7eceb69c-1e89-43a6-b744-7dfd7f0ac09e" />

## Login page 
<img width="1920" height="1108" alt="screencapture-localhost-5173-login-2025-08-27-22_55_48" src="https://github.com/user-attachments/assets/a93b99d0-da27-46f4-a123-50fb7c67bdc4" />

## Signup page
<img width="1920" height="1145" alt="screencapture-localhost-5173-signup-2025-08-27-22_55_57" src="https://github.com/user-attachments/assets/31768934-5c07-4b52-a031-283f1c2e8110" />

## Reset password page
<img width="1920" height="1069" alt="screencapture-localhost-5173-forgot-password-2025-08-27-22_56_17" src="https://github.com/user-attachments/assets/4382c85d-7792-409e-94bc-29624f250ef2" />


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

## **📩 Contributing**  
🙌 Contributions are welcome! Feel free to fork the repo and submit a pull request.  

>  **Built with ❤️ by [Manu Kumar Pal](https://github.com/manukumar07)**  
