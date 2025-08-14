import { innovations } from "@/data/innovations"; // sesuaikan path

export default function InnovationPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Inovasi Desa</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((inv) => (
            <div
              key={inv.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center space-x-3 mb-4">
                {inv.icon}
                <h3 className="text-xl font-semibold">{inv.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{inv.subtitle}</p>
              <img src={inv.image} alt={inv.title} className="rounded-lg mb-4" />
              <p className="text-gray-700">{inv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
