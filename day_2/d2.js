const fs = require("fs");

function parseTextFile(filePath) {
  // Read the file synchronously
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Split into lines
  const lines = fileContent.trim().split("\n");

  // Convert each line into an array of numbers
  const result = lines.map(
    (line) => line.trim().split(/\s+/).map(Number) // Split by spaces and convert to numbers
  );

  return result;
}

const filePath = "./data.txt";
const parsedData = parseTextFile(filePath);

function isValidIncreasingSequence(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    const diff = numbers[i] - numbers[i - 1];
    if (diff < 1 || diff > 3) {
      return false;
    }
  }
  return true;
}

function isValidDecreasingSequence(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    const diff = numbers[i - 1] - numbers[i];
    if (diff < 1 || diff > 3) {
      return false;
    }
  }
  return true;
}

isSafe = (parsedData) => {
  let safeReports = 0;
  parsedData.forEach((report) => {
    if (isValidIncreasingSequence(report)) {
      safeReports++;
    } else if (isValidDecreasingSequence(report)) {
      safeReports++;
    }
  });
  // console.log(safeReports);
  return safeReports;
};

isSafe(parsedData);
