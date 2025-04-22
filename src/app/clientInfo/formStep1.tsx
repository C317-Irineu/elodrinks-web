import React from 'react';

interface FormStepProps {
  formData: { nome: string; email: string; telefone: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormStep1 = ({ formData, handleChange }: FormStepProps) => (
  <>
    <div className="inputGroup">
      <label className="label">Nome:</label>
      <input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        className="input"
        required
      />
    </div>
    <div className="inputGroup">
      <label className="label">E-mail:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="input"
        required
      />
    </div>
    <div className="inputGroup">
      <label className="label">Telefone:</label>
      <input
        type="tel"
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        className="input"
        required
      />
    </div>
  </>
);

export default FormStep1;
