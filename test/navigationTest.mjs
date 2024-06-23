import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import { config } from '../config.js';
describe('Navigation Test', function() {
  let driver;

  this.timeout(10000);

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should navigate to a new page', async function() {
    await driver.get(config.navigationTest.baseUrl);
    
    // Wait for the link with the specified text to be clickable
    const link = await driver.wait(until.elementLocated(By.linkText(config.navigationTest.linkText)), 10000);
    
    // Click the link to navigate to the target page
    await link.click();

    // Wait for the URL to contain the expected part
    await driver.wait(until.urlContains(config.navigationTest.expectedUrlPart), 5000);

    // Verify the current URL includes the expected part
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include(config.navigationTest.expectedUrlPart);
  });
});
