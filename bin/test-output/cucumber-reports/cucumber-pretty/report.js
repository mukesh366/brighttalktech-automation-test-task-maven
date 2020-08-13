$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("API-Test.feature");
formatter.feature({
  "line": 1,
  "name": "API test",
  "description": "",
  "id": "api-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "id": "api-test;should-see-list-users-of-all-existing-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I get the default list of users for on 1 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I get the list of all users",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see total users count equals to number of user ids",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "StepDefinition.i_get_the_default_list_of_users_for_on_st_page(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 5011703700,
=======
  "duration": 5842680600,
>>>>>>> stash
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_get_the_list_of_all_users()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 2430093700,
=======
  "duration": 3666262200,
>>>>>>> stash
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_total_users_count_equals_to_number_of_user_ids()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 976345300,
=======
  "duration": 36206800,
>>>>>>> stash
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "api-test;should-see-single-user-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I should see following user data",
  "rows": [
    {
      "cells": [
        "first_name",
        "email"
      ],
      "line": 12
    },
    {
      "cells": [
        "Emma",
        "emma.wong@reqres.in"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_make_a_search_for_user(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 988908200,
=======
  "duration": 1049256901,
>>>>>>> stash
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_following_user_data(DataTable)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 123936500,
=======
  "duration": 67214700,
>>>>>>> stash
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Should see SINGLE USER NOT FOUND error code",
  "description": "",
  "id": "api-test;should-see-single-user-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I make a search for user 55",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I receive error code 404 in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_make_a_search_for_user(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1182906600,
=======
  "duration": 1859942500,
>>>>>>> stash
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_receive_error_code_in_response(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 496600,
=======
  "duration": 197400,
>>>>>>> stash
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I create user with following \"\u003cName\u003e\"    \u0026  \"\u003cJob\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 24
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "api-test;create-a-user;",
  "rows": [
    {
      "cells": [
        "Name",
        "Job"
      ],
      "line": 27,
      "id": "api-test;create-a-user;;1"
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ],
      "line": 28,
      "id": "api-test;create-a-user;;2"
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ],
      "line": 29,
      "id": "api-test;create-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I create user with following \"Peter\"    \u0026  \"Manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 24
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 30
    },
    {
      "val": "Manager",
      "offset": 44
    }
  ],
  "location": "StepDefinition.i_create_user_with_following(String,String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1174746100,
=======
  "duration": 2699799900,
>>>>>>> stash
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.response_should_contain_folowing_data(DataTable)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 165413600,
=======
  "duration": 131564399,
>>>>>>> stash
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I create user with following \"Liza\"    \u0026  \"Sales\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 24
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liza",
      "offset": 30
    },
    {
      "val": "Sales",
      "offset": 43
    }
  ],
  "location": "StepDefinition.i_create_user_with_following(String,String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1123972100,
=======
  "duration": 1570728500,
>>>>>>> stash
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.response_should_contain_folowing_data(DataTable)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 86927400,
=======
  "duration": 122627800,
>>>>>>> stash
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---successful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I login succesfully with following data",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 33
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "cityslicka"
      ],
      "line": 34
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_login_succesfully_with_following_data(DataTable)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 986960400,
=======
  "duration": 1189764100,
>>>>>>> stash
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "LOGIN - UNSUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---unsuccessful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I login unsuccesfully with following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 38
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        ""
      ],
      "line": 39
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_login_unsuccesfully_with_following_data(DataTable)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1009408300,
=======
  "duration": 1141620099,
>>>>>>> stash
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Should see list of users with DELAYED RESPONSE",
  "description": "",
  "id": "api-test;should-see-list-of-users-with-delayed-response",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I wait for user list to load",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_wait_for_user_list_to_load()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 5948709500,
=======
  "duration": 1209848500,
>>>>>>> stash
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_that_every_user_has_a_unique_id()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 47139100,
=======
  "duration": 50002300,
>>>>>>> stash
  "status": "passed"
});
formatter.uri("SampleTest.feature");
formatter.feature({
  "line": 1,
  "name": "BrightTalk  Sample Test",
  "description": "",
  "id": "brighttalk--sample-test",
  "keyword": "Feature"
});
formatter.before({
<<<<<<< HEAD
  "duration": 5918472200,
=======
  "duration": 5932709401,
>>>>>>> stash
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Sample",
  "description": "",
  "id": "brighttalk--sample-test;sample",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sample"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.iAmOnTheHomePage()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 3107427500,
=======
  "duration": 1410900,
>>>>>>> stash
  "status": "passed"
});
formatter.after({
<<<<<<< HEAD
  "duration": 937694100,
=======
  "duration": 984356601,
>>>>>>> stash
  "status": "passed"
});
});