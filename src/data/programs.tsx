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
    title: "Penerapan Lubang Resapan Biopori",
    description: "Lubang resapan biopori adalah teknologi sederhana namun efektif untuk mengurangi genangan air, mengolah sampah organik, dan meningkatkan kesuburan tanah. Program ini mendorong partisipasi warga dalam menjaga lingkungan melalui penerapan metode ramah lingkungan yang mudah dilakukan di sekitar rumah maupun fasilitas umum.",
    image: "/images/program-1.jpg",
    content: `
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Lubang Resapan Biopori (LRB) merupakan salah satu teknologi ramah lingkungan yang dikembangkan untuk mengatasi berbagai permasalahan perkotaan, seperti banjir, sampah organik yang menumpuk, dan menurunnya kualitas tanah. Biopori adalah lubang silindris dengan diameter sekitar 10 cm dan kedalaman 80–100 cm yang dibuat secara vertikal ke dalam tanah. Lubang ini kemudian diisi dengan sampah organik seperti daun kering, sisa makanan, atau rumput. Seiring waktu, sampah tersebut akan terurai menjadi kompos alami yang bermanfaat bagi kesuburan tanah.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Penerapan lubang resapan biopori memiliki banyak manfaat. Pertama, biopori mampu meningkatkan daya resap tanah terhadap air hujan, sehingga membantu mengurangi risiko genangan dan banjir di lingkungan padat penduduk. Kedua, dengan memanfaatkan sampah organik sebagai isi lubang, masyarakat dapat mengurangi volume sampah yang dibuang ke tempat pembuangan akhir (TPA). Ketiga, hasil dekomposisi sampah organik di dalam lubang akan menghasilkan kompos yang dapat digunakan kembali untuk menyuburkan tanaman di pekarangan rumah atau lahan pertanian.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Penerapan biopori relatif mudah dan dapat dilakukan oleh siapa saja. Alat yang dibutuhkan hanyalah bor tanah atau pipa besi sederhana untuk melubangi tanah, serta wadah organik untuk mengisi lubang. Lokasi pembuatan biopori sebaiknya dipilih di area yang sering tergenang air, dekat dengan pepohonan, atau di halaman rumah. Perawatan biopori juga tidak rumit: cukup dengan rutin menambahkan sampah organik ke dalam lubang agar proses dekomposisi tetap berjalan.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Selain manfaat lingkungan, program penerapan lubang resapan biopori juga memiliki nilai edukatif dan sosial. Melalui kegiatan gotong royong pembuatan biopori, warga diajak untuk lebih peduli terhadap lingkungan, memahami pentingnya mengelola sampah organik, serta berkontribusi dalam upaya mitigasi banjir. Kompos yang dihasilkan pun bisa dimanfaatkan secara bersama-sama atau dijual sebagai produk bernilai ekonomi, sehingga memberikan keuntungan tambahan bagi masyarakat.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Dengan berbagai manfaat tersebut, penerapan lubang resapan biopori seharusnya menjadi gerakan bersama yang didukung oleh masyarakat, pemerintah, dan lembaga pendidikan. Jika diterapkan secara masif di perkotaan maupun pedesaan, biopori tidak hanya menjadi solusi praktis untuk mengatasi sampah dan banjir, tetapi juga menjadi wujud nyata dari pembangunan berkelanjutan yang menyeimbangkan kebutuhan manusia dengan kelestarian lingkungan.
    </p>
  `
  },
  {
    id: 2,
    title: "Pemanfaatan Limbah Plastik Menjadi Pot Kreatif sebagai Media Tanaman Obat Keluarga",
    description: "Mengubah limbah plastik rumah tangga menjadi pot kreatif untuk menanam tanaman obat keluarga yang bermanfaat bagi kesehatan.",
    image: "/images/program-2.jpg",
    content: `
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Limbah plastik merupakan salah satu jenis sampah yang paling sulit terurai dan sering menjadi penyumbang utama pencemaran lingkungan. Melalui program ini, warga diajak untuk berkreasi dengan memanfaatkan plastik bekas, seperti botol minuman, ember rusak, atau wadah plastik lainnya, menjadi pot yang unik dan fungsional. Pot-pot kreatif tersebut kemudian digunakan sebagai media tanam Tanaman Obat Keluarga (TOGA) yang memiliki banyak manfaat untuk kesehatan.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Program ini tidak hanya berfokus pada pengurangan sampah plastik, tetapi juga mengajarkan keterampilan praktis dalam membuat pot dengan desain sederhana maupun hiasan menarik. Dengan sedikit kreativitas, limbah plastik yang awalnya tidak bernilai dapat diubah menjadi produk yang bermanfaat dan bernilai estetika. Selain itu, kegiatan ini juga mendorong masyarakat untuk lebih peduli terhadap lingkungan dengan cara mendaur ulang sampah di sekitar mereka.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Tanaman obat keluarga yang ditanam dalam pot kreatif ini dapat mencakup jahe, kunyit, serai, lidah buaya, hingga daun sirih. Dengan menanam TOGA di rumah, warga tidak hanya memperoleh bahan alami untuk menjaga kesehatan, tetapi juga turut mendukung kemandirian dalam pemenuhan kebutuhan obat tradisional. Hal ini selaras dengan upaya meningkatkan pola hidup sehat dan mengurangi ketergantungan pada obat kimia.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Melalui pemanfaatan limbah plastik menjadi pot kreatif, program ini memberikan dampak ganda: mengurangi volume sampah yang berakhir di lingkungan sekaligus menyediakan sarana sederhana untuk bercocok tanam di lahan terbatas. Dengan demikian, kegiatan ini tidak hanya menciptakan lingkungan yang lebih bersih dan hijau, tetapi juga meningkatkan kesejahteraan serta kesadaran masyarakat terhadap pentingnya menjaga kesehatan dan kelestarian lingkungan.
    </p>
  `
  },
  {
    id: 3,
    title: "Booklet Panduan Cara penggunaan alat pembakar sampah minim asap (APSMA)",
    description: "Mengedukasi warga tentang cara mengolah limbah plastik menjadi produk kerajinan yang bernilai ekonomis.",
    image: "/images/program-3.jpg",
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        APSMA (Alat Pembakar Sampah Minim Asap) adalah inovasi ramah lingkungan yang dirancang untuk mengurangi pencemaran udara akibat pembakaran sampah terbuka. Alat ini bekerja dengan sistem pembakaran tertutup berbasis pirolisis, sehingga asap yang dihasilkan sangat minim. Cocok digunakan di sekolah, desa, rumah tangga, hingga perkantoran.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Tujuan utamanya adalah mengurangi volume sampah hingga 90%, mengolah sampah organik maupun anorganik non-beracun, serta mendukung program pengelolaan sampah berkelanjutan. Abu hasil pembakaran dapat dimanfaatkan kembali, misalnya sebagai media tanam atau bahan konstruksi ringan.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Alat ini aman digunakan selama operator memakai APD, tidak digunakan saat angin kencang, dan ditempatkan jauh dari bahan mudah terbakar. Jenis sampah yang dapat dibakar antara lain daun, ranting, kertas, serta plastik tipis non-PVC, tetapi tidak untuk sampah B3 seperti baterai, oli, atau limbah elektronik.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Dengan pemeliharaan rutin, seperti pembersihan abu, pemeriksaan ventilasi, dan pengecekan suhu, alat ini mampu digunakan dalam jangka panjang. Selain itu, APSMA membantu mengatasi masalah sampah di masyarakat, mengurangi risiko banjir, pencemaran, dan penyakit, serta mendukung terciptanya lingkungan yang bersih dan sehat.
      </p>
    `
  }
];