const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function run() {
  const browser = await puppeteer.launch({
    executablePath:
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    'https://gamestop.com/consoles-hardware/xbox-series-x%7Cs/consoles/products/microsoft-xbox-series-x-console/224744.html'
  );

  let selector = "button[data-pid='224744']";

  await page.waitForSelector(selector);

  await page.evaluate((selector) => {
    document.querySelector(selector).click();
  }, selector);
}

run();
