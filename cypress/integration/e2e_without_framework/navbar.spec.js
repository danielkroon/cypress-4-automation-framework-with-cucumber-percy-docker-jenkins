describe('Navbar Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should display online banking content', () => {
		cy.get('#onlineBankingMenu').click()
		cy.get('h1').shou('Online Banking')
		cy.url.should('include', 'online-banking.html')
	})

	it('should display feedback content', () => {
		cy.get('#feedback').click()
		cy.get('h3').contains('Feedback')
		cy.url.should('include', 'feedback.html')
	})

	it('should display homepage content', () => {
		cy.contains('Zero Bank').click()
		cy.get('#homeMenu').should('be.visible')
		cy.url.should('include', 'index.html')
	})
})
