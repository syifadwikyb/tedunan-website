export default function AboutMe() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <img
                    src="/images/desa-profile.jpg"
                    alt="Profil Desa"
                    className="w-40 h-40 mx-auto rounded-full mb-6 object-cover"
                />
                <h2 className="text-3xl font-bold text-green-800 mb-4">Tentang Desa Hijau</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Desa Hijau adalah desa yang berkomitmen untuk menjaga kelestarian lingkungan melalui pengelolaan sampah yang inovatif dan berkelanjutan.
                    Kami percaya bahwa kolaborasi masyarakat adalah kunci untuk mencapai desa bebas sampah.
                </p>
            </div>
        </section>
    )
};