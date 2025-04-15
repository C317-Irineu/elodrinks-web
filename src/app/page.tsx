'use client';

import FirstSection from './first-section';
import Form from './client-info';

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full">
        <FirstSection />
      </section>

      <section
        id="second-section"
        className="h-screen bg-[#FFF3E4] flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 font-alumni">Seção 2</h2>
      </section>

      <section
        id="third-section"
        className="h-screen bg-[#FFF3E4] flex flex-col justify-start pt-10"
      >
        <Form />
      </section>
    </main>
  );
}