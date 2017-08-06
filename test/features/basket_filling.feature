Feature: Correct basket filling
  As a user
  I can add some products to the basket
  And I will get the correct amount, which corresponds with the chosen products, in it.

  Background:
    Given I navigate to the 'home' page
    Then I click on my account and login links
    Then I am on page with the title 'Login'
    Then I login with email 'testuser@gmail.com' and password '1122330'
    Then I am on page with the title 'Fetch, the pet store from Ocado | Quality pet food and medicines'

  @basket
  Scenario: Search success
    And I search for 'fish food'
    And I set 'Price High to Low' filter
    And I click on 'AATU 80/20 Shellfish Complete Grain Free Dry Dog Food' link
    And I add products to basket, setting quantity of '3' items and weight of '1.5kg'
    Then total amount in my basket appears to be '£57.54'
    #The following steps are optional: they are merely to make clear the busket's content
    And I click on busket link
    And I am on page with the title 'Basket'
    And I cancel committed order, clearing the basket's content
