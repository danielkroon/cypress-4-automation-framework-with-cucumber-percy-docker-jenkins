describe('Working with inputs', () => {
	it('shoud load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
	})
	it('should fill in username', () => {
		cy.get('#user_login').clear()
		cy.get('#user_login').type('Some invalid name')
	})
	it('should fill password', () => {
		cy.get('#user_password').clear()
		// Dont use delay in your production framework. This is just for testing purposes only.
		cy.get('#user_password').type('Some invalid name', { delay: 50 })
	})
	it('should submit the login form', () => {
		cy.contains('Sign in').click()
	})
	it('should display error message', () => {
		cy.get('.alert').should('be.visible')
	})
})
