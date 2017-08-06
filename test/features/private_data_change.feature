Feature: Successful private data change
  As a user
  I can change my personal data (email/password)
  And should be able to log in successfully after committed changes.

  Background:
    Given I navigate to the 'home' page
    Then I click on my account and login links
    Then I am on page with the title 'Login'
    Then I login with email 'testuser@gmail.com' and password '1122330'
    Then I am on page with the title 'Fetch, the pet store from Ocado | Quality pet food and medicines'
    Then I click on login details link

    @data_change@password
    Scenario: Password change
      And I change my previous password '1122330' to the new one '112233'
      Then I close modal dialog of successful data change
      And I log out
      And I click on my account and login links
      And I login with email 'testuser@gmail.com' and password '112233'
      Then I am on page with the title 'Fetch, the pet store from Ocado | Quality pet food and medicines'
      #The following steps are optional: they are merely to make a return to the initial password
      Then I click on login details link
      And I change my previous password '112233' to the new one '1122330'
      Then I close modal dialog of successful data change
      And I log out

    @data_change@email
    Scenario: Email change
      And I change my previous email to the new one 'testuser1@gmail.com', having '1122330' password
      Then I close modal dialog of successful data change
      And I log out
      And I click on my account and login links
      And I login with email 'testuser1@gmail.com' and password '1122330'
      Then I am on page with the title 'Fetch, the pet store from Ocado | Quality pet food and medicines'
      #The following steps are optional: they are merely to make a return to the initial email
      Then I click on login details link
      And I change my previous email to the new one 'testuser@gmail.com', having '1122330' password
      Then I close modal dialog of successful data change
      And I log out
