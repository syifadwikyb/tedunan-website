// src/pages/HomePage.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Recycle } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Area Prioritas Utama (Merah)",
    description: "Tanah di area ini sangat cocok untuk bak sampah karena komposisi tanah yang stabil dan jauh dari sumber air utama. Prioritas utama untuk pembangunan.",
    image: "/images/peta-prioritas-merah.png",
    color: "bg-red-500"
  },
  {
    id: 2,
    title: "Area Prioritas Kedua (Kuning)",
    description: "Area ini memiliki karakteristik tanah yang cukup baik, namun memerlukan penyesuaian seperti penguatan dasar. Prioritas kedua untuk pembangunan.",
    image: "/images/peta-prioritas-kuning.png",
    color: "bg-yellow-500"
  },
  {
    id: 3,
    title: "Area Tidak Direkomendasikan (Hijau)",
    description: "Area ini tidak cocok untuk bak sampah karena dekat dengan area resapan air dan lahan pertanian. Sebaiknya dihindari.",
    image: "/images/peta-prioritas-hijau.png",
    color: "bg-green-500"
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Ganti slide setiap 5 detik
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const enableSound = () => {
      const vid = document.querySelector("video");
      if (vid) {
        vid.muted = false;
        vid.play();
      }
      window.removeEventListener("click", enableSound);
    };

    window.addEventListener("click", enableSound);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white">
      {/* Video Iklan dan Peringatan */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Teks Deskripsi */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-green-800 mb-6">
                Desa Hijau
                <span className="block text-green-600">Bebas Sampah</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Bersama membangun desa yang bersih, sehat, dan berkelanjutan
                melalui inovasi pengelolaan sampah yang ramah lingkungan.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Play className="w-5 h-5 inline mr-2" />
                Tonton Video Profile
              </button>
            </div>

            {/* Video */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <video
                  src="/videos/IklanMasyarakat.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-80 object-cover rounded-xl"
                ></video>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg">
                  <Recycle className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Volume Sampah */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
            Data Volume Sampah Desa Tedunan
          </h2>
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <Image
                src="/images/datasampah.jpg"
                alt="Infografis Volume Sampah"
                width={800}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slider Analisis Tanah */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            Analisis Tanah untuk Lokasi Bak Sampah
          </h2>
          <div className="relative max-w-5xl mx-auto rounded-xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="flex flex-col lg:flex-row bg-white">
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className={`w-fit px-4 py-2 text-white font-bold text-sm rounded-full mb-4 ${slides[currentSlide].color}`}>
                      {slides[currentSlide].title}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{slides[currentSlide].title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Tombol Navigasi */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}