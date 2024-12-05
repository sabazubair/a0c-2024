const fs = require("fs");

function processAndComputeData(filePath) {
  let total = 0;
  const data = fs.readFileSync(filePath, "utf-8");

  const lines = data.split("\n"); // Split into lines
  for (const line of lines) {
    // Extract all valid `mul(x, y)` matches
    const matches = line.match(/mul\(\d+,\d+\)/g);

    if (matches) {
      for (const match of matches) {
        // Extract numbers from `mul(x, y)`
        const [x, y] = match
          .match(/\d+/g) // Get all numbers inside `mul`
          .map(Number); // Convert them to numbers
        total += x * y;
      }
    }
  }

  return total;
}

const filePath = "./data.txt";
const result = processAndComputeData(filePath);
console.log(result);
