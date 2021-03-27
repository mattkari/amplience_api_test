@wip @UI
Feature: Github profile information
  Scenario: Verify the profile information on Github
    When I am on the github profile page
    Then the profile information should be as following
      | name| Gregory Loscombe|
      | location| Manchester  |
      | public_repos| 7     |
      | followers    | 13   |
      | following   | 29|