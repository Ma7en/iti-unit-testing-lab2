// Lab2 - Testing => me

// Calling function
const { capitalizeText, createArray } = require("../index.js");

// function
// const capitalizeText = (input) => {
//     if (typeof input !== "string") {
//         throw new TypeError("parameter should be string");
//     }
//     return input.toUpperCase();
// };
// const createArray = (number) => {
//     const myArray = Array.from(Array(number).keys());
//     return myArray;
// };

// Calling assert
const assert = require("assert");

// Calling from chai
var expect = require("chai").expect;
var assertChai = require("chai").assert;
var should = require("chai").should();

// Calling browser
// var assert = chai.assert;
// var expect = chai.expect;
// var should = chai.should();

// *** Start Testing *** //

// --- problem 1 --- //
describe("Problem-1", () => {
    // 1) test that the function takes a string  it will return a string
    it("1) returend string ", () => {
        assertChai.isString(capitalizeText("iti"));
    });

    // 2) test that the function takes a string and return it after capitalize it
    it("2) return the string in uppercase", () => {
        assertChai.equal(capitalizeText("iti"), "ITI");
    });

    // 3) test if the function takes number it will throw type error says parameter should be string
    // it("3) TypeError when the input is not a string", () => {
    //     assertChai.throws(
    //         () => capitalizeText(12),
    //         TypeError,
    //         "parameter should be string"
    //     );
    // });
    it("3) TypeError when the input is not a string", function () {
        expect(function () {
            capitalizeText(12);
        }).to.throw(TypeError, "parameter should be string");
    });

    // 4) test if the input iti , the returned value  will not equal to hello
    it("4) return 'hello' when the input is 'iti'", () => {
        assertChai.notEqual(capitalizeText("iti"), "hello");
    });
});

// --- problem 2 --- //
describe("Problem-2", () => {
    // 3) make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call
    let variable = 0;
    beforeEach(() => {
        variable++;
    });

    // 1) test that the return value of type array
    // -> 1) assert
    it("1 - 1 - assert) return an array", () => {
        assertChai.isArray(createArray(3));
        console.log(`1 - 1 - assert) variable=(${variable})`);
    });
    // -> 1) expect
    it("1 - 2 - expect) return an array", () => {
        expect(createArray(3)).to.be.an("array");
        console.log(`1 - 2 - expect) variable=(${variable})`);
    });
    // -> 1) should
    it("1 - 3 - should) return an array", () => {
        createArray(3).should.be.an("array");
        console.log(`1 - 3 - should) variable=(${variable})`);
    });

    // 2) test if we pass 3 it will return array of length 3 and test it's include 1
    // -> (solution number 1)
    // it("2) return array of length 3 and include 1", () => {
    //     // include 1
    //     assertChai.include(createArray(3), 1);
    //     // length 3
    //     assertChai.lengthOf(createArray(3), 3);
    // });
    // -> (solution number 2)
    it("2 - 1 - assert) return array of length 3", () => {
        assertChai.include(createArray(3), 1);
        console.log(`2 - 1 - assert) variable=(${variable})`);
    });
    it("2 - 2 - assert) return array include 1", () => {
        assertChai.lengthOf(createArray(3), 3);
        console.log(`2 - 2 - assert) variable=(${variable})`);
    });
    // -> (solution number 3 expect)
    it("2 - 3 - expect) return array of length 3 and include 1", () => {
        expect(createArray(3))
            .to.be.an("array")
            .that.includes(1)
            .that.lengthOf(3);
        console.log(`2 - 3 - expect) variable=(${variable})`);
    });
    // -> (solution number 4 should)
    it("2 - 4 - should) return array of length 3 and include 1", () => {
        createArray(3).should.be.an("array").that.includes(1).that.lengthOf(3);
        console.log(`2 - 4 - should) variable=(${variable})`);
    });

    // 4) Bonus-->
    // try to delay the testing process 5 seconds
    // before(function () {
    //     setTimeout(() => {}, 5000);
    // });
    it("4) delay 5 seconds", () => {
        //
        setTimeout(() => {}, 5000);
    });

    // 5) try to use different styles (expect , should , assert)

    // 6) Bonus-->
    // after finishing your test process try to  run it on a browser

    // 7) make pending test case
    it("7) should have a pending test case");
});
