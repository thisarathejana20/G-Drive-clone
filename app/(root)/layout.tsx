import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      <section className="flex h-full flex-1 flex-col">
        {/* Mobile Nav */}
        <MobileNavigation />

        {/* Header */}
        <Header />
        <div className="main-content bg-white">{children}</div>
      </section>
    </main>
  );
};

export default layout;
