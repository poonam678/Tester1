
import {test} from "@playwright/test"

test("css selectors",async({page})=>{
    await page.goto("https://www.saucedemo.com")
    //select by ID
    await page.locator('#name').fill("amith")
    //select by tag+id
    await page.locator("input#email").fill("amith123@getMaxListeners.com")
    //select by attribute 
    await page.locator("[type='password]").fill("amith12345")
    //select by tag+attribute
    await page.locator('button[type="submit"]').click()
    //Tester 1
})
