var should = require("chai").should();

describe("disemvowel", function() {
  it("should return a string w/o vowels", function() {
    disemvowel("function").should.equal("fnctn");
  });
});