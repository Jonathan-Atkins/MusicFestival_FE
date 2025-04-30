describe('Signup Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/signup')
  })

  it('allows a user to sign up and redirects to their schedule page', () => {
    const random = Math.floor(Math.random() * 100000)
    const email = `testuser${random}@example.com`

    cy.get('[data-cy="signup-first-name"]').type('John')
    cy.get('[data-cy="signup-last-name"]').type('Doe')
    cy.get('[data-cy="signup-email"]').type(email)
    cy.get('[data-cy="signup-username"]').type(`johndoe${random}`)
    cy.get('[data-cy="signup-birthday"]').type('1995-08-15')
    cy.get('[data-cy="signup-submit"]').click()

    // cy.url().should('include', '/users/')
    // cy.url().should('include', '/schedules/')
  })
})
