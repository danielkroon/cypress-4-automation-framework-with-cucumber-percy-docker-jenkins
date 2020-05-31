import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage'

Given('I open feedback page', () => {
	FeedbackPage.visit()
})

When('I fill feedback form', () => {
	FeedbackPage.fillFeedbackForm()
})

When('I click on send button', () => {
	FeedbackPage.submitFeedbackForm()
})
