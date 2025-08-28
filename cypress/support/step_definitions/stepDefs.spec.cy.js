import { Given,Then,After } from "@badeball/cypress-cucumber-preprocessor";


Given("User is on the home page",()=>{
    cy.visit("www.google.com")
})