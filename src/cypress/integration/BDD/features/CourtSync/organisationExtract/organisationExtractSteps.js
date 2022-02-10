import 'cypress-wait-until'
import {
    Given, When, Then,
} from "cypress-cucumber-preprocessor/steps";

import AsicSearchPage from '../../../../../support/PageObjects/AsicSearchPage';

Given('the user is on Organisation Extract tab', function(){
    AsicSearchPage.clickOrganisationExtractTab();
});

When("the user enters extract type - {string} and PPSR - {string}", (extractType, includePPSR) =>{
    AsicSearchPage.fillMatterRef();
    AsicSearchPage.fillACNABNCompanyName();
    AsicSearchPage.selectExtractType(extractType);
    AsicSearchPage.selectIncludePPSR(includePPSR);
})

When("the user places an order", function(){
    AsicSearchPage.clickOrderButton();
})

Then("user search results in related ABN not found error - {string}", (errorMessage) =>{
    AsicSearchPage.getErrorMessage(errorMessage);
});

When("the user places an order", function(){
    AsicSearchPage.clickOrderButton();
});

