describe('assertions', () => {
	it('retry until we find 5 matching selected lists', () => {
		cy.get('li.selected').should('have.length', 5)
	})

	it('retry until input does not have class disabled', () => {
		cy.get('form')
			.find('input')
			.should('not.have.class', 'disabled')
	})

	it('retry until textarea has the correct value', () => {
		cy.get('textarea').should('have.value', 'Placeholder')
	})

	it('retry until span does not contain Click Me', () => {
		cy.get('a')
			.parent('span')
			.should('not.contain', 'click me')
	})

	it('retry until button is visible', () => {
		cy.get('button').should('be.visible')
	})

	it('retry until loading spinner no longer exist', () => {
		cy.get('#spinner').should('not.exist')
	})
})
