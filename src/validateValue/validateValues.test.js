const validateValue = require('./validateValue');

describe('Validation value', () => {
    
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('less than correct', () => {
        expect(validateValue(-1)).toBe(false);
    })
    test('more tha correct', () => {
        expect(validateValue(101)).toBe(false);
    })
    test('the smallest value', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('the largest value', () => {
        expect(validateValue(100)).toBe(true);
    })

});