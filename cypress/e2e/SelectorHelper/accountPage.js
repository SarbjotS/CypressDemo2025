import accountPageSelectors from "./Selectors/accountPageSelectors";



export class accountPage{

    static inputFirstName(){
        cy.get(accountPageSelectors.firstName).click().type("firstName")

    }

    static inputLastName(){

    }

    static inputEmail(){

    }

    static inputPassword(){

    }

    static confirmPassword(){

    }

    static selectCreateAnAccountButton(){

    }

    static verifyAccountCreation(){
        
    }

}