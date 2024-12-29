describe('Login Page', () => {
  context('login with valid credentials', () => {
    it('Should login successfully', () => {
      cy.login('Admin','admin123');
      cy.intercept('GET', '**/employees/action-summary').as('actionSummary');
      cy.wait('@actionSummary').then((intercept) => {
          expect(intercept.response.statusCode).to.equal(200);
        });
      cy.dashboardPanelCheck();
    });
  });

  context('login with invalid account', () => {
    it('should have validation', () => {
        cy.login('admin','admin');
        cy.checkInvalidCredentials();
    });
  });
  
  context('login with wrong username', () => {
    it('should have a validation', () => {
        cy.login('admin123','admin123');
        cy.checkInvalidCredentials();
    });
  });
  
  context('login with invalid password', () => {
    it('should have a validation', () => {
        cy.login('Admin','adminadmin');
        cy.checkInvalidCredentials();
    });
  });
  
  context('login with blank username', () => {
    it('should have a validation', () => {
        cy.login(' ','admin123');
        cy.checkRequiredUsername();
    });
  });
  
  context('login with blank password', () => {
    it('should have a validation', () => {
        cy.login('admin ',' ');
        cy.checkRequiredUsername();
    });
  });
  
  context('login with blank username and password', () => {
    it('should have a validation', () => {
        cy.login(' ',' ');
        cy.checkRequiredUsernamePassword();
    });
  });
});

