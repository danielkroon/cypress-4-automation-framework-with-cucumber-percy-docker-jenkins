// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
import '@percy/cypress'

Cypress.Commands.add('login', (username, password) => {
	cy.clearCookies()
	cy.clearLocalStorage()
	cy.get('#user_login').type(username)
	cy.get('#user_password').type(password)
	cy.contains('Sign in').click()
})

addMatchImageSnapshotCommand({
	failureTreshold: 0.0,
	failureTresholdType: 'percent',
	customDiffConfig: { treshold: 0.0 },
	capture: 'viewport',
})

Cypress.Commands.add('setResolution', size => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})

// TODO best practice but doesn't work yet
Cypress.Commands.add('noUiLogin', (username, password) => {
	cy.request({
		method: 'POST',
		url: 'http://zero.webappsecurity.com/signin.html',
		body: {
			form: {
				user_login: 'username',
				user_password: 'password',
			},
		},
	}).then(resp => {
		window.localStorage.setItem('jwt', resp.body.form.token)
	})
})
