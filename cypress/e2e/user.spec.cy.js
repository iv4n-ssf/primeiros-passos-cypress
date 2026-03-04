// Arquivo de teste E2E.
// Aqui descrevemos comportamento, não implementação.
// Nenhum seletor deve existir neste arquivo.

import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import MyInfoPage from '../pages/myInfoPage'

// Instanciação das Pages.
// Cada spec pode reutilizar essas instâncias.
const loginPage = new LoginPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  // Cenário positivo: atualização de dados do usuário
  it('User Info Update - Success', () => {

    // Acessa login
    loginPage.accessLoginPage()

    // Realiza login com usuário válido
    loginPage.login(
      userData.userSuccess.username,
      userData.userSuccess.password
    )

    // Validação de redirecionamento após login
    cy.location('pathname')
      .should('equal', '/web/index.php/dashboard/index')

    // Acessa seção My Info
    myInfoPage.accessMyInfo()

    // Atualiza dados pessoais
    myInfoPage.fillPersonalDetails(
      'FirstNameTest',
      'MiddleNameTest',
      'LastNameTest'
    )

    // Atualiza dados complementares
    myInfoPage.fillEmployeeDetails()

    // Atualiza nacionalidade e salva
    myInfoPage.selectNationality('Brazilian')
    myInfoPage.save()

    // Atualiza estado civil e salva
    myInfoPage.selectMaritalStatus('Other')
    myInfoPage.save()

    // Valida mensagem final de sucesso
    myInfoPage.validateUpdateSuccess()
  })


  // Cenário negativo: tentativa de login inválido
  it('Login - Fail', () => {

    loginPage.accessLoginPage()

    loginPage.login(
      userData.userFail.username,
      userData.userFail.password
    )

    // Validação encapsulada na própria Page
    loginPage.checkLoginError()
  })

})