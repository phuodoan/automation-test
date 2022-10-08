import signUp from '../interfaces/signup'

Cypress.Commands.add('signUp', (userName, email, password) => {
    //enter username
    cy.get(signUp.txtUserName).clear().type(userName)
    //enter email
    cy.get(signUp.txtEmail).clear().type(email)
    //enter password
    cy.get(signUp.txtPassword).clear().type(password)
    //click Submit button
    cy.get(signUp.btnSubmit).click()
})
