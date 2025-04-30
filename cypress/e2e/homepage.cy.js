describe('HomePage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/festivals', {
      statusCode: 200,
      body: {
        data: [
          {
            id: '1',
            attributes: {
              name: 'Lollapalooza',
              artists: ['Drake', 'Billie Eilish', 'Foo Fighters'],
              attendee_count: 5000
            }
          },
          {
            id: '2',
            attributes: {
              name: 'Coachella',
              artists: ['Kendrick Lamar', 'Lana Del Rey', 'Tame Impala'],
              attendee_count: 8000
            }
          }
        ]
      }
    }).as('getFestivals')

    cy.visit('http://localhost:5173')
  })

  it('displays the page header and all festival cards', () => {
    cy.get('[data-cy="page-header"]').should('contain', 'Available Festivals')
    cy.wait('@getFestivals')

    cy.get('[data-cy="festival-card"]').should('have.length', 2)

    cy.get('[data-cy="festival-card"]').first().within(() => {
      cy.get('[data-cy="festival-name"]').should('contain', 'Lollapalooza')
      cy.get('[data-cy="festival-artists"]').should('contain', 'Featuring: Drake, Billie Eilish, Foo Fighters')
      cy.get('[data-cy="festival-attendees"]').should('contain', '5000 attendees')
      cy.get('[data-cy="explore-button"]').should('contain', 'Explore Lineup')
    })
  })

  it('includes a clickable HAPPY FEET NavLink and Login button on homepage', () => {
    cy.get('.navbar-title').should('contain', 'HAPPY FEET').should('have.attr', 'href', '/')
    cy.get('.navbar-login').should('exist')
  })
})
