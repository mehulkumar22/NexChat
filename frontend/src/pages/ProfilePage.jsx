import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const PREBUILT_AVATARS = [
  "/avatars/avatar1.svg",
  "/avatars/avatar2.svg",
  "/avatars/avatar3.svg",
  "/avatars/avatar4.svg",
  "/avatars/avatar5.svg",
  "/avatars/avatar6.svg",
];

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-3xl xl:max-w-4xl mx-auto px-4 py-12">
        <div className="bg-base-300 rounded-xl p-8 xl:p-12 space-y-10">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Profile</h1>
            <p className="mt-2 text-base-content/70">Your profile information</p>
          </div>

          {/* Avatar upload */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 xl:size-40 rounded-full object-cover border-4"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200
                ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}`}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>

            {/* OR text only */}
            <p className="text-sm text-zinc-400">or</p>

            {/* Prebuilt avatars */}
            <div className="w-full">
              <h4 className="text-sm font-medium text-center mb-2">Choose Your Avatar</h4>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 justify-center">
                {PREBUILT_AVATARS.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    onClick={() => {
                      setSelectedImg(avatar);
                      updateProfile({ profilePic: avatar });
                    }}
                    className={`cursor-pointer size-12 rounded-full object-cover border-2 transition-transform hover:scale-110 ${
                      selectedImg === avatar ? "ring-2 ring-primary" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" /> Full Name
              </div>
              <p className="px-4 py-3 bg-base-200 rounded-lg border text-base">{authUser?.fullName}</p>
            </div>

            <div className="space-y-2">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Address
              </div>
              <p className="px-4 py-3 bg-base-200 rounded-lg border text-base">{authUser?.email}</p>
            </div>
          </div>

          <div className="mt-8 bg-base-300 rounded-xl p-6 xl:p-8">
            <h2 className="text-lg font-medium mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
