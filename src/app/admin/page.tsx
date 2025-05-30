"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
  data?: string;
  aceito?: boolean; // novo campo
};

const planos = [
  {
    name: "Basic",
    description:
      "Bebidas refrescantes com opções alcoólicas simples e populares. Inclui: Coca-Cola, Guaraná, Sprite, Água mineral com e sem gás, suco natural (Laranja ou Maracujá), Cerveja Pilsen (long neck ou latão): Skol, Brahma ou Itaipava, Ice alcoólica (Smirnoff Ice ou similar), Chopp claro (opcional).",
  },
  {
    name: "Premium",
    description:
      "Mais variedade e sofisticação, com drinks leves e cervejas especiais. Inclui tudo do Basic, mais: suco natural (2 sabores: Abacaxi com hortelã, Morango), Água aromatizada com frutas, Cervejas artesanais ou especiais (Heineken, Eisenbahn, Stella Artois), Vinho (branco e tinto seco ou suave), Espumante brut ou moscatel, Drinks prontos (Caipirinha tradicional ou de frutas, Gin tônica simples, Chá gelado com vodka - opcional).",
  },
  {
    name: "Deluxe",
    description:
      "Um bar completo com mixologia, ideal para eventos sofisticados. Inclui tudo do Premium, mais: Gin tônica com especiarias, Moscow Mule, Mojito, Piña Colada, Aperol Spritz, Coquetéis personalizados com nome do evento, Whisky (Red Label, Black Label ou equivalente), Tequila com limão e sal, Espumante Rosé ou Champagne (sob demanda), Caipirinhas variadas com vodka, saquê ou cachaça premium.",
  },
];

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
    data: "2024-06-01",
    aceito: true,
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
    data: "2024-06-02",
    aceito: false,
  },
];

export default function AdminPage() {
  const [detalhesVisiveis, setDetalhesVisiveis] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const toggleDetalhes = (id: number) => {
    setDetalhesVisiveis(detalhesVisiveis === id ? null : id);
  };

  const pedidosDoDia = selectedDate
    ? pedidosFakes.filter(
      (p) =>
        p.data === selectedDate.toISOString().slice(0, 10)
    )
    : pedidosFakes;

  return (
    <div className="min-h-screen bg-[#fdf2e1] py-16 px-4">
      <div className="flex justify-center mb-8">
        <Calendar
          onChange={(value) => {
            if (value instanceof Date) {
              setSelectedDate(value);
            } else if (Array.isArray(value) && value[0] instanceof Date) {
              setSelectedDate(value[0]);
            } else {
              setSelectedDate(null);
            }
          }}
          value={selectedDate}
          locale="pt-BR"
        />
      </div>
      <h1 className="h1 !text-center !ml-0">Pedidos de Orçamento</h1>
      <div className="space-y-10 max-w-2xl mx-auto">
        {pedidosDoDia.length === 0 && (
          <div className="bg-white rounded-xl p-6 text-center text-[#3D3933] shadow">
            Nenhum agendamento para o dia selecionado.
          </div>
        )}
        {pedidosDoDia.map((pedido) => (
          <div
            key={pedido.id}
            className="bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl w-full"
          >
            <div className="text-center space-y-1">
              <p className="text-xl flex items-center justify-center gap-2">
                <b>Nome:</b> {pedido.nome}
                {pedido.aceito ? <span title="Aceito">✅</span> : <span title="Não aceito">❌</span>}
              </p>
              <p className="text-lg"><b>Email:</b> {pedido.email}</p>
              <p className="text-lg"><b>Telefone:</b> {pedido.telefone}</p>
              <p className="text-lg"><b>Tipo do Evento:</b> {pedido.tipoEvento}</p>
              <p className="text-lg">
                <b>Plano Escolhido:</b> {pedido.plano}
                <br />
                <span className="text-sm text-[#555]">
                  {
                    planos.find((p) => p.name === pedido.plano)?.description
                  }
                </span>
              </p>
            </div>

            {detalhesVisiveis === pedido.id && (
              <div className="mt-4 space-y-2 text-center text-[#3D3933]">
                <p><b>Localização do Evento:</b> {pedido.localizacao}</p>
                <p><b>Número de Convidados:</b> {pedido.numeroConvidados}</p>
                <p><b>Número de Barmans:</b> {pedido.numeroBarmans}</p>
                {pedido.extras.length > 0 && (
                  <p><b>Extras:</b> {pedido.extras.join(", ")}</p>
                )}
                <p><b>Data:</b> {pedido.data}</p>
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