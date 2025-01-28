import { expect } from 'chai';  
import { add } from '../calculator.js';

describe('String Calculator', function() {
    it('should return 0 for an empty string', function() {
        expect(add('')).to.equal(0);
    });

    it('should return the number for a single number', function() {
        expect(add('1')).to.equal(1);
    });
});

