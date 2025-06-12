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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 114\nCurrent browser version is 137.0.7151.70 with binary path /Applications/Google Chrome.app/Contents/MacOS/Google Chrome\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Dusmamats-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1010:61d6:3893:3b9b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002715.4\u0027, java.version: \u002721.0.6\u0027\nDriver info: driver.version: Driver\nremote stacktrace: 0   chromedriver                        0x000000010b61b6b8 chromedriver + 4937400\n1   chromedriver                        0x000000010b612b73 chromedriver + 4901747\n2   chromedriver                        0x000000010b1d0616 chromedriver + 435734\n3   chromedriver                        0x000000010b202d10 chromedriver + 642320\n4   chromedriver                        0x000000010b1fe18a chromedriver + 622986\n5   chromedriver                        0x000000010b1fa67c chromedriver + 607868\n6   chromedriver                        0x000000010b241a08 chromedriver + 899592\n7   chromedriver                        0x000000010b240ebf chromedriver + 896703\n8   chromedriver                        0x000000010b237de3 chromedriver + 859619\n9   chromedriver                        0x000000010b205d7f chromedriver + 654719\n10  chromedriver                        0x000000010b2070de chromedriver + 659678\n11  chromedriver                        0x000000010b5d72ad chromedriver + 4657837\n12  chromedriver                        0x000000010b5dc130 chromedriver + 4677936\n13  chromedriver                        0x000000010b5e2def chromedriver + 4705775\n14  chromedriver                        0x000000010b5dd05a chromedriver + 4681818\n15  chromedriver                        0x000000010b5af92c chromedriver + 4495660\n16  chromedriver                        0x000000010b5fa838 chromedriver + 4802616\n17  chromedriver                        0x000000010b5fa9b7 chromedriver + 4802999\n18  chromedriver                        0x000000010b60b99f chromedriver + 4872607\n19  libsystem_pthread.dylib             0x00007ff80af83df1 _pthread_start + 99\n20  libsystem_pthread.dylib             0x00007ff80af7f857 thread_start + 15\n\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:1034)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:527)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:513)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.amplience.utilities.Driver.get(Driver.java:27)\n\tat com.amplience.step_definitions.Hooks.setup(Hooks.java:15)\n",
  "status": "failed"
});
formatter.step({
  "name": "I am on the github profile page",
  "keyword": "When "
});
formatter.match({
  "location": "com.amplience.step_definitions.githubProfile_StepDef.i_am_on_the_github_profile_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 114\nCurrent browser version is 137.0.7151.70 with binary path /Applications/Google Chrome.app/Contents/MacOS/Google Chrome\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Dusmamats-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1010:61d6:3893:3b9b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002715.4\u0027, java.version: \u002721.0.6\u0027\nDriver info: driver.version: Driver\nremote stacktrace: 0   chromedriver                        0x000000010f7466b8 chromedriver + 4937400\n1   chromedriver                        0x000000010f73db73 chromedriver + 4901747\n2   chromedriver                        0x000000010f2fb616 chromedriver + 435734\n3   chromedriver                        0x000000010f32dd10 chromedriver + 642320\n4   chromedriver                        0x000000010f32918a chromedriver + 622986\n5   chromedriver                        0x000000010f32567c chromedriver + 607868\n6   chromedriver                        0x000000010f36ca08 chromedriver + 899592\n7   chromedriver                        0x000000010f36bebf chromedriver + 896703\n8   chromedriver                        0x000000010f362de3 chromedriver + 859619\n9   chromedriver                        0x000000010f330d7f chromedriver + 654719\n10  chromedriver                        0x000000010f3320de chromedriver + 659678\n11  chromedriver                        0x000000010f7022ad chromedriver + 4657837\n12  chromedriver                        0x000000010f707130 chromedriver + 4677936\n13  chromedriver                        0x000000010f70ddef chromedriver + 4705775\n14  chromedriver                        0x000000010f70805a chromedriver + 4681818\n15  chromedriver                        0x000000010f6da92c chromedriver + 4495660\n16  chromedriver                        0x000000010f725838 chromedriver + 4802616\n17  chromedriver                        0x000000010f7259b7 chromedriver + 4802999\n18  chromedriver                        0x000000010f73699f chromedriver + 4872607\n19  libsystem_pthread.dylib             0x00007ff80af83df1 _pthread_start + 99\n20  libsystem_pthread.dylib             0x00007ff80af7f857 thread_start + 15\n\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:1034)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:527)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:513)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.amplience.utilities.Driver.get(Driver.java:27)\n\tat com.amplience.step_definitions.Hooks.closure(Hooks.java:22)\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/personalInfo.feature");
formatter.feature({
  "name": "Confirmation of Gregory Loscombe info",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
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
formatter.scenario({
  "name": "Response Body Assertion",
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
  "name": "user will recieve following info",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.amplience.step_definitions.personalInfo_StepDef.user_will_recieve_following_info(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
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