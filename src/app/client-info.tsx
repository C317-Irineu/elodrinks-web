'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    router.push('/infoFesta');
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      <h1 className='h1'>Quer a Elo Drinks no seu evento?</h1>
      <h2 className='h2'>Para isso, preencha os dados abaixo para podermos fazer um orçamento:</h2>

      <div className="progressBar">
          <div className={`progressStep ${currentStep === 1 ? 'activeStep' : ''}`}>
            <div className={`stepCircle ${currentStep === 1 ? 'activeCircle' : ''}`}></div>
            Suas informações
          </div>
          <div className={`progressStep ${currentStep === 2 ? 'activeStep' : ''}`}>
            <div className={`stepCircle ${currentStep === 2 ? 'activeCircle' : ''}`}></div>
            Informações da festa
          </div>
          <div className={`progressStep ${currentStep === 3 ? 'activeStep' : ''}`}>
            <div className={`stepCircle ${currentStep === 3 ? 'activeCircle' : ''}`}></div>
            Informações do bar
        </div>
        </div>

      <div className="formContainer">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="nome" className="label">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="input"
              required />
          </div>
          <div className="inputGroup">
            <label htmlFor="email" className="label">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required />
          </div>
          <div className="inputGroup">
            <label htmlFor="telefone" className="label">
              Telefone:
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="input"
              required />
          </div>
          <button type="submit" className="button">
            Próximo
          </button>
        </form>
      </div>
      </div>
  );
};

export default Form;