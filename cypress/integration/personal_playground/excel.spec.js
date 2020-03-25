const testData = require('../../fixtures/testData.json')

describe('Test if Sales and Gross Sales amount from testData.xlsx file have the same amounts', () => {
	testData.forEach(testDataRow => {
		const data = {
			sales: testDataRow.Sales,
			grossSales: testDataRow.GrossSales,
		}

		context(`Generating a test for ${data.sales}`, () => {
			it('should have the same', () => {
				expect(data.grossSales).to.equal(data.sales)
			})
		})
	})
})
