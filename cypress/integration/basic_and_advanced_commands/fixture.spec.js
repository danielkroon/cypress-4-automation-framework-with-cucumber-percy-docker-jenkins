describe('Login with Fixtures Data', () => {
	it('shoud try to login', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')

		cy.fixture('user').then(users => {
			const username = users.invalidUsername
			const password = users.invalidPassword

			cy.get('#user_login').type(username)
			cy.get('#user_password').type(password)
			cy.contains('Sign in').click()
		})
	})
})
