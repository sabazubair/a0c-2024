const fs = require("fs");

isValidMulInstruction = (instruction) => {
  return /^mul\(\d+,\d+\)$/.test(instruction);
};

// processAndComputeData = (filePath) => {
//   let total = 0;
//   const data = fs.readFileSync(filePath, "utf-8");

//   const lines = data.split("\n"); // Split into lines
//   for (const line of lines) {
//     // Extract all valid `mul(x, y)` matches
//     const matches = line.match(/mul\(\d+,\d+\)/g);
//     if (matches) {
//       for (const match of matches) {
//         if (isValidMulInstruction(match)) {
//           const [x, y] = match
//             .match(/\d+/g) // Get all numbers inside `mul`
//             .map(Number); // Convert them to numbers
//           total += x * y;
//         }
//       }
//     }
//   }

//   return total;
// };

processAndComputeData = (filePath) => {
  const data = fs.readFileSync(filePath, "utf-8");
  const lines = data.split("\n"); // Split into lines

  let total = 0;
  let isParsingEnabled = true;

  for (const line of lines) {
    // add some logic like...
    if (str === "don't()") {
      isParsingEnabled = false;
    } else if (str === "do()") {
      isParsingEnabled = true;
    }
    if (isParsingEnabled && isValidMulInstruction(subStr)) {
      // do something
    }
  }

  return total;
};

const filePath = "./data.txt";
const result = processAndComputeData(filePath);
console.log(result);
