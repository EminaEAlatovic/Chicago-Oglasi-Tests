// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Register user', function() {
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
  it('Register user', async function() {
    await driver.get("https://chicago-dev.singularity.is/")
    await driver.manage().window().setRect(1608, 1029)
    await driver.findElement(By.css(".main-nav:nth-child(1) .nav-item:nth-child(2) > .btn:nth-child(1)")).click()
    await driver.findElement(By.css(".ml-1")).click()
    await driver.findElement(By.id("signupform-name")).click()
    await driver.findElement(By.id("signupform-name")).sendKeys("Auto Name")
    await driver.findElement(By.id("signupform-email")).click()
    await driver.findElement(By.id("signupform-email")).sendKeys("digoroh290@onetag.org")
    await driver.findElement(By.id("signupform-password")).click()
    await driver.findElement(By.id("signupform-password")).sendKeys("123456789")
    await driver.findElement(By.id("signupform-passwordrepeat")).click()
    await driver.findElement(By.id("signupform-passwordrepeat")).sendKeys("123456789")
    await driver.findElement(By.css(".custom-control-label")).click()
    await driver.switchTo().frame(0)
    await driver.findElement(By.css(".recaptcha-checkbox-border")).click()
    await driver.switchTo().defaultContent()
    {
      const element = await driver.findElement(By.css(".btn-outline-gold"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.name("login-button")).click()
    await driver.wait(until.elementLocated(By.css(".toast-success")), 30000)
  })
})
