import { expect, test } from "@jest/globals";

const sum = (a: number, b: number) => a + b;

test("adds 1 + 2 to equal 3", () => {
  // Arrange
  const a = 1;
  const b = 2;
  // Act
  const result = sum(a, b);
  // Assert
  expect(result).toBe(3);
});
