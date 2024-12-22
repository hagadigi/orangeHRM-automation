describe('login with invalid account', () => {
    it('should have validation', () => {
        cy.login('admin','admin');
        cy.checkInvalidCredentials();
    });
});

describe('login with wrong username', () => {
    it('should have a validation', () => {
        cy.login('admin123','admin123');
        cy.checkInvalidCredentials();
    });
});

describe('login with invalid password', () => {
    it('should have a validation', () => {
        cy.login('Admin','adminadmin');
        cy.checkInvalidCredentials();
    });
});


