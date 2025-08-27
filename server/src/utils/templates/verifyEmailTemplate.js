
const verifyEmailTemplate = (FullName, verifyLink, verificationToken) => `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f6f8; padding: 40px 0;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden;">
    
    <!-- Header -->
    <div style="background: linear-gradient(90deg, #2196F3, #21CBF3); padding: 30px; text-align: center; color: white;">
      <h1 style="margin: 0; font-size: 28px;">Welcome to Mern-Auth!</h1>
    </div>
    
    <!-- Body -->
    <div style="padding: 30px; color: #333; line-height: 1.6;">
      <p style="font-size: 16px;">Hi <strong>${FullName}</strong>,</p>
      <p style="font-size: 16px;">Thank you for signing up. To get started, please verify your email by clicking the button below:</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="${verifyLink}" 
           style="display: inline-block; padding: 12px 30px; font-size: 16px; color: #ffffff; background: #2196F3; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background 0.3s;">
          Verify Email
        </a>
      </div>

      <p style="font-size: 14px; color: #666;">If the button doesn't work, copy and paste this link into your browser:</p>
      <p style="font-size: 14px; word-break: break-all;"><a href="${verifyLink}" style="color: #2196F3; text-decoration: none;">${verifyLink}</a></p>

      <p style="font-size: 14px; color: #666;">If you did not create this account, you can safely ignore this email.</p>
    </div>

    <!-- Footer -->
    <div style="background: #f4f6f8; text-align: center; padding: 20px; font-size: 12px; color: #999;">
      &copy; ${new Date().getFullYear()} Mern-Auth. All rights reserved.
    </div>
  </div>
</div>
`;
export { verifyEmailTemplate }