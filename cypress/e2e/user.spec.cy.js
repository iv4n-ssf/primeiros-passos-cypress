import userDate from '../fixtures/users/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firsNameField: "[name='firstName']",
    middleName: "[name='middleName']",
    lastNameField: "[name='lastName']",
    // CAMPO GENERICO
    genericField: ".oxd-input--active",
  }

  it.only('User Info Update - Success', () => {

    // LOGIN
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userDate.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userDate.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    // MY INFO
    //cy.visit('/pim/viewMyDetails')
    // cy.get("[href='/web/index.php/pim/viewMyDetails']").click()
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firsNameField).type('First Name Test')
    cy.get(selectorsList.middleName).type('Middle Name Test')
    cy.get(selectorsList.lastNameField).type('Last Name Test')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userDate.userFail.username)
    cy.get(selectorsList.passwordField).type(userDate.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})