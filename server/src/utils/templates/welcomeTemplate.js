
const welcomeTemplate = (FullName) => {
  return `
  <div style="font-family: Arial, sans-serif; background:#f3f4f6; padding:30px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; padding:25px; box-shadow:0 6px 15px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <h2 style="color:#4F46E5; margin-bottom:10px;">🎉 Welcome to Mern-auth, ${FullName}!</h2>
      <p style="font-size:16px; color:#374151; margin:0 0 15px;">
        We're thrilled to have you on board 🚀
      </p>
      
      <!-- Body -->
      <p style="font-size:14px; color:#4B5563; line-height:1.6;">
        Your account has been successfully created. Start exploring your dashboard and unlock amazing features designed just for you.
      </p>
      
      <!-- Button -->
      <div style="text-align:center; margin:25px 0;">
        <a href="http://localhost:5173/" 
           style="background:#4F46E5; color:#ffffff; padding:14px 28px; text-decoration:none; 
                  border-radius:8px; font-weight:bold; display:inline-block; font-size:15px;">
           🚀 Go to Dashboard
        </a>
      </div>

      <!-- Divider -->
      <hr style="border:none; border-top:1px solid #E5E7EB; margin:25px 0;">
      
      <!-- Support Info -->
      <p style="font-size:13px; color:#6B7280; line-height:1.5;">
        If you have any questions, simply reply to this email or reach out to our support team anytime.
      </p>
      
      <!-- Footer -->
      <div style="margin-top:25px; padding-top:15px; border-top:1px solid #E5E7EB; text-align:left;">
        <p style="font-size:13px; color:#4B5563; margin:0;">
          Best regards, <br/>
          <span style="font-weight:bold; color:#4F46E5;">The Mern-auth Team</span>
        </p>
        <p style="font-size:11px; color:#9CA3AF; margin-top:8px;">
          © ${new Date().getFullYear()} Mern-auth. All rights reserved.
        </p>
      </div>
    </div>
  </div>
  `;
};

export { welcomeTemplate };
