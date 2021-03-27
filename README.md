Amplience Automation Task
#### Codes and Test Prepared by:
**Matt Karimov*
*Software QA Engineer*
mattkarimov@outlook.com
linkedin.com/in/mattkari
**- Build Tool:** Maven
**- Test Framework:** Cucumber BBD (with JUnit Assertions)
------------
##### Environment:
``
------------
#### System Requirements:
- Java 8 + JDK
- IntelliJ Cucumber Plugin
- IntelliJ Gherkin Plugin
------------
## Test RUN
Note: To run the scenarios, use `@wip` tag for testing all the scenarios in the CukesRunner class/Cucumber Options.
It covers API and UI tests regarding personal information tasks.
#### 1. Way:
- Clone the projects
- Import maven dependencies from POM
- Go **src -> test > java > Runners > CukesRunner** and Run
- To generate "HTML Maven Cucumber Report" ;
  > Open Maven right side panel
  > Double Click Project's Lifecycle
  > Click "verify"
#### 2. Way:
- Run from command line invoke `mvn clean verify`
------------
## Test Reports Locations
1- Cucumber HTML Plugin Reports
**target -> cucumber-html-reports > overview-steps.html**
(Right Click and Open in any Browser )
2- When you run my project, Cucumber will create automatically online report link. You can click the link
with in the 24 hours and check the all test steps and status.
------------
2021 March;
github.com/mattkari
### End
------------