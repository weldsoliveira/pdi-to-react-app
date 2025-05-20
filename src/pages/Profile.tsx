
import React from "react";
import Header from "@/components/Header";
import ProfileContent from "@/components/ProfileContent";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header title="Perfil" />
      
      <main className="flex-1 p-4">
        <ProfileContent />
      </main>
    </div>
  );
};

export default Profile;
