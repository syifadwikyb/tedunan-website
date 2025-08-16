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
    image: "/images/1.jpg",
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
    image: "/images/2.jpg",
    description:
      "Paving blok daur ulang plastik adalah inovasi yang memanfaatkan limbah plastik sebagai bahan campuran utama bersama pasir dan oli bekas untuk menghasilkan produk konstruksi yang ramah lingkungan. Dengan proses sederhana, plastik yang biasanya sulit terurai dapat dilelehkan dan dicampur dengan pasir sehingga membentuk material padat dan kuat. Hasilnya berupa paving blok yang memiliki daya tahan tinggi, ekonomis, serta dapat menjadi solusi dalam mengurangi penumpukan sampah plastik di lingkungan. Inovasi ini tidak hanya memberikan manfaat lingkungan berupa pengurangan volume sampah, tetapi juga membuka peluang ekonomi baru bagi masyarakat melalui pemanfaatan sampah sebagai bahan bernilai guna. Dengan demikian, paving blok daur ulang plastik merupakan langkah nyata menuju pembangunan berkelanjutan yang menggabungkan aspek ekologi, ekonomi, dan sosial secara seimbang.",
    tutorial: [
      {
        step: 1,
        title: "Persiapkan Alat dan Bahan",
        description: "Siapkan plastik bekas, pasir, oli bekas, wadah pencampur, cetakan paving, serta alat pemanas atau tungku sederhana.",
        image: "/images/2-1.jpg"
      },
      {
        step: 2,
        title: "Tuangkan Oli",
        description: "Masukkan oli bekas secukupnya ke dalam wadah atau tungku sebagai bahan pelumer dan perekat plastik.",
        image: "/images/2-2.jpg"
      },
      {
        step: 3,
        title: "Masukkan Sampah Plastik",
        description: "Tambahkan sampah plastik yang sudah dipilah dan bersih ke dalam wadah berisi oli panas, lalu panaskan hingga meleleh.",
        image: "/images/2-3.jpg"
      },
      {
        step: 4,
        title: "Masukkan Pasir",
        description: "Tuangkan pasir ke dalam campuran plastik dan oli, aduk hingga tercampur merata.",
        image: "/images/2-4.jpg"
      },
      {
        step: 5,
        title: "Aduk Hingga Merata",
        description: "Aduk campuran plastik, oli, dan pasir sampai homogen agar kekuatan paving blok lebih baik.",
        image: "/images/2-5.jpg"
      },
      {
        step: 6,
        title: "Tuang ke Cetakan Paving Blok",
        description: "Masukkan campuran yang sudah merata ke dalam cetakan paving blok sesuai ukuran yang diinginkan.",
        image: "/images/2-6.jpg"
      },
      {
        step: 7,
        title: "Celupkan ke Air dan Buka Cetakan",
        description: "Setelah padat, celupkan cetakan ke air agar lebih mudah dilepas, lalu buka cetakan.",
        image: "/images/2-7.jpg"
      },
      {
        step: 8,
        title: "Paving Blok Siap Digunakan",
        description: "Paving blok hasil daur ulang plastik siap dipakai untuk kebutuhan konstruksi seperti jalan setapak atau halaman.",
        image: "/images/2-8.jpg"
      }
    ]
  },
  {
    id: 3,
    title: "Lilin Aromaterapi dari Limbah Rumah Tangga (Minyak Jelantah)",
    subtitle: "Inovasi Pemanfaatan Minyak Jelantah Menjadi Produk Bernilai",
    icon: <Leaf className="w-8 h-8" />,
    image: "/images/3.jpeg",
    description:
      "Lilin aromaterapi dari minyak jelantah adalah sebuah inovasi ramah lingkungan yang bertujuan untuk mengurangi pencemaran sekaligus memberikan nilai tambah dari limbah rumah tangga. Minyak jelantah yang umumnya hanya dibuang dan berpotensi mencemari tanah serta air, diolah kembali menjadi bahan utama pembuatan lilin dengan menambahkan campuran stearin atau parafin, serta pewangi alami seperti minyak esensial. Proses ini menghasilkan lilin aromaterapi yang tidak hanya aman digunakan, tetapi juga mampu memberikan aroma menenangkan, menciptakan suasana rileks, dan bermanfaat bagi kesehatan mental. Selain sebagai solusi pengelolaan limbah, inovasi ini juga memiliki potensi ekonomi yang menjanjikan. Lilin aromaterapi dapat dijadikan produk kreatif yang bernilai jual tinggi dengan beragam varian aroma dan bentuk menarik. Hal ini dapat membuka peluang usaha bagi masyarakat, terutama ibu rumah tangga atau kelompok UMKM, dalam mengembangkan industri rumahan berbasis ekonomi sirkular. Dengan demikian, pembuatan lilin aromaterapi dari minyak jelantah tidak hanya membantu menjaga kebersihan lingkungan, tetapi juga mendukung pemberdayaan ekonomi lokal serta mendorong gaya hidup berkelanjutan di masyarakat.",
    tutorial: [
      {
        step: 1,
        title: "Siapkan Bahan dan Alat",
        description:
          "Kumpulkan minyak jelantah yang sudah disaring, tambahkan stearin atau parafin sebagai penguat, pewarna (opsional), pewangi/aroma esensial, sumbu, wadah, dan alat pemanas.",
        image: "/images/3-1.jpg"
      },
      {
        step: 2,
        title: "Saring dan Bersihkan Minyak Jelantah",
        description:
          "Saring minyak jelantah dengan kain atau filter untuk memisahkan kotoran, kemudian panaskan sebentar agar lebih jernih.",
        image: "/images/3-2.jpg"
      },
      {
        step: 3,
        title: "Campurkan dengan Bahan Tambahan",
        description:
          "Masukkan stearin/parafin ke dalam minyak panas, aduk hingga merata. Tambahkan pewangi aromaterapi dan pewarna bila diinginkan.",
        image: "/images/3-3.jpg"
      },
      {
        step: 4,
        title: "Siapkan Cetakan dan Sumbu",
        description:
          "Letakkan sumbu di tengah wadah atau cetakan. Pastikan posisi sumbu lurus agar lilin bisa terbakar merata.",
        image: "/images/3-4.jpg"
      },
      {
        step: 5,
        title: "Tuangkan Campuran Lilin",
        description:
          "Tuang campuran minyak jelantah dan bahan tambahan ke dalam cetakan dengan hati-hati. Biarkan hingga mengeras.",
        image: "/images/3-5.jpg"
      },
      {
        step: 6,
        title: "Lilin Aromaterapi Siap Digunakan",
        description:
          "Setelah mengeras, lilin aromaterapi siap digunakan atau dikemas sebagai produk bernilai jual.",
        image: "/images/3-6.jpg"
      }
    ]
  },
  {
    id: 4,
    title: "Pembuatan Alat Pengukuran Suhu untuk Pembakar Sampah Minim Asap",
    subtitle: "Teknologi Arduino Nano untuk Pengukuran Suhu",
    icon: <Leaf className="w-8 h-8" />,
    image: "/images/4.jpg",
    description:
      "Alat ini merupakan sistem pengukuran suhu berbasis Arduino Nano yang digunakan untuk memantau suhu di dalam ruang pembakar sampah minim asap (APSMA). Sensor Thermokopel tipe K yang dikombinasikan dengan modul MAX6675 digunakan untuk mendeteksi suhu tinggi hingga 800–1024°C dengan akurasi yang baik. Data suhu kemudian ditampilkan pada LCD 16x2 dengan antarmuka I2C, sehingga lebih mudah dibaca pengguna. Daya alat berasal dari baterai 9V yang distabilkan menggunakan Buck Converter LM2596 untuk menghasilkan tegangan operasi yang sesuai (5V). Sebagai tambahan, digunakan push button untuk fungsi kontrol (misalnya reset atau menampilkan ulang data). Dengan alat ini, pengguna dapat mengetahui suhu di dalam pembakar secara real-time, sehingga proses pembakaran dapat dikendalikan lebih aman, efisien, dan minim asap.",
    tutorial: [
      {
        step: 1,
        title: "Perakitan Hardware",
        description:
          "Pasang Arduino Nano pada PCB dotmatrix. Hubungkan Thermokopel tipe K ke modul MAX6675, lalu sambungkan ke Arduino Nano melalui antarmuka SPI. Sambungkan LCD 16x2 I2C melalui pin SDA dan SCL. Pasang push button dengan konfigurasi pull-down pada salah satu pin digital Arduino. Gunakan buck converter untuk menurunkan tegangan baterai 9V menjadi 5V, lalu sambungkan semua ground agar sistem bekerja stabil.",
        image: "/images/4-1.png"
      },
      {
        step: 2,
        title: "Pemrograman Arduino",
        description:
          "Unggah program Arduino menggunakan library MAX6675 untuk membaca data suhu dari sensor dan library LiquidCrystal_I2C untuk menampilkan hasil pada LCD. Atur agar data suhu ditampilkan secara real-time dan tombol berfungsi sesuai kebutuhan (misalnya reset atau mode tampilan).",
        image: "/images/4-1.png"
      },
      {
        step: 3,
        title: "Pengujian Alat",
        description:
          "Nyalakan rangkaian dengan baterai 9V, letakkan ujung thermokopel di dalam ruang pembakar, lalu amati hasil pengukuran pada LCD. Pastikan suhu terbaca dengan baik dan sesuai dengan kondisi nyata di dalam pembakar.",
        image: "/images/4-3.jpg"
      }
    ]
  }

];
