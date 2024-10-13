const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */

    get checkoutButton () {
        return $('#checkout');
    }

    get inputFirstName () {
        return $('#first-name');
    }

    get inputLastName () {
        return $('#last-name');
    }

    get inputPostalCode () {
        return $('#postal-code');
    }

    get btnSubmit () {
        return $('#continue');
    } 

    async checkout (firstname, lastname, postalcode) {
        await this.checkoutButton.click();
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputPostalCode.setValue(postalcode);
        await this.btnSubmit.click();
    }

    openCart () {
        return super.openCart();
    }
}

module.exports = new CheckoutPage();
