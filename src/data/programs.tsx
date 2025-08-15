// src/data/programs.ts

export interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  content: string; // Tambahkan properti ini
}

export const programs: Program[] = [
  {
    id: 1,
    title: "Program Bank Sampah",
    description: "Mendorong partisipasi warga dalam mengelola sampah anorganik melalui sistem tabungan digital.",
    image: "/images/program-banksampah.jpg",
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Program Bank Sampah kami dirancang untuk mengubah pandangan masyarakat terhadap sampah, dari sekadar limbah menjadi sumber daya yang bernilai. Dengan sistem tabungan digital, setiap warga yang menyetor sampah anorganik yang telah dipilah akan mendapatkan saldo yang dapat dicairkan atau digunakan untuk berbagai kebutuhan.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Kegiatan ini tidak hanya membersihkan lingkungan, tetapi juga menumbuhkan kesadaran finansial dan gotong royong di antara warga. Kami secara rutin mengadakan sosialisasi dan workshop untuk memastikan setiap warga memahami cara memilah sampah yang benar dan memanfaatkan program ini secara maksimal.
      </p>
    `
  },
  {
    id: 2,
    title: "Pengelolaan Kompos Mandiri",
    description: "Memberikan pelatihan dan alat kepada warga untuk mengubah sampah organik menjadi kompos yang bermanfaat.",
    image: "/images/program-kompos.jpg",
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Sampah organik seringkali menjadi masalah utama dalam pengelolaan limbah. Melalui program ini, kami melatih warga untuk mengelola sampah dapur dan kebun menjadi kompos berkualitas tinggi secara mandiri. Kompos yang dihasilkan dapat digunakan untuk menyuburkan tanaman di pekarangan rumah, kebun desa, atau bahkan dijual sebagai tambahan penghasilan.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Kami menyediakan alat-alat dasar dan panduan praktis agar proses pembuatan kompos menjadi mudah dan menyenangkan. Program ini merupakan solusi berkelanjutan untuk mengurangi volume sampah di tempat pembuangan akhir dan meningkatkan ketahanan pangan lokal.
      </p>
    `
  },
  {
    id: 3,
    title: "Pelatihan Daur Ulang Plastik",
    description: "Mengedukasi warga tentang cara mengolah limbah plastik menjadi produk kerajinan yang bernilai ekonomis.",
    image: "/images/program-daurulang.jpg",
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Plastik adalah salah satu penyumbang limbah terbesar. Program pelatihan daur ulang plastik kami bertujuan untuk mengubah limbah ini menjadi produk kerajinan yang inovatif dan bernilai jual. Warga diajarkan teknik-teknik kreatif seperti membuat tas dari bungkus kopi, dekorasi dari botol plastik, dan banyak lagi.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Melalui pelatihan ini, kami berharap dapat menciptakan peluang usaha baru bagi warga dan secara signifikan mengurangi jumlah sampah plastik di lingkungan. Ini adalah langkah nyata kami dalam membangun ekonomi sirkular di tingkat desa.
      </p>
    `
  }
];