const testData = require('../../fixtures/testData.json')

describe('Test if Sales and Gross Sales amount from testData.xlsx file have the same amounts', () => {
	testData.forEach(testDataRow => {
		const data = {
			profit: testDataRow.Profit,
			sales: testDataRow.Sales,
		}

		context(`Generating a test for ${data.profit}`, () => {
			it('should have the same', () => {
				expect(`${data.sales}`).to.equal(data.profit)
			})
		})
	})
})
