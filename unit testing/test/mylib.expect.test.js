const { expect } = require("chai");
const mylib = require("../src/mylib");

describe("mylib with Expect", function () {
  before(function () {
    console.log("Starting Expect tests");
  });

  after(function () {
    console.log("Finished Expect tests");
  });

  it("adds two numbers", function () { expect(mylib.add(2, 3)).to.equal(5); });
  it("subtracts two numbers", function () { expect(mylib.subtract(8, 3)).to.equal(5); });
  it("multiplies two numbers", function () { expect(mylib.multiply(4, 3)).to.equal(12); });
  it("divides two numbers", function () { expect(mylib.divide(12, 3)).to.equal(4); });
  it("rejects invalid addition input", function () { expect(() => mylib.add(2, "3")).to.throw("Inputs must be numbers"); });
  it("rejects invalid subtraction input", function () { expect(() => mylib.subtract(2, "3")).to.throw("Inputs must be numbers"); });
  it("rejects invalid multiplication input", function () { expect(() => mylib.multiply(2, "3")).to.throw("Inputs must be numbers"); });
  it("rejects division by zero", function () { expect(() => mylib.divide(12, 0)).to.throw("Cannot divide by zero"); });
});