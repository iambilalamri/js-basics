const arr1 = [3, 4];
// Add at End
arr1.push(5, 6);

// Delete at End
// arr1.pop();
console.log(arr1);

// Add at beginning
arr1.unshift(1, 2);

// Delete at beginning
// arr1.shift();
console.log(arr1);

// Add at middle
arr1.splice(2, 0, "a", "b");
// Delete at middle
arr1.splice(2, 1);
// splice(position, number of value to delete, value1, value2);
console.log(arr1);

//*************************************** */

const arr2 = [1, 2, 3, 1, 4];
console.log(arr2.indexOf("1")); // -1
console.log(arr2.indexOf(1)); // index 0
console.log(arr2.indexOf(1) !== -1); // true
console.log(arr2.includes(1)); // true

//*************************************** */
const arr3 = [5, 12, 8, 130, 44];

const found = arr3.find((element) => element > 10);
const isFound = arr3.some((element) => element > 10);

console.log(found);
console.log(isFound);

//*****************************************/

const first = [1, 2, 3];
const second = [4, 5, 6];
const str1 = "HelloWorld";

const combined = first.concat(second);
const slice1 = combined.slice(2, 4);
const slice2 = combined.slice(2);

console.log(combined); // [1,2,3,4,5,6]
console.log(slice1); // [3,4]
console.log(slice2); // [3,4,5,6]
console.log(combined.join("-"));
console.log(str1.split(""));
console.log(first.reverse());
console.log(arr2.sort());

//*******************************************/

const numbers = [1, -1, 2, 3];
// True si toutes les nombres sup ou eg a 0; sinon False
const allPositive = numbers.every((num) => num >= 0);
const atLeastOnePositive = numbers.some((num) => num >= 0);
console.log(allPositive);
console.log(atLeastOnePositive);

const filtered = numbers.filter((num) => num >= 0);
const items = filtered.map((elem) => "<li>" + elem + "</li>");
console.log(filtered);
console.log(items);
console.log(items.join());
