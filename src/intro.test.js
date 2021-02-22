// we're writing unit tests! we're working in a file called whatever.test.js
// This is called test-driven development or TDD
import sum from './sum.js';


//function takes in two numbers and returns sum
//we're gonna use JEST (JEST is a library part of react, other libraries are mocha and chai)
describe('Testing sum module', ()=>{
    //Happy paths, the things we want the function to do successfully:
    //pass in 2 numbers, 1 and 1, expect 2 as sum
    test('sum of 1 and 1, two positive integers', ()=>{
        expect(sum(1, 1)).toBe(2);
    })
    // -1 and 1, expect 0
    test('sum of -1 and 1, negative and positive integer', ()=>{
        expect(sum(-1, 1)).toBe(0);
    })
    //.5 and 1, expect 1.5
    test('sum of .5 and 1, decimal and whole number', ()=>{
        expect(sum(.5, 1)).toBe(1.5)
    })
    //'1' and 2, expect 3
    test('sum of \'1\' and 2, string and integer', ()=>{
        expect(sum('1', 2)).toBe(3)
    })
    //1, expect 1
    test('sum of 1, only one number given', ()=>{
        expect(sum(1)).toBe(1)
    })
    //'ten' and 1, expect NaN
    test('sum of \'ten\' and 1, only one number given', ()=>{
        expect(sum('ten', 1)).toBe(NaN)
    })

})
