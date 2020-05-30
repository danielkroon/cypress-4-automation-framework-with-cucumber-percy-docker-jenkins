describe('visual regression - data tables', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.fixture('users').then(users => {
			const username = users.validUsername
			const password = users.validPassword
			cy.login(username, password)
		})
	})

	it('should load account activity', () => {
		cy.get('#account_activity_tab').click()
	})

	it('data table snapshot', () => {
		cy.matchImageSnapshot()
	})
})
