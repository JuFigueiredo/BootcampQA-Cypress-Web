/// <reference types="cypress" />

describe('US0001 - Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });


    it('Deve fazer login com sucesso', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('juliana.figueiredo@via.com.br')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo Juliana')

    });

    it('Validar mensagem de erro quando inserir usuário e senha inválidos', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('juliana.redo@via.com.br')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });
});


/*
    Funcionalidade: Login
    Eu como usuário da Conexão QA
    Queri fazer o login
    Para editar o meu perfil

    Cenário: Login com sucesso
    Arrange - Dado - Pré-requisito -> Dado que eue steja na tela de login
    Action - Quando - Ação do usuário - Quando eu inserir usuário e senha
    Assert - Então - Resultado esperado - Então deve me direcionar para o Dashboard

    Cenário: Validar mensagem de erro

    Cenário: Recuperar a senha




*/