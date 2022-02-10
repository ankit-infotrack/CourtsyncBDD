/// <reference types="cypress"/>
/**
 * @type {Cypress.PluginConfig}
 */

 module.exports = (on, config) => {
   require('cypress-log-to-output').install(on, (type, event) => {
     if (event.level === 'error' || event.type === 'error') {
       return true;
     }
     return false;
   });
   on('before:browser:launch', (browser, launchOptions) => {
     if(browser.name === 'chrome') {
       launchOptions.args.push('--js-flags=--expose-gc');
     }
     return launchOptions
   });
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
  }
  
  const cucumber = require('cypress-cucumber-preprocessor').default
  
  module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
  }