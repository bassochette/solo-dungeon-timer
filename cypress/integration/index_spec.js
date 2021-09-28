describe('Index', () => {
  describe('responsive loads', () => {

    it('iphone 6 - portrait', () => {
      cy.viewport("iphone-6", 'portrait');
      cy.visit('/');
      cy.get(`[data-cy='timer']`).should('be.visible');
      cy.get(`[data-cy='open-dg']`).should('be.visible');
      cy.get(`[data-cy='closed-dg']`).should('not.exist');
      cy.get(`[data-cy='start']`).should('be.visible');
      cy.get(`[data-cy='cancel']`).should('not.exist');

    });

    it('iphone 6 - landscape', () => {
      cy.viewport("iphone-6", 'landscape');
      cy.visit('/');
      cy.get(`[data-cy='timer']`).should('be.visible');
      cy.get(`[data-cy='open-dg']`).should('be.visible');
      cy.get(`[data-cy='closed-dg']`).should('not.exist');
      cy.get(`[data-cy='start']`).should('be.visible');
      cy.get(`[data-cy='cancel']`).should('not.exist');
    })

  })

});
