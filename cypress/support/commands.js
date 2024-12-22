Cypress.Commands.add('login', (Username, Password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[placeholder="Username"]').type(Username || '');
    cy.get('input[placeholder="Password"]').type(Password || '');
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('checkInvalidCredentials', () => {
  cy.get('.oxd-alert-content--error')
    .find('p')
    .should('have.text', 'Invalid credentials');
});

Cypress.Commands.add('checkRequiredUsername', () => {
    cy.get('.oxd-input-field-error-message')
    .first()
    .should('have.text', 'Required'); 
});

Cypress.Commands.add('checkRequiredPassword', () => {
    cy.get('.oxd-input-field-error-message')
    .last()
    .should('have.text', 'Required'); 
});

Cypress.Commands.add('checkRequiredUsernamePassword', () => {
    cy.get('.oxd-input-field-error-message').eq(0).should('have.text', 'Required');
    cy.get('.oxd-input-field-error-message').eq(1).should('have.text', 'Required');
});
