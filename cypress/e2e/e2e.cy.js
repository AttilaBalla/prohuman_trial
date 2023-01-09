/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('prohuman trial assignment', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('displays 10 table row by default', () => {
        cy.get('[data-cy="table-row"]').should('have.length', 10)
    })

    it('header has the right number of columns', () => {
        cy.get('[data-cy="header-column"]').should('have.length', 7)
    })

    it('2 filters are present and have correct labels', () => {
        cy.get('[data-cy="filter-switch"]')
            .should('have.length', 2)
            .first().should('have.text', 'Males only')

        // need to get again due to detaching...
        cy.get('[data-cy="filter-switch"]')
            .last().should('have.text', 'Females only')
    })

    it('Male filter switch works correctly', () => {
        cy.get('[data-cy="filter-switch"]').first().click()
        cy.get('[data-cy="gender-column"]').each(($col) => {
            expect($col).to.have.text('male')
        })
    })

    it('Female filter switch works correctly', () => {
        cy.get('[data-cy="filter-switch"]').last().click()
        cy.get('[data-cy="gender-column"]').each(($col) => {
            expect($col).to.have.text('female')
        })
    })
})
