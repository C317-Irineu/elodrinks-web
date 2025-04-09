export default function Home() {
  return (
    <main className="w-full">
      <section
        className="h-screen bg-[url('/background.png')] bg-cover bg-center flex items-end px-8 py-16"
      >
        <h1 className="text-white text-6xl font-alumni text-left">
          Seu texto aqui
        </h1>
      </section>

      <section className="h-screen bg-yellow-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800 font-alumni">Seção 2</h2>
      </section>

      <section className="h-screen bg-yellow-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800 font-alumni">Seção 3</h2>
      </section>
    </main>
  );
}
