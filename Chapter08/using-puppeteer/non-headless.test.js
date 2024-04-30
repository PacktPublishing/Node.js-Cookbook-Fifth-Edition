const assert = require('node:assert');
const puppeteer = require('puppeteer');

async function runTest () {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.$eval('h1', (el) => el.innerText);

  console.log('Title value:', title);
  assert.equal(title, 'Example Domain');

  browser.close();
}

runTest();
