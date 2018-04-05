describe("What are the 5 closest earthquakes to your chosen location?", () => {
  it("Should display and function correctly", () => {
      cy.visit("/AppPage.html");
      cy.title().should("contain", "Earthquake-Proximity-Site");
      cy.get("#mag3");
      cy.get("#mag5");
      cy.get("#google");
      cy.get("#secretID").click();
      
  });
});