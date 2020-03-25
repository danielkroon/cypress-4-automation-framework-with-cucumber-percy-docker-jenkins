describe('Custom Commands', () => {
	it('should login to application using custom cypress command', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.login('usename', 'password')
	})
})
