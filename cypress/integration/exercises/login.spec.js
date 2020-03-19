describe('Working with inputs', () => {
	it('should override the current time', () => {
		const date = new Date(2020, 3, 10).getTime() // return a timestamp
		cy.clock(date) // uses the date variable we created above
		cy.log(date)
	})
	it('shoud load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		// logs into Cypress to inform tester that cookies and local storage is cleared
		cy.clearCookies({ log: true })
		cy.clearLocalStorage({ log: true })
		cy.title().should('include', 'Zero - Log in')
	})
	it('should fill in username', () => {
		cy.get('#user_login').as('username')
		cy.get('@username').clear()
		cy.get('@username').type('Some invalid name')
	})
	it('should fill password', () => {
		cy.get('#user_password').as('password')
		cy.get('@password').clear()
		// Dont use delay in your production framework. This is just for testing purposes only.
		cy.get('@password').type('Some invalid name', { delay: 50 })
	})
	it('should mark checkbox', () => {
		cy.get('input[type="checkbox"]').click()
	})
	it('should submit the login form', () => {
		cy.contains('Sign in').click()
	})
	it('should display error message', () => {
		cy.get('.alert')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong')
	})
})
