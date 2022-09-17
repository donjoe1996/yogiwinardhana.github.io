describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Display three social media in Hero Section', () => {
    cy.wait(500)
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('#hero').find('.test-social-section a').should('have.length', 3)

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    // .get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  it('Display four social media in Contact Section', () => {
    cy.wait(500)
    cy.get('#contact').find('.test-social-section a').should('have.length', 4)
  })
})