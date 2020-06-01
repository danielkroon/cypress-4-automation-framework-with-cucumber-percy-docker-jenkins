import { url } from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('login failed test', () => {
	before(function() {
		cy.visit(url)
		Navbar.clickSignIn()
	})

	it('should try to login with invalid credentials', () => {
		cy.fixture('users').then(users => {
			const username = users.invalidUsername
			const password = users.invalidPassword
			LoginPage.login(username, password)
		})
	})

	it('should display error message', () => {
		LoginPage.displayErrorMessage()
	})
})

describe('login success test', () => {
	before(function() {
		cy.visit(url)
		Navbar.clickSignIn()
	})

	it('should login into application', () => {
		cy.fixture('users').then(users => {
			const username = users.validUsername
			const password = users.validPassword
			LoginPage.login(username, password)
		})
	})
})
