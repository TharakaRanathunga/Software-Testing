# mylib arithmetic library

This project demonstrates a small JavaScript arithmetic library and its Mocha
and Chai unit tests. The implementation details and test-focused report are in
`DOCUMENTATION.md`.

# Usage

## Setup

From this project directory, install the dependencies:

```text
npm install
```

This creates `node_modules`, which is excluded from Git by `.gitignore`.

## Run the main program

```text
npm start
```

This imports `src/mylib.js` and demonstrates addition, subtraction,
multiplication, and division.

## Run the tests

```text
npm test
```

The test command runs the three Chai-style suites in the `test` directory; it
does not execute the main program. The suites contain 24 tests in total,
including zero-division error tests.
