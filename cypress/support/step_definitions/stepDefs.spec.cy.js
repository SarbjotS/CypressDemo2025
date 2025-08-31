import { Given,Then,After } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../e2e/SelectorHelper/HomePage";
import { accountPage } from "../../e2e/SelectorHelper/accountPage";



Given("User is on the home page",()=>{
    cy.visit(Cypress.env("baseUrl"));
})

And("the user selects the create an account button",()=>{
    homePage.selectHeaderCreateAccountButton();
})

And("the user selects the header sign in button",()=>{
     homePage.selectHeaderSignInButton();

})

Then("the user inputs the create account information",()=>{
    accountPage.inputFirstName();
    accountPage.inputLastName();
})

Then("the user inputs their email and password",()=>{
    accountPage.inputEmail();
    accountPage.inputPassword();
    accountPage.confirmPassword();
})

Then("the user inputs their invalid email or password",()=>{

})


Then("we select the create an account button",()=>{
    accountPage.selectCreateAnAccountButton();

})

And("the user selects the sign in button",()=>{

})

Then ("we verify the account has been created",()=>{
    accountPage.verifyAccountCreation();
})

Then("we confirm the user has signed in",()=>{

})

Then("we confirm the user has not been signed in and shown an error",()=>{

})