describe('Write / Read Data to JSON / Text file', () => {
	it('should wrtie data int JSON', () => {
		cy.writeFile('cypress/fixtures/log.json', { name: 'Mike', age: 25 })
	})

	it('should write dtat to the text file', () => {
		cy.writeFile('cypress/fixtures/log.txt', 'Hello World')
	})

	it('should read and verify data from JSON file', () => {
		cy.readFile('cypress/fixtures/log.json')
			.its('age')
			.should('eq', 25)
	})

	it('should read and verify data from the text file', () => {
		cy.readFile('cypress/fixtures/log.txt').should('eq', 'Hello World')
	})

	it('should read and verify browser document content', () => {
		cy.visit('https://www.example.com')
		cy.document()
			.its('contentType')
			.should('eq', 'text/html')

		cy.document()
			.should('have.property', 'charset')
			.and('eq', 'UTF-8')
	})
})
