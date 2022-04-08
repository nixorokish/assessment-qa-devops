const {shuffleArray} = require('./utils')

describe('shuffleArray tests', () => {
    test('new array.length should = old array.length', () => {
        let array = [1, 2, 3, 4, 5]
        expect((shuffleArray(array)).length === array.length)
    })

    test('new array should return an array of the same items', () => {
        let array = [1, 2, 3, 4, 5]
        expect(shuffleArray(array)).toEqual(expect.arrayContaining(array))
    })
})