export default function Home() {
  return (
    <main className="w-full">
      <section className="h-screen bg-[url('/background.png')] bg-cover bg-center relative px-8">
        <div className="absolute top-4 right-4 flex space-x-4">
          <button className="border-[2px] border-[#343230] bg-transparent text-[#343230] font-bold py-1 px-2 rounded-md">
            Fazer um orçamento
          </button>
          <button className="border-[2px] border-[#343230] bg-transparent text-[#343230] font-bold py-1 px-2 rounded-md">
              Quem somos
          </button>
          <button>
          <img src="/instagram_icon.png" alt="Ícone" className="w-10 h-10" />
          </button>
        </div>

        <div className="h-full flex items-end">
          <h1 className="text-white title font-bold tracking-wider text-left">
            ELO DRINKS
          </h1>
        </div>
      </section>

      <section className="h-screen bg-[#FFF3E4] flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800 font-alumni">Seção 2</h2>
      </section>

      <section className="h-screen bg-[#FFF3E4] flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800 font-alumni">Seção 3</h2>
      </section>
    </main>
  );
}
