"use client";
import { useState } from "react";
import Navbar from "@/components/NavBar";
import HomePage from "@/pages/HomePage";
import InnovationPage from "@/pages/InnovationPage";
import ProgramPage from "@/pages/ProgramPage";
import AboutMePage from "@/pages/AboutMe";
import InnovationDetailPage from "@/pages/InnovationDetailPage";
import ProgramDetailPage from "@/pages/ProgramDetailPage";
import { Innovation } from "@/data/innovations";
import { Program } from "@/data/programs";

export default function PageContainer() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedInnovation, setSelectedInnovation] = useState<Innovation | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  // Handler untuk Innovation
  const handleSelectInnovation = (item: Innovation) => {
    setSelectedInnovation(item);
    setActiveTab("InnovationDetailPage");
  };

  // Handler untuk Program
  const handleSelectProgram = (item: Program) => {
    setSelectedProgram(item);
    setActiveTab("ProgramDetailPage");
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "innovation":
        return <InnovationPage onSelectInnovation={handleSelectInnovation} />;
      case "program":
        return <ProgramPage onSelectProgram={handleSelectProgram} />;
      case "about":
        return <AboutMePage />;
      case "InnovationDetailPage":
        return selectedInnovation ? (
          <InnovationDetailPage
            innovation={selectedInnovation}
            onBack={() => setActiveTab("innovation")} // ⬅ tambahin ini
          />
        ) : (
          <HomePage />
        );
      case "ProgramDetailPage":
        return selectedProgram ? (
          <ProgramDetailPage
            program={selectedProgram}
            onBack={() => setActiveTab("program")} // ⬅ tambahin ini
          />
        ) : (
          <HomePage />
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>{renderActiveTab()}</main>
    </div>
  );
}
