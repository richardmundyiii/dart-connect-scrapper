import puppeteer from "puppeteer";

const url = "https://tv.dartconnect.com/league/SaCzDA/6210/standings";

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  let content = await page.evaluate(() => {
    let divs = [...document.querySelectorAll("tr")];
    let aLeauge = divs.splice(0, 2);
    let formatted = divs.map((div) => div.innerText.split("."));
    let split = formatted.forEach((el) => {
      el.split("t");
    });
    return split;
  });
  console.log(content);
  await browser.close();
};

main();
