const fs = require("fs");

readColumnsIntoArrays = (filePath) => {
  // Read the file content
  const data = fs.readFileSync(filePath, "utf-8");

  // Initialize arrays for columns
  const column1 = [];
  const column2 = [];

  // Process each line
  const lines = data.split("\n");
  lines.forEach((line) => {
    const [col1, col2] = line.trim().split(/\s+/); // Split by spaces or tabs
    column1.push(col1);
    column2.push(col2);
  });

  return { column1, column2 };
};

const filePath = "./data.txt"; // Path to your text file
const { column1, column2 } = readColumnsIntoArrays(filePath);

// pseudo code
// sort column1 and column2 from least to greatest
// loop over the sorted columns and calculate the absolute difference between the elements
// sum the differences
calculateTotalDistance = (column1, column2) => {
  // sort the columns from least to greatest
  let sortedColumn1 = column1.sort((a, b) => a - b);
  let sortedColumn2 = column2.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < sortedColumn1.length; i++) {
    sum += Math.abs(sortedColumn1[i] - sortedColumn2[i]);
  }
  return sum;
};

console.log(calculateTotalDistance(column1, column2));

// pseudo code
// loop over the columns
// for each element in column1, count the number of times it appears in column2
// multiply the element by the count and sum the results
calculateSimilarityScore = (column1, column2) => {
  let sum = 0;
  column1.forEach((num) => {
    let count = column2.filter((n) => n === num).length;
    sum += num * count;
  });
  return sum;
};

console.log(calculateSimilarityScore(column1, column2));
