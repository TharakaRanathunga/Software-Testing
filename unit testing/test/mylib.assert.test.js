const assert = require("chai").assert;
const mylib = require("../src/mylib");

describe("mylib with Assert", function () {
  before(function () {
    console.log("Starting Assert tests");
  });

  after(function () {
    console.log("Finished Assert tests");
  });

  it("adds two numbers", function () { assert.strictEqual(mylib.add(2, 3), 5); });
  it("subtracts two numbers", function () { assert.strictEqual(mylib.subtract(8, 3), 5); });
  it("multiplies two numbers", function () { assert.strictEqual(mylib.multiply(4, 3), 12); });
  it("divides two numbers", function () { assert.strictEqual(mylib.divide(12, 3), 4); });
  it("rejects invalid addition input", function () { assert.throws(() => mylib.add(2, "3"), "Inputs must be numbers"); });
  it("rejects invalid subtraction input", function () { assert.throws(() => mylib.subtract(2, "3"), "Inputs must be numbers"); });
  it("rejects invalid multiplication input", function () { assert.throws(() => mylib.multiply(2, "3"), "Inputs must be numbers"); });
  it("rejects division by zero", function () { assert.throws(() => mylib.divide(12, 0), "Cannot divide by zero"); });
});