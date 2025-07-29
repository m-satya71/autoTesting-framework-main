//Import Playwright testing framework
const { test, expect } = require('@playwright/test');
// Import locators
const userLoginLocators = require('../locators/userLogin.elements.js');

const fs = require('fs');
const path = require('path');
const credPath = path.join(__dirname, '../../testData/latestSignup.json');


class UserLogin {
  /**
   * @author: Satya
   * @Function_Name: goTo
   * @Description: Launch the site from different environments (PROD, TRAINING)
   * @Params: none
   * @returns: none
   */
 

  async clickOnSignInLink() {
    try {
      // Click on the "Sign In" link
      console.log('on Sign In hyperlink......');
      await page.locator(userLoginLocators.loginUser.userSignBtn).nth(0).click();
      console.log('Clicked on Sign In hyperlink.');
    } catch (error) {
      console.error('Error clicking on Sign In element:', error.message);
      throw error;
    }
  }
  async enterUserCredentials(){
  try {
    // Check if the credentials file exists
    if (!fs.existsSync(credPath)) { 
      throw new Error('Signup credentials file not found. Run the signup scenario first.');
    }
    // Read the credentials from the file
    const credentials = JSON.parse(fs.readFileSync(credPath, 'utf-8'));
    // Enter the email and password from the credentials file
    console.log('Entering user credentials...');
    await page.locator(userLoginLocators.loginUser.userEmail).fill(credentials.email);
    await page.locator(userLoginLocators.loginUser.userPassword).fill(credentials.password);
    console.log('User credentials entered successfully.');
    // Wait for a short duration to ensure the fields are filled
    await page.waitForTimeout(2000);
    console.log('Waiting for 2 seconds after entering credentials.');
    // Click on the "Sign In" button

    console.log('Password and confirm password entered successfully.');
  } catch (error) {
    console.error('Error entering password and confirm password:', error.message);
    throw error;
  }
}
async clickOnSignInBtn() {
  try {
    // Click on the "Sign In" button
    console.log('Clicking on Sign In button...');
    await page.locator(userLoginLocators.loginUser.signInBtn).click();
    console.log('Clicked on Sign In button.');
  } catch (error) {
    console.error('Error clicking on Sign In button:', error.message);
    throw error;
  }
}

async verifyHomePage(){
    try {
      // Verify that the user is redirected to the myaccount
      console.log('Verifying user redirection to dashboard...');
      const homepageTitle = await page.locator(userLoginLocators.loginUser.homePage).textContent();
      console.log('Dashboard title:', homepageTitle);
      expect(homepageTitle).toContain('Home Page');
      console.log('User successfully redirected to the myaccount.');
    } catch (error) {
      console.error('Error verifying user redirection to myaccount:', error.message);
      throw error;
    }
  
  }
}
module.exports = {UserLogin};