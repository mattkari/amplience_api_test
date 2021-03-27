$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/githubProfile.feature");
formatter.feature({
  "name": "Github profile information",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@UI"
    }
  ]
});
formatter.scenario({
  "name": "Verify the profile information on Github",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@UI"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the github profile page",
  "keyword": "When "
});
formatter.match({
  "location": "com.amplience.step_definitions.githubProfile_StepDef.i_am_on_the_github_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the profile information should be as following",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.amplience.step_definitions.githubProfile_StepDef.the_profile_information_should_be_as_following(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/personalInfo.feature");
formatter.feature({
  "name": "Confirmation of Gregory Loscombe info",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Name Confirmation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user navigate to api \"6wl\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.amplience.step_definitions.personalInfo_StepDef.user_navigate_to_api(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "name is \"Gregory Loscombe\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amplience.step_definitions.personalInfo_StepDef.name_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "com.amplience.step_definitions.personalInfo_StepDef.statusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
});