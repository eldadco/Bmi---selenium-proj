const {Builder, By, Key} = require('selenium-webdriver');

const path = require('chromedriver').path;

const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new Builder().forBrowser('chrome').build();

async function Test()
{
    await driver.get('https://www.calculator.net/bmi-calculator.html')
    let Age = await driver.findElement(By.id("cage"))
    let high = await driver.findElement(By.id("cheightmeter"))
    let weight = await driver.findElement(By.id("ckg"))
    // let gender = await driver.findElement(By.className("rbmark")) // CHECK HOW I CAN WORK WIH CHECKBOX 
    let female = await driver.findElement(By.id("csex2"))
    let male = await driver.findElement(By.id("csex1"))
    const cls = await driver.findElement(By.className("clearbtn"))
    // await gender.clear()
    cls.click()

    let randA =Math.floor(Math.random() * 121); // returns a random integer from 0 to 120
    await Age.sendKeys(randA)
    randH =await Math.floor(Math.random() * 221)
    let x = Math.random()
    
    if(x > 0.5)
    {
      await male.click ()
    }
    else
    {
      await female.click()
    }
  
    await high.sendKeys(randH)
    randW = Math.floor(Math.random() * 200)
    await weight.sendKeys(randW)
    await driver.findElement(By.xpath("//input[@value= 'Calculate']")).click()
   //input[@value="Calaculate"]
    let bmi = await driver.findElement(By.className("bigtext"))
      console.log( "Age : " + randA + " Height : " + randH +" weight: " + randW)
     console.log(await bmi.getText())
    setTimeout(()=>{
        driver.quit()
      }, 5000)
      
}   
Test()
  
  