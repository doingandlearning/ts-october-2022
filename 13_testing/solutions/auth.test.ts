import { describe, expect, test } from "@jest/globals";

function isPasswordAllowed(password: string): boolean {
  return (
    password.length > 6 &&
    // non-alphanumeric
    /\W/.test(password) &&
    // digit
    /\d/.test(password) &&
    // capital letter
    /[A-Z]/.test(password) &&
    // lowercase letter
    /[a-z]/.test(password)
  );
}

test("returns true for valid passwords", () => {
  expect(isPasswordAllowed("!abcDEF123")).toBe(true);
});

test("isPasswordAllowed returns false for invalid passwords", () => {
  expect(isPasswordAllowed("a2c!")).toBe(false);
  expect(isPasswordAllowed("123456!")).toBe(false);
  expect(isPasswordAllowed("ABCdef!")).toBe(false);
  expect(isPasswordAllowed("abc123!")).toBe(false);
  expect(isPasswordAllowed("ABC123!")).toBe(false);
  expect(isPasswordAllowed("ABCdef123")).toBe(false);
});

describe("isPasswordAllowed only allows some passwords", () => {
  const allowedPasswords = ["!aBc123"];
  const disallowedPasswords = [
    "a2c!",
    "123456!",
    "ABCdef!",
    "abc123!",
    "ABC123!",
    "ABCdef123",
  ];

  allowedPasswords.forEach((password) => {
    test(`allows ${password}`, () => {
      expect(isPasswordAllowed(password)).toBe(true);
    });
  });

  disallowedPasswords.forEach((password) => {
    test(`disallows ${password}`, () => {
      expect(isPasswordAllowed(password)).toBe(false);
    });
  });
});

// 🐨 write tests for valid and invalid passwords
// 💰 here are some you can use:
//
// valid:
// - !aBc123
//
// invalid:
// - a2c! // too short
// - 123456! // no alphabet characters
// - ABCdef! // no numbers
// - abc123! // no uppercase letters
// - ABC123! // no lowercase letters
// - ABCdef123 // no non-alphanumeric characters
