describe("My first test", () => {
  it("Is simple", () => {
    expect(true).to.equal(true);
    cy.visit("https://loving-shaw-92e440.netlify.app/");
    cy.contains("Sailor")

    cy.contains("sign-up")
      .click();

    cy.url().should('include', '/sign-up')
  })
})