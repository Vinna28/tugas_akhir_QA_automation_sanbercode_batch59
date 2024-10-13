const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlertPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cartAlert () {
        return $('//*[@id="shopping_cart_container"]/a/span');
    }

    get loginErrorMessage () {
        return $('//*[@id="login_button_container"]/div/form/div[3]');
    }
}

module.exports = new AlertPage();