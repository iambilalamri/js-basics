const _ = require("lodash");

// Primitive Type: String, number, boolean,
// Reference Type: Object, Array, Function
const arr1 = [1, 5, 13, -3, 8, 9];
const str1 = "HelloWorldPeople";
const var1 = null;
const var2 = undefined;


console.log(str1.split("").reverse().join(""));

console.log(typeof str1);
console.log(typeof arr1);
console.log(var1);
console.log(var2);

console.log(arr1);
console.log(...arr1);

console.log(Math.max(...arr1));
console.log(Math.min(...arr1));
function max(ints) {
  let max = ints[0];
  for (let i = 0; i < ints.length; i++) {
    if (max < ints[i]) {
      max = ints[i];
    }
  }
  return max;
}

// console.log(max(arr1));

const Palindrome = (str) => {
  const isPalindrome = str.split("").reverse().join("");
  console.log(str === isPalindrome);
};

// Palindrome("alla");
// Palindrome("Hello");
