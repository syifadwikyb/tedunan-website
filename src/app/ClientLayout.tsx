"use client";

import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import HomePage from "../pages/HomePage";
import InnovationPage from "../pages/InnovationPage";
import ProgramPage from "../pages/ProgramPage";
import AboutMePage from "../pages/AboutMe";
import InnovationDetailPage from "../pages/InnovationDetailPage";
import ProgramDetailPage from "../pages/ProgramDetailPage";

import { Innovation } from "../data/innovations";
import { Program } from "../data/programs"; // Pastikan Anda mengimpor tipe data Program

export default function ClientLayout() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedInnovation, setSelectedInnovation] = useState<Innovation | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleSelectInnovation = (item: Innovation) => {
    setSelectedInnovation(item);
    setActiveTab("innovation-detail"); 
  };

  const handleSelectProgram = (item: Program) => {
    setSelectedProgram(item);
    setActiveTab("program-detail");
  };

  const handleBackToInnovations = () => {
    setSelectedInnovation(null);
    setActiveTab("innovation");
  };

  const handleBackToPrograms = () => {
    setSelectedProgram(null);
    setActiveTab("program");
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "innovation":
        return <InnovationPage onSelectInnovation={handleSelectInnovation} />;
      case "innovation-detail":
        return selectedInnovation ? (
          <InnovationDetailPage innovation={selectedInnovation} onBack={handleBackToInnovations} />
        ) : (
          <InnovationPage onSelectInnovation={handleSelectInnovation} />
        );
      case "program":
        return <ProgramPage onSelectProgram={handleSelectProgram} />;
      case "program-detail":
        return selectedProgram ? (
          <ProgramDetailPage program={selectedProgram} onBack={handleBackToPrograms} />
        ) : (
          <ProgramPage onSelectProgram={handleSelectProgram} />
        );
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