import {
    Given, When, Then,
} from "cypress-cucumber-preprocessor/steps";

import loginPage from '../../../../support/PageObjects/LoginPage';

beforeEach(() => {

    Given('the user logs in with valid credentials on web application', function () {
        //cy.login('testauto', 'M34crowillM1@crowill')
        loginPage.callPostAPI();
        loginPage.typeUserName();
        loginPage.typePassword();
        loginPage.submitCredentials();
    });

});


afterEach(() => {
    cy.window().then(win => {
        if (typeof win.gc === 'function') {
            win.gc();
        }
    });
});