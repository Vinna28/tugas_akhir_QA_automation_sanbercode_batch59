const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page')
const Page = require('../pageobjects/page');
const AlertPage = require('../pageobjects/alert.page');
const CheckoutPage = require('../pageobjects/checkout.page')

const utilsPage = new Page()
const pages = {
    login: LoginPage
}

//Login Step Definition
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});


When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should see homepage$/, async () => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
});


When(/^I attempt to login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await LoginPage.login(username, password);
})

Then(/^I should see an error message "(.*)"$/, async (error_message) => {
    await expect(AlertPage.loginErrorMessage).toHaveText(error_message);
});


//Cart Step Definition
When(/^I add a product to cart$/, async () => {
    await CartPage.addToCart();
});

Then(/^I should see shopping cart badge $/, async (amount) => {
    await expect(AlertPage.cartAlert).toBeExisting();
    await expect(AlertPage.cartAlert).toHaveTextContaining(amount);
});


// Checkout Step Definition
When(/^I checkout the product $/, async (firstname, lastname, postalcode) => {
    CheckoutPage.openCart();
    await CheckoutPage.checkout(firstname, lastname, postalcode);
});
Then(/^I should see Checkout Summary with message saying (.*)$/, async (title) => {
    await expect(browser).toHaveText(title);
});