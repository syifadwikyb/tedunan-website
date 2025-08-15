// src/pages/ProgramPage.tsx
"use client";

import Image from "next/image";
import { programs, Program } from "../data/programs";

export default function ProgramPage({ onSelectProgram }: { onSelectProgram: (program: Program) => void }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Program Unggulan Desa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              onClick={() => onSelectProgram(program)}
            >
              <Image
                src={program.image}
                alt={program.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-2">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}