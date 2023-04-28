/// <reference types="cypress" />

describe('Google search', () => {
    beforeEach(() => {
        // "Visitei o Google.com"
        cy.visit('http://google.com')
    })

    it('Busca por "Signal Wire" (uid:460655e4-31d3-4f74-bd82-b80092e24444)"', () => {
        cy.get('[name="q"]')
            .type(`Signal Wire`).type('{enter}')

        cy.get('#search')
            .should('contain', 'SignalWire')
    })

    it('Busca por `Signal Wire` e clica Search (uid:512c5740-d0e0-446b-b4d0-55c51e37cd11)', () => {
        cy.get('[name="q"]')
            .type('Signal Wire')

        //cy.get('#main').click(2, 2) //workaround to remove the span from button

        cy.get('[name="btnK"]').eq(0)
            .click()

        cy.get('#search')
            .should('contain', 'SignalWire')
    })

    it('Estou com sorte `Signal Wire` (uid:bf35f14b-a7d4-461e-95ec-9d9f374c5c48)', () => {
        cy.get('[name="q"]')
            .type('Signal Wire')

        //cy.get('#main').click(2, 2) //workaround to remove the span from button

        cy.get('[name="btnI"]').eq(0)
            .click()


        cy.get('.theme-dark > .mb-3')
            .should('contain', 'Software-Defined') // main page
    })
})

// TBD: parametrize the button click
function clicar_busca(btn) {
    switch (btn) {
        case 'Pesquisa Google':
            cy.get('.FPdoLc').find('[name="btnK"]').click();
            break;
        case 'Estou com sorte':
            cy.get('.FPdoLc').find('[name="btnI"]').click();
            break;
        default:
            cy.get('.FPdoLc').find('[name="btnK"]').click();
    }
}