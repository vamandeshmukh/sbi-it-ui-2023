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

// expanded version 

const getFun = (arg) => {
    console.log('getFun function called');
    setTimeout(() => {
        arg({ message: 'Have fun!' }); // function call 
    }, 1000);
};
// getFun(() => { });
getFun((output) => {
    console.log('callback function called'); 
    console.log(output.message); 
});









