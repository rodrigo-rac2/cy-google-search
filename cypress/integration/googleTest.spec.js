/// <reference types="cypress" />

context('Google search', () => {
    beforeEach(() => {
        cy.visit('http://google.com')
    })

    it('Search for "Signal Wire" (uid:460655e4-31d3-4f74-bd82-b80092e24444)"', () => {
        cy.get('[type="text"]')
            .type(`Signal Wire`).type('{enter}')

        cy.get('#search')
            .should('contain', 'SignalWire')
    })

    it('Search for `Signal Wire` and press Search (uid:512c5740-d0e0-446b-b4d0-55c51e37cd11)', () => {
        cy.get('[type="text"]')
            .type('Signal Wire')

        cy.get('#main').click(2, 2) //workaround to remove the span from button

        cy.get('.FPdoLc').find('[name="btnK"]')
            .click()

        cy.get('#search')
            .should('contain', 'SignalWire')
    })

    it('Feeling lucky `Signal Wire` (uid:bf35f14b-a7d4-461e-95ec-9d9f374c5c48)', () => {
        cy.get('[type="text"]')
            .type('Signal Wire')

        cy.get('#main').click(2, 2) //workaround to remove the span from button

        cy.get('.FPdoLc').find('[name="btnI"]')
            .click()

        cy.get('.sw-primary')
            .should('contain', 'Smarter') // main page
    })
})
