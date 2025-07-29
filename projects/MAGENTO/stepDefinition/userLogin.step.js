// Import Cucumber methods
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
// Import the Page Object Manager
const { POManager } = require('../pages/poManager.page.js');
// Set default timeout for Cucumber steps
setDefaultTimeout(60 * 1000);
// Initialize the Page Object Manager
const poManager = new POManager();

Then('Click on the Sign In link on homepage', async function () {
  await poManager.loginpage.clickOnSignInLink();
});
Then('Enter registered Email and Password dynamically from script', async function () {
  await poManager.loginpage.enterUserCredentials();
});
Then('Click on {string} button', async function () {
  await poManager.loginpage.clickOnSignBtn()
});

Then('Verify the user is logged in and the dashboard is displayed', async function () {
  await poManager.loginpage.verifyDashboardOnLoggedInPage();
});
