'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importando o useRouter do novo sistema de navegação

// Estilo embutido
import { CSSProperties } from "react";

// Estilos para o layout da página
const styles: { [key: string]: CSSProperties } = {
  // Estilo para o contêiner principal
  container: {
    display: "flex", // Usando Flexbox para alinhar os elementos
    justifyContent: "center", // Alinhando os itens horizontalmente
    alignItems: "center", // Alinhando os itens verticalmente
    height: "100vh", // Garantindo que a altura ocupe 100% da tela
    backgroundColor: "#fdf2e1", // Cor de fundo da página
    flexDirection: "column", // Os elementos ficam na direção de coluna
    overflow: "hidden", // Impede a rolagem
  },

  // Estilo para o cabeçalho, incluindo a borda no topo
  headerContainer: {
    backgroundColor: "#fdf2e1", // Cor de fundo
    width: "100%", // Largura total
    padding: "40px", // Preenchimento interno
    textAlign: "left", // Alinha o texto à esquerda
    color: "white", // Cor do texto
    borderTop: "35px solid #d4883a", // Borda dourada no topo
    position: "absolute", // Fixa no topo
    top: "0", // Alinha ao topo da página
    left: "0", // Alinha à esquerda
  },

  // Estilo para o título principal
  header: {
    fontSize: "40px", // Tamanho da fonte
    fontWeight: "bold", // Negrito
    marginBottom: "20px", // Espaço abaixo do título
  },

  // Estilo para o parágrafo abaixo do título
  paragraph: {
    fontSize: "20px", // Tamanho da fonte
    marginBottom: "10px", // Espaço abaixo do parágrafo
  },

  // Estilo para o contêiner do formulário
  formContainer: {
    backgroundColor: "white", // Cor de fundo do formulário
    padding: "40px", // Preenchimento interno
    borderRadius: "8px", // Bordas arredondadas
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Sombra suave ao redor
    width: "1000px", // Largura do formulário
    minHeight: "400px", // Altura mínima do formulário
    marginTop: "150px", // Margem superior para ajustar abaixo do cabeçalho fixo
  },

  // Estilo para a barra de progresso que exibe os passos
  progressBar: {
    display: "flex", // Exibe os itens em linha
    justifyContent: "space-between", // Espaço uniforme entre os itens
    marginBottom: "30px", // Espaço abaixo da barra de progresso
  },

  // Estilo para cada etapa da barra de progresso
  progressStep: {
    fontSize: "14px", // Tamanho da fonte
    color: "#6c6c6c", // Cor do texto
    display: "flex", // Exibe os itens em linha
    flexDirection: "column", // Alinhamento vertical
    alignItems: "center", // Alinhamento centralizado
  },

  // Estilo para a etapa ativa da barra de progresso
  activeStep: {
    color: "#d4883a", // Cor dourada para o passo ativo
    fontWeight: "bold", // Negrito para o passo ativo
  },

  // Estilo para os círculos indicativos dos passos
  stepCircle: {
    width: "30px", // Tamanho do círculo
    height: "30px", // Tamanho do círculo
    borderRadius: "50%", // Tornando o círculo redondo
    backgroundColor: "#ddd", // Cor de fundo do círculo inativo
    marginBottom: "5px", // Espaço abaixo do círculo
  },

  // Estilo para o círculo ativo
  activeCircle: {
    backgroundColor: "#d4883a", // Cor dourada do círculo ativo
  },

  // Estilo para os grupos de entrada (campos de texto)
  inputGroup: {
    marginBottom: "20px", // Espaço abaixo de cada campo
  },

  // Estilo para os rótulos (labels) dos campos
  label: {
    display: "block", // Exibe como bloco
    fontSize: "14px", // Tamanho da fonte
    color: "#3c3c3c", // Cor do texto
    marginBottom: "5px", // Espaço abaixo do rótulo
  },

  // Estilo para os campos de entrada (input)
  input: {
    width: "100%", // O campo ocupa toda a largura disponível
    padding: "10px", // Preenchimento interno
    border: "1px solid #ddd", // Borda clara
    borderRadius: "4px", // Bordas arredondadas
    fontSize: "14px", // Tamanho da fonte
    marginBottom: "10px", // Espaço abaixo do campo
  },

  // Estilo para o botão de envio
  button: {
    width: "100%", // O botão ocupa toda a largura disponível
    padding: "12px", // Preenchimento interno
    backgroundColor: "#d4883a", // Cor de fundo do botão
    border: "none", // Sem borda
    color: "white", // Cor do texto
    fontSize: "16px", // Tamanho da fonte
    fontWeight: "bold", // Negrito
    borderRadius: "4px", // Bordas arredondadas
    cursor: "pointer", // Cursor de ponteiro para indicar que é clicável
  },
};

// Componente principal do formulário
const Form = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const [currentStep, setCurrentStep] = useState(1); // Controlando a etapa atual
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
    console.log(formData); // Aqui você pode enviar os dados para um servidor ou outro lugar
    router.push("/infoFesta"); // Redirecionar para a página infoFesta
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1); // Avançar para a próxima etapa
    } else {
      // Quando a última etapa for alcançada, redireciona para a próxima página
      
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={{ ...styles.header, color: "black" }}>Quer a Elo Drinks no seu evento?</h1>
        <p style={{ ...styles.paragraph, color: "black" }}>
          Para isso, preencha os dados abaixo para podermos fazer um orçamento:
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
                ...(currentStep === 1 ? styles.activeCircle : {}),
              }}
            ></div>
            Suas informações
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
            Informações da festa
          </div>
          <div
            style={{
              ...styles.progressStep,
              ...(currentStep === 3 ? styles.activeStep : {}),
            }}
          >
            <div
              style={{
                ...styles.stepCircle,
                ...(currentStep === 3 ? styles.activeCircle : {}),
              }}
            ></div>
            Informações do bar
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="nome" style={styles.label}>
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              style={{ ...styles.input, color: "black" }}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ ...styles.input, color: "black" }}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="telefone" style={styles.label}>
              Telefone:
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              style={{ ...styles.input, color: "black" }}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Próximo
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;