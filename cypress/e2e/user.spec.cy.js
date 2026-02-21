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
    cy.get(selectorsList.firsNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleName).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')

    cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseNumberTest')
    cy.get(selectorsList.genericField).eq(8).clear().type('snnNumberTest')
    cy.get(selectorsList.genericField).eq(9).clear().type('sinNumberTest')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userDate.userFail.username)
    cy.get(selectorsList.passwordField).type(userDate.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})