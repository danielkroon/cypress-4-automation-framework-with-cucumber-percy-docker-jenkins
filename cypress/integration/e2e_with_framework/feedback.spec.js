import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('feedback test using fixtures', () => {
	before(function() {
		FeedbackPage.load()
	})

	it('should submit feedback form', () => {
		FeedbackPage.submitFeedback()
	})
})
