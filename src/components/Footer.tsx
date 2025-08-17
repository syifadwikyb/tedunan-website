export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-16 mt-16 relative overflow-hidden">
      {/* Ornamen background */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-green-700 rounded-full opacity-30 filter blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-600 rounded-full opacity-30 filter blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Branding & Deskripsi */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-500 p-3 rounded-full shadow-lg" />
              <span className="text-2xl font-bold">Tedunan Hijau</span>
            </div>
            <p className="text-green-200 leading-relaxed">
              Bersama membangun desa yang <span className="font-semibold">bersih, sehat, dan berkelanjutan </span>
              untuk generasi masa depan. Tedunan Hijau menjadi inspirasi desa peduli lingkungan.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-green-200">
              <li>📍 Desa Tedunan, Kabupaten Demak, Jawa Tengah, Indonesia</li>
              <li>📞 +62 8515-7331-787</li>
              <li>✉️ tedunan-hijau.vercel.app/</li>
              <li>⏰ Senin - Jumat, 08:00 - 14:00</li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Sosial Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/Tedunan.3538039"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 hover:scale-110 transition-transform shadow-md"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="https://www.instagram.com/pemdestedunan21?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 hover:scale-110 transition-transform shadow-md"
              >
                <span className="text-sm font-bold">@</span>
              </a>
              <a
                href="https://www.tedunan-wedung.desa.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 hover:scale-110 transition-transform shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.93 6h-3.082a15.987 15.987 0 0 0-1.335-3.435A8.015 8.015 0 0 1 18.93 8zM12 4c.777 1.77 1.32 3.682 1.612 5.655H10.388C10.68 7.682 11.223 5.77 12 4zM4.07 8a8.015 8.015 0 0 1 3.487-3.435A15.987 15.987 0 0 0 4.07 8zM4 12c0-.348.02-.69.058-1.026h4.217c-.053.342-.09.687-.09 1.026s.037.684.09 1.026H4.058A9.957 9.957 0 0 1 4 12zm2.364 4.364A7.976 7.976 0 0 1 4.07 16h3.082a15.987 15.987 0 0 0 1.335 3.435 7.993 7.993 0 0 1-2.123-3.071zM12 20c-.777-1.77-1.32-3.682-1.612-5.655h3.224C13.32 16.318 12.777 18.23 12 20zm2.24-6.655h-4.48A15.976 15.976 0 0 0 7.25 12c.143-.342.303-.68.48-1.01h6.54c.177.33.337.668.48 1.01a15.976 15.976 0 0 0-2.51 1.345zm1.406 4.09a7.993 7.993 0 0 1 2.123-3.071A15.987 15.987 0 0 0 16.93 16h-3.082z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Hak cipta */}
        <div className="border-t border-green-700 mt-12 pt-6 text-center">
          <p className="text-green-200 text-sm">
            © {new Date().getFullYear()} Tedunan Hijau. Semua hak dilindungi.
            <br />
            Mewujudkan desa bersih, sehat, dan inspiratif bagi masyarakat.
          </p>
        </div>
      </div>
    </footer>
  );
}
