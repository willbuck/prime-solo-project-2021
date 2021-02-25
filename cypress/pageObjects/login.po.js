export default function LoginPageObject() {
    return {
        getUsernameField: () => {
            return cy.get('input[name="username"]')
        },
        getPasswordField: () => {
            return cy.get('input[name="password"]')
        },
        getLoginButton: () => {
            return cy.get('input.btn[name="submit"]')
        }
    }
}
