describe('Testing a canvas chart', () => {
	it('test 2017 bar', () => {
		cy.visit('https://demo.applitools.com/hackathonChartV2.html')
		cy.window().then(win => {
			// 2017 datasets
			let january2017Data = win.myBar.data.datasets[0].data[0]
			expect(january2017Data).to.equal(10)
		})
	})
	it('test 2018 february bar', () => {
		cy.visit('https://demo.applitools.com/hackathonChartV2.html')
		cy.window().then(win => {
			// 2018 datasets
			let january2018Data = win.myBar.data.datasets[1].data[1]
			expect(january2018Data).to.equal(9)
		})
	})
})
