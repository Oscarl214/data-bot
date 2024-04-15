const puppeteer = require('puppeteer-core');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    executablePath:
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.pinterest.com/ideas/');

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  //   // Type into search box
  //   await page.type('.ujU', 'ronaldo');

  //   // Wait and click on first result
  //   const searchResultSelector = '.ActionListItem-label';
  //   await page.waitForSelector(searchResultSelector);
  //   await page.click(searchResultSelector);

  // Locate the full title with a unique string
  await page.screenshot({ path: 'C:Userslealodesktopdata-botindex.png' });

  //   await browser.close();
})();
