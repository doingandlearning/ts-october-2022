import { describe, expect, test, it } from "@jest/globals";

// Data
const users = [
  {
    login: "knuth",
    firstName: "Donald",
    lastName: "Knuth",
    likes: ["C", "Unix"],
  },
  {
    login: "norvig",
    firstName: "Peter",
    lastName: "Norvig",
    likes: ["AI", "Search", "NASA", "Mars"],
  },
  {
    login: "mfowler",
    firstName: "Martin",
    lastName: "Fowler",
    likes: ["Design Patterns", "Refactoring"],
  },
  {
    login: "ada",
    firstName: "Ada",
    lastName: "Lovelace",
    likes: ["Programming", "Analytics", "Mathematics"],
  },
];

// lookup()
const lookup = (login: string, property: string) => {
  // START -- THIS IS WHERE YOUR CODE GOES
  // END
};

// Tests
describe("lookup()", () => {
  it("smoke test", () => {
    expect(true).toBe(true);
  });
  xit("lookup(<login>, 'likes') should return likes for the specified user.", () => {
    const actual = lookup("norvig", "likes");
    const expected = ["AI", "Search", "NASA", "Mars"];

    expect(actual).toEqual(expected);
  });

  xit("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
    const actual = lookup("knuth", "lastName");
    const expected = "Knuth";

    expect(actual).toEqual(expected);
  });

  xit("with unknown user should throw an error with the correct message", () => {
    expect(() => {
      lookup("nobody", "likes");
    }).toThrow(/Could not find user/);
  });

  xit("with unknown property should throw an error the correct message", () => {
    expect(() => {
      lookup("mfowler", "noprop");
    }).toThrow(/Could not find property/);
  });
});
