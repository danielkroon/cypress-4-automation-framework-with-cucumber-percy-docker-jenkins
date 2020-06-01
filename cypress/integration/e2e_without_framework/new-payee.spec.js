describe('New Payee Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.fixture('users').then(users => {
			const username = users.validUsername
			const password = users.validPassword
			cy.login(username, password)
		})
	})

	it('should add new payee to the list', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Add New Payee').click()
		cy.get('#np_new_payee_name').type('Name')
		cy.get('#np_new_payee_address').type('Adress')
		cy.get('#np_new_payee_account').type('12341245')
		cy.get('#add_new_payee').click()
	})

	it('should show success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The new payee Name was successfully created')
	})
})
