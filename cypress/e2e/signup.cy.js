//create a random string 
let random = (Math.random() + 1).toString(36).substring(7);
let userName = `test_${random}`;
let email= `test_${random}@gmail.com`;
const password = '123456';

describe('Test cases on Sign Up Page',()=>{

 it('Verify user cannot log in with invalid username and password',()=>{
    //navigate to sign up page
    cy.visit('/#/register')
    //enter all value
    //click sign up
    cy.signUp(userName, email, password)
    //verify the home page is shown
    cy.verifySignUpSuccess()
 })
})