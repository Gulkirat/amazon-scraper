const scraperObject = {
  url: `https://amazon.co.uk/dp/B078W3Q73P`,
  async scraper(browser){
      let page = await browser.newPage();
      console.log(`Navigating to ${this.url}...`);
      // Navigate to the selected page
      await page.goto(this.url);
      // Wait for the required DOM to be rendered
      await page.waitForSelector('#altImages');
      // Get the link to all the required books
      let urls = await page.$$eval('li.item .a-button-thumbnail', links => {
          // Extract the links from the data
          links = links.map(el => el.querySelector('img').src.replace(/_.*_.(?=.{3,4}$)/, ''))
          return links;
      });
      console.log(urls);
      await browser.close();
  }
}

module.exports = scraperObject;
