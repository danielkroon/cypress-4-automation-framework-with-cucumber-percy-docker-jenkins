# cypress-4-automation-framework-with-cucumber-percy-docker-jenkins

## Dynamically generate data from CSV or XLS files

To convert Excel files to JSON: `npm run convertXLStoJSON`

- File:- `testData/convertXLStoJSON.ts`
- Input:- `testData/testData.xlsx`
- Output:- `cypress/fixtures/testData.json`

## Run a test headless

npx cypress run --spec="cypress/integration/exercises/scroll.spec.js"
