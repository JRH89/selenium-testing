import { Builder } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Smoke Test', function() {
  let driver;

  // Increase the default timeout for the suite
  this.timeout(10000);

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should load Google homepage', async function() {
    await driver.get('http://www.google.com');
    const title = await driver.getTitle();
    expect(title).to.equal('Google');
  });
});
