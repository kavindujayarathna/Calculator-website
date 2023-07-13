const path = require('path');
const scriptPath = path.join(__dirname, '../script.js');

const assert = require('chai').assert;
const calculate = require(scriptPath);

describe('Calculator', () => {
  it('should return correct result for addition', () => {
    const result = calculate('2+2');
    assert.equal(result, 4);
  });

  it('should return correct result for subtraction', () => {
    const result = calculate('5-3');
    assert.equal(result, 2);
  });

  it('should return correct result for multiplication', () => {
    const result = calculate('4*3');
    assert.equal(result, 12);
  });

  it('should return correct result for division', () => {
    const result = calculate('10/2');
    assert.equal(result, 5);
  });

  it('should return "Error" for invalid expressions', () => {
    const result = calculate('10/0');
    assert.equal(result, Infinity);
  });
});
