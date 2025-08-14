"use client";

import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import HomePage from "../pages/HomePage";
import InnovationPage from "../pages/InnovationPage";
import ProgramPage from "../pages/ProgramPage";
import AboutMePage from "../pages/AboutMe";

export default function ClientLayout() {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "innovation":
        return <InnovationPage />;
      case "program":
        return <ProgramPage />;
      case "about":
        return <AboutMePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">{renderActiveTab()}</main>
      <Footer />
    </div>
  );
}
