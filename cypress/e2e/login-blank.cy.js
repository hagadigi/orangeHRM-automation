describe('login with blank username', () => {
    it('should have a validation', () => {
        cy.login(' ','admin123');
        cy.checkRequiredUsername();
    });
});

describe('login with blank password', () => {
    it('should have a validation', () => {
        cy.login('admin ',' ');
        cy.checkRequiredUsername();
    });
});

describe('login with blank username and password', () => {
    it('should have a validation', () => {
        cy.login(' ',' ');
        cy.checkRequiredUsernamePassword();
    });
});
