import { Link } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const UserPanel = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F9FAFB] animate-fade-in-up">
      <div className="bg-white shadow-glow rounded-lg p-8 max-w-md w-full text-center space-y-4">
        <h1 className="text-2xl font-poppins font-bold text-[#2563EB] mb-2">
          User Panel
        </h1>

        {/* Show User Info */}
        {user && (
          <div className="flex flex-col items-center space-y-1">
            <User className="w-6 h-6 text-[#2563EB]" />
            <p className="text-gray-800 font-medium">{user.name}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        )}

        <p className="text-gray-600 mb-6">
          Welcome to your dashboard! Here you can manage your profile, settings,
          and view user-specific content.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1E40AF] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Extra content placeholder */}
        <div className="mt-6 p-4 bg-[#F3F4F6] rounded-lg text-gray-700">
          <h2 className="font-semibold mb-2">User Activities</h2>
          <ul className="list-disc list-inside text-left text-sm">
            <li>View profile information</li>
            <li>Update settings</li>
            <li>Check notifications</li>
            <li>Other user-specific features</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
