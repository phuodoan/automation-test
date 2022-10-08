const email = 'nonexist@gmail.com';
const password = '123456';
const errorMessage= 'email or password is invalid';

describe('Test cases on Sign In Page',()=>{

 it('Verify user cannot log in with invalid username and password',()=>{
    //navigate to login page
    cy.visit('/#/login')
    //enter invalid email and password
    //click signIn button
    cy.signIn(email,password)
    //check the error message
    cy.verifySignInFail(errorMessage)
 })
})