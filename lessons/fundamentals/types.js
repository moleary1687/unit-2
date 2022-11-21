/* 
Types - Data Types

- Strings
- Boolean (truthy and falsey)
- Numbers
*/

/* Strings
-data types used to represent text and are wrapped in single, double, or backticks
-

*/

var stringOne = "double quotes"
// prettier-ignore
var stringTwo = 'single quotes'

var stringThree = `back ticks`

// use a comma to separate two variables for printing to to the console
console.log(stringOne,stringTwo);
// adding strings together:
console.log(stringOne + stringTwo);  //output: double quotessingle quotes 

console.log(stringOne + " " + stringTwo); 
//using backticks: 
console.log(`${stringOne} ${stringTwo}`); //output: double quotes single quotes 

// ! CHALLENGE STRING
// ? Declare and Initialize a variable called greeting set it equal to "Good Afternoon"
// ? Declare and Initialize a variable called  firstName set it equal to your name
// ? using backticks console log the following "Good Afternoon Rob" with proper spacing

var greeting = "Good Afternoon"
var firstName = "Matthew"
console.log(`${greeting} ${firstName}`);

//if you want to find out what type the variable is you can use typeof
console.log(typeof firstName);

//Combining two strings is called concatenation. The example below shows that the strings and added together (objectively) but not as math. Literal combination of strings. 

var moneyOne = "20"
var moneyTwo = "10"

console.log(moneyOne + moneyTwo);

/* Numbers

*/

let currentTemp = 23;
console.log("currentTemp", currentTemp);

let calculatedTip = 50 * .25
console.log(calculatedTip);

let numbersAreHard = (0.2 * 10 + 0.1 *10) / 10;
console.log("numbersAreHard", numbersAreHard)

// Convert Strings to Numbers
// Way Number 1
// Number()

console.log(
  "Converting String to Number:",
  Number(moneyOne) + Number(moneyTwo)
);

// Way Number 2
//add a plus to the start of the variable 
// ex: +moneyOne

console.log(+moneyOne + +moneyTwo);

/* 
    Booleans: Only two possible values
    True or False
*/

var isOver21 = true;
console.log("isOver21", isOver21)
var isTeenager = false;
console.log("isTeenager". isTeenager);
console.log("typeof", typeof isOver21);

/* Null
-Null is an empty value.  Think of it as we have an empty container - nothing is in it but it exists as a space to fill later on. 
*/

var isLoggedIn = null;

/* Undefined
 -No value is assigned and does not act as a n empty container
*/

var myName;
//  because we did not assign a value the default is undefinded

var myLastName = undefined;
var myAddress = "";
console.log("typeof myAddress", typeof myAddress);
var notNumber = "name" / "15";
// Using Boolean we can check to see if a variable contains data
// undefined, null, 0, NaN, empty string quotes will all produce a false

console.log("myLastName", Boolean(myLastName));
console.log(Boolean(isLoggedIn));
console.log(Boolean(myAddress));
console.log(Boolean(notNumber));
console.log(Boolean(0));