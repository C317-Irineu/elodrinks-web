// admin/page.tsx

"use client";

import React, { useState } from "react";

type Pedido = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  numeroConvidados: number;
  tipoEvento: string;
  localizacao: string;
  plano: "Basic" | "Premium" | "Deluxe";
  numeroBarmans: number;
  extras: string[];
};

const pedidosFakes: Pedido[] = [
  {
    id: 1,
    nome: "Lucas Fernandes",
    email: "lucas@email.com",
    telefone: "(11) 91234-5678",
    numeroConvidados: 100,
    tipoEvento: "Casamento",
    localizacao: "São Paulo - SP",
    plano: "Deluxe",
    numeroBarmans: 4,
    extras: ["Moscow Mule", "Gin Tônica"],
  },
  {
    id: 2,
    nome: "Carla Souza",
    email: "carla@gmail.com",
    telefone: "(21) 98888-9999",
    numeroConvidados: 60,
    tipoEvento: "Aniversário",
    localizacao: "Rio de Janeiro - RJ",
    plano: "Premium",
    numeroBarmans: 2,
    extras: [],
  },
];

export default function AdminPage() {
  const [detalhesVisiveis, setDetalhesVisiveis] = useState<number | null>(null);

  const toggleDetalhes = (id: number) => {
    setDetalhesVisiveis(detalhesVisiveis === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#fdf2e1] py-16 px-4">
      <h1 className="h1 !text-center !ml-0">Pedidos de Orçamento</h1>
      <div className="space-y-10 max-w-2xl mx-auto">
        {pedidosFakes.map((pedido) => (
          <div
            key={pedido.id}
            className="bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl w-full"
          >
            <div className="text-center space-y-1">
              <p className="text-xl"><b>Nome:</b> {pedido.nome}</p>
              <p className="text-lg"><b>Email:</b> {pedido.email}</p>
              <p className="text-lg"><b>Telefone:</b> {pedido.telefone}</p>
              <p className="text-lg"><b>Tipo do Evento:</b> {pedido.tipoEvento}</p>
              <p className="text-lg"><b>Plano Escolhido:</b> {pedido.plano}</p>
            </div>

            {detalhesVisiveis === pedido.id && (
              <div className="mt-4 space-y-2 text-center text-[#3D3933]">
                <p><b>Localização do Evento:</b> {pedido.localizacao}</p>
                <p><b>Número de Convidados:</b> {pedido.numeroConvidados}</p>
                <p><b>Número de Barmans:</b> {pedido.numeroBarmans}</p>
                {pedido.extras.length > 0 && (
                  <p><b>Extras:</b> {pedido.extras.join(", ")}</p>
                )}
              </div>
            )}

            <div className="mt-6 flex flex-col items-center space-y-3">
              {detalhesVisiveis === pedido.id && (
                <button
                  className="bg-[#007366] text-white py-2 px-6 rounded-xl text-base font-medium hover:bg-[#00584e] transition"
                >
                  Responder Orçamento
                </button>
              )}
              
              <button
                onClick={() => toggleDetalhes(pedido.id)}
                className="bg-[#FF6B00] text-white py-2 px-6 rounded-xl text-base font-medium hover:bg-[#cc5500] transition"
              >
                {detalhesVisiveis === pedido.id ? "Ver menos" : "Ver mais"}
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
