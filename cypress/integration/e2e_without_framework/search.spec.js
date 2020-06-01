describe('Searchbox Test', () => {
	before(function() {
		cy.visit('https://devexpress.github.io/testcafe/example/')
	})

	it('should type into searchbox and submit viewt pressing enter', () => {
		cy.get('#searchTerm').type('some text {enter}')
	})

	it('should show search results page', () => {
		cy.get('h2').contains('Search Results:')
	})
})
