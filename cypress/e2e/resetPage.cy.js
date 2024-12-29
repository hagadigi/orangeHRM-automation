describe('Forgot Account Page', () => {
    context('reset password', () => {
        it('should showing success message', () => {
            cy.registerPage();
            cy.get('input[placeholder="Username"].oxd-input--active').type('admin');
            cy.get('.oxd-button.oxd-button--large.orangehrm-forgot-password-button--reset').click();
            cy.get('.oxd-text--h6').should('contain.text', 'Reset Password link sent successfully');
        });
    });

    context('cancel forgot password', () => {
        it('should redirect to home successfully', () => {
            cy.registerPage();
            cy.get('.oxd-button.oxd-button--large.oxd-button--ghost.orangehrm-forgot-password-button--cancel').click();
        });
    }); 
}); 


    



