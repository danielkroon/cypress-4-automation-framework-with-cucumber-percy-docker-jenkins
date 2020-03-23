describe('Xpaths with Cypress example', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should click on element using xpath', () => {
		cy.xpath('//button[contains(@class,"signin btn")]').should('be.visible')
		cy.xpath('//button[contains(@class,"signin btn")]').click()
	})
	it('should display login form', () => {
		cy.xpath('//form').should('have.length', 1)
	})
})
