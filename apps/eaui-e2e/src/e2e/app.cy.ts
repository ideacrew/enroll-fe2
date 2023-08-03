import { getAppName, getCompany } from '../support/app.po';

describe('eaui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display landing page with IDC name and App name', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getCompany().contains('IdeaCrew, Inc.');
    getAppName().contains('EAUI App');
  });
});
