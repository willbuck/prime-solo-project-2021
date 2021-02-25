export default function HomePageObject() {
    return {
        getLoginButton: () => {
            return cy.get('button.btn').contains("Login")
        }
    }
}
