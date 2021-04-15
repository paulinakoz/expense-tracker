describe('Testing expense tracker', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('shows the heading on the page', () => {
        cy.contains('Expense Tracker')
    })

    it('shows the balance on the page', () => {
        cy.get('#balance').contains('Your balance')
    })

})