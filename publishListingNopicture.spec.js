// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Publish Listing No picture', function() {
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
  it('Publish Listing No picture', async function() {
    await driver.get("https://chicagooglasi.com/")
    await driver.manage().window().setRect(1608, 1029)
    await driver.findElement(By.css(".main-nav:nth-child(1) .nav-item:nth-child(2) > .btn:nth-child(1)")).click()
    await driver.findElement(By.id("loginform-email")).click()
    await driver.findElement(By.id("loginform-email")).sendKeys("admin")
    await driver.findElement(By.id("loginform-password")).click()
    await driver.findElement(By.id("loginform-password")).sendKeys("singularity.is")
    await driver.findElement(By.name("login-button")).click()
    await driver.findElement(By.css(".main-nav .flex-w-150 > .btn")).click()
    await driver.findElement(By.id("listingform-title")).click()
    await driver.findElement(By.id("listingform-title")).sendKeys("Looking for a flat")
    await driver.findElement(By.css("#manual-category-selector-widget > .list-group-item:nth-child(2) > .text-gray-dark")).click()
    await driver.findElement(By.id("save-step-1-btn")).click()
    await driver.findElement(By.id("listingform-listing_type")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-listing_type"))
      await dropdown.findElement(By.xpath("//option[. = 'Demand']")).click()
    }
    await driver.findElement(By.id("listingform-listing_type")).click()
    await driver.findElement(By.id("listingform-short_description")).click()
    await driver.findElement(By.id("listingform-short_description")).sendKeys("Small flat for two, Low budget ")
    await driver.findElement(By.css(".gm-style:nth-child(1) > div:nth-child(1) > div:nth-child(3)")).click()
    await driver.findElement(By.id("address-geo-locator-btn")).click()
    await driver.findElement(By.id("listingform-mainattributefields-250")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-mainattributefields-250"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\sCondo']")).click()
    }
    await driver.findElement(By.id("listingform-mainattributefields-250")).click()
    await driver.findElement(By.id("listingform-mainattributefields-206")).click()
    await driver.findElement(By.id("listingform-mainattributefields-206")).sendKeys("1")
    await driver.findElement(By.id("listingform-mainattributefields-207")).click()
    await driver.findElement(By.id("listingform-mainattributefields-207")).sendKeys("1")
    await driver.findElement(By.id("listingform-mainattributefields-208")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-mainattributefields-208"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\s0']")).click()
    }
    await driver.findElement(By.id("listingform-mainattributefields-208")).click()
    await driver.findElement(By.id("listingform-mainattributefields-58")).click()
    await driver.findElement(By.id("listingform-mainattributefields-58")).sendKeys("70")
    await driver.findElement(By.id("listingform-mainattributefields-213")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-mainattributefields-213"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\sIn\\sThe\\sBuilding']")).click()
    }
    await driver.findElement(By.id("listingform-mainattributefields-213")).click()
    await driver.findElement(By.id("listingform-mainattributefields-216")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-mainattributefields-216"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\sNo\\sHOA']")).click()
    }
    await driver.findElement(By.id("listingform-mainattributefields-216")).click()
    await driver.findElement(By.id("listingform-mainattributefields-217")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-mainattributefields-217"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\sNo\\sBasement']")).click()
    }
    await driver.findElement(By.id("listingform-mainattributefields-217")).click()
    await driver.findElement(By.id("listingform-mainattributefields-218")).click()
    await driver.findElement(By.id("listingform-mainattributefields-218")).sendKeys("1")
    await driver.findElement(By.id("listingform-mainattributefields-219")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-mainattributefields-219"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\sCity']")).click()
    }
    await driver.findElement(By.id("listingform-mainattributefields-219")).click()
    await driver.findElement(By.id("listingform-mainattributefields-220")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-mainattributefields-220"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\sNot\\sRequired']")).click()
    }
    await driver.findElement(By.id("listingform-mainattributefields-220")).click()
    await driver.findElement(By.id("listingform-mainattributefields-221")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-mainattributefields-221"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\s7\\sDays']")).click()
    }
    await driver.findElement(By.id("listingform-mainattributefields-221")).click()
    await driver.findElement(By.id("save-step-2-btn")).click()
    {
      const element = await driver.findElement(By.id("save-step-2-btn"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".custom-control:nth-child(2) > .custom-control-label")).click()
    await driver.findElement(By.css(".listing-step-3-form #save-step-2-btn")).click()
    {
      const element = await driver.findElement(By.css(".listing-step-3-form #save-step-2-btn"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.switchTo().frame(4)
    await driver.findElement(By.css("html")).click()
    {
      const element = await driver.findElement(By.css(".cke_editable"))
      await driver.executeScript("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = '<p>Young couple looking for a small flat downtown</p>'}", element)
    }
    await driver.switchTo().defaultContent()
    await driver.findElement(By.id("listingform-otherattributefields-210")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-otherattributefields-210"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\s2000']")).click()
    }
    await driver.findElement(By.id("listingform-otherattributefields-210")).click()
    await driver.findElement(By.id("listingform-otherattributefields-211")).click()
    await driver.findElement(By.id("listingform-otherattributefields-211")).click()
    await driver.findElement(By.id("listingform-otherattributefields-212")).click()
    await driver.findElement(By.id("listingform-otherattributefields-212")).click()
    await driver.findElement(By.id("listingform-otherattributefields-214")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-otherattributefields-214"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\sActive']")).click()
    }
    await driver.findElement(By.id("listingform-otherattributefields-214")).click()
    await driver.findElement(By.id("listingform-otherattributefields-215")).click()
    {
      const dropdown = await driver.findElement(By.id("listingform-otherattributefields-215"))
      await dropdown.findElement(By.xpath("//option[. = 'regexp:\\sAll\\sPets\\sOK']")).click()
    }
    await driver.findElement(By.id("listingform-otherattributefields-215")).click()
    await driver.findElement(By.id("save-step-4-btn")).click()
    await driver.findElement(By.id("save-step-5-btn")).click()
    await driver.wait(until.elementLocated(By.css(".mt-2:nth-child(2) > .btn-cyan > .fal")), 30000)
  })
})
