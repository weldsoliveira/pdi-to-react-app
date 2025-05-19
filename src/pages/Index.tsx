
import React from "react";
import Header from "@/components/Header";
import PasswordForm from "@/components/PasswordForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header title="Criar senha" />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <PasswordForm />
      </main>
    </div>
  );
};

export default Index;
