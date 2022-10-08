import signIn from "../interfaces/signin";

Cypress.Commands.add('signIn', (email, password) => {
    //enter email
    cy.get(signIn.txtEmail).clear().type(email)
    //enter password
    cy.get(signIn.txtPassword).clear().type(password)
    //click Submit button
    cy.get(signIn.btnSubmit).click()
})