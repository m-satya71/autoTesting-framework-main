Feature: User Account Creation and Login on Magento Demo Site

  Background:
    The Magento demo site (https://magento.softwaretestingboard.com/) must be accessible.
    The user must navigate to the "Create an Account" page from the homepage.
    Valid test data should be available for first name, last name, email, and password.
    The system must allow creation of a new user account with valid data.
    The system must allow login with valid credentials.
    The system must display appropriate error messages for invalid or duplicate credentials.
    Test execution will be in headless or parallel mode using the automation framework.

@Signup @Regression @Demo
  Scenario: Verify user is able to create a new account successfully
    Given Launch the Magento website
    When  Click on the "Create an Account" link
    Then  Enter First Name dynamically from script
    Then  Enter Last Name dynamically from script
    Then  Enter a unique Email ID dynamically from script
    Then  Enter Password and Confirm Password dynamically from script
    Then  Click on "Create an Account button"
    Then  Verify the user is redirected to the My Account dashboard
    Then  Logout from application
    Then  Close the browser

@Login @Regression @Demo
  Scenario: Verify user is able to log in with valid credentials
    Given Launch the Magento website
    When  Click on the Sign In link on homepage
    Then  Enter registered Email and Password dynamically from script
    Then  Click on Sign In Button on Login page
    Then  Verify the user is redirected to the Home Page dashboard
    Then  Logout from application
    Then  Close the browser

 