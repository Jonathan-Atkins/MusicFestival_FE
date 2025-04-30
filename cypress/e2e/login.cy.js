describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login')

    cy.intercept('GET', 'http://localhost:3000/api/v1/users/find?email=user1@example.com', {
      statusCode: 200,
      body: {
        data: {
          id: '1',
          type: 'user',
          attributes: {
            first_name: 'User',
            last_name: 'One',
            email: 'user1@example.com',
            username: 'userone',
            birthday: '1990-01-01',
            schedule_id: 1
          }
        }
      }
    }).as('findUser')
  })

  it('logs in successfully with valid email', () => {
    cy.get('[data-cy="login-input"]').type('user1@example.com')
    cy.get('[data-cy="login-button"]').click()

    cy.wait('@findUser')
    cy.url().should('include', '/users/1/schedules/1')
    cy.window().its('localStorage.user').should('include', 'user1@example.com')
  })

  it('shows alert for invalid email', () => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/users/find?email=invalid@example.com', {
      statusCode: 404,
      body: { error: 'User not found' }
    })

    cy.get('[data-cy="login-input"]').type('invalid@example.com')
    cy.get('[data-cy="login-button"]').click()

    cy.on('window:alert', (text) => {
      expect(text).to.eq('User not found. Please sign up.')
    })
  })
})
