import { Given } from 'cypress-cucumber-preprocessor/steps';

const url = 'http:www.google.com';
Given('I open the website', () => {
  // eslint-disable-next-line no-undef
  cy.visit(url);
});