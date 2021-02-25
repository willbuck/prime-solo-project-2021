import LoginPage from '../pageObjects/login.po'

describe('Login', () => {
    it('successfully performs a login action', () => {
        const loginPage = LoginPage()
        cy.visit('/#/login')
        cy.contains('Username') // we're on the login page
        loginPage.getUsernameField().type('admin')
        loginPage.getPasswordField().type('todo_change_this')
        loginPage.getLoginButton().click()
        cy.url().should('contain', 'user')
    })
})
