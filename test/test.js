import { expect } from 'chai';  
import { add } from '../calculator.js';

describe('String Calculator', function() {
    it('should return 0 for an empty string', function() {
        expect(add('')).to.equal(0);
    });

    it('should return the number for a single number', function() {
        expect(add('1')).to.equal(1);
    });

    it('should return the sum of multiple numbers', function() {
        expect(add('1,6')).to.equal(7);
    });

    it('should handle new lines between numbers', function() {
        expect(add('1\n4,6')).to.equal(11);
    });

    it('should handle custom delimiters', function() {
        expect(add('//;\n1;2')).to.equal(3);
    });

    it('should throw an exception for negative numbers', function() {
        expect(() => add('1,-2')).to.throw('negative numbers not allowed -2');
    });
});

