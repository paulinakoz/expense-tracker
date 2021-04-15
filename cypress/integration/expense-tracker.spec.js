describe('Testing expense tracker', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('shows the heading on the page', () => {
        cy.contains('Expense Tracker')
    })

    it('shows the balance on the page', () => {
        cy.get('#balance').contains('£555.00')
    })

    it('shows the income balance on the page', () => {
        cy.get('#money-plus').contains('+665.00')
    })

    it('shows the expenses balance on the page', () => {
        cy.get('#money-minus').contains('-110.00')
    })

    it('shows the history heading on the page', () => {
        cy.contains('History')
    })

    it('shows the add transaction heading on the page', () => {
        cy.contains('History')
    })

    it('shows the input bar for the transaction description', () => {
        cy.get("#description").should("have.attr", "placeholder", "Enter description...")
    })

    it('shows the input bar for the transaction amount', () => {
        cy.get("#amount").should("have.attr", "placeholder", "Enter amount...")
    })
})