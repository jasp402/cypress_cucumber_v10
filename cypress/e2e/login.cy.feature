@feature-tag
Feature: Login Page

  Feature Page where the users can login to their accounts

  Background:
    Given A user enters to the login page

  Scenario: Success Login
    When A user enters the username "standard_user"
    And A user entersthe password "secret_sauce"
    And A user clicks on the login button
    Then A user will be logged in