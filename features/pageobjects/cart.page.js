const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get addButton () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    async addToCart () {
        await this.addButton.click();
    }

}

module.exports = new CartPage();
