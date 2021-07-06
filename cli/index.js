const { join } = require("path");
const fs = require("fs/promises");

const cliSelect = require("cli-select");

const files = {
  0: join(__dirname, "../examples/ts.json"),
  1: join(__dirname, "../examples/js.json"),
  2: join(__dirname, "../examples/js_no_check.json"),
};

(async () => {
  try {
    const res = await cliSelect({ values: ["TS", "JS", "JS no check"] });
    await fs.copyFile(files[res.id], "tsconfig.json");
  } catch (err) {
    console.log("Nothing selected");
  }
})();
