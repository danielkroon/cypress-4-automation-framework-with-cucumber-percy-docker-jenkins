describe('Visual Regression - Login Page', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.fixture('users').then(users => {
			const username = users.invalidUsername
			const password = users.invalidPassword
			cy.login(username, password)
		})
	})

	it('desktop layout', () => {
		cy.setResolution([1280, 720])
		cy.matchImageSnapshot()
	})

	it('tablet layout', () => {
		cy.setResolution('ipad-2')
		cy.matchImageSnapshot()
	})

	it('mobile layout', () => {
		cy.setResolution('iphone-6')
		cy.matchImageSnapshot()
	})
})

// npx cypress run --spec="cypress/integration/visual_test/login.spec.js"
