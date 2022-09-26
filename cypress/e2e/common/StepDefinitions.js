import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

const LoginPage = require('../../pages/login.page');

Given('A user enters to the login page', ()=>{
    cy.visit('/')
})


When('A user enters the username {string}', (username)=>{
    LoginPage.typeUsername(username)
})


When('A user enters incorrect credentials', (dataTable)=>{
    dataTable.hashes().forEach(row => {
        LoginPage.typeUsername(row.username)
        LoginPage.typePassword(row.password)

    });
})

When('A user entersthe password {string}', (password)=>{
    LoginPage.typePassword(password)
})

When('A user clicks on the login button', ()=>{
    LoginPage.clickLogin()
})

Then('A user will be logged in', ()=>{
    LoginPage.urlSuccess()
})

Then('The error message {string} is displayed', (errorMessage)=>{
    LoginPage.msjError(errorMessage)})