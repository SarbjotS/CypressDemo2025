/// <reference types="Cypress" />

import accountPageSelectors from "./Selectors/accountPageSelectors";

export class accountPage{
    static inputFirstName(){

        cy.get(accountPageSelectors.firstName).click().type("firstName")

    }

    static inputLastName(){
        cy.get(accountPageSelectors.lastName).click().type("lastname")

    }

    static inputEmail(email){
        cy.get(accountPageSelectors.email).click({multiple:true, force: true}).type(email);
    }

    static inputPassword(password){
        cy.get(accountPageSelectors.setPassword).click({multiple:true, force: true}).type(password);

    }

    static confirmPassword(password){
        if (cy.get(accountPageSelectors.setPasswordConfirmation).should('be.visible')){
            cy.get(accountPageSelectors.setPasswordConfirmation).click().type(password);
        }else{
            return;
        } 
    }

    static selectCreateAnAccountButton(){
        cy.contains('button','Create an Account').click();

    }

    static verifyAccountCreation(){
        cy.get(accountPageSelectors.accountCreationSuccess).should('be.visible');
        
    }

    static createEmail(){
        return Math.random().toString(36).slice(2) + "@grr.la"
    }

    static createPassword(){
        return Math.random().toString(36).slice(2) + "!"
    }

    static selectSignInButton(){
        cy.contains('button','Sign In');
    }

    static verifySignIn(){
        cy.contains('span','My Account');
    }

}