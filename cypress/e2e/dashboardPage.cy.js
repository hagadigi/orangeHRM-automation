describe('Dashboard Page', () => {
    
    context('Go to Recruitment Page', () => {
        it('should be directed to Recruitment and showing candidates', () => {
            cy.login('admin','admin123')
            cy.recruitmentPage();
        });
    });

    context('Add a new Recruiters', () => {
        it('should be successfully add a new recruiters', () => {
            cy.login('admin','admin123');
            cy.recruitmentPage();
            cy.addRecruiterPage('awal', 
                'tengah',
                'akhir',
                2,
                'test@gmail.com',
                '085281225102',
                'ini adalah note untuk recruiter'
            );
        });
    });
    
});