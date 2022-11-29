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
  
  const getStudents = async () => {
    const result = await page.$eval('textarea', el => {
      const length = el.value.length;
      if (el.value[length-1] === '\n') {
        return el.value.slice(0, -1);
      } else {
        return el.value;
      }
    });
    return result;
  }
  
  it("Pressing `Display students class A` should display the students from the js variable `studentsClassA`.", async () => {
    await page.click('#loadA');
    const result = await getStudents();
    
    await expect(result).toBe("Johnny - 10\nMicky - 4\nAndrew - 8\nKaty - 7\nMichael - 2\nLilly - 6");
  });
  
  it("Pressing `Display students class B` should display the students from the js variable `studentsClassB`.", async () => {
    await page.click('#loadB');
    const result = await getStudents();
    
    await expect(result).toBe("Irene - 7\nSonya - 6\nRichard - 1\nNancy - 3");
  });
  
  it("Pressing `Display students class A` followed by pressing `Average` should display in the innerText of the div with class `prompter` the value `6`.", async () => {
    await page.click('#loadA');
    await page.click('#average');
    const result = await page.$eval('.prompter', el => el.innerText);
    
    await expect(result).toBe("6");
  });
  
  it("Pressing `Display students class V` followed by pressing `Average` should display in the innerText of the div with class `prompter` the value `8`.", async () => {
    await page.click('#loadB');
    await page.click('#average');
    const result = await page.$eval('.prompter', el => el.innerText);
    
    await expect(result).toBe("4");
  });
  
  it("Pressing `Display students class A` followed by pressing `Failling` should display in the innerText of the div with class `prompter` the value `|Micky|Michael|`.", async () => {
    await page.click('#loadA');
    await page.click('#failing');
    const result = await page.$eval('.prompter', el => el.innerText);
    
    await expect(result).toBe("|Micky|Michael|");
  });
  
  it("Pressing `Display students class A` followed by pressing `Failling` should display in the innerText of the div with class `prompter` the value `|Micky|Michael|`.", async () => {
    await page.click('#loadB');
    await page.click('#failing');
    const result = await page.$eval('.prompter', el => el.innerText);
    
    await expect(result).toBe("|Richard|Nancy|");
  });
});
