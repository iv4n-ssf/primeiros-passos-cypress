// Classe responsável pela tela "My Info".
// Segue o princípio de responsabilidade única:
// apenas interações relacionadas a essa página ficam aqui.

class MyInfoPage {

    // Mapeamento centralizado de todos os elementos utilizados na tela.
    selectors = {
        myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        firstNameField: "[name='firstName']",
        middleNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateCloseButton: ".--close",
        submitButton: "[type='submit']",
        selectButton: ".oxd-select-text--arrow"
    }

    // Acessa a página de informações pessoais pelo menu lateral.
    accessMyInfo() {
        cy.get(this.selectors.myInfoButton).click()
    }

    // Atualiza os dados básicos do usuário.
    // Recebe parâmetros para permitir testes data-driven futuramente.
    fillPersonalDetails(first, middle, last) {
        cy.get(this.selectors.firstNameField).clear().type(first)
        cy.get(this.selectors.middleNameField).clear().type(middle)
        cy.get(this.selectors.lastNameField).clear().type(last)
    }

    // Atualiza campos adicionais do funcionário.
    // Obs: O uso de .eq() indica dependência de posição no DOM.
    // Caso o layout mude, essa parte é sensível a quebra.
    fillEmployeeDetails() {
        cy.get(this.selectors.genericField).eq(3).clear().type('EmployeeId')
        cy.get(this.selectors.genericField).eq(4).clear().type('OtherIdTest')
        cy.get(this.selectors.genericField).eq(5).clear().type('DriversLicenseNumberTest')
        cy.get(this.selectors.genericField).eq(6).clear().type('2026-03-10')
        cy.get(this.selectors.dateCloseButton).click()
    }

    // Seleciona nacionalidade no dropdown.
    // Recebe o valor como parâmetro para maior flexibilidade.
    selectNationality(nationality) {
        cy.get(this.selectors.selectButton).eq(0).click()
        cy.get('.oxd-select-dropdown').contains(nationality).click()
    }

    // Seleciona estado civil.
    selectMaritalStatus(status) {
        cy.get(this.selectors.selectButton).eq(1).click()
        cy.get('.oxd-select-dropdown').contains(status).click()
    }

    // Salva alterações da seção atual.
    // Utiliza .first() pois existem múltiplos botões submit na página.
    save() {
        cy.get(this.selectors.submitButton).first().click()
    }

    // Valida mensagem de sucesso após atualização.
    validateUpdateSuccess() {
        cy.contains('Successfully Updated')
            .should('be.visible')
    }
}

export default MyInfoPage