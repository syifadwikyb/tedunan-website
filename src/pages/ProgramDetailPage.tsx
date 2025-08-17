"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, Download } from "lucide-react";
import { Program } from "../data/programs";

interface ProgramDetailPageProps {
  program: Program | null;   // 🔹 Boleh null biar aman
  onBack: () => void;
}

export default function ProgramDetailPage({ program, onBack }: ProgramDetailPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Tutup modal dengan ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // 🔹 Guard jika program null
  if (!program) {
    return (
      <main className="container mx-auto py-12 px-4 md:px-0 text-center">
        <p className="text-gray-500 mb-4">Program tidak ditemukan.</p>
        <button
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali
        </button>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-12 px-4 md:px-0">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center text-green-700 hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Program
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Klik gambar buka modal */}
        <Image
          src={program.image}
          alt={program.title}
          width={1200}
          height={600}
          className="w-full h-96 object-cover cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />

        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            {program.title}
          </h1>
          <p className="text-lg font-medium text-gray-600 mb-8">
            {program.description}
          </p>

          {/* Tampilkan tombol download kalau ada */}
          {program.downloadUrl && (
            <a
              href={program.downloadUrl}
              download
              className="inline-flex items-center px-4 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition mb-6"
            >
              <Download className="w-5 h-5 mr-2" />
              Download File
            </a>
          )}

          {/* konten html */}
          {program.content && (
            <div dangerouslySetInnerHTML={{ __html: program.content }} />
          )}
        </div>
      </div>

      {/* Modal Gambar */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
          <div
            className="relative max-w-5xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // biar klik gambar gak nutup
          >
            <Image
              src={program.image}
              alt={program.title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}
