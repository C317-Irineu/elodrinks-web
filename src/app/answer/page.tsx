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
    aceito?: boolean;
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

const pedido: Pedido = {
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
};

export default function AdminPage() {
    const [detalhesVisiveis, setDetalhesVisiveis] = useState<boolean>(false);

    const [aceito, setAceito] = useState<boolean | undefined>(pedido.aceito);
    const [valorPorPessoa, setValorPorPessoa] = useState<string>("");
    const [observacoes, setObservacoes] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Envio Backend pode ser implementado aqui
        alert(
            `Orçamento ${aceito ? "aceito" : "não aceito"}\nValor por pessoa: R$ ${valorPorPessoa}\nObservações: ${observacoes}`
        );
    };

    return (
        <div className="min-h-screen bg-[#fdf2e1] py-16 px-4">
            <h1 className="h1 !text-center !ml-0">Responder Orçamento</h1>
            <form
                className="space-y-10 max-w-2xl mx-auto"
                onSubmit={handleSubmit}
            >
                <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-lg font-medium mb-1">
                                Orçamento aceito?
                            </label>
                            <select
                                className="w-full border rounded-lg px-3 py-2"
                                value={aceito === undefined ? "" : aceito ? "sim" : "nao"}
                                onChange={e =>
                                    setAceito(e.target.value === "sim" ? true : e.target.value === "nao" ? false : undefined)
                                }
                                required
                            >
                                <option value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-1">
                                Valor por pessoa (R$)
                            </label>
                            <input
                                type="number"
                                min="0"
                                step="0.01"
                                className="w-full border rounded-lg px-3 py-2"
                                value={valorPorPessoa}
                                onChange={e => setValorPorPessoa(e.target.value)}
                                placeholder="Ex: 50.00"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-1">
                                Observações
                            </label>
                            <textarea
                                className="w-full border rounded-lg px-3 py-2"
                                value={observacoes}
                                onChange={e => setObservacoes(e.target.value)}
                                placeholder="Adicione observações relevantes..."
                                rows={3}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#007366] text-white py-2 px-6 rounded-xl text-base font-medium hover:bg-[#00584e] transition mt-4"
                            >
                                Enviar Resposta
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
