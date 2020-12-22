// OBJECT
let person = {
  name: "Ahmed",
  age: 15,
};
// Dot notation
person.name = "John";
// Bracket Notation
const personCloned = { ...person };
personCloned["name"] = "Mary";

console.log(person);
console.log(person.name);
console.log(personCloned);

// ARRAYS
const selectedColors = ["red", "green", "yellow", "black", "white"];
console.log(selectedColors.indexOf("red"));
console.log(selectedColors);

console.log(true && false); // 1*0 = 0 false
console.log("1" || false); // Anything that is not falsy -> Thruty

// Check 1st operand if it is false then check second operand if it is false then check third one.
// false || 2 || 5 = 2
// false || 5 || 10 = 5
// false || 0 || 7 = 7

// Swap
let a = "red";
let b = "green";

let c = a;
a = b;
b = c;

console.log("a", a);
console.log("b", b);

var elem1 = 4;
var elem1 = 6; 
console.log(elem1); // 6