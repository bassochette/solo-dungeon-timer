describe("Index", () => {
  it("Shoud load", () => {
    cy.visit("/");
    cy.get(`[data-cy='timer']`).should("be.visible");
    cy.get(`[data-cy='open-dg']`).should("be.visible");
    cy.get(`[data-cy='closed-dg']`).should("not.exist");
    cy.get(`[data-cy='start']`).should("be.visible");
    cy.get(`[data-cy='cancel']`).should("not.exist");
  });


});
