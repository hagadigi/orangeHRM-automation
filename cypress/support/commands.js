Cypress.Commands.add('login', (Username, Password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {setTimeout: 10000});
    cy.get('input[placeholder="Username"].oxd-input--active',  { timeout: 60000 }).type(Username || '');
    cy.get('input[placeholder="Password"]',  { timeout: 60000 }).type(Password || '');
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('registerPage', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {setTimeout: 10000});
    cy.get('.orangehrm-login-forgot').click();
});

Cypress.Commands.add('recruitmentPage', () =>{
    cy.get('button[type="button"].oxd-icon-button--info', {timeout: 60000}).click();
    cy.intercept('GET','**/v2/recruitment/candidates**').as('shortListed');
    cy.wait('@shortListed').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    });
})

Cypress.Commands.add('addRecruiterPage', (firstName, middleName, lastName, listJob, emailContact, numberContact, noteText) => {
    cy.get('button[type=button].oxd-button--secondary').last().click();
    cy.get('input[name=firstName].orangehrm-firstname').type(firstName);
    cy.get('input[name=middleName].orangehrm-middlename').type(middleName);
    cy.get('input[name=lastName].orangehrm-lastname').type(lastName);
    cy.get('.oxd-select-wrapper').click(); 
    cy.get('.oxd-select-dropdown div').eq(listJob) .click(); 
    cy.get('input[placeholder="Type here"]').first().type(emailContact);
    cy.get('input[placeholder="Type here"]').last().type(numberContact);
    cy.get('.oxd-textarea').type(noteText);
    cy.get('.oxd-checkbox-input-icon').click();
    cy.get('button[type="submit"]').click();
    cy.intercept('GET','**/recruitment/candidates/**').as('addRecruiters');
    cy.wait('@addRecruiters').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    });
});

Cypress.Commands.add('dashboardPanelCheck', () => {
    cy.get('.oxd-topbar-header-breadcrumb-module').should('contain', 'Dashboard');
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
