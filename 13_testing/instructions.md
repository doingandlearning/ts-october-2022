# Testing Exercise Instructions

There are two main activities here:
- In the first, `auth.test.ts`, we are writing tests for an already existing function
- In the second, `__tests__/lookup.ts`, we are writing a function to help the tests pass.

To get setup, run `npm install` from this directory and then `npm test`. You should have 3 passed test suites, 3 skipped tests and 3 passed tests.

Starting with `auth.test.js`, add tests for making sure the function responds appropriately for correct and incorrect passwords. As you add or change a test, you can run `npm test` to re-run the tests.

If you want to have the tests in `watch` mode, watching the file system and rerunning the tests as you save, you can run `npm run test -- --watch`.

Once you're happy with the `auth.test.js`, you can have a go at the lookup one.

You can notice in `lookup.ts`, there are several tests that begin with `xit`. The `x` is skipping the test.

Remove the `x` from the first test and write code in the `lookup` function to allow the test to pass.

Continue until you've got all the tests passing.

This is a TDD development approach - we write the tests, get them failing (red), get them to pass (green) and then update the code until we're happy (refactor). As you write the tests, you will need to add more typing around the function you are creating.

Hope that's clear! 

There are solutions for each of the files in the solutions directory.

