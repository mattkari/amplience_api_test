package com.amplience.step_definitions;

import io.cucumber.java.en.*;

import java.util.Map;
import com.amplience.pages.profilePage;
import org.apache.log4j.Logger;
import org.junit.Assert;

import static org.junit.Assert.*;


public class githubProfile_StepDef{
    profilePage profilePage = new profilePage();
    private static final Logger logger = Logger.getLogger(githubProfile_StepDef.class);

    @When("I am on the github profile page")
    public void i_am_on_the_github_profile_page() {

        assertTrue(profilePage.profileName.isDisplayed());

    }

    @Then("the profile information should be as following")
    public void the_profile_information_should_be_as_following(Map<String, String> personalInfo) {

        assertEquals(personalInfo.get("name"),profilePage.profileName.getText());
        logger.info(personalInfo.get("name"));
        assertEquals(personalInfo.get("location"),profilePage.location.getText());
        logger.info(personalInfo.get("location"));
        assertEquals(personalInfo.get("public_repos"),profilePage.publicRepos.getText());
        logger.info(personalInfo.get("public_repos"));
        assertEquals(personalInfo.get("followers"),profilePage.followers.getText());
        logger.info(personalInfo.get("followers"));
        assertEquals(personalInfo.get("following"),profilePage.following.getText());
        logger.info(personalInfo.get("following"));



    }



}
