const arr1 = [3, 4];
// Add at End
arr1.push(5, 6);
console.log(arr1);

// Add at beginning
arr1.unshift(1, 2);
console.log(arr1);

// Add at middle
arr1.splice(2, 0, "a", "b");
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
