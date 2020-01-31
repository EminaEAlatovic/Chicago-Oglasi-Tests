// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Log Out', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Log Out', async function() {
    await driver.get("https://chicagooglasi.com/")
    await driver.manage().window().setRect(1608, 1029)
    await driver.findElement(By.css(".main-nav:nth-child(1) > .header-menu-bar:nth-child(2) #user-dropdown")).click()
    await driver.findElement(By.css(".show .nav-item:nth-child(3) > .dropdown-item")).click()
    await driver.wait(until.elementLocated(By.css(".main-nav:nth-child(1) .nav-item:nth-child(2) > .btn:nth-child(1)")), 30000)
  })
})
