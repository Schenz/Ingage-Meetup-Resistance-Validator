var {expect} = require('chai');
var test = require('../src/resistanceValidator.js');
describe("Resistance Validator", function() {

  it("test 4 bands", function() {
    expect(test.isInRange([ "brown", "black", "red", "gold" ], 1017)).true;
  });

  it("test 3 bands", function() {
    expect(test.isInRange([ "brown", "black", "red" ], 1017)).true;
  });

  it("test 5 bands", function() {
    expect(test.isInRange([ "brown", "black", "red", "orange", "gold" ], 1017)).false;
  });

});
