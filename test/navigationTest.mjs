import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

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
    await driver.get('https://www.hookerhillstudios.com');
    
    // Wait for the link with text 'Services' to be clickable
    const link = await driver.wait(until.elementLocated(By.linkText('Request A Quote')), 10000);
    
    // Click the link to navigate to the 'Services' page
    await link.click();

    // Wait for the URL to contain 'Services'
    await driver.wait(until.urlContains('Quote'), 5000);

    // Verify the current URL includes 'Services'
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include('Quote');
  });
});
