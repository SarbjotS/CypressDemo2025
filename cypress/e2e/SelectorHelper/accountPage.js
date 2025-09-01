import accountPageSelectors from "./Selectors/accountPageSelectors";

export class accountPage{
    static inputFirstName(){

        cy.get(accountPageSelectors.firstName).click().type("firstName")

    }

    static inputLastName(){
        cy.get(accountPageSelectors.lastName).click().type("lastname")

    }

    static inputEmail(email){
        cy.get(accountPageSelectors.email).click().type(email);
    }

    static inputPassword(){

    }

    static confirmPassword(){

    }

    static selectCreateAnAccountButton(){

    }

    static verifyAccountCreation(){
        
    }

    static createEmail(){
        return Math.random().toString(36).slice(2) + "@grr.la"
    }

}