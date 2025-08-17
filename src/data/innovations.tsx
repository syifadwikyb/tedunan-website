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
        title: "Memotong Tong",
        description: "Memotong tong menjadi 2 (dua) bagian dengan ukuran yang sama panjang yang sebelumnya sudah diukur menggunakan pemotong besi.",
        image: "/images/1-1.jpg"
      },
      {
        step: 2,
        title: "Membuat Bagian Dalam",
        description: "Bagian atas tong yang sudah dipotong sebelumnya akan dikecilkan diameternya, lalu tong dibelah dan digabungkan dengan diameter yang sudah dikecilkan menggunakan las agar bagian tong tersebut dapat dimasukkan kedalam tong bagian luar. Bagian bawah tong dibuat ventilasi berbentuk persegi Panjang yang ukurannya sudah disesuaikan, bagian atas dibelah belah kecil lalu dibuat melengkung kedalam.",
        image: "/images/1-2.jpg"
      },
      {
        step: 3,
        title: "Membuat Blade",
        description: "Potong kerangka besi yang sudah dibentuk dan diukur sebelumnya membentuk blade yang berfungsi untuk menciptakan turbulensi dalam ruang bakar, memastikan udara dan sampah tercampur merata.",
        image: "/images/1-3.jpg"
      },
      {
        step: 4,
        title: "Membuat Bagian Luar",
        description: "Satu bagian dari tong yang sudah dipotong kemudian dijadikan bagian luar dengan bagian atasnya dibuat lubang melingkar dan bagian bawahnya ditutup dan dilas. Kemudian bagian bawah dibuat lubang ventilasi berbentuk bulat.",
        image: "/images/1-4.jpg"
      },
      {
        step: 5,
        title: "Penggabungan Komponen",
        description: "Satu bagian dari tong yang sudah dipotong kemudian dijadikan bagian luar dengan bagian atasnya dibuat lubang melingkar dan bagian bawahnya ditutup dan dilas. Kemudian bagian bawah dibuat lubang ventilasi berbentuk bulat.",
        image: "/images/1-5.jpg"
      },
      {
        step: 6,
        title: "Pemasangan Kaki",
        description: "Kaki pada alat dipasang dengan menentukan posisi terlebih dahulu, lalu dilakukan pengelasan atau pemasangan menggunakan bauta tau mur. Memastikan kaki kuat dan stabil serta dapat menopang beban.",
        image: "/images/1-6.jpg"
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
    image: "/images/3-10.jpg",
    description:
      "Lilin aromaterapi dari limbah rumah tangga berbahan minyak jelantah merupakan inovasi ramah lingkungan yang memanfaatkan sisa minyak goreng bekas menjadi produk bernilai. Dengan proses penyaringan, pencampuran bahan tambahan seperti stearin/parafin, pewarna, dan minyak esensial, minyak jelantah dapat diolah menjadi lilin beraroma menenangkan. Produk ini tidak hanya membantu mengurangi pencemaran lingkungan akibat pembuangan minyak bekas, tetapi juga memberikan manfaat kesehatan melalui efek relaksasi dari aromaterapi. Selain itu, lilin ini memiliki potensi ekonomi yang besar karena dapat dijadikan produk kreatif dengan berbagai variasi bentuk dan aroma, sehingga mampu mendorong lahirnya peluang usaha berbasis ekonomi sirkular di masyarakat.",
    tutorial: [
      {
        step: 1,
        title: "Siapkan Bahan dan Alat",
        description:
          "Sediakan minyak jelantah yang sudah ditampung, stearin atau parafin, pewarna (opsional), minyak esensial sebagai pewangi, sumbu, wadah cetakan, dan alat pemanas.",
        image: "/images/3-1.jpg"
      },
      {
        step: 2,
        title: "Saring dan Bersihkan Minyak Jelantah",
        description:
          "Saring minyak jelantah menggunakan kain atau filter untuk memisahkan kotoran, lalu panaskan sebentar agar lebih jernih.",
        image: "/images/3-2.jpg"
      },
      {
        step: 3,
        title: "Panaskan Minyak Jelantah",
        description:
          "Tuangkan minyak jelantah ke dalam wadah pemanas, kemudian masukkan stearin atau parafin sedikit demi sedikit sambil diaduk hingga larut merata.",
        image: "/images/3-3.jpg"
      },
      {
        step: 4,
        title: "Masukkan Asam Stearat",
        description:
          "Tambahkan asam stearat untuk memperkuat tekstur lilin agar tidak mudah meleleh saat digunakan.",
        image: "/images/3-4.jpg"
      },
      {
        step: 5,
        title: "Tambahkan Pewarna",
        description:
          "Jika ingin lilin berwarna, masukkan potongan kecil krayon atau pewarna khusus lilin ke dalam campuran minyak sambil diaduk rata.",
        image: "/images/3-5.jpg"
      },
      {
        step: 6,
        title: "Aduk Hingga Merata",
        description:
          "Aduk campuran minyak, stearin/parafin, asam stearat, dan pewarna hingga benar-benar menyatu.",
        image: "/images/3-6.jpg"
      },
      {
        step: 7,
        title: "Masukkan Aroma Pewangi",
        description:
          "Tambahkan beberapa tetes minyak esensial sesuai aroma yang diinginkan agar lilin memiliki efek aromaterapi.",
        image: "/images/3-7.jpg"
      },
      {
        step: 8,
        title: "Aduk Kembali Campuran",
        description:
          "Aduk sekali lagi supaya pewangi tercampur rata dengan seluruh adonan lilin.",
        image: "/images/3-8.jpg"
      },
      {
        step: 9,
        title: "Tuang ke Cetakan",
        description:
          "Letakkan sumbu di tengah cetakan, lalu tuang campuran lilin panas secara perlahan. Pastikan sumbu tetap tegak di posisi tengah.",
        image: "/images/3-9.jpg"
      },
      {
        step: 10,
        title: "Dinginkan Lilin",
        description:
          "Biarkan lilin di dalam cetakan hingga mengeras sempurna. Setelah itu, lilin aromaterapi siap digunakan atau dikemas untuk dijual.",
        image: "/images/3-10.jpg"
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
