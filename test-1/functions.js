/**
 * Sorts an array of numbers in descending order without using built-in sort functions
 * @param {number[]} arr - The input array of numbers
 * @returns {number[]} - The sorted array in descending order
 */
function sortDescending(arr) {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];

  console.log(`Initial array: [${result}]`);
  // Bubble sort implementation (descending order)
  for (let i = 0; i < result.length; i++) {
    console.log(`Outer loop iteration ${i + 1}`);
    for (let j = 0; j < result.length - i - 1; j++) {
      const currentValue = result[j];
      const nextValue = result[j + 1];
      console.log(
        `Inner loop iteration ${j + 1}, is ${currentValue} < ${nextValue} => ${
          currentValue < nextValue
        }`
      );
      // Swap if the currentValue is less than the nextValue (for descending order)
      if (currentValue < nextValue) {
        // Swap elements
        console.log(`Swapping ${currentValue} and ${nextValue}`);
        result[j] = nextValue;
        result[j + 1] = currentValue;
        console.log(`Array after swap: [${result}]\n`);
      }
    }
    console.log(`Array after iteration ${i + 1}: [${result}]\n`);
  }
  console.log(`Final sorted array: [${result}]`);

  return result;
}

/**
 * Finds the maximum sum of a subarray with the given length
 * @param {number[]} arr - The input array of numbers
 * @param {number} size - The length of the subarray
 * @returns {number|null} - The maximum sum or null if size is invalid
 */
function maxSubarraySum(arr, size) {
  // Edge cases
  console.log(`Input: ([${arr}], ${size})`);

  if (size <= 0 || size > arr.length) {
    return null;
  }

  // Calculate the sum of the first window
  let maxSum = 0;
  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }

  // Initialize current sum with the first window's sum
  let currentSum = maxSum;

  // Slide the window and keep track of the maximum sum
  for (let i = size; i < arr.length; i++) {
    // Add the next element and remove the first element of the previous window
    currentSum = currentSum + arr[i] - arr[i - size];

    // Update maxSum if currentSum is greater
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

/**
 * Calculates the sum of all even numbers in a nested object
 * @param {Object} obj - The input nested object
 * @returns {number} - The sum of all even numbers
 */
function sumEvenNumbers(obj) {
  let sum = 0;

  // Helper function to recursively traverse the object
  function traverse(current) {
    // Base case: if current is not an object or is null
    if (!current || typeof current !== "object") {
      return;
    }

    // Iterate through all properties of the current object
    for (const key in current) {
      const value = current[key];

      // If value is a number and even, add it to the sum
      if (typeof value === "number" && value % 2 === 0) {
        sum += value;
      }

      // If value is an object, recursively traverse it
      if (value && typeof value === "object") {
        traverse(value);
      }
    }
  }

  // Start traversal from the root object
  traverse(obj);

  return sum;
}

module.exports = {
  sortDescending,
  maxSubarraySum,
  sumEvenNumbers,
};
