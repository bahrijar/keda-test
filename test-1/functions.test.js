const { sortDescending, maxSubarraySum, sumEvenNumbers } = require("./functions")

// Tests for sortDescending function
describe("sortDescending", () => {
  test("sorts an array of numbers in descending order", () => {
    expect(sortDescending([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1])
  })

  test("handles empty arrays", () => {
    expect(sortDescending([])).toEqual([])
  })

  test("handles arrays with a single element", () => {
    expect(sortDescending([42])).toEqual([42])
  })

  test("handles arrays with negative numbers", () => {
    expect(sortDescending([-1, -5, 10, 0, 3])).toEqual([10, 3, 0, -1, -5])
  })
})

// Tests for maxSubarraySum function
describe("maxSubarraySum", () => {
  test("finds the maximum sum of a subarray with length 2", () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700) // 300 + 400
  })

  test("finds the maximum sum of a subarray with length 4", () => {
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39) // 4 + 2 + 10 + 23
  })

  test("finds the maximum sum of a subarray with length 2 (with negative numbers)", () => {
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5) // 6 + (-1)
  })

  test("returns null for invalid size", () => {
    expect(maxSubarraySum([1, 2, 3], 0)).toBeNull()
    expect(maxSubarraySum([1, 2, 3], 4)).toBeNull()
  })
})

// Tests for sumEvenNumbers function
describe("sumEvenNumbers", () => {
  test("sums all even numbers in a nested object (example 1)", () => {
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
    }
    expect(sumEvenNumbers(obj1)).toBe(6) // 2 + 2 + 2
  })

  test("sums all even numbers in a nested object (example 2)", () => {
    const obj2 = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    }
    expect(sumEvenNumbers(obj2)).toBe(12) // 2 + 2 + 2 + 2 + 4
  })

  test("handles objects with no even numbers", () => {
    const obj = {
      a: 1,
      b: { c: 3, d: 5 },
      e: "hello",
    }
    expect(sumEvenNumbers(obj)).toBe(0)
  })

  test("handles empty objects", () => {
    expect(sumEvenNumbers({})).toBe(0)
  })
})
