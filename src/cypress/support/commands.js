// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('loginToWebApp', (username, password) =>{
//     cy.get()
// })


// Cypress.Commands.add('login',(username, password) =>{
//     cy.visit('/')
//     cy.get('#usernameTextbox').type(username);
//     cy.get('#passwordTextbox').type(password);
//     cy.get('button[class="css-1hfpgzg"]').click();
// })
import 'cypress-wait-until';
Cypress.Commands.add('generateMatterRef', () => {
    const TODAY = new Date();
    const DATE = TODAY.getFullYear().toString() + (TODAY.getMonth() + 1).toString() + TODAY.getDate().toString();
    const time = TODAY.getHours().toString() + TODAY.getMinutes().toString() + TODAY.getSeconds().toString();
    const DATETIME = DATE.toString() + time.toString();
    const MATTERREF = "ASIC" + DATETIME;

    return cy.wrap(MATTERREF);

})