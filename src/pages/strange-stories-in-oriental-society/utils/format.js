const fs = require("fs");
const path = require("path");

let table = [];

const main = async () => {
  const PAGES = fs.readFileSync(path.resolve(__dirname, "pages.json"), "utf-8");

  JSON.parse(PAGES).forEach((page, index) => {
    const { title, href, content } = page;

    const formattedContent = content.split(" ").map((item) => {
      const trimmedItem = item.trim();

      if (trimmedItem === "") {
        return "\n";
      }

      return trimmedItem;
    });

    table.push({
      title,
      href,
      content: formattedContent,
    });
  });

  fs.writeFileSync(
    path.resolve(__dirname, "formatted.json"),
    JSON.stringify(table)
  );
};
main();
