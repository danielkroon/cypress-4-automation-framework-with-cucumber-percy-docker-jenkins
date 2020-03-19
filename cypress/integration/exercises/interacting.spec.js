describe('Browser Actions', () => {
	it('should loak books website', () => {
		cy.visit('http://books.toscrape.com/index.html')
		// check if we are on the homepage
		cy.url().should('include', 'index.html')
		cy.log('Before Reload')
		cy.reload()
		cy.log('After Reload')
	})
	it('should click on Travel category', () => {
		cy.get('a')
			.contains('Travel')
			.click()
		cy.get('h1').contains('Travel')
	})
	it('should display correct number of books', () => {
		cy.get('.product_pod')
			.its('length')
			.should('eq', 11)
	})
})

// personal challenge
describe('Check the price of the Olio book', () => {
	it('should loak books website', () => {
		cy.visit('http://books.toscrape.com/index.html')
		// check if we are on the homepage
		cy.url().should('include', 'index.html')
	})
	it('should click on the Poetry category', () => {
		cy.get('a')
			.contains('Poetry')
			.click()
		cy.get('h1').contains('Poetry')
	})
	it('should click on the olio book', () => {
		cy.get('h3')
			.contains('Olio')
			.click()
	})
	it('should have a price of 23.88', () => {
		cy.get('.price_color').contains('23.88')
	})
})
