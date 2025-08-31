

export class homePage{

    static selectHeaderCreateAccountButton(){
        cy.contains('Create an Account').click();
    }

    static selectHeaderSignInButton(){
        cy.contains('Sign In').click();

    }


}