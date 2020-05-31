# cypress-4-automation-framework-with-cucumber-percy-docker-jenkins

## Dynamically generate data from CSV or XLS files

To convert Excel files to JSON: `npm run convertXLStoJSON`

- File:- `testData/convertXLStoJSON.ts`
- Input:- `testData/testData.xlsx`
- Output:- `cypress/fixtures/testData.json`

## Run a test headless

For example:
npx cypress run --spec="cypress/integration/exercises/scroll.spec.js"

## Run a test headless with Cypress Dashboard

For example:
npx cypress run --spec="cypress/integration/cucumber-tests/\*" --record --key 40d2123d-5a9e-46f4-9f37-86e262a1932b

# Start Jenkins

npm run start-jenkins-server
and visit: http://localhost:8080/login?from=%2F
