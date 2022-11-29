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

describe("Index Page", () => {
  beforeEach(async () => {
    await page.goto(baseURL, {waitUntil: "load"});
  });
  
  it("When the safeCombination=1234 pressing the button `1` should set the innerText of the div with the id `result` to `1`.", async () => {
    await page.click('#button-1');
    const result = await page.$eval('#result', el => el.innerText);
    
    await expect(result).toBe("1");
  });
  
  it("When the safeCombination=1234 pressing the button `5` should set the innerText of the div with the id `result` to ``(empty string).", async () => {
    await page.click('#button-5');
    const result = await page.$eval('#result', el => el.innerText);
    
    await expect(result).toBe("");
  });
  
  it("When the safeCombination=1234 pressing the buttons `1`, `2`, `3`, `4` in this order should set the innerText of the div with the id `result` to `Safe OPEN`.", async () => {
    await page.click('#button-1');
    await page.click('#button-2');
    await page.click('#button-3');
    await page.click('#button-4');
    const result = await page.$eval('#result', el => el.innerText);
    
    await expect(result).toBe("Safe OPEN");
  });
  
  it("When innerText of the div with the id `result` is `123` pressing the button `C` should set the innerText to `12`.", async () => {
    await page.click('#button-1');
    await page.click('#button-2');
    await page.click('#button-3');
    await page.click('#button-c');
    const result = await page.$eval('#result', el => el.innerText);
    
    await expect(result).toBe("12");
  });
  
  it("When you type in the input box `456` followed by pressing the button `1` should set the innerText to `` (empty string).", async () => {
    await page.click('input', { clickCount: 3 });
    await page.keyboard.type('456');
    await page.click('#button-1');
    const result = await page.$eval('#result', el => el.innerText);
    
    await expect(result).toBe("");
  });
  
  it("When the innerText of the div with the id `result` is `1` followed by typing in the input box `4` should set the innerText to `` (empty string).", async () => {
    await page.click('#button-1');
    await page.click('input', { clickCount: 3 });
    await page.keyboard.type('4');
    const result = await page.$eval('#result', el => el.innerText);
    
    await expect(result).toBe("");
  });
  
  it("When you type in the input box `456` followed by pressing the button `5` should set the innerText to `5`.", async () => {
    await page.click('input', { clickCount: 3 });
    await page.keyboard.type('456');
    await page.click('#button-5');
    const result = await page.$eval('#result', el => el.innerText);
    
    await expect(result).toBe("5");
  });
  
  it("When you type in the input box `45` followed by pressing the buttons `4`, `5` in this order should set the innerText to `Safe OPEN`.", async () => {
    await page.click('input', { clickCount: 3 });
    await page.keyboard.type('45');
    await page.click('#button-4');
    await page.click('#button-5');
    const result = await page.$eval('#result', el => el.innerText);
    
    await expect(result).toBe("Safe OPEN");
  });
  
  it("When you type in the input box `45` followed by pressing the buttons `4`, `4`, `C` in this order should set the innerText to `4`.", async () => {
    await page.click('input', { clickCount: 3 });
    await page.keyboard.type('45');
    await page.click('#button-4');
    await page.click('#button-4');
    await page.click('#button-c');
    const result = await page.$eval('#result', el => el.innerText);
    
    await expect(result).toBe("4");
  });
});
  
