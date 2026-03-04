// Classe responsável exclusivamente pelas interações da tela de Login.
// Nenhuma regra de negócio deve ficar aqui.
// Esta classe encapsula os seletores e ações da página.

class LoginPage {

    // Centralização de seletores da página.
    // Caso o front-end mude, a manutenção ocorre apenas aqui.
    selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton: ".oxd-button",
        wrongCredentialAlert: ".oxd-alert"
    }

    // Método responsável por acessar diretamente a rota de login.
    // Mantemos a navegação dentro da Page para evitar cy.visit() no spec.
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    // Método que executa a ação de login.
    // Recebe credenciais como parâmetro para permitir reutilização
    // em cenários positivos e negativos.
    login(username, password) {
        cy.get(this.selectors.usernameField).type(username)
        cy.get(this.selectors.passwordField).type(password)
        cy.get(this.selectors.loginButton).click()
    }

    // Validação específica de erro de login.
    // Mantemos a asserção aqui porque está diretamente ligada
    // ao comportamento da tela de login.
    checkLoginError() {
        cy.get(this.selectors.wrongCredentialAlert)
            .should('be.visible')
    }
}

export default LoginPage