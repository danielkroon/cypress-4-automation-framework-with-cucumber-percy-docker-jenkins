const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const COMMENT_INPUT = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]'

class FeedbackPage {
	static visit() {
		cy.visit(URL)
	}

	static fillFeedbackForm() {
		cy.get(NAME_INPUT).type('Name')
		cy.get(EMAIL_INPUT).type('daniel@email.com')
		cy.get(SUBJECT_INPUT).type('This is a subject')
		cy.get(COMMENT_INPUT).type('This is a comment')
	}

	static submitFeedbackForm() {
		cy.get(SUBMIT_BUTTON).click()
	}
}

export default FeedbackPage
