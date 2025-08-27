// import { useState, useEffect } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { toast } from "react-hot-toast";
// import { CheckCircle, XCircle, Mail, RefreshCw, ArrowLeft } from "lucide-react";
// import axios from "axios";

// const VerifyEmailPage = () => {
//   const [searchParams] = useSearchParams();
//   const [verificationStatus, setVerificationStatus] = useState("pending");
//   const [isResending, setIsResending] = useState(false);
//   const navigate = useNavigate();

//   // Get token and email from URL query
//   const token = searchParams.get("token");
//   const email = searchParams.get("email") || "";

//   useEffect(() => {
//     if (token) handleVerifyEmail(token);
//   }, [token]);

//   // ✅ Direct API call to backend localhost
//   const handleVerifyEmail = async (verificationToken) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/v1/auth/verify-email?token=${verificationToken}`
//       );
//       if (res.data.success) {
//         setVerificationStatus("success");
//         toast.success(res.data.message || "Email verified successfully!");
//         setTimeout(() => navigate("/login"), 2000);
//       }
//     } catch (err) {
//       const msg = err?.response?.data?.message || "Verification failed";
//       if (msg.toLowerCase().includes("expired")) {
//         setVerificationStatus("expired");
//       } else {
//         setVerificationStatus("error");
//       }
//     }
//   };

//   const handleResendEmail = async () => {
//     setIsResending(true);

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       toast.success(
//         "Verification email sent! Please check your inbox and spam folder."
//       );
//     } catch {
//       toast.error("Failed to resend email. Please try again.");
//     } finally {
//       setIsResending(false);
//     }
//   };

//   const renderContent = () => {
//     switch (verificationStatus) {
//       case "pending":
//         return (
//           <>
//             <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-floating bg-[#2563EB]">
//               <Mail className="w-8 h-8 text-[#FFFFFF]" />
//             </div>
//             <CardTitle
//               className="text-2xl font-poppins font-bold text-center bg-clip-text text-transparent"
//               style={{
//                 backgroundImage: "linear-gradient(to right, #2563EB, #60A5FA)",
//               }}
//             >
//               {token ? "Verifying Email..." : "Check Your Email"}
//             </CardTitle>
//             <CardDescription className="text-center text-[#111827]">
//               {token
//                 ? "Please wait while we verify your email address."
//                 : `We've sent a verification link to ${email}. Click the link to activate your account.`}
//             </CardDescription>
//           </>
//         );

//       case "success":
//         return (
//           <>
//             <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-scale-in bg-[#22C55E]">
//               <CheckCircle className="w-8 h-8 text-[#FFFFFF]" />
//             </div>
//             <CardTitle className="text-2xl font-poppins font-bold text-center text-[#22C55E]">
//               Email Verified!
//             </CardTitle>
//             <CardDescription className="text-center text-[#111827]">
//               Your email has been successfully verified. You can now access your
//               account.
//             </CardDescription>
//           </>
//         );

//       case "expired":
//         return (
//           <>
//             <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#F59E0B]">
//               <XCircle className="w-8 h-8 text-[#111827]" />
//             </div>
//             <CardTitle className="text-2xl font-poppins font-bold text-center text-[#F59E0B]">
//               Link Expired
//             </CardTitle>
//             <CardDescription className="text-center text-[#111827]">
//               Your verification link has expired. Please request a new one.
//             </CardDescription>
//           </>
//         );

//       case "error":
//         return (
//           <>
//             <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#DC2626]">
//               <XCircle className="w-8 h-8 text-[#FFFFFF]" />
//             </div>
//             <CardTitle className="text-2xl font-poppins font-bold text-center text-[#DC2626]">
//               Verification Failed
//             </CardTitle>
//             <CardDescription className="text-center text-[#111827]">
//               We couldn't verify your email. The link may be invalid or expired.
//             </CardDescription>
//           </>
//         );
//     }
//   };

//   const renderActions = () => {
//     switch (verificationStatus) {
//       case "success":
//         return (
//           <div className="space-y-3">
//             <Button
//               variant="gradient"
//               className="w-full bg-[#2563EB] text-[#FFFFFF]"
//               asChild
//             >
//               <Link to="/login">Continue to Login</Link>
//             </Button>
//             <Button
//               variant="outline"
//               className="w-full border border-[#2563EB] text-[#2563EB]"
//               asChild
//             >
//               <Link to="/">
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Back to Home
//               </Link>
//             </Button>
//           </div>
//         );

//       case "expired":
//       case "error":
//         return (
//           <div className="space-y-3">
//             <Button
//               className="w-full bg-[#2563EB] text-[#FFFFFF] flex items-center justify-center"
//               onClick={handleResendEmail}
//               disabled={isResending}
//             >
//               {isResending ? (
//                 <>
//                   <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <Mail className="w-4 h-4 mr-2" />
//                   Resend Verification Email
//                 </>
//               )}
//             </Button>
//             <Button
//               variant="outline"
//               className="w-full border border-[#2563EB] text-[#2563EB]"
//               asChild
//             >
//               <Link to="/signup">
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Back to Signup
//               </Link>
//             </Button>
//           </div>
//         );

//       default:
//         return (
//           <div className="space-y-3">
//             {!token && (
//               <>
//                 <Button
//                   className="w-full border border-[#2563EB] text-black flex items-center justify-center bg-white hover:bg-[#2563EB]"
//                   onClick={handleResendEmail}
//                   disabled={isResending}
//                 >
//                   {isResending ? (
//                     <>
//                       <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <RefreshCw className="w-4 h-4 mr-2" />
//                       Resend Email
//                     </>
//                   )}
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   className="w-full  hover:bg-[#2563EB] bg-white text-black border border-[#2563EB]"
//                   asChild
//                 >
//                   <Link to="/login">
//                     <ArrowLeft className="w-4 h-4 mr-2" />
//                     Back to Login
//                   </Link>
//                 </Button>
//               </>
//             )}
//           </div>
//         );
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-4"
//       style={{
//         background:
//           "linear-gradient(to bottom right, #FFFFFF, #F9FAFB 20%, #FFFFFF)",
//       }}
//     >
//       <div className="w-full max-w-md animate-fade-in-up">
//         <Card
//           className="shadow-xl"
//           style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}
//         >
//           <CardHeader className="text-center space-y-4">
//             {renderContent()}
//           </CardHeader>

//           <CardContent className="space-y-6">
//             {renderActions()}

//             {verificationStatus === "pending" && !token && (
//               <div
//                 className="text-center text-sm space-y-2"
//                 style={{ color: "#1F2937" }}
//               >
//                 <p>Didn't receive the email?</p>
//                 <ul className="text-xs space-y-1">
//                   <li>• Check your spam/junk folder</li>
//                   <li>• Make sure the email address is correct</li>
//                   <li>• Wait a few minutes for delivery</li>
//                 </ul>
//               </div>
//             )}

//             {verificationStatus === "success" && (
//               <div className="text-center text-sm" style={{ color: "#1F2937" }}>
//                 <p>Redirecting to login in 3 seconds...</p>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default VerifyEmailPage;
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "react-hot-toast";
import { CheckCircle, XCircle, Mail, ArrowLeft } from "lucide-react";
import { verifyEmail } from "@/services/authService";

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState("pending");
  const navigate = useNavigate();

  const token = searchParams.get("token") || "";
  const email = searchParams.get("email") || "";

  useEffect(() => {
    if (token) handleVerifyEmail(token);
  }, [token]);

  const handleVerifyEmail = async (verificationToken) => {
    try {
      const res = await verifyEmail(verificationToken);

      setVerificationStatus("success");
      toast.success(res.message || "Email verified successfully!");

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      const msg = err?.response?.data?.message || "Verification failed";

      if (typeof msg === "string" && msg.toLowerCase().includes("expired")) {
        setVerificationStatus("expired");
      } else {
        setVerificationStatus("error");
      }

      toast.error(msg);
    }
  };

  const renderContent = () => {
    switch (verificationStatus) {
      case "pending":
        return (
          <>
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-floating bg-[#2563EB]">
              <Mail className="w-8 h-8 text-[#FFFFFF]" />
            </div>
            <CardTitle
              className="text-2xl font-bold text-center bg-clip-text text-transparent "
              style={{
                backgroundImage: "linear-gradient(to right, #2563EB, #60A5FA)",
              }}
            >
              Verifying Email...
            </CardTitle>
            <CardDescription className="text-center text-[#111827]">
              {token
                ? "Please wait while we verify your email address."
                : `We've sent a verification link to  email ${email}. Click the link to activate your account.`}
            </CardDescription>
          </>
        );

      case "success":
        return (
          <>
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-scale-in bg-[#22C55E]">
              <CheckCircle className="w-8 h-8 text-[#FFFFFF]" />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-[#22C55E]">
              Email Verified!
            </CardTitle>
            <CardDescription className="text-center text-[#111827]">
              Your email has been successfully verified. Redirecting to login...
            </CardDescription>
          </>
        );

      case "expired":
        return (
          <>
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#F59E0B]">
              <XCircle className="w-8 h-8 text-[#111827]" />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-[#F59E0B]">
              Link Expired
            </CardTitle>
            <CardDescription className="text-center text-[#111827]">
              Your verification link has expired.
            </CardDescription>
          </>
        );

      case "error":
        return (
          <>
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#DC2626]">
              <XCircle className="w-8 h-8 text-[#FFFFFF]" />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-[#DC2626]">
              Verification Failed
            </CardTitle>
            <CardDescription className="text-center text-[#111827]">
              We couldn't verify your email. The link may be invalid or expired.
            </CardDescription>
          </>
        );
    }
  };

  const renderActions = () => {
    if (verificationStatus === "success") {
      return (
        <div className="space-y-3">
          <Button
            variant="gradient"
            className="w-full bg-[#2563EB] text-white"
            asChild
          >
            <Link to="/login">Continue to Login</Link>
          </Button>
        </div>
      );
    }
    return (
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full border border-[#2563EB] text-[#2563EB]"
          asChild
        >
          <Link to="/signup">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Signup
          </Link>
        </Button>

        {/* Open Email Client Button */}
        <Button
          className="w-full bg-[#2563EB] text-white flex items-center justify-center"
          asChild
        >
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <Mail className="w-4 h-4 mr-2" />
            Open Email
          </a>
        </Button>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background:
          "linear-gradient(to bottom right, #FFFFFF, #F9FAFB 20%, #FFFFFF)",
      }}
    >
      <div className="w-full max-w-md animate-fade-in-up">
        <Card
          className="shadow-xl"
          style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}
        >
          <CardHeader className="text-center space-y-4">
            {renderContent()}
          </CardHeader>
          <CardContent className="space-y-6">
            {renderActions()}

            <p className="text-center">Didn't receive the email?</p>
            <ul className="text-xs space-y-1 text-center">
              <li>• Check your spam/junk folder</li>
              <li>• Make sure the email address is correct</li>
              <li>• Wait a few minutes for delivery</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
