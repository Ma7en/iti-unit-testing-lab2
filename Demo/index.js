//problem 1
//input: "iti" ===> output: ITI. expect
//input: 12 ===> output: "".   expect

const capitalizeText = (input) => {
    if (typeof input !== "string") {
        throw new TypeError("parameter should be string");
    }
    return input.toUpperCase();
};

// 1) test that the function takes a string  it will return a string

// 2) test that the function takes a string and return it after capitalize it

// 3) test if the function takes number it will throw type error says parameter should be string

// 4) test if the input iti , the returned value  will not equal to hello

// =================================================================
// =================================================================
// =================================================================

//problem 2
// input number 3 ==> output should be [0,1,2]
// 4 --> [0,1,2,3]

const createArray = (number) => {
    const myArray = Array.from(Array(number).keys());
    return myArray;
};
// module.exports=createArray

// 1) test that the return value of type array

// 2) test if we pass 3 it will return array of length 3 and test it's include 1

// 3) make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call

// 4) Bonus-->//try to delay the testing process 5 seconds

// 5) try to use different styles (expect , should , assert)

// 6) Bonus--> //after finishing your test process try to  run it on a browser

// 7) make pending test case

module.exports = { capitalizeText, createArray };
// window.capitalizeText = capitalizeText;
// window.createArray = createArray;
