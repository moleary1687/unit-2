var helicopter1 = "Blackhawk";
var helicopter2 = "bLaCkHawk";

var stringThree = "3";
var numberThree = 3;

console.log(helicopter1 == helicopter2); //output: false
console.log(helicopter1.toUpperCase == helicopter2.toUpperCase); // output: true

console.log(stringThree == numberThree); //output: true

//2 equal signs will compare the value and it doesn't care about the data type:
console.log(
    "stringThree and numberThree with two equal",
    stringThree == numberThree); //output: true

//3 equal signs will compare type and value: 
console.log(
    "stringThree and numberThree with three equal",
    stringThree === numberThree);  //output: false

//Not Operator: Only looks at the value and doesn't care bout the data type:
console.log("Not equal helicopter", helicopter1 != helicopter2); //output: true
//
console.log("Not equal stringThree and numberThree", stringThree !== numberThree); //output: true

//Greater than:

console.log("greater than", 10 > 2); //output: true
console.log("greater than", 10 < 2); //output: false

//Greater than or equal:
