const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");

const SITE_MAP = [];

let table = [];

const main = async () => {
  for await (let { title, href } of SITE_MAP) {
    const response = await axios.get(href);
    const html = response.data;

    const $ = cheerio.load(html);

    const content = $(".paragraph").text();
    const page = {
      title: title,
      href: href,
      content: content,
    };

    table.push(page);
  }

  fs.writeFileSync(
    path.resolve(__dirname, "pages.json"),
    JSON.stringify(table, null, 2)
  );
};
main();