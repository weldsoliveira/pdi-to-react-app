
import React from "react";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header title="Login" />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
