const puppeteer = require('puppeteer');

test('expect all 4 divs to be have the same width', async () => {

  jest.setTimeout(30000);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

//   await page.setViewport({
//     width: 1600,
//     height: 1000
//   })
  await page.goto('http://localhost:1234');

  const test = await page.evaluate(() => {

    var outer = document.querySelector('#outer');

    return {
      outerLength: outer.children.length,
      arr : Array.from(outer.children).map(function (v,i) {
        return v.clientWidth
        })
    };
  });

  var count = 0;
  var firstDiv =  test.arr[0];
  test.arr.forEach(function (v,i) {
    count++;
    expect(v).toBe(firstDiv);
  })
  
  expect(count).toBe(4);

  browser.close();

});