describe('Index', () => {
  describe('responsive loads', () => {
    function responsiveTest(target) {
      cy.viewport(target, 'portrait');
      cy.visit('/');
      cy.get(`[data-cy='timer']`).should('be.visible');
      cy.get(`[data-cy='open-dg']`).should('be.visible');
      cy.get(`[data-cy='closed-dg']`).should('not.exist');
      cy.get(`[data-cy='start']`).should('be.visible');
      cy.get(`[data-cy='cancel']`).should('not.exist');

      cy.viewport(target, 'landscape');
      cy.visit('/');
      cy.get(`[data-cy='timer']`).should('be.visible');
      cy.get(`[data-cy='open-dg']`).should('be.visible');
      cy.get(`[data-cy='closed-dg']`).should('not.exist');
      cy.get(`[data-cy='start']`).should('be.visible');
      cy.get(`[data-cy='cancel']`).should('not.exist');
    }
    it('iphone 6', () => {
      responsiveTest('iphone-6')
    });
    it('macbook 13', () => {
      responsiveTest('macbook-13')
    })
    it('macbook 16', () => {
      responsiveTest('macbook-16')
    })
  })

});
