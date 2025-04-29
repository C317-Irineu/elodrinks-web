'use client';
import React from "react";
import "../globals.css"; // Import global CSS

interface InfoBarProps {
  formData: {
    numConvidados: string;
    tipoEvento: string;
    localizacao: string;
    tipoBar: string;
    numBarmans: string;
    extras: string[];
    observacoes: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleExtrasChange: (extra: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const FormStep3: React.FC<InfoBarProps> = ({ formData, handleChange, handleExtrasChange, handleSubmit }) => {
  const [currentPlan, setCurrentPlan] = React.useState(0); // Selected plan
  const plans = [
    { name: "Basic", description: "Bebidas Alcoólicas: Capira, Vodka, Tang, Leite com Manga", price: "R$ 50" },
    { name: "Premium", description: "Bebidas Alcoólicas: Gin, Vodka, Whisky, Leite com Manga", price: "R$ 100" },
    { name: "Deluxe", description: "Bebidas Alcoólicas: Gin, Vodka, Whisky, Champagne", price: "R$ 150" },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="label">Escolha seu Plano:</h2>
        <div className="planContainer">
          <button
            type="button"
            onClick={() => setCurrentPlan((prev) => (prev === 0 ? plans.length - 1 : prev - 1))}
            className="planButton"
          >
            <img src="/leftButton.png" alt="Left Button" />
            <span className="buttonText"></span>
          </button>
          <div className="planDetails">
            <h2>{plans[currentPlan].name}</h2>
            <p>{plans[currentPlan].description}</p>
            <p>{plans[currentPlan].price}</p>
          </div>
          <button
            type="button"
            onClick={() => setCurrentPlan((prev) => (prev === plans.length - 1 ? 0 : prev + 1))}
            className="rotate90"
          >
           <img src="/leftButton.png" alt="Left Button" />
          </button>
        </div>

        <div className="inputGroup">
          <label htmlFor="numConvidados" className="label">
            Número de Barmans:
          </label>
          <input
            type="number"
            id="numConvidados"
            name="numConvidados"
            value={formData.numConvidados}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <h3 className="label">Extras:</h3>
        <div className="extrasList">
          <div className="extrasItem">
            <input
              type="checkbox"
              name="extras"
              value="Moscow Mule"
              checked={formData.extras.includes("Moscow Mule")}
              onChange={() => handleExtrasChange("Moscow Mule")}
              className="checkbox"
            />
            Moscow Mule - <span className="extrasPrice">R$ 20</span>
          </div>
          <div className="extrasItem">
            <input
              type="checkbox"
              name="extras"
              value="Ginger Beer"
              checked={formData.extras.includes("Ginger Beer")}
              onChange={() => handleExtrasChange("Ginger Beer")}
              className="checkbox"
            />
            Ginger Beer - <span className="extrasPrice">R$ 15</span>
          </div>
          <div className="extrasItem">
            <input
              type="checkbox"
              name="extras"
              value="Gin Tônica"
              checked={formData.extras.includes("Gin Tônica")}
              onChange={() => handleExtrasChange("Gin Tônica")}
              className="checkbox"
            />
            Gin Tônica - <span className="extrasPrice">R$ 30</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormStep3;