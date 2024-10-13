Feature: Saucedemo Checkout

  Scenario Outline: As a user, I want to checkout a product in cart page
    Given I am on the login page
    When I login with <username> and <password>
    When I add a product to cart
    When I checkout the product
    Then I should see Checkout Summary with message saying <title>

    Examples: 
    | username      | password     | firstname | lastname | postalcode | title |
    | standard_user | secret_sauce |  Vinna    | Pratiwi  | 53316      | Checkout: Overview |
