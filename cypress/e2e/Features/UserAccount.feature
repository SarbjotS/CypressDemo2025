Feature: Validate user login scenarios

Scenario: User can create an account
Given User is on the home page
And the user selects the create an account button
Then the user inputs the create account information
Then we select the create an account button
Then we verify the account has been created



Scenario: User can sign in
Given User is on the home page
And the user selects the header sign in button
Then the user inputs their email and password
And the user selects the sign in button
Then we confirm the user has signed in




Scenario: User can't sign in with invalid details
Given User is on the home page
And the user selects the header sign in button
Then the user inputs their invalid email or password
And the user selects the sign in button
Then we confirm the user has not been signed in and shown an error