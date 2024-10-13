Feature: Saucedemo Login

  Scenario: As a user, I can log into the dashboard 

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see homepage
    Examples:
      | username      | password        | 
      | standard_user | secret_sauce    | 


  Scenario Outline: User login with various invalid inputs
    Given I am on the login page
    When I attempt to login with "<username>" and "<password>"
    Then I should see an error message "<error_message>"

    Examples:
      | username      | password        | error_message |
      | standard_user | secret_sauce01  | Epic sadface: Username and password do not match any user in this service |