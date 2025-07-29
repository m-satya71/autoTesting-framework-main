// Import Cucumber methods
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
// Import the Page Object Manager
const { POManager } = require('../pages/poManager.page.js');
// Set default timeout for Cucumber steps
setDefaultTimeout(60 * 1000);
// Initialize the Page Object Manager
const poManager = new POManager();

Given('Launch the Magento website', async function () {
  await poManager.newuserrecordpage.goTo();
});
When('Click on the {string} link', async function (linkName) {
  await poManager.newuserrecordpage.clickOnCreateAnAccountHyperLink(linkName);
});
Then('Enter First Name dynamically from script', async function () {
  await poManager.newuserrecordpage.entetFirstNameOnField();
});
Then('Enter Last Name dynamically from script', async function () {
  await poManager.newuserrecordpage.enterLastMameOnField();
});
Then('Enter a unique Email ID dynamically from script', async function () {
  await poManager.newuserrecordpage.enterEmailIdOnField();
});
Then('Enter Password and Confirm Password dynamically from script', async function () {
  await poManager.newuserrecordpage.enterPasswordAndConfirmPasswordOnFied();
});

Then('Click on {string}', async function (creationBtn) {
  await poManager.newuserrecordpage.clickOnCreateAnAccountBtn(creationBtn);
});
Then('Verify the user is redirected to the My Account dashboard', async function () {
  await poManager.newuserrecordpage.verifyUserRedirectedDashboard();
});
Then('Close the browser', async function () {
  await poManager.newuserrecordpage.closeTheCurrentBrowser();
});
Then('Logout from application', async function () {
  await poManager.newuserrecordpage.logoutFromTheApplication();
});
