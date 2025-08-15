// src/pages/InnovationPage.tsx
"use client";

import Image from "next/image";
import { innovations, Innovation } from "../data/innovations";

export default function InnovationPage({ onSelectInnovation }: { onSelectInnovation: (item: Innovation) => void }) {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-12">Inovasi Kita</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {innovations.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            onClick={() => onSelectInnovation(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-green-600 mb-3">
                <span className="mr-2">{item.icon}</span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}