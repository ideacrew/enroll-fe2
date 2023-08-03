import { getAppName, getCompany } from '../support/app.po';

describe('base', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getCompany().contains('IdeaCrew, Inc.');
    getAppName().contains('EAUI App');
  });
});
