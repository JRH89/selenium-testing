import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Regression Test', function() {
  let driver;

  // Increase the default timeout for the suite
  this.timeout(10000);

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should search for "Selenium WebDriver"', async function() {
    await driver.get('http://www.google.com');
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium WebDriver');
    await searchBox.submit();
    await driver.wait(until.titleContains('Selenium WebDriver'), 5000);
    const title = await driver.getTitle();
    expect(title).to.include('Selenium WebDriver');
  });
});
