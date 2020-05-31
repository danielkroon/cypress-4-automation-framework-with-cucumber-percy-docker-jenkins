describe('visual regression testing with percy and cypress', () => {
	it('should take percy snapshot', () => {
		cy.visit('https://www.example.com')
		cy.wait(1000)
		cy.percySnapshot('Example')
	})
})
