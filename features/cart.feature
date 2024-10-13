Feature: Saucedemo Add Product to Cart

  Scenario Outline: As a user, I want to add a product to cart 
    Given I am on the login page
    When I login with <username> and <password>
    When I add a product to cart
    Then I should see shopping cart badge
    Examples: 
    | username      | password        | amount |
    | standard_user | secret_sauce    | 1      |
