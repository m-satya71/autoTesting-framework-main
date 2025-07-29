const { SearchItemDetails, UserSignUp } = require('./userSignup.page.js');
const { CartItemsPage, UserLogin } = require('./userLogin.page.js');

/**
 * POManager class is responsible for managing different page objects related to the UserSignUp and UserLogin process.
 * It provides methods to access various page objects required in the workflow.
 */
class POManager {
  constructor(page) {
    this.page = page;
    this.newuserrecordpage = new UserSignUp(this.page);
    this.loginpage = new UserLogin(this.page);
    
  }
  // Getter methods to access the individual page objects
 
  getNewUserPage() {
    return this.newuserrecordpage;
  }
  getLoginPage() {
    return this.loginpage;
  }
   

  
}
module.exports = { POManager };
