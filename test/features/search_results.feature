Feature: Correct search results
  As a user
  I can search anything on the main page of website
  And should get appropriate results.

  Background:
    Given I navigate to the 'home' page

  @search@failure
  Scenario: Search error
    And I search for 'dinosaur'
    Then I get the following error: 'Even my keen nose can’t find this one.'

  @search@success
  Scenario: Search success
    And I search for 'hedhehog'
    Then I get the following search results: 'hedhehog'
