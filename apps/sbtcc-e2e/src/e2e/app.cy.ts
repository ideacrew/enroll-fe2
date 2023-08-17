import { getHeading } from '../support/app.po';

describe('sbtcc', () => {
  beforeEach(() => cy.visit('/'));

  it('should display landing page with IDC name and App name', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getHeading().contains('Small Business Tax Credit Calculator');
  });
});
