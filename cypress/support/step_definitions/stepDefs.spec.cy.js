import { Given,Then,After } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../e2e/SelectorHelper/HomePage";
import { accountPage } from "../../e2e/SelectorHelper/accountPage";

//these are just temporary passwords created for the purporse of creating an account
//passwords for signing in will be more securely handled.
var email;
var password;


Given("User is on the home page",()=>{
    cy.visit(Cypress.env("baseUrl"));
})

Then("the user selects the create an account button",()=>{
    homePage.selectHeaderCreateAccountButton(); //done
})

Then("the user selects the header sign in button",()=>{
     homePage.selectHeaderSignInButton(); //done

})

Then("the user inputs the create account information",()=>{
    accountPage.inputFirstName();
    accountPage.inputLastName();
})

Then("the user inputs their email and password",()=>{
    email = accountPage.createEmail();
    //accountPage.createPassword(password);
    accountPage.inputEmail(email);
    //accountPage.inputPassword(password);
    //accountPage.confirmPassword(password);
})

Then("the user inputs their invalid email or password",()=>{

})


Then("we select the create an account button",()=>{
    accountPage.selectCreateAnAccountButton();

})

Then("the user selects the sign in button",()=>{

})

Then ("we verify the account has been created",()=>{
    accountPage.verifyAccountCreation();
})

Then("we confirm the user has signed in",()=>{

})

Then("we confirm the user has not been signed in and shown an error",()=>{

})