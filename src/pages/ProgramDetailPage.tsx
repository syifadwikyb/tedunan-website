// src/pages/ProgramDetailPage.tsx
"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Program } from "../data/programs";

interface ProgramDetailPageProps {
  program: Program;
  onBack: () => void;
}

export default function ProgramDetailPage({ program, onBack }: ProgramDetailPageProps) {
  return (
    <main className="container mx-auto py-12 px-4 md:px-0">
      <button onClick={onBack} className="mb-6 inline-flex items-center text-primary-600 hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Program
      </button>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          width={1200}
          height={600}
          className="w-full h-96 object-cover"
        />
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">{program.title}</h1>
          <p className="text-lg font-medium text-gray-600 mb-8">{program.description}</p>
          <div dangerouslySetInnerHTML={{ __html: program.content }} />
        </div>
      </div>
    </main>
  );
}