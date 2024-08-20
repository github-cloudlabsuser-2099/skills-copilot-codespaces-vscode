const { expect } = require('chai');

// Assuming the calculator functions are in a file named 'calculator.js'
const { clearDisplay, appendToDisplay, calculateResult } = require('./calculator');

describe('Calculator', () => {
  let display;

  beforeEach(() => {
    display = { innerText: '0' };
  });

  it('should clear the display', () => {
    display.innerText = '123';
    clearDisplay(display);
    expect(display.innerText).to.equal('0');
  });

  it('should append a value to the display', () => {
    appendToDisplay(display, '5');
    expect(display.innerText).to.equal('5');
    appendToDisplay(display, '3');
    expect(display.innerText).to.equal('53');
  });

  it('should replace 0 with the new value', () => {
    appendToDisplay(display, '7');
    expect(display.innerText).to.equal('7');
  });

  it('should calculate the result of the expression', () => {
    display.innerText = '2+3*4';
    calculateResult(display);
    expect(display.innerText).to.equal('14');
  });

  it('should handle errors in the expression', () => {
    display.innerText = '2++3';
    calculateResult(display);
    expect(display.innerText).to.equal('Error');
  });
});