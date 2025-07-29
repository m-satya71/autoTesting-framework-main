// Import Playwright testing framework
const { test, expect } = require('@playwright/test');
// Import locators
const userSingupLocators = require('../locators/userSignup.elements.js');
// Import the UserSignUp class
const fs = require('fs');
const path = require('path');

// Import Cucumber utilities
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);




class UserSignUp {


async goTo() {

    try {
    const url = process.env.TEST_DEMO_URL;
    console.log(`Navigating to: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle');
    console.log('Navigation successful.');
  } catch (error) {
    console.error('Error in goTo():', error);
    throw error;
 
  }
}
  
    /**
     * @author: Mavuri
     * @Function_Name: CreateNewUser on magento site
     * @Description: This function creates a new user on the Magento site by filling in the
     * @param:  none
     * @returns: none
     */
async clickOnCreateAnAccountHyperLink(linkName) {
  try {
  if (linkName === "Create an Account") {
    // Click on the "Create an Account" button
    console.log('on Create an Account hyperlink......');
    await page.locator(userSingupLocators.newUser.createAnAccLink).nth(0).click();
    console.log('Clicked on Create an Account hyperlink.');
    //Dismiss any pop-up window if it appears
    const dismissButton = await page.locator(userSingupLocators.newUser.windowDismiss);
     if (await dismissButton.isVisible()) {
    //   await dismissButton.click();
    //   await page.waitForTimeout(2000); // Wait for the pop-up to be dismissed
    //   console.log('Dismissed the pop-up window.');
     
    await dismissButton.click({ force: true });
  }
  }
  } catch (error) {
    console.error('Error clicking on Create an Account element:', error.message);
    throw error;
  }
  }

async entetFirstNameOnField(){
try {
// Enter the first name in the input field
  console.log('Entering first name...');
  const randomFirstName = `satya${Math.floor(Math.random() * 10)}`;
  console.log(randomFirstName);
  await page.locator(userSingupLocators.newUser.userFirstName).fill(randomFirstName);

} catch (error) {
  console.error('Error entering first name:', error.message);
  throw error;
}
}
async enterLastMameOnField(){
  try{
  // Enter the last name in the input field
  console.log('Entering last name...');
  const randomLastName = `mavuri${Math.floor(Math.random() * 10)}`;
  console.log(randomLastName);
  await page.locator(userSingupLocators.newUser.userLastName).fill(randomLastName);
  }catch(error){
  console.error('Error entering last name:', error.message);
  throw error;
  }
}
async enterEmailIdOnField(){

  try{
  // Enter a unique email ID in the input field
  console.log('Entering email ID...');
  const randomEmail = `Satya${Math.floor(Math.random() * 1000)}@example.com`;
  console.log(randomEmail);
  await page.locator(userSingupLocators.newUser.userEmailId).fill(randomEmail);
  this.latestEmail = randomEmail;
}catch(error){
    console.error('Error entering email ID:', error.message);
    throw error;
  }
}
async enterPasswordAndConfirmPasswordOnFied() {
  try {
    console.log('Entering password and confirm password...');
    const randomPassword = `Password${Math.floor(Math.random() * 1000)}`;
    await page.locator(userSingupLocators.newUser.userPassword).fill(randomPassword);
    await page.locator(userSingupLocators.newUser.userConfirmPassword).fill(randomPassword);
    this.latestPassword = randomPassword;

    // Ensure testData directory exists before writing the file
    const testDataDir = path.join(__dirname, '../../testData');
    if (!fs.existsSync(testDataDir)) {
      fs.mkdirSync(testDataDir, { recursive: true });
    }

    // Save credentials to file
    fs.writeFileSync(
      path.join(testDataDir, 'latestSignup.json'),
      JSON.stringify({ email: this.latestEmail, password: this.latestPassword })
    );

    await page.locator(userSingupLocators.newUser.userConfirmPassword).scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the fields are filled
    console.log('Password and confirm password entered successfully.');
  } catch (error) {
    console.error('Error entering password and confirm password:', error.message);
    throw error;
  }
}
  
async clickOnCreateAnAccountBtn(creationBtn){
  try{
  if (creationBtn === "Create an Account button") {
  // Click on the "Create an Account" button
  console.log('Clicking on Create an Account button...');
  await page.locator(userSingupLocators.newUser.creteAccLinkBtn).first().click();
  }
  }catch(error){
    console.error('Error clicking on Create an Account button:', error.message);
    throw error;
  }

  }
async verifyUserRedirectedDashboard(){
    try {
      // Verify that the user is redirected to the myaccount
      console.log('Verifying user redirection to dashboard...');
      const dashboardTitle = await page.locator(userSingupLocators.newUser.dashBoard).textContent();
      console.log('Dashboard title:', dashboardTitle);
      expect(dashboardTitle).toContain('My Account');
      console.log('User successfully redirected to the myaccount.');
    } catch (error) {
      console.error('Error verifying user redirection to myaccount:', error.message);
      throw error;
    }
  
  }
   
 
  async logoutFromTheApplication() {
    try {
      console.log('Logging out from the application...');
      // Check if the exit sale button is visible
        await page.locator(userSingupLocators.newUser.arrowBtn).first().click();
        await page.locator(userSingupLocators.newUser.logoutLink).first().click();
        await page.waitForTimeout(10000);
        console.log('User logged out successfully.');
    } catch (error) {
      console.error('Error in logoutFromTheApplication:', error.message);
      throw error;
    }
  }

async closeTheCurrentBrowser() {
  try {
    await page.close();
    console.log('Browser closed successfully.');
  } catch (error) {
    console.error('Error in closeTheCurrentBrowser:', error.message);
    throw error;
  }
}




}module.exports={UserSignUp};