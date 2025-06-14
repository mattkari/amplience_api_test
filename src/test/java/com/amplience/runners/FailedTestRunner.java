package com.amplience.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "json:target/failed-cucumber.json",
                "html:target/failed-html-report",
                "junit:target/failed-junit-report.xml",
                "pretty",
                "rerun:target/failed-rerun.txt"
        },
        features = "@target/rerun.txt",
        glue = "com/amplience/step_definitions",
        publish = true
)
public class FailedTestRunner {
}
