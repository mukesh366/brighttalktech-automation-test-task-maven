Feature: API test

@API
  Scenario: Should see LIST USERS of all existing users
    Given I get the default list of users for on 1 page
    When I get the list of all users
    Then I should see total users count equals to number of user ids
@API
  Scenario: Should see SINGLE USER data
    Given I make a search for user 3
    Then I should see following user data
      | first_name   | email               |
      | Emma         | emma.wong@reqres.in |
@API
  Scenario: Should see SINGLE USER NOT FOUND error code
  
    Given  I make a search for user 55
    Then I receive error code 404 in response
    
@API
  Scenario Outline: CREATE a user
    Given I create user with following "<Name>"    &  "<Job>"
  Then response should contain folowing data
  | name | job | id | createdAt |
 
    Examples:
      | Name  | Job     |   
      | Peter | Manager |
      | Liza  | Sales   |
@API
  Scenario: LOGIN - SUCCESSFUL by a user
    Given I login succesfully with following data
      | email             | password      |
      | eve.holt@reqres.in| cityslicka   |
@API
  Scenario: LOGIN - UNSUCCESSFUL by a user
    Given I login unsuccesfully with following data
      | Email               | Password    |
      |  eve.holt@reqres.in |             |
@API
  Scenario: Should see list of users with DELAYED RESPONSE
    Given I wait for user list to load
    Then I should see that every user has a unique id
