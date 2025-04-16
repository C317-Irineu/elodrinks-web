'use client';
import React from "react";
import "../globals.css";

interface InfoFestaProps {
  formData: {
    numConvidados: string;
    tipoEvento: string;
    localizacao: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const FormStep2: React.FC<InfoFestaProps> = ({ formData, handleChange, handleSubmit }) => {

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="numConvidados" className="label">
              Número de convidados:
            </label>
            <input
              type="text"
              id="numConvidados"
              name="numConvidados"
              value={formData.numConvidados}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="tipoEvento" className="label">
              Tipo de evento:
            </label>
            <input
              type="text"
              id="tipoEvento"
              name="tipoEvento"
              value={formData.tipoEvento}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="localizacao" className="label">
              Localização:
            </label>
            <input
              type="text"
              id="localizacao"
              name="localizacao"
              value={formData.localizacao}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
        </form>
      </div>
  );
};

export default FormStep2;