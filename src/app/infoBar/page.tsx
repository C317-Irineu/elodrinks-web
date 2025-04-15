'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importando o useRouter para navegação

// Estilo embutido
import { CSSProperties } from "react";

// Estilos para o layout da página
const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // A altura mínima é 100vh, mas o conteúdo pode rolar
    backgroundColor: "#fdf2e1",
    flexDirection: "column",
    overflowY: "auto", // Adiciona rolagem vertical
  },
  headerContainer: {
    backgroundColor: "#fdf2e1",
    width: "100%",
    padding: "40px",
    textAlign: "left",
    color: "white",
    borderTop: "35px solid #d4883a",
    position: "absolute",
    top: "0",
    left: "0",
  },
  header: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  formContainer: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "1000px",
    marginTop: "150px",
    overflowY: "auto", // Adiciona rolagem ao conteúdo do formulário
  },
  progressBar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  progressStep: {
    fontSize: "14px",
    color: "#6c6c6c",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  activeStep: {
    color: "#d4883a",
    fontWeight: "bold",
  },
  stepCircle: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    marginBottom: "5px",
  },
  activeCircle: {
    backgroundColor: "#d4883a",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#3c3c3c",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#d4883a",
    border: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

// Componente principal do formulário
const InfoFesta = () => {
  const [formData, setFormData] = useState({
    numConvidados: "",
    tipoEvento: "",
    localizacao: "",
  });

  const [currentStep] = useState(2); // Controlando a etapa atual
  const [currentPlan, setCurrentPlan] = useState(0); // Controlando o plano selecionado
  const plans = [
    { name: "Basic", description: "Bebidas Alcoólicas: Capira, Vodka, Tang, Leite com Manga", price: "R$ 50" },
    { name: "Premium", description: "Bebidas Alcoólicas: Gin, Vodka, Whisky, Leite com Manga", price: "R$ 100" },
    { name: "Deluxe", description: "Bebidas Alcoólicas: Gin, Vodka, Whisky, Champagne", price: "R$ 150" },
  ];

  const router = useRouter(); // Hook de navegação do Next.js

  // Função para lidar com as mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // enviar os dados para um servidor ou outro lugar
    // Depois de preencher as informações, redireciona para a próxima página
    router.push("/infoBar"); // Redirecionar para a página informações do bar
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={{ ...styles.header, color: "black" }}>Informações do Bar</h1>
        <p style={{ ...styles.paragraph, color: "black" }}>
          Complete as informações sobre o Bar para prosseguir:
        </p>
      </div>

      <div style={styles.formContainer}>
        {/* Barra de progresso */}
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressStep,
              ...(currentStep === 1 ? styles.activeStep : {}),
            }}
          >
            <div
              style={{
                ...styles.stepCircle,
                ...(currentStep === 2 ? styles.activeCircle : {}),
              }}
            ></div>
            Suas informações
          </div>
          <div 
            style={{
              ...styles.progressStep,
              ...(currentStep === 1 ? styles.activeStep : {}),
            }}
          >
            <div
              style={{
                ...styles.stepCircle,
                ...(currentStep === 2 ? styles.activeCircle : {}),
              }}
            ></div>
            Informações da festa
          </div>
          <div
            style={{
              ...styles.progressStep,
              ...(currentStep === 2 ? styles.activeStep : {}),
            }}
          >
            <div
              style={{
                ...styles.stepCircle,
                ...(currentStep === 2 ? styles.activeCircle : {}),
              }}
            ></div>
            Informações do Bar
          </div>
        </div>

        {/* Formulário de Informações da Festa */}
        <form onSubmit={handleSubmit}>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              border: "2px solid #d4883a",
              borderRadius: "8px",
              padding: "20px",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <h3 style={{ color: "black" }}>Escolha seu Plano:</h3>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <button
          onClick={() => {
            setCurrentPlan((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#d4883a",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
          &#8592;
              </button>
              <div style={{ textAlign: "center", flex: 1 }}>
          <h3 style={{ fontSize: "24px", marginBottom: "10px", color: "#3c3c3c" }}>
            {plans[currentPlan].name}
          </h3>
          <p style={{ fontSize: "16px", color: "#6c6c6c" }}>
            {plans[currentPlan].description}
          </p>
          <p style={{ fontSize: "20px", fontWeight: "bold", color: "#d4883a" }}>
            {plans[currentPlan].price}
          </p>
              </div>
              <button
          onClick={() => {
            setCurrentPlan((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#d4883a",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
          &#8594;
              </button>
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="numConvidados" style={styles.label}>
              Número de Barmans:
            </label>
            <input
              type="number"
              id="numConvidados"
              name="numConvidados"
              value={formData.numConvidados}
              onChange={handleChange}
              style={{ ...styles.input, color: "black" }}
              required
            />
          </div>
            <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              border: "2px solid #d4883a",
              borderRadius: "8px",
              padding: "20px",
              transition: "all 0.3s ease-in-out",
            }}
            >
            <h3 style={{ color: "black" }}>Extras:</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", color: "#3c3c3c" }}>
              <input
                type="checkbox"
                name="extras"
                value="Moscow Mule"
                style={{ transform: "scale(1.2)" }}
              />
              Moscow Mule - <span style={{ color: "#d4883a", fontWeight: "bold" }}>R$ 20</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", color: "#3c3c3c" }}>
              <input
                type="checkbox"
                name="extras"
                value="Ginger Beer"
                style={{ transform: "scale(1.2)" }}
              />
              Ginger Beer - <span style={{ color: "#d4883a", fontWeight: "bold" }}>R$ 15</span>
              </label>
                <label style={{ display: "flex", alignItems: "center", gap: "10px", color: "#3c3c3c" }}>
                <input
                type="checkbox"
                name="extras"
                value="Gin Tônica"
                style={{ transform: "scale(1.2)" }}
                />
                Gin Tônica - <span style={{ color: "#d4883a", fontWeight: "bold" }}>R$ 30</span>
                </label>
            </div>
            </div>
          <button type="submit" style={styles.button}>
            Próximo
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoFesta;