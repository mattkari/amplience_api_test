package com.amplience.pages;

import com.amplience.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class profilePage {

    public profilePage() {
        PageFactory.initElements(Driver.get(), this);

    }

    @FindBy (xpath = "//span[@class='p-name vcard-fullname d-block overflow-hidden']")
    public WebElement profileName;

    @FindBy (xpath = "(//span[@class='text-bold color-text-primary'])[1]")
    public WebElement followers;

    @FindBy (xpath = "(//span[@class='text-bold color-text-primary'])[2]")
    public WebElement following;

    @FindBy (xpath = "//span[@class='p-label']")
    public WebElement location;

    @FindBy (xpath = "(//span[@class='Counter '])[1]")
    public WebElement publicRepos;





}
