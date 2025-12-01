import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user, loading, updateUserProfile } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });
  const [updating, setUpdating] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-500"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-600">No user information available.</p>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setEditData({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
    setIsEditing(!isEditing);
    setSuccessMessage("");
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setUpdating(true);
    
    try {
      await updateUserProfile(editData.displayName, editData.photoURL);
      setSuccessMessage("✅ Profile updated successfully!");
      setIsEditing(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Profile update failed:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex justify-center items-center px-4 py-12 bg-base-100">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">My Profile</h1>
          <p className="text-gray-500">Update your personal information</p>
        </div>

        <div className="flex flex-col items-center space-y-4 p-6   rounded-2xl">
          <div className="relative">
            <img
              src={isEditing ? editData.photoURL || "https://via.placeholder.com/120" : user.photoURL || "https://via.placeholder.com/120"}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg ring-4 ring-transparent hover:ring-green-200 transition-all duration-200"
            />
          </div>
          
          {isEditing ? (
            <input
              type="text"
              name="displayName"
              value={editData.displayName}
              onChange={handleInputChange}
              className="w-full max-w-xs text-center text-xl font-bold bg-white border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-green-400 focus:outline-none shadow-md"
              placeholder="Enter your name"
              autoFocus
            />
          ) : (
            <h2 className="text-2xl font-bold text-gray-800">
              {user.displayName || "No name set"}
            </h2>
          )}
          
          <p className="text-gray-600 font-medium bg-white px-4 py-1 rounded-full shadow-sm">
            {user.email}
          </p>
        </div>

        {isEditing && (
          <form onSubmit={handleSaveProfile} className="space-y-4 p-6 bg-gray-50 rounded-xl">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Display Name
              </label>
              <input
                type="text"
                name="displayName"
                value={editData.displayName}
                onChange={handleInputChange}
                required
                className="w-full input input-bordered input-lg bg-white shadow-inner"
                placeholder="Enter your display name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Photo URL (optional)
              </label>
              <input
                type="url"
                name="photoURL"
                value={editData.photoURL}
                onChange={handleInputChange}
                className="w-full input input-bordered input-lg bg-white shadow-inner"
                placeholder="https://example.com/your-photo.jpg"
              />
              <p className="text-xs text-gray-500 mt-1">
                Use services like imgur.com or Gravatar for profile photos
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={updating}
                className="flex-1 btn btn-success text-white font-semibold shadow-lg hover:shadow-xl"
              >
                {updating ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
              <button
                type="button"
                onClick={handleEditToggle}
                className="flex-1 btn btn-outline btn-neutral"
                disabled={updating}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="space-y-3 p-5  rounded-xl border">
          <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
            <span className="text-blue-600">📋</span> Account Details
          </h3>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
              <span className="text-gray-500">User ID:</span>
              <code className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                {user.uid.slice(0, 8)}...
              </code>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
              <span className="text-gray-500">Email Verified:</span>
              <span className="font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                {user.emailVerified ? " Yes" : " No"}
              </span>
            </div>
            {user.metadata?.creationTime && (
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="text-gray-500">Created:</span>
                <span className="text-sm text-gray-600">{user.metadata.creationTime}</span>
              </div>
            )}
          </div>
        </div>

        {!isEditing && (
          <div className="flex gap-3">
            <button
              onClick={handleEditToggle}
              className="flex-1 btn btn-outline btn-success text-green-600 font-semibold hover:bg-green-50 shadow-md"
            >
               Edit Profile
            </button>
          </div>
        )}

        {successMessage && (
          <div className="p-4 bg-green-100 border-2 border-green-400 text-green-800 rounded-xl text-center font-semibold shadow-lg animate-bounce">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
