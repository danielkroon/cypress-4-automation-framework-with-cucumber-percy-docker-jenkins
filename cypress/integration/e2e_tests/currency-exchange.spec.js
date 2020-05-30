describe('Currency Exchange Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.fixture('users').then(users => {
			const username = users.validUsername
			const password = users.validPassword
			cy.login(username, password)
		})
	})

	it('should fill conversion form', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Purchase Foreign Currency').click()
		cy.get('#pc_currency').select('GBP')
		cy.get('#pc_amount').type('2000')
		cy.get('#pc_inDollars_true').click()
		cy.get('#pc_calculate_costs').click()
	})

	it('should display conversion amount', () => {
		cy.get('#pc_conversion_amount').should(
			'contain',
			'1180.50 pound (GBP) = 2000.00 U.S. dollar (USD)'
		)
	})
})
