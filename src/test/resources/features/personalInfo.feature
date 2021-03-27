@wip
Feature: Confirmation of Gregory Loscombe info

  Scenario: Name Confirmation
    When user navigate to api "6wl"
    Then name is "Gregory Loscombe"
    And status code is 200

    Scenario: Response Body Assertion
      When user navigate to api "6wl"
      Then user will recieve following info
        | name| Gregory Loscombe|
        | id | 15330        |
        | company| null     |
        | location| Manchester  |
        | public_repos| 7     |
        | public_gists | 11   |
        | followers    | 13   |
        | following   | 29|
      And status code is 200
