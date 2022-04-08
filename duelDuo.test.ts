
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    await driver.sleep(1000)
    const displayed = await title.isDisplayed()
    await driver.sleep(1000)
    expect(displayed).toBe(true)
})

test('Pressing draw button should hide draw button', async() => {
    await driver.findElement(By.id("draw")).click()
    const choices = await driver.findElement(By.id('choices'))

    expect(choices).toBeTruthy
})

test('Add to Duo button displays', async() => {
    await driver.findElement(By.id("draw")).click()
    const addToDuoBtn = await driver.findElement(By.id('player-duo'))

    expect(addToDuoBtn).toBeTruthy
})