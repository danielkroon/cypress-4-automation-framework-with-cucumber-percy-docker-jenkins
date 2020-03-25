class BasePage {
	static loadHomepage() {
		cy.visit('https://devexpress.github.io/testcafe/example/')
	}

	static wait(number) {
		cy.wait(number)
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView()
	}

	static scrollToTop() {
		cy.get('header').scrollIntoView()
	}
}

describe('Abastaction with Classes', () => {
	before(function() {
		// runs once before all tests in the describe block
		// setup test data or test context
		// seed or reset the database
		HomePage.loadHomepage()
	})

	after(function() {
		// runs after all tests inside describe block are done
		// test clean up or
		// clean cookies or localStorage
	})

	beforeEach(function() {
		// runs before each 'it' test in the block
	})

	afterEach(function() {
		// runs after each it' test in the block
	})

	it.only('should scroll down and up on the page 1st', () => {
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(3000)
	})

	it('should scroll down and up on the page 2nd', () => {
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(3000)
	})
})
