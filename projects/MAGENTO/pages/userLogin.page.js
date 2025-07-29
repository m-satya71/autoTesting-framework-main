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
  async enterPasswordAndConfirmPasswordOnFied(){
  try {
    const randomPassword = `Password${Math.floor(Math.random() * 1000)}`;
    await page.locator(userSingupLocators.newUser.userPassword).fill(randomPassword);
    await page.locator(userSingupLocators.newUser.userConfirmPassword).fill(randomPassword);
    this.latestPassword = randomPassword;

    // Ensure testData directory exists
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
    await page.waitForTimeout(2000);
    console.log('Password and confirm password entered successfully.');
  } catch (error) {
    console.error('Error entering password and confirm password:', error.message);
    throw error;
  }
}
}
module.exports = {UserLogin};