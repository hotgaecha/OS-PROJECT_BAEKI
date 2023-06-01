
//개발환경의 변경으로 폐기한 코드임.




// const puppeteer = require('puppeteer');

// async function searchProductPrice(productName) {
//     const browser = await puppeteer.launch({
//         executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
//       });
      
      
      
//   const page = await browser.newPage();

//   // 네이버 쇼핑 검색 결과 페이지에서 상품 가격 크롤링 예제
//   const url = `https://search.shopping.naver.com/search/all?query=${encodeURIComponent(productName)}&cat_id=&frm=NVSHATC`;
//   await page.goto(url);
//   await page.waitForSelector('.basicList_item__2XT81');

//   const priceElement = await page.$('.basicList_item_price__2r23_');
//   const priceText = await page.evaluate(priceElement => priceElement.textContent, priceElement);

//   console.log(`상품명: ${productName}, 가격: ${priceText.trim()}`);

//   await browser.close();
// }

// (async () => {
//   await searchProductPrice('오픈소스스');
// })()

