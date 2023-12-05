// run on cmd 
// node 12-js-functions.js

// functions in JS 

// syntaxes  

// // old js function 
// function fun() {
//     console.log('fun function invoked.');
// }

// fun();

// // new js function - arrow function 
// const fun2 = () => {
//     console.log('fun2 function invoked.');
//  };

//  fun2();

// const addNums = () => { console.log('addNums function called.'); };
// const addNums = (arg) => { console.log(arg + 'addNums function called.'); };
// const addNums = arg => { console.log(arg + 'addNums function called.'); };
// const addNums = arg => console.log(arg + 'addNums function called.');


// const addNums = (a, b) => { 
//     console.log( a + b); 
// };

// addNums();
// addNums(10);
// addNums(10, 20);
// addNums(10, 20, 30);

// const addNums = (a = 2, b = 3) => { 
//     console.log( a + b); 
// };

// addNums();
// addNums(10);
// addNums(10, 20);
// addNums(10, 20, 30);

// ========================= 
// Asynchronous nature of JS 
// ========================= 

// setTimeout(() => {
//     console.log('one'); // a value comes from here 
// }, 1000);
// console.log('two'); // that value is used here 

// ========================= 
// problems of asynchronous JS 
// ========================= 

// const getFun = () => {
//     setTimeout(() => {
//         return {message: 'Have fun!'};
//     }, 1000);
// };

// const output = getFun();

// console.log(output.message);

// ========================= 
// solution 1 - use callbacks 
// ========================= 

// const getFun = (arg) => {
//     setTimeout(() => {
//         arg({ message: 'Have fun!' }); // function call 
//     }, 1000);
// };
// // getFun(() => { });
// getFun((output) => { console.log(output.message); });

// =================
// expanded version of the above solution  
// =================

// const getFun = (arg) => {
//     console.log('getFun function called');
//     setTimeout(() => {
//         arg({ message: 'Have fun!' }); // function call 
//     }, 1000);
// };
// // getFun(() => { });
// getFun((output) => {
//     console.log('callback function called'); 
//     console.log(output.message); 
// });


// ======================== 
// Functions and args in JS 
// ======================== 

// const fun = (a) => {
//     // let output = a * 2; // a number as arg 
//     // let output = a.message; // an object as arg 
//     a(); // function call 
// };

// // fun(?);
// // fun(10); // number 
// fun({ message: 'abc' }); // object 
// fun(() => { });  // function 



// const printSquare = (n) => { console.log(n * n); };

// printSquare(2);

// let num = 3;
// printSquare(num);


// callback - one function takes another funtion as argument 

// const fun = (arg) => {
//     console.log('fun function called.')
//     arg(); // function call 
// };

// const namedFun = () => {
//     console.log('namedFun function called.');
// };

// fun(namedFun);

// fun(() => { console.log('anonymous function called.'); });


// callback - callback function having argument 

// const fun = (arg) => {
//     console.log('fun function called.')
//     arg('some value'); // function call 
// };

// fun(
//     (abc) => {
//         console.log('anonymous function called.');
//         console.log(abc);
//     }
// );

const fun = (arg) => {
    console.log('fun function called.');
    setTimeout(() => {
        arg('some value'); // function call 
    }, 2000);
};

fun(
    (abc) => {
        console.log('anonymous function called.');
        console.log(abc);
    }
);
