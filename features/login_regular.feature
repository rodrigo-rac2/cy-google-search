Feature: Login Scenarios

  Scenario: Successful login
    Given I am at the login page
    When I enter a valid username and valid password
    And I click the log in button
    Then I should see the main page

  Scenario: Attempt to login with an invalid username and invalid password
    Given I am at the login page
    When I enter an invalid username and invalid password
    And I click the log in button
    Then I should see an "INVALID LOGIN" alert

  Scenario: Attempt to login with an invalid username
    Given I am at the login page
    When I enter an invalid username but valid password
    And I click the log in button
    Then I should see an "INVALID LOGIN" alert

  Scenario: Attempt to login with an invalid password
    Given I am at the login page
    When I enter a valid username but an invalid password
    And I click the log in button
    Then I should see an "INVALID LOGIN" alert

  Scenario: Attempt to login with an empty username
    Given I am at the login page
    When I enter an empty username and a valid password
    And I click the log in button
    Then I should see an empty field for username

  Scenario: Attempt to login with an empty password
    Given I am at the login page
    When I enter a valid username and an empty password
    And I click the log in button
    Then I should see an empty field for password

  Scenario: Access guest login page
    Given I am at the login page
    When I click the "Join as Guest" link
    Then I should see the guest login page
