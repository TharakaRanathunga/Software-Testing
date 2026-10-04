# mylib Arithmetic Library and Unit Tests

## 1. Implementation

The project contains a small CommonJS library in `src/mylib.js`. It exports
`add`, `subtract`, `multiply`, and `divide`. Each function checks that both
arguments are numbers. The `divide` function also throws an error when its
divisor is zero.

The separate program in `src/main.js` imports the library and calls every
operation. It can be run with `npm start`.

## 2. Test suite

The test suite is in three files: `test/mylib.assert.test.js`,
`test/mylib.expect.test.js`, and `test/mylib.should.test.js`. They test the
same eight behaviors using Chai's Assert, Expect, and Should styles. Each
style tests successful arithmetic, invalid inputs, and division by zero. Each
file has a `before` hook that runs before its tests and an `after` hook that
runs after its tests finish.

The key zero-division test is:

```javascript
it("throws an error when dividing by zero", function () {
  assert.throws(() => mylib.divide(12, 0), "Cannot divide by zero");
});
```

The corresponding library behavior is:

```javascript
function divide(first, second) {
  validateNumbers(first, second);
  if (second === 0) {
    throw new Error("Cannot divide by zero");
  }
  return first / second;
}
```

The tests run separately from the main program with:

```text
npm test
```

The expected result is 24 passing tests: eight tests in each of the three
Chai-style suites. The main program is run separately
with:

```text
npm start
```

## 3. Limitations

The library is intentionally small. It does not support numeric strings,
BigInt values, complex numbers, or advanced arithmetic operations. It also
does not use property-based testing or test every possible numeric edge case,
such as `NaN` and infinity. The tests demonstrate the required behavior but
are not a complete mathematical verification of the library.

## References

Public GitHub repository: **replace this text with the URL of your public
GitHub repository before submitting**.