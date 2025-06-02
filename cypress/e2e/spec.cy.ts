describe('Criando cenario de teste para a página Elo-Drinks', () => {

  it("Caso de teste: Fomulario de orçamentos", () => {
    // Acessa a página principal
    cy.visit('http://localhost:3000')

    // Clica no botão identificado
    cy.get('.absolute > :nth-child(2)').click()

    // Verifica se o elemento com classe .h1 está visível
    cy.get('.h1').should('be.visible')
  })



  it("Caso de teste: Responder orçamento", () => {
    // Acessa a página principal
    cy.visit('http://localhost:3000/admin')
    cy.get(':nth-child(1) > .mt-6 > .bg-\\[\\#FF6B00\\]').click()
    cy.get('.bg-\\[\\#007366\\]').click()
     cy.get('.h1').should('be.visible')
  })

})