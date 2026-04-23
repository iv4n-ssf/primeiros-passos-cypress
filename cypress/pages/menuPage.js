//Classe responsável pela tela de Menu lateral.
//Seguindo o princípio de responsabilidade única.
// apenas as interações relacionadas a essa página ficam aqui.

class MenuPage {

    // Mapeamento centralizado de todos os elementos utilizados no menu.
    selectors = {
        dashboardButton: "[href='/web/index.php/dashboard/index']",
        directoryButton: "[href='/web/index.php/directory/viewDirectory']",
        maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenance']",
        buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
        performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
        recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
        timeButton: "[href='/web/index.php/time/viewTimeModule']",
        leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
        adminButton: "[href='/web/index.php/admin/viewAdminModule']",
        pimButton: "[href='/web/index.php/pim/viewPimModule']",
        myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    }

    // Acessa a página de informações pessoais pelo menu lateral.
    accessMyInfo() {
        cy.get(this.selectors.myInfoButton).click()
    }

    // Acessa a página de Dashboard pelo menu lateral.
    accessDashboard() {
        cy.get(this.selectors.dashboardButton).click()
    }

    // Acessa a página de Directory pelo menu lateral.
    accessDirectory() {
        cy.get(this.selectors.directoryButton).click()
    }

    // Acessa a página de Maintenance pelo menu lateral.
    accessMaintenance() {
        cy.get(this.selectors.maintenanceButton).click()
    }

    // Acessa a página de Buzz pelo menu lateral.
    accessBuzz() {
        cy.get(this.selectors.buzzButton).click()
    }

    // Acessa a página de Performance pelo menu lateral.
    accessPerformance() {
        cy.get(this.selectors.performanceButton).click()
    }

    // Acessa a página de Recruitment pelo menu lateral.
    accessRecruitment() {
        cy.get(this.selectors.recruitmentButton).click()
    }

    // Acessa a página de Time pelo menu lateral.
    accessTime() {
        cy.get(this.selectors.timeButton).click()
    }

    // Acessa a página de Leave pelo menu lateral.
    accessLeave() {
        cy.get(this.selectors.leaveButton).click()
    }

    // Acessa a página de Admin pelo menu lateral.
    accessAdmin() {
        cy.get(this.selectors.adminButton).click()
    }

    // Acessa a página de PIM pelo menu lateral.
    accessPim() {
        cy.get(this.selectors.pimButton).click()
    }

}

export default MenuPage