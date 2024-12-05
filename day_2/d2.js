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

function isValidSequence(numbers, isIncreasing) {
  for (let i = 1; i < numbers.length; i++) {
    const diff = isIncreasing
      ? numbers[i] - numbers[i - 1]
      : numbers[i - 1] - numbers[i];
    if (diff < 1 || diff > 3) {
      return false;
    }
  }
  return true;
}

function canBeSafeWithOneRemoval(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    // Create a new array with one level removed
    const modifiedNumbers = [...numbers.slice(0, i), ...numbers.slice(i + 1)];

    // Check if the modified sequence is safe
    if (
      isValidSequence(modifiedNumbers, true) ||
      isValidSequence(modifiedNumbers, false)
    ) {
      return true; // Safe after removing one level
    }
  }
  return false; // Cannot be made safe
}

isSafe = (parsedData) => {
  let safeReports = 0;
  parsedData.forEach((report) => {
    if (isValidSequence(report, true) || isValidSequence(report, false)) {
      safeReports++;
    } else if (canBeSafeWithOneRemoval(report)) {
      safeReports++;
    }
  });
  console.log(safeReports);
  return safeReports;
};

isSafe(parsedData);
