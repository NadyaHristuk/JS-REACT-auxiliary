const expect = require('chai').expect;
const hi = require('../app').greet;
const arrFn = require('../app').reduceFunc;
const findNumber = require('../app').findNumber;

describe('hello',function(){
    it('hello test',function(){
        const result = hi();
        expect(result).to.be.a('string');
        expect(result).equal('hello');
    })
});

describe('reduce', function(){
    it('empty arr', function() {
        const result = arrFn([]);
        expect(result).to.be.a('number');
        expect(result).equal(0);
    })

    it('single el',function(){
        const result = arrFn([15]);
        expect(result).to.be.a('number');
        expect(result).equal(15);
    })

    it('full arr' ,function(){
        const result = arrFn([1,2,3]);
        expect(result).to.be.a('number');
        expect(result).equal(6);
    })

    it('obj' , function() {
        const result = arrFn({});
        expect(result).to.be.a('boolean');
        expect(result).equal(false);
    })

    it ('string', function() {
        const result = arrFn('test');
        expect(result).to.be.a('boolean');
        expect(result).equal(false);
    })

    it('number' , function() {
        const result = arrFn(6);
        expect(result).to.be.a('boolean');
        expect(result).equal(false);
    })
})

describe('closest number' , function() {
    it('pos numbers', function(){
        const result = findNumber(5,3,20);
        expect(result).to.be.a('number');
        expect(result).equal(3);
    })

    it('negative number' , function(){
        const result = findNumber(-2,-100,-15,-20);
        expect(result).to.be.a('number');
        expect(result).equal(-2);
    })

    it('diff numbers', function() {
        const result = findNumber(-5,-1,-10,12,36);
        expect(result).to.be.a('number');
        expect(result).equal(-1);
    })
    
    it('simple num', function(){
        const result = findNumber(50,20,-2,2,-10);
        expect(result).to.be.a('number');
        expect(result).equal(2);
    })
})






// describe('Temp', function () {
//     it('one', function () {
//         const result = mintemp(1, -2, -8, 4, 5);
//         expect(result).to.be.a('number');
//         expect(result).equal(1);
//     })

//     it('minus', function () {
//         const result = mintemp(-12, -5, -137);
//         expect(result).to.be.a('number');
//         expect(result).equal(-5);
//     })

//     it('equal numbers', function () {
//         const result = mintemp(-10, -5, -3, 3, 12, 45);
//         expect(result).to.be.a('number');
//         expect(result).equal(3);
//     })

//     it('different numbers', function () {
//         const result = mintemp(-10, -5, -1, 3, 12, 8);
//         expect(result).to.be.a('number');
//         expect(result).equal(-1);
//     })
// })