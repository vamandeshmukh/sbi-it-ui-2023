// on cmd run - 
// node 11-js-intro.js

// console.log('Hello world!');
// console.log('Hello world! 2')
// console.log("Hello world! 3");
// console.log(`Hello world! 4`);

// console.log(1 + 2);

// ===========
// JS basics 
// ===========

// datatypes in JS 
// number, string, boolean 

// java 
// int num; // strongly typed language 

// JS 
// let num = 'abc' ; // dynamically typed language 

// variable declaration in JS 

// num = 10; // do not use this 
// var num2 = 20; // do not use this 
// const num3 = 30; // use this as default choice 
// let num4 = 40; // use this also 

// variables and types - dynamic type inference 

// let num = 10;
// console.log(num);
// console.log(typeof (num));
// num = 20;
// console.log(num);
// console.log(typeof (num));
// num = 'abc';
// console.log(num);
// console.log(typeof (num));
// num = false;
// console.log(num);
// console.log(typeof (num));
// num = 30;
// console.log(num);
// console.log(typeof (num));

// operators 
// control structure 
// 

// truthy, falsy 
// falsy - false, 0, '', undefined, null  
// truthy - other than falsy 

// let firstName = '';
// if (firstName)
//     console.log('yes');

// relational operators 
// console.log( 10 == 10);
// console.log( 10 == '10');
// console.log( 10 === '10');
// console.log( 10 !== '10');

// arrays and objects in JS 

// const myArr = [10, 20, 'abc', false, ['a', 2, false], '30'];

// for (let elem of myArr) {
//     console.log(elem);
// }


const sbiEmp = {
    eid: 101,
    designation: 'AGM',
    firstName: 'Sonu',
    salary: 10.5,
    isMarried: false,
    address: {
        city: 'Hyderabad',
        pin: 500001
    },
    phones: [987600000, 543200000]
    ,
    bio: '@sonu'
};

// console.log(sbiEmp);
console.log(sbiEmp.firstName);
console.log(sbiEmp.phones[1]);



// console.log(2 + 1);
// console.log(2 - 1);
// console.log(2 + '1');
// console.log(2 - '1');
// console.log(2 - 'a');




















