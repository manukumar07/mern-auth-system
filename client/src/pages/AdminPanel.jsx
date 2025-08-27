import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const AdminPanel = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F9FAFB] animate-fade-in-up">
      <div className="bg-[#FFFFFF] shadow-glow rounded-lg p-8 max-w-md w-full text-center space-y-4">
        <h1 className="text-2xl font-poppins font-bold text-[#2563EB] mb-2">
          Admin Panel
        </h1>

        {/* Show Admin Info */}
        {user && (
          <div className="flex flex-col items-center space-y-1">
            <Shield className="w-6 h-6 text-[#2563EB]]" />
            <p className="text-[#111827] font-medium">{user.name}</p>
            <p className="text-[#9CA3AF] text-sm">{user.email}</p>
          </div>
        )}

        <p className="text-[#6B7280] mb-6">
          Welcome to the admin dashboard! Here you can manage users, settings,
          and admin-specific actions.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#2563EB] text-[#FFFFFF] font-semibold hover:bg-[#4B5563] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Extra Admin Actions */}
        <div className="mt-6 p-4 bg-[#F3F4F6] rounded-lg text-[#111827]">
          <h2 className="font-semibold mb-2">Admin Actions</h2>
          <ul className="list-disc list-inside text-left text-sm">
            <li>Manage users</li>
            <li>View reports & analytics</li>
            <li>Update system settings</li>
            <li>Other admin-specific features</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
