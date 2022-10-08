import signIn from "../interfaces/signin";
import signUp from "../interfaces/signup";

Cypress.Commands.add('verifySignUpSuccess',()=>{
    cy.get(signUp.pageHome).should('exist')
    cy.get(signUp.lblPreviewText).should('have.text',"No articles are here... yet.")
})

Cypress.Commands.add('verifySignInFail', (message)=>{
    cy.get(signUp.pageHome).should('not.exist')
   cy.get(signIn.lblErrorMessage).should('include.text',message) 
})