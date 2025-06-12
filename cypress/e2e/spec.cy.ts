describe('Criando cenario de teste para a página Elo-Drinks', () => {

  it("Caso de teste: Formulário de orçamentos", () => {
    // Acessa a página principal
    cy.visit('http://localhost:3000');

    // Clica no botão identificado
    cy.get('.absolute > :nth-child(2)').click();

    // Verifica se o elemento com classe .h1 está visível
    cy.get('.h1').should('be.visible');
  });

  it("Valida que campo 'Orçamento aceito' é obrigatório", () => {
    acessarPaginaOrcamento();

    // Tenta preencher apenas os outros campos
    cy.get('input[type="number"]').type("50");
    cy.get("textarea").type("Alguma observação");

    // Clica no botão de envio
    cy.get('button[type="submit"]').click();

    // Verifica se continua na mesma página (formulário não enviado)
    cy.url().should("include", "/answer");

    // Verifica que o select ainda está com valor vazio
    cy.get("select").should("have.value", "");
  });

  it("Valida que campo 'Valor por pessoa' só aceita números", () => {
    acessarPaginaOrcamento();

    // Seleciona "Não" no dropdown
    cy.get("select").select("Não");

    // Tenta digitar letra no campo numérico
    cy.get('input[type="number"]').type("e", { force: true });

    // Tenta submeter o formulário
    cy.get('button[type="submit"]').click();

    // Verifica se o campo continua visível (não submetido)
    cy.url().should("include", "/answer");

    // Verifica que o valor do input continua vazio ou inválido
    cy.get('input[type="number"]').should("have.value", "");
  });

  it("Valida que campo 'Valor por pessoa' aceita apenas números positivos", () => {
    acessarPaginaOrcamento();

    // Seleciona "Sim" no dropdown
    cy.get("select").select("Sim");

    // Tenta digitar um valor negativo
    cy.get('input[type="number"]').type("-50", { force: true });
    // Após digitar valor negativo, verifica se o campo ficou vazio automaticamente
    cy.get('input[type="number"]').should("have.value", 0);

  });
  it("Valida que campo 'Observações' aceita texto livre", () => {
    acessarPaginaOrcamento();

    // Seleciona "Sim" no dropdown
    cy.get("select").select("Sim");

    // Digita um valor válido no campo numérico
    cy.get('input[type="number"]').type("50");

    // Digita texto livre no campo de observações
    cy.get("textarea").type("Alguma observação válida");

    // Verifica se o elemento com classe .h1 está visível na página de sucesso
    cy.get('.h1').should('be.visible');
  }
  );
  it("Valida que formulário não é enviado com campos obrigatórios vazios", () => {
    acessarPaginaOrcamento();

    // Tenta submeter o formulário sem preencher os campos obrigatórios
    cy.get('button[type="submit"]').click();

    // Verifica se a URL continua na página de orçamento
    cy.url().should("include", "/answer");

    // Verifica que o select ainda está vazio
    cy.get("select").should("have.value", "");

    // Verifica que o campo numérico está vazio
    cy.get('input[type="number"]').should("have.value", "");

    // Verifica que o campo de observações está vazio
    cy.get("textarea").should("have.value", "");
  }
  );

});

// Função utilitária para acessar a tela de orçamento
function acessarPaginaOrcamento() {
  cy.visit('http://localhost:3000/admin');
  cy.get(':nth-child(1) > .mt-6 > .bg-\\[\\#FF6B00\\]').click();
  cy.get('.bg-\\[\\#007366\\]').click();
  cy.get('.h1').should('be.visible');
}

function preencherFormularioOrcamento() {
  // Acessa a página de orçamento
  acessarPaginaOrcamento();

  // Preenche todos os campos corretamente
  cy.get("select").select("Sim"); // Orçamento aceito?
  cy.get('input[type="number"]').type("55.50"); // Valor por pessoa
  cy.get("textarea").type("Evento confirmado. Enviar contrato para assinatura."); // Observações
}