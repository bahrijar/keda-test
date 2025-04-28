const {
  sortDescending,
  maxSubarraySum,
  sumEvenNumbers,
} = require("./functions");

console.log("=== Function Demonstrations ===\n");

// 1. Sort Descending Function
console.log("1. Sort Descending Function:");
const sortInput = [1, 2, 4, 3, 5, 3, 2, 1];
const sortOutput = sortDescending(sortInput);
console.log(`Input: [${sortInput}]`);
console.log(`Output: [${sortOutput}]`);
console.log("Expected: [5, 4, 3, 3, 2, 2, 1, 1]");
console.log("\n");

// 2. Max Subarray Sum Function
console.log("2. Max Subarray Sum Function:");

// Example 1
const maxSum1 = maxSubarraySum([100, 200, 300, 400], 2);
console.log("Input: ([100, 200, 300, 400], 2)");
console.log(`Output: ${maxSum1}`);
console.log("Expected: 700 (from 300 + 400)");
console.log("");

// Example 2
const maxSum2 = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
console.log("Input: ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)");
console.log(`Output: ${maxSum2}`);
console.log("Expected: 39 (from 4 + 2 + 10 + 23)");
console.log("");

// Example 3
const maxSum3 = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);
console.log("Input: ([-3, 4, 0, -2, 6, -1], 2)");
console.log(`Output: ${maxSum3}`);
console.log("Expected: 5 (from 6 + -1)");
console.log("\n");

// 3. Sum Even Numbers Function
console.log("3. Sum Even Numbers Function:");

// Example 1
const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};
const sumEven1 = sumEvenNumbers(obj1);
console.log("Input:");
console.log(JSON.stringify(obj1, null, 2));
console.log(`Output: ${sumEven1}`);
console.log("Expected: 6");
console.log("");

// Example 2
const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};
const sumEven2 = sumEvenNumbers(obj2);
console.log("Input:");
console.log(JSON.stringify(obj2, null, 2));
console.log(`Output: ${sumEven2}`);
console.log("Expected: 12");
