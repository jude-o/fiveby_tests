module.exports = LoginPage;

    function LoginPage(browser){
      this.browser = browser;
      // Check that we're on the right page.
      if ("Login - 4Life Research USA, LLC - Together Building People [Resource Me]" !== browser.getTitle()) {
        // Alternatively, we could navigate to the login page, perhaps logging out first
        throw new IllegalStateException("This is not the login page");
      }
    }

    LoginPage.url = "http://www.4-life.com";
    // The login page contains several HTML elements that will be represented as WebElements.
    // The locators for these elements should only be defined once.
    LoginPage.usernameLocator = by.css(".Username");
    LoginPage.passwordLocator = by.css(".Password");
    LoginPage.loginButtonLocator = by.css(".Login");

    //methods - should return promises whenever possible to allow for chaining

    LoginPage.visit = function(){
      return this.browser.get(this.url);
    }

    // The login page allows the user to type their username into the username field
    LoginPage.typeUsername = function(username){
      // This is the only place that "knows" how to enter a username
      return this.browser.findElement(this.usernameLocator).sendKeys(username);
    }

    LoginPage.typePassword = function(password){
      return this.browser.findElement(this.passwordLocator).sendKeys(password);
    }

    LoginPage.submitLogin = function(){
      return this.browser.findElement(this.loginButtonLocator).click();
    }

    // Conceptually, the login page offers the user the service of being able to "log into"
    // the application using a user name and password.
    LoginPage.loginAs = function(username, password) {
      // The PageObject methods that enter username, password & submit login have already defined and should not be repeated here.
      this.typeUsername(username);
      this.typePassword(password);
      return this.submitLogin();
    }