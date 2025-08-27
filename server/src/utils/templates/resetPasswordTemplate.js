const resetPasswordTemplate = (fullName, resetLink) => `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f6f8; padding: 40px 0;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden;">
    
    <!-- Header -->
    <div style="background: linear-gradient(90deg, #4CAF50, #66BB6A); padding: 30px; text-align: center; color: white;">
      <h1 style="margin: 0; font-size: 28px;">Password Reset Request</h1>
    </div>
    
    <!-- Body -->
    <div style="padding: 30px; color: #333; line-height: 1.6;">
      <p style="font-size: 16px;">Hi <strong>${fullName}</strong>,</p>
      <p style="font-size: 16px;">You recently requested to reset your password. Click the button below to reset it:</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetLink}" 
           style="display: inline-block; padding: 12px 30px; font-size: 16px; color: #ffffff; background: #4CAF50; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background 0.3s;">
          Reset Password
        </a>
      </div>

      <p style="font-size: 14px; color: #666;">If the button doesn't work, copy and paste this link into your browser:</p>
      <p style="font-size: 14px; word-break: break-all;"><a href="${resetLink}" style="color: #4CAF50; text-decoration: none;">${resetLink}</a></p>

      <p style="font-size: 14px; color: #666;">If you didn’t request this, you can safely ignore this email.</p>
    </div>

    <!-- Footer -->
    <div style="background: #f4f6f8; text-align: center; padding: 20px; font-size: 12px; color: #999;">
      &copy; ${new Date().getFullYear()} Mern-Auth. All rights reserved.
    </div>
  </div>
</div>
`;
export { resetPasswordTemplate }