describe('Testes Prova Pratica, Cadastro e login', () => {
  it('Acesso ao site e Cadastro', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').click()
    cy.get('#sign-username').type("123")
    cy.get('#sign-password').click()
    cy.get('#sign-password').type("123")
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    
  })

  it('Login para conferir cadastro', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').type("123")
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type("123")
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})


it('Adicionar Prrodutos ao carrinho', () => {
  cy.visit('https://www.demoblaze.com/index.html')
  cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
  cy.get('.col-sm-12 > .btn').click()
  cy.get('.col-sm-12 > .btn').click()
  cy.get('.active > .nav-link').click()
  cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').click()
  cy.get('.col-sm-12 > .btn').click()

})


it('Conferir carrinho sem items deve dar erro', () => {
  cy.visit('https://www.demoblaze.com/index.html')  
  cy.get(':nth-child(4) > .nav-link').click()
  cy.get('.table-responsive').should("contain text")
})




function criarUsuario() {
  
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let user = horas + minutos + segundos + 'user'
  let senha =  horas + minutos + segundos + 'senha'
  let userInfo = [user, senha]
  cy.visit('https://www.demoblaze.com/index.html')
  cy.get('#sign-username').type(user)
  cy.get('#sign-password').type(senha)
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  

  return userInfo
}





})
