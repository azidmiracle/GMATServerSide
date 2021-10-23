
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const url = "https://sentence.yourdictionary.com/";

async function configureBrowser(url, word) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${url}${word}`);
  return page;
}

async function extractSentences(page,numOfSentences) {
  await page.reload();
  let html = await page.content();
  const $ = cheerio.load(html);
  const sentences = [];

  $("li[class=sentences-list-item]").each(function (i, elem) {
    
    let sentence = $(this).text().split(".")[0];
    sentences[i] = sentence;

    if(i>(numOfSentences-2)){
      return false;
    }
  });
  return sentences
}

exports.loadSentences =async function (word,numOfSentences) {
  let page = await configureBrowser(url,word );
  return (await extractSentences(page,numOfSentences));
}



