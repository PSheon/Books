const fs = require("fs");
const path = require("path");

const TITLE = "《XX》 《XXX》".split(" ");

let temp = [];
let meta = {};

const main = async () => {
  const CONTENT = fs.readFileSync(
    path.resolve(__dirname, "./xxx.txt"),
    "utf-8"
  );

  let table = Array.from({ length: 45 }, () => []);
  let currentIndex = -1;
  let flag = 0;

  CONTENT.split("\n").forEach((line, index) => {
    if (line.startsWith("1 ")) {
      flag = 0;
      currentIndex++;
      table[currentIndex] = [];
    } else {
      flag++;
    }

    table[currentIndex].push(line);
  });

  TITLE.forEach((title, index) => {
    const content = table[index]
      .map((item, i) => `${i > 0 ? `\n>\n` : ""}> ${item.split(" ")[1]}`)
      .join("");
    temp.push({
      title,
      content,
    });

    const template = `# ${title}

${content}

TODO
`;

    meta[`chapter-${String(index + 1).padStart(2, "0")}`] = title;

    fs.writeFileSync(
      path.resolve(
        __dirname,
        `chapter-${String(index + 1).padStart(2, "0")}.mdx`
      ),
      template
    );
  });

  fs.writeFileSync(
    path.resolve(__dirname, "_meta.json"),
    JSON.stringify(meta, null, "\t")
  );
  fs.writeFileSync(
    path.resolve(__dirname, "xxx.json"),
    JSON.stringify(temp, null, "\t")
  );
};
main();