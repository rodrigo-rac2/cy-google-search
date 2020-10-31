Feature: Guest Login Scenarios


  Scenario: Access regular login page
    Given I am at the login page
    When I click the "Join as Registered User" link
    Then I should see the guest login page

  Scenario: Successful guest login
    Given I am at the guest login page
    When I enter a name and a valid email address (containing "@" sign)
    And I click the log in button
    Then I should see the main page

  Scenario: Attempt to guest login with an invalid email
    Given I am at the guest login page
    When I enter a name but an invalid password (missing "@" sign)
    And I click the log in button
    Then I should see an invalid email alert (informing the user to include "@" sign)

