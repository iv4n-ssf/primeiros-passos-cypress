// Arquivo de teste E2E do login falho.
// Aqui descrevemos comportamento, não implementação.
// Nenhum seletor deve existir neste arquivo.

import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'

// Instanciação das Pages.
// Cada spec pode reutilizar essas instâncias.
const loginPage = new LoginPage()

describe('Login Orange HRM Tests', () => {

    // Cenário positivo: atualização de dados do usuário
    it('User Info Update - Success', () => {

        // Acessa login
        loginPage.accessLoginPage()

        // Realiza login com usuário válido
        loginPage.login(userData.userSuccess.username, userData.userSuccess.password)

        // Validação de redirecionamento após login
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    })


    // Cenário negativo: tentativa de login inválido
    it('Login - Fail', () => {

        // Acessa login
        loginPage.accessLoginPage()

        // Realiza login com usuário inválido
        loginPage.login(userData.userFail.username, userData.userFail.password)

        // Validação encapsulada na própria Page
        loginPage.checkLoginError()
    })

})