// SINGLE LINE COMMENT

/* 
MULTI-LINE
COMMENT
*/

// var fruit = 'Apple';
// fruit = 'Mango';
// console.log(fruit);

// let car = 'Mercedes';
// car = 'Benz';

// const color = 'White';
// color = 'Blue';

// DATA TYPES
// string
// const myName = 'Lawrence';
// const fruit = 'Apple';
// const car = 'Benz';
// const age = 20;

// concatenation
// console.log(
//   'My name is ' +
//     myName +
//     ' and I love ' +
//     fruit +
//     ' and I am ' +
//     age +
//     ' years old'
// );

// let firstNumber = 10;
// const secondNumber = 20;
// const sum = firstNumber + secondNumber;

// firstNumber--; // 9

// console.log(firstNumber);

// Addition +
// console.log(firstNumber + ' + ' + secondNumber + ' = ' + sum);

// Subtraction -
// console.log(secondNumber - firstNumber);

// Division /
// console.log(secondNumber / firstNumber);

// Multiplication *
// console.log(firstNumber * secondNumber);

// Exponential **
// console.log(firstNumber ** 2);

// Modulus %
// console.log('Modulus ' + (firstNumber % 6));

// number
// const digit = 20.5;
// console.log(typeof digit);

// boolean
// const positive = true;

// let negative;
// console.log(typeof negative);
// negative = false;
// console.log(typeof negative);

// let car = 'Benz is a car';

// // length
// console.log(car.length);
// // uppercase
// console.log(car.toUpperCase());
// // lowercase
// console.log(car.toLowerCase());
// // trim
// console.log(car.trim());
// slice
// console.log(car.slice(-9, 0));
// console.log(car.replace(`Benz`, `Mercedes`));

// const myName = prompt('What is your name?');
// const hubby = prompt('What do you like doing');
// const age = prompt('How old are you');

// const tempStr = `My name is ${myName}, I love ${hubby} and I am ${age} years old`;

// console.log(tempStr);

// const num1 = 10;
// const num2 = '10';
// const num3 = 20;

// console.log(num1 + num3 + num2);

// const userName = prompt('What is your name?');

// console.log(`You are welcome ${userName}`);

// OBJECTS
// const person = {
//   name: 'Lawrence',
//   hubby: 'Watching anime',
//   age: 20,
// };

// const car = {
//   name: 'Benz',
//   color: 'white',
//   yearOfMake: 2020,
// };

// console.log(car.yearOfMake);

// const me = `My name is Oyin, I'm a boy`;

// console.log(me);

// ARRAYS
// const firstFruit = ;

// fruits.reverse();
// const numOfFruit = fruits.length; // 4

// console.log(fruits[numOfFruit - 2]);

// const color = 'Brown';

// console.log(color.split(''));

// CLASSWORK
/*
 -Formula for area of a circle = pir^2
 -Accept the radius from the user
 -Print out the result of the area in: The area of the circle
 is: result
 -Hint: make pi a constant of 3.12
*/

// const pi = 3.12;
// const radius = prompt('What is the radius of the circle?');

// const area = pi * Math.pow(radius, 2);

// const result = `The area of the circle is: ${area}`;

// console.log(result);

// const car = {
//   name: 'Benz',
//   yom: 2020,
// };

// car.name = 'Mercedes';

// console.log(car);

// const fruits = ['Mango', 'Banana', 'Guava', 'Pear'];

// remove from the back of an array
// fruits.pop();

// add to the end of an array
// fruits.push('Apple');

// remove from the beginning of an array
// fruits.shift();

// add to the beginning of an array
// fruits.unshift('Apple');

// fruits.splice(0, 1, 'Apple');
// fruits[0] = 'Apple';

// console.log(fruits);

// Comparison Operators

// Greater than
// console.log(10 > 5);

// Lesser than
// console.log(5 < 10);

// Greater or equal
// console.log(10 >= 10);

// Lesser or equal
// console.log(5 <= 5);

// Double Equal to checks only the value
// console.log('10' == 10);

// Not Equal to checks only the value
// console.log(10 != '10');

// Triple Equal to checks the value and the type
// console.log('10' === 'ten');

// Triple Not Equal to checks the value and the type
// console.log(10 !== '10');

// Conditionals
// if (2 === '2') {
//   console.log('Yes, it is correct');
// } else {
//   console.log('No, it is not correct');
// }

// console.log(typeof parseInt(age));

// if (parseInt(age) >= 18) {
//   console.log(`You are ${age} years o(ld and you can drive a car.`);
// } else if (parseInt(age) <= 17 && parseInt(age) >= 12) {
//   console.log(
//     `You are ${age} years old, you cannot drive a car, but you can drive a bicycle`
//   );
// } else {
//   console.log(`You are ${age} years old, it is not safe for you to drive now`);
// }

// let age = prompt('How old are you?');

// let message = '';

// switch (parseInt(age)) {
//   case 1:
//     message = 'You are 1 year old, you cannot drive';
//     break;
//   case 2:
//     message = 'You are 2 years old, you can not drive';
//     break;
//   case 3:
//     message = 'You are 3 years old, you can not drive';
//     break;
//   case 4:
//     message = 'You are 4 years old, you can not drive';
//     break;
//   case 5:
//     message = 'You are 5 years old, you can not drive';
//     break;
//   case 6:
//     message = `You are ${age} years old, you can not drive`;
//     break;
//   case 18:
//     message = 'You are 18 years old, you can drive';
// }

// console.log(message);

// const veg = 'Banana';

// switch (veg) {
//   case 'Apple':
//     console.log('This is an apple');
//     break;
//   case 'Banana':
//     console.log('This is a banana');
//     break;
//   default:
//     console.log('This is fruit is not in our list');
// }

// Even or Odd

// const num = prompt('Enter a number');

// if (num % 2 === 0) {
//   console.log('This is an even number');
// } else {
//   console.log('This is an odd number');
// }

// Iterations

// For Loop
// for (let i = 1; i <= 6; i++) {
//   console.log(i);
// }

// const fruits = ['Apple', 'Banana', 'Orange', 'Guava', 'Pear'];

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// For in Loop

// for (let item in fruits) {
//   console.log(fruits[item]);
// }

// const numbers = { 0: 1, 1: 2, 2: 3 };

// For of Loop
// for (item of fruits) {
//   console.log(item);
// }

// Foreach
// fruits.forEach(function (fruit, number) {
//   console.log(`${number + 1} - ${fruit}`);
// });

// const car = {
//   model: 'Benz',
//   color: 'yellow',
//   year: 2020,
// };

// for (let item in car) {
//   console.log(`${item}: ${car[item]}`);
//   // console.log(car[item]);
// }
// const a = 3;
// const b = 1;
// const c = 1;

// const x1 = (
//   (-b + Math.sqrt(Math.abs(Math.pow(b, 2) - 4 * a * c))) /
//   (2 * a)
// ).toFixed(2);

// const x2 = (
//   (-b - Math.sqrt(Math.abs(Math.pow(b, 2) - 4 * a * c))) /
//   (2 * a)
// ).toFixed(2);

// Math.pow(2, 2) - (4 * 1 * 3)
// console.log(Math.sqrt(2 * 2 - 4 * 1 * 3));
// console.log(Math.sqrt(1 * 1 - 4 * 3 * 1));
// console.log(x1, x2);
// console.log(Math.sqrt(Math.abs(-81)));

// Joining 2 or more arrays together using the spread operator (...)
// const name1 = ['Bolu', 'Eniola', 'Jerry'];
// const name2 = ['Ike', 'Tom', 'Barry'];

// const myName = 'Ayo';

// const allNames = [...name1, 'Lawrence', ...name2, 'Mary', myName];

// console.log(allNames);

// Joining 2 or more objects together using the spread operator (...)
// const car = {
//   model: 'BMW',
//   year: 2020,
// };

// const person = {
//   userName: 'John',
//   age: 20,
//   ...car,
// };

// Destructuring objects
// const { userName, model, age } = person;

// console.log(userName, age);
// console.log(model);

// const fruits = ['Apple', 'Orange', 'Banana', 'Guava'];

// const [firstFruit, thirdFruit, secondFruit] = fruits;

// console.log(secondFruit);

// Functions

// function printName() {
//   console.log('Lawrence');
// }

// function printName(amount) {
//   const payment = amount * 0.5;
//   console.log(payment);
// }

// printName(20);

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// sum(8, 2);
// sum(10, 2);
// sum(20, 2);
// sum(5, 2);
// sum(7, 2);

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(2, 3));

// const userDetail = (name, age, hobby) =>
//   `Hi ${name}, you are ${age} years old and you love ${hobby}`;

// console.log(userDetail('Mary', 22, 'watching anime'));

// const square = function (num) {
//   return Math.pow(num, 2);
// };

// console.log(square(12));

// Arrow functions
// const square = (num) => Math.pow(num, 2);

// console.log(square(9));

// write a program that iterate 20 times,
// if the number is divisible by 3 print "Fizz"
// else if the number is divisible by 5 print "Buzz"
// else if the number is divisbibe by 3 and 5 print "Fizz Buzz"
// else print the number

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('Fizz Buzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// Map, Filter, Find, Reduce
// const drinks = [
//   {
//     id: 1,
//     color: 'Black',
//     sugar: '40gm',
//     isCarbonated: true,
//   },
//   {
//     id: 2,
//     color: 'Brown',
//     sugar: '0gm',
//     isCarbonated: false,
//   },
//   {
//     id: 3,
//     color: 'Orange',
//     sugar: '40gm',
//     isCarbonated: true,
//   },
// ];

// const canDrinks = drinks.map(function (drink, index) {
//   // let newObj = {};
//   // if (drink.id === 1) {
//   //   newObj = { ...drink, isCanned: true };
//   // } else {
//   //   newObj = { ...drink, isCanned: false };
//   // }
//   // return newObj;
//   return drink.id === 1
//     ? { ...drink, isCanned: true }
//     : { ...drink, isCanned: false };
// });

// console.log(canDrinks);

// const carbonated = drinks.filter((drink) => {
//   return drink.isCarbonated === true;
// });

// console.log(carbonated);

// const tea = drinks.find((drink) => {
//   return drink.color === 'Brown';
// });

// console.log(tea);

// Reduce
// const nums = [1, 2, 3, 4, 5];

// const sum = nums.reduce((initialValue, currentValue) => {
//   return initialValue + currentValue;
// }, 0);

// console.log(sum);

// const cart = [
//   { productName: 'iPhone 12', price: 245000 },
//   { productName: 'Samsung A22', price: 110000 },
//   { productName: 'Nokia 3310', price: 10000 },
// ];

// const totalPrice = cart.reduce((initialValue, currentValue) => {
//   return initialValue + currentValue.price;
// }, 0);

// console.log(totalPrice);

// Write a function that receives an argument,
// if the argument when reversed is the same when spelt from the beginning
// print true
// else print false
// example madam would print true but leg would print false,
// 131 would print true but 311 would print false

// Classes

// console.log(crayon);
// console.log(cars);

// class Person {
//   constructor(firstName, age, hobby) {
//     this.firstName = firstName;
//     this.age = age;
//     this.hobby = hobby;
//   }

//   summary() {
//     return `My name is ${this.firstName}`;
//   }

//   getAge() {
//     return `I am ${this.age} years old. In two years I would be ${
//       this.age + 2
//     } years old`;
//   }

//   getFutureAge(num) {
//     return `You would be ${this.age + num} in ${num} years.`;
//   }
// }

// class Job extends Person {
//   constructor(firstName, age, hobby, jobName) {
//     super(firstName, age, hobby);
//     this.jobName = jobName;
//   }

//   description() {
//     return `Hi ${this.firstName}, you are a ${this.jobName}`;
//   }
// }

// const personOne = new Person('John', 20, 'driving');
// const personTwo = new Person('Bola', 22, 'reading');
// const personOneJob = new Job('John', 20, 'driving', 'Frontend Dev');

// console.log(personOne.summary());
// console.log(personOne.getAge());
// console.log(personOne.getFutureAge(5));
// console.log(personOneJob.description());

// Modules (Imports and Exports)
// import Cinema, { colors as crayon } from './Movie.js';
// // import { colors } from './Movie.js';

// console.log(crayon);

// const got = new Cinema('Game of Thrones', 'Thriller', ['War', 'Blood', 'Lies']);

// console.log(got.description());

import Calculation from './Calculation.js';

/*
Create a new file Calculation.js
Create a class in the Calculation.js file
In the class, create a method to
=> add
=> subtract
=> multiply
=> divide
examples:
const calc = new Calculation();
calc.add(2,3) = 5
calc.subtract(5, 2) = 3
calc.multiply(2, 7) = 14
calc.divide(8, 2) = 4
*/

const calc = new Calculation();

console.log(calc.add(2, 3));
console.log(calc.subtract(8, 2));
console.log(calc.multiply(7, 2));
console.log(calc.divide(81, 9));
console.log(calc.square(10));