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
      "APSMA adalah inovasi pembakar sampah dengan sistem tertutup dan sirkulasi udara panas yang meminimalkan asap, cocok untuk sekolah, rumah sakit, perkantoran, desa, dan rumah tangga. Menggunakan prinsip pirolisis, sampah dibakar pada suhu tinggi dengan oksigen terbatas, menghasilkan abu dan gas. Gas dibakar kembali di ruang sekunder sehingga asap yang keluar sangat sedikit. Tujuan: Mengurangi volume sampah, mengolah sampah organik dan anorganik non-beracun secara aman, meminimalkan pencemaran udara, dan mendukung pengelolaan sampah ramah lingkungan.",
    tutorial: [
      {
        step: 1,
        title: "Bagian Luar",
        description: "Bagian luar APSMA memiliki diameter tong 490 mm dengan tinggi 475 mm, dilengkapi penyangga setinggi 128,25 mm, lebar 505 mm, jari-jari 45 mm, dan tebal 15 mm. Seluruh bagian dibuat dari material plat baja yang kokoh dan tahan lama.",
        image: "/images/1-1.png"
      },
      {
        step: 2,
        title: "Bagian Dalam",
        description: "Bagian dalam APSMA terbuat dari plat baja dengan tinggi tabung 460 mm dan diameter dalam 440 mm. Memiliki sirkulasi udara berbentuk persegi panjang berukuran 46 mm × 74 mm dengan sudut 30°, serta sirkulasi udara lingkaran berdiameter 30 mm dengan luas 353 mm². Cerobong berdiameter 390 mm, lebar 30 mm, dan sudut 50°. Volume ruang pembakaran mencapai 0,057 m³ (57 kg), sehingga mampu menampung sampah dalam jumlah besar secara efisien.",
        image: "/images/1-2.png"
      },
      {
        step: 3,
        title: "Blade",
        description: "Blade APSMA terbuat dari plat baja dengan diameter luar 440 mm dan diameter dalam 100 mm. Memiliki 8 sirkulasi udara dengan diameter luar 400 mm, jarak 20 mm dari tepi, serta sudut kemiringan 45° untuk mendukung aliran udara optimal.",
        image: "/images/1-3.png"
      },
      {
        step: 4,
        title: "Penggabungan Semua Komponen",
        description: "Gabungkan semua komponen APSMA dengan presisi tinggi. Pastikan semua bagian terpasang kokoh dan aman. Periksa kembali setiap sambungan untuk memastikan tidak ada kebocoran udara yang dapat mengurangi efisiensi pembakaran.",
        image: "/images/1-4.png"
      }
    ]
  },
  {
    id: 2,
    title: "Paving Blok Daur Ulang Plastik",
    subtitle: "Solusi Inovatif untuk Lingkungan dan Ekonomi Berkelanjutan",
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
    title: "Lilin Aromaterapi dari Limbah Rumah Tangga (Minyak Jelantah)",
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
  },
  {
    id: 4,
    title: "Pembuatan Alat Pengukuran Suhu untuk Pembakar Sampah Minim Asap",
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
