
import React from "react";
import Header from "@/components/Header";
import DashboardContent from "@/components/DashboardContent";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header title="Dashboard" />
      
      <main className="flex-1 p-4">
        <DashboardContent />
      </main>
    </div>
  );
};

export default Dashboard;
