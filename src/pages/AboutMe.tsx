import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Ornamen Background */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.img
            src="/images/desa-profile.jpg"
            alt="Profil Desa"
            className="w-44 h-44 mx-auto rounded-full mb-6 object-cover shadow-lg ring-4 ring-white"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 tracking-tight">
            Tentang Desa Hijau
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-green-700">Desa Hijau</span> adalah desa yang berkomitmen menjaga kelestarian lingkungan
            melalui pengelolaan sampah yang <span className="text-green-600 font-medium">inovatif</span> dan <span className="text-green-600 font-medium">berkelanjutan</span>.
            Kami percaya bahwa <span className="font-semibold text-green-700">kolaborasi masyarakat</span> adalah kunci untuk mencapai
            <span className="font-semibold text-green-700"> desa bebas sampah</span>, menciptakan masa depan yang bersih dan sehat bagi generasi mendatang.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
