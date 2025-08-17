// src/pages/HomePage.tsx
"use client";

import React from 'react';
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Recycle, ExternalLink, Leaf, TreePine, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  wasteData,
  dailyWasteData,
  disposalData,
  willingnessData,
  COLORS,
} from "../data/piechart";


interface PieData {
  name: string;
  value: number;
}

const slides = [
  {
    id: 1,
    title: "Area Paling Direkomendasikan (TPS 1)",
    description:
      "Kelebihan: Jauh dari pemukiman warga, lahan tidak sedang digunakan, tanah cukup kering, dan luas memadai. Kekurangan: Berada dekat dengan sumber air irigasi sawah.",
    image: "/images/peta.jpg",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Area Alternatif (TPS 5)",
    description:
      "Kelebihan: Jauh dari pemukiman, lahan cukup kering. Kekurangan: Luas sangat tidak mencukupi untuk fungsi TPS jangka menengah-panjang, berada dekat dengan aliran sungai, dan masih terdapat bangunan pada lokasi.",
    image: "/images/peta.jpg",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    title: "Area Tidak Direkomendasikan (TPS 2,3,4)",
    description:
      "Kelebihan: Lahan cukup/luas, akses jalan strategis, dan cukup jauh dari pemukiman. Kekurangan: Tanah basah dengan risiko penurunan lahan, sangat dekat dengan aliran sungai, berpotensi mencemari sawah/air tanah, menimbulkan gangguan bau/penyakit, serta masih ada aktivitas tambak garam. Kesimpulan: Lokasi ini paling tidak direkomendasikan.",
    image: "/images/peta.jpg",
    color: "bg-red-500",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoMuted) {
        videoRef.current.muted = false;
        setIsVideoMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsVideoMuted(true);
      }
    }
  };


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        {/* Enhanced background overlay with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-emerald-800/5 to-teal-900/10 z-0"></div>

        {/* Floating background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 left-10 text-green-200/30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Leaf className="w-16 h-16" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-emerald-200/30"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          >
            <TreePine className="w-12 h-12" />
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-1/4 text-green-300/20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          >
            <Sparkles className="w-10 h-10" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-emerald-700 to-green-600 mb-6 leading-tight">
                Tedunan Hijau
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                  Desa Inspirasi Lingkungan
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Desa Tedunan percaya bahwa perubahan besar dimulai dari langkah kecil. Dengan semangat gotong-royong, kami berkomitmen mengurangi sampah, menjaga kebersihan, dan melestarikan alam untuk generasi mendatang.
              </p>

              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4 border border-green-200 shadow-sm"
                >
                  <Leaf className="w-4 h-4 mr-2" />
                  Desa Ramah Lingkungan
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
                {/* Enhanced video container with glow effect */}
                <div className="relative rounded-2xl shadow-2xl overflow-hidden cursor-pointer group bg-gradient-to-br from-white to-green-50 p-2">
                  <div className="rounded-xl overflow-hidden relative">
                    {/* Auto-playing looped video with mute control */}
                    <video
                      ref={videoRef}
                      className="w-full h-80 object-cover rounded-xl"
                      autoPlay
                      loop
                      muted={isVideoMuted}
                      playsInline
                      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23dcfce7'/%3E%3Cstop offset='100%25' style='stop-color:%23a7f3d0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3Cg transform='translate(200,150)'%3E%3Cpath d='M-20,-20 L-20,20 L20,0 Z' fill='%23059669' opacity='0.7'/%3E%3C/g%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%23047857' font-size='16' font-family='system-ui'%3EVideo Tedunan Hijau%3C/text%3E%3C/svg%3E"
                    >
                      {/* Add your video source here */}
                      <source src="/videos/IklanMasyarakat.mp4" type="video/mp4" />

                      {/* Fallback content if video fails to load */}
                      <div className="w-full h-80 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center rounded-xl">
                        <div className="text-center">
                          <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
                          <p className="text-green-700 font-medium">Video Tedunan Hijau</p>
                          <p className="text-green-600 text-sm mt-2">Video tidak dapat dimuat</p>
                        </div>
                      </div>
                    </video>

                    {/* Sound control overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-emerald-800/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                      onClick={handleVideoClick}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative p-4 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md text-white border border-white/30 shadow-2xl"
                      >
                        {isVideoMuted ? (
                          <div className="relative">
                            <Play className="w-8 h-8 fill-current" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                          </div>
                        ) : (
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Play className="w-8 h-8 fill-current" />
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </div>

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 -z-10 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>

                {/* Enhanced recycling icon with better positioning */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full shadow-2xl transform rotate-12 group-hover:rotate-0 transition-all duration-300 border-4 border-white"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: { duration: 2, repeat: Infinity }
                  }}
                >
                  <Recycle className="w-8 h-8" />
                </motion.div>

                {/* Additional decorative elements */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-400 to-green-400 text-white p-3 rounded-full shadow-xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Volume Sampah */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Data Volume Sampah Desa Tedunan
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-8">
            Setiap harinya, Desa Tedunan menghasilkan sampah dari rumah tangga,
            pasar, dan kegiatan sosial masyarakat. Sebagian besar sampah
            bersifat organik, namun sampah plastik dan anorganik juga masih
            mendominasi. Analisis ini membantu kami merencanakan strategi
            pengelolaan sampah yang efektif, sehingga volume sampah bisa
            ditekan, dan lebih banyak material yang dapat didaur ulang.
          </p>

          {/* Grafik Pie */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Piechart 1 */}
            <div className="w-full h-80 bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-4">
                Rata-rata Sampah per Hari
              </h3>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={dailyWasteData as PieData[]}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {dailyWasteData.map((_: PieData, index: number) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Piechart 2 */}
            <div className="w-full h-80 bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-4">
                Tempat Pembuangan Sampah
              </h3>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={disposalData as PieData[]}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {disposalData.map((_: PieData, index: number) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Piechart 3 */}
            <div className="w-full h-80 bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-4">
                Kesediaan Membayar Iuran
              </h3>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={willingnessData as PieData[]}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {willingnessData.map((_: PieData, index: number) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Tombol ke Spreadsheet */}
          <div className="mt-10">
            <a
              href="https://docs.google.com/spreadsheets/d/1jeIz1EHIT4wBWHa1gtDVP_dliONorAtqqHn8RmrJddo/edit?gid=334752373#gid=334752373"
              target="_blank"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Lihat Data Lengkap di Spreadsheet
            </a>
          </div>
        </div>
      </section>

      {/* Modal untuk Infografis */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <div
            className="relative max-w-5xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/datasampah.jpg"
              alt="Infografis Volume Sampah"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Slider Analisis Tanah */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-6">
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
                    <div
                      className={`w-fit px-4 py-2 text-white font-bold text-sm rounded-full mb-4 ${slides[currentSlide].color}`}
                    >
                      {slides[currentSlide].title}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {slides[currentSlide].title}
                    </h3>
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
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
