package com.amplience.step_definitions;

import com.amplience.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.Map;

import static io.restassured.RestAssured.*;

public class personalInfo_StepDef {
    String url = ConfigurationReader.get("api_url");
    Response response;
    @When("user navigate to api {string}")
    public void user_navigate_to_api(String endpoint) {
            response = given().accept(ContentType.JSON).when().get(url+endpoint);
            //given().accept(ContentType.JSON).when().get(url+endpoint).then().assertThat().statusCode(200); can be done with hamcrestMatcher if it is used testNG





    }



    @Then("name is {string}")
    public void name_is(String expectedName) {
        JsonPath jsonPath = response.jsonPath();
        //response.prettyPrint();
        String actualName = jsonPath.get("name");
        System.out.println(actualName);
        Assert.assertEquals(expectedName,actualName);




    }

    @And("status code is {int}")
    public void statusCodeIs(int statusCode) {
        Assert.assertEquals(statusCode,response.statusCode());
    }

    @Then("user will recieve following info")
    public void user_will_recieve_following_info(Map<String, String> personalInfo) {
        System.out.println("personalInfo.get(\"id\") = " + personalInfo.get("id"));
        //response.prettyPrint();
        System.out.println(personalInfo);
        JsonPath jsonPath = response.jsonPath();
        Assert.assertEquals(personalInfo.get("name"), jsonPath.getString("name"));
        Assert.assertEquals(personalInfo.get("location"), jsonPath.getString("location"));
        int id =Integer.parseInt(personalInfo.get("id"));
        Assert.assertEquals(id, jsonPath.getInt("id"));

        //Assert.assertEquals(personalInfo.get("company"), jsonPath.getString("company"));






    }

}
