const mapArrToStrings = require('./mapArrToString');

describe('arr to strings', () => {
    
    test('Correct value', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('different types', () => {
        expect(mapArrToStrings([1, 2, 3, undefined, null, 'hello'])).toEqual(['1', '2', '3']);
    })
    test('empty array', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test('negative', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    })
});