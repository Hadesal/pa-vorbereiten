require("util").inspect.defaultOptions.depth = null;
jest.setTimeout(1200);
const baseURL = process.env.TEST_BASE_URL;

// Show the version of the browser used by Puppeteer if desired
//page.browser().version().then(version => console.log(version));

// Show logs from the page
const onPageConsole = msg => {
  Promise.all(msg.args().map(e => e.jsonValue()))
    .then(args =>
      console.log(`<LOG::page console ${msg.type()}>`, ...args)
    )
  ;
};
beforeAll(() => {
  page.setDefaultTimeout(1000);
});
beforeEach(() => {
  if (!page.listeners("console").includes(onPageConsole)) {
    page.on("console", onPageConsole);
  }
  
  // Reset mock function's states before each test.
  jest.clearAllMocks();
});

describe("Index", () => {
  beforeEach(async () => {
    await page.goto(baseURL, {waitUntil: "load"});
  });

  // basic example of how to test for content on page
  it("When the page first loads the innerText of the div with the class 'track-name' is 'Night Owl'", async () => {
    const result = await page.$eval('.track-name', e => e.innerText);
    await expect(result).toBe('Night Owl');
  });
  
  it("When the page first loads the innerText of the div with the class 'track-artist' is 'Broke For Free'", async () => {
    const result = await page.$eval('.track-artist', e => e.innerText);
    await expect(result).toBe('Broke For Free');
  });
  
  it("When pressing the button with the class 'next-track' the body of the page should have the class 'player-bg3'", async () => {
    await page.click('.next-track');
    const result = await page.$eval('body', e => e.classList.value);
    await expect(result).toBe('player-bg3');
  });
  
  it("When pressing the button with the class 'next-track' twice the body of the page should have the class 'player-bg1'", async () => {
    await page.click('.next-track');
    await page.click('.next-track');
    const result = await page.$eval('body', e => e.classList.value);
    await expect(result).toBe('player-bg1');
  });
  
  it("When pressing the button with the class 'prev-track' twice the body of the page should have the class 'player-bg3'", async () => {
    await page.click('.prev-track');
    await page.click('.prev-track');
    const result = await page.$eval('body', e => e.classList.value);
    await expect(result).toBe('player-bg3');
  });
  
  it("When pressing the button with the class 'prev-track' twice followd by pressing the button with the class 'next-track' the body of the page should have the class 'player-bg1'", async () => {
    await page.click('.prev-track');
    await page.click('.prev-track');
    await page.click('.next-track');
    const result = await page.$eval('body', e => e.classList.value);
    await expect(result).toBe('player-bg1');
  });
});
