const {
  stringLength,
  stringReverse,
  calculator,
  stringCapitalize,
} = require("./app");

//String lenght function testing

test("String Length has not between 1 and 10", () => {
  expect(stringLength("hello")).toBe(5);
});

test("String Length has not between 1 and 10", () => {
  expect(() => stringLength("hello welcome to javascript testing")).toThrow(
    Error("String lenght must be between one and ten characters.")
  );
});

//String reverse function testing

test("String Reverse", () => {
  expect(stringReverse("hello")).toBe("olleh");
});

// claculator testing

describe("Calculator testing", () => {
  test("add testing", () => {
    expect(calculator.add(5, 4)).toBe(9);
  });

  test("subtract testing", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("multiply testing", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });

  test("divide testing", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });
});

// capitalize string testing

test("String capitalize", () => {
  expect(stringCapitalize("hello")).toBe("Hello");
});
