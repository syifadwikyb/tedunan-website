// src/pages/DetailPage.tsx
"use client";

import { Innovation } from "../data/innovations";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";

interface DetailPageProps {
  innovation: Innovation;
  onBack: () => void;
}

export default function DetailPage({ innovation, onBack }: DetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Tutup modal dengan tombol ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="container mx-auto py-12 px-4 md:px-0">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center text-primary-600 hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Inovasi
      </button>

      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* Gambar Inovasi */}
        <div
          className="lg:w-1/2 cursor-pointer"
          onClick={() => setSelectedImage(innovation.image)}
        >
          <Image
            src={innovation.image}
            alt={innovation.title}
            width={800}
            height={600}
            className="rounded-lg shadow-xl object-cover w-full h-auto"
          />
        </div>

        {/* Detail dan Deskripsi */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="flex items-center text-primary-500 mb-2">
            {innovation.icon}
            <span className="ml-2 font-semibold">{innovation.subtitle}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {innovation.title}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {innovation.description}
          </p>
        </div>
      </div>

      <hr className="my-12 border-t border-gray-300" />

      {/* Bagian Tutorial */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">
          Langkah-Langkah Tutorial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovation.tutorial.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(step.image)}
            >
              <Image
                src={step.image}
                alt={step.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-primary-100 text-primary-600 rounded-full px-3 py-1 text-sm font-semibold mb-2">
                  Langkah {step.step}
                </span>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Gambar Detail */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // klik overlay = close
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()} // biar klik gambar gak close
          >
            <button
              className="absolute top-4 right-4 text-white bg-black/60 p-2 rounded-full hover:bg-black"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={selectedImage}
              alt="Detail"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
