describe('Feedback Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.contains('Feedback').click()
	})

	it('should load feedback form', () => {
		cy.get('form').should('be.visible')
	})

	it('should fill feedback form', () => {
		cy.get('#name').type('Daniel')
		cy.get('#email').type('daniel@email.com')
		cy.get('#subject').type('this is a subject')
		cy.get('#comment').type('this is a comment')
	})

	it('should submit feedback form', () => {
		cy.get('[name=submit]').click()
	})

	it('should display feedback message', () => {
		cy.get('#feedback-title').contains('Feedback')
	})
})
