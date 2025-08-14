import { ReactNode } from "react";
import {
  Thermometer,
  Recycle,
  Leaf
} from "lucide-react";

export interface TutorialStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

export interface Innovation {
  id: number;
  title: string;
  subtitle: string;
  icon: ReactNode;
  image: string;
  description: string;
  tutorial: TutorialStep[];
}

export const innovations: Innovation[] = [
  {
    id: 1,
    title: "Alat Pembakar Sampah Minim Asap",
    subtitle: "Teknologi Arduino Nano untuk Pengukuran Suhu",
    icon: <Thermometer className="" />,
    image: "/images/inovasi1.jpg",
    description:
      "Inovasi pembakaran sampah yang ramah lingkungan dengan monitoring suhu otomatis menggunakan Arduino Nano.",
    tutorial: [
      {
        step: 1,
        title: "Persiapan Alat dan Bahan",
        description: "Siapkan drum bekas, Arduino Nano, sensor suhu DS18B20, dan komponen elektronik lainnya.",
        image: "/images/step1.jpg"
      },
      {
        step: 2,
        title: "Pemasangan Sensor",
        description: "Pasang sensor suhu pada posisi yang tepat di dalam drum pembakaran.",
        image: "/images/step2.jpg"
      },
      {
        step: 3,
        title: "Programming Arduino",
        description: "Upload kode program untuk monitoring dan kontrol suhu otomatis.",
        image: "/images/step3.jpg"
      }
    ]
  },
  {
    id: 2,
    title: "Bank Sampah Digital",
    subtitle: "Aplikasi pencatatan sampah berbasis web",
    icon: <Recycle className="w-8 h-8" />,
    image: "/images/inovasi2.jpg",
    description:
      "Sistem bank sampah dengan pencatatan digital, memudahkan transaksi dan transparansi data.",
    tutorial: [
      {
        step: 1,
        title: "Buat Akun Bank Sampah",
        description: "Daftarkan diri melalui aplikasi untuk mendapatkan akun.",
        image: "/images/step4.jpg"
      },
      {
        step: 2,
        title: "Setor Sampah",
        description: "Bawa sampah yang sudah dipilah ke lokasi bank sampah.",
        image: "/images/step5.jpg"
      }
    ]
  },
  {
    id: 3,
    title: "Kebun Sayur Hidroponik",
    subtitle: "Pemanfaatan lahan sempit untuk pangan sehat",
    icon: <Leaf className="w-8 h-8" />,
    image: "/images/inovasi3.jpg",
    description:
      "Program pertanian hidroponik untuk meningkatkan ketahanan pangan lokal.",
    tutorial: [
      {
        step: 1,
        title: "Siapkan Media Tanam",
        description: "Gunakan rockwool atau media hidroponik lainnya.",
        image: "/images/step6.jpg"
      },
      {
        step: 2,
        title: "Tanam Bibit",
        description: "Pilih bibit sayur seperti selada, kangkung, atau bayam.",
        image: "/images/step7.jpg"
      }
    ]
  }
];
