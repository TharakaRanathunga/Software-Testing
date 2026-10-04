const chai = require("chai");
const should = chai.should();
const mylib = require("../src/mylib");

describe("mylib with Should", function () {
  before(function () {
    console.log("Starting Should tests");
  });

  after(function () {
    console.log("Finished Should tests");
  });

  it("adds two numbers", function () { mylib.add(2, 3).should.equal(5); });
  it("subtracts two numbers", function () { mylib.subtract(8, 3).should.equal(5); });
  it("multiplies two numbers", function () { mylib.multiply(4, 3).should.equal(12); });
  it("divides two numbers", function () { mylib.divide(12, 3).should.equal(4); });
  it("rejects invalid addition input", function () { (() => mylib.add(2, "3")).should.throw("Inputs must be numbers"); });
  it("rejects invalid subtraction input", function () { (() => mylib.subtract(2, "3")).should.throw("Inputs must be numbers"); });
  it("rejects invalid multiplication input", function () { (() => mylib.multiply(2, "3")).should.throw("Inputs must be numbers"); });
  it("rejects division by zero", function () { (() => mylib.divide(12, 0)).should.throw("Cannot divide by zero"); });
});