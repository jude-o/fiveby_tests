var fiveby = require('fiveby');
var LoginPage = require('../components').LoginPage;


fiveby(function (browser) {
	return describe('Confirm login works in ' + browser.name, function() {
		return it('Should successfully login with test credentials', function (){
			console.log(LoginPage.url);
			LoginPage.visit();
			

		});
	});
});