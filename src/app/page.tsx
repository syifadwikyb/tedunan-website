// PageContainer.tsx
"use client";
import { useState } from "react";
import Navbar from "@/components/NavBar";
import HomePage from "@/pages/HomePage";
import InnovationPage from "@/pages/InnovationPage";
import ProgramPage from "@/pages/ProgramPage";
import AboutMePage from "@/pages/AboutMe";
import { Innovation } from "@/data/innovations";
import { Program } from "@/data/programs"; // Pastikan Anda mengimpor tipe Program

export default function PageContainer() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedInnovation, setSelectedInnovation] = useState<Innovation | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleSelectInnovation = (item: Innovation) => {
    setSelectedInnovation(item);
    // Tambahkan logika navigasi ke halaman detail inovasi di sini
  };

  const handleSelectProgram = (item: Program) => {
    setSelectedProgram(item);
    // Tambahkan logika navigasi ke halaman detail program di sini
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "innovation":
        return <InnovationPage onSelectInnovation={handleSelectInnovation} />;
      case "program":
        // Perbaikan: Sekarang memanggil ProgramPage dengan prop yang benar
        return <ProgramPage onSelectProgram={handleSelectProgram} />;
      case "about":
        return <AboutMePage />;
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