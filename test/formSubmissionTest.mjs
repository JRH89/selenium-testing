import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Form Submission Test', function() {
  let driver;

  this.timeout(10000);

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should submit form successfully', async function() {
    await driver.get('http://www.hookerhillstudios.com/Login');

    // Wait for the email input to be located
    const emailField = await driver.wait(until.elementLocated(By.css('input[type="email"]')), 5000);
    const passwordField = await driver.wait(until.elementLocated(By.css('input[type="password"]')), 5000);

    // Input credentials
    await emailField.sendKeys('testuser@testuser.com');
    await passwordField.sendKeys('Testing123!');

    // Find all buttons and click the one with text 'Login'
    const buttons = await driver.findElements(By.css('button'));
    for (let button of buttons) {
      const text = await button.getText();
      if (text === 'Login') {
        await button.click();
        break;
      }
    }

    // Wait for redirection to https://www.hookerhillstudios.com
    await driver.wait(until.urlIs('https://www.hookerhillstudios.com/'), 10000);

    // Verify the current URL is as expected
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.equal('https://www.hookerhillstudios.com/');
  });
});
