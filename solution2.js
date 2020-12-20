// Condition If and switch case break
let hour = 10;

if (hour >= 6 && hour <= 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good evening");
}

// Loop For
// for (let i = 0; i <= 5; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Loop While
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// Loop Do While
// let i = 0;
// do {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 5);

// do while loop s'execute meme si la condition est
// fause car on le teste a la fin par contre while loop c'est au debut

// Loop For in

const person = {
  name: "John",
  age: 14,
};

for (let key in person) {
  // we get the keys of object
  console.log(key, ":(", person[key], ")");
}

//*************************************/

const colors = ["red", "green", "white", "black"];
for (let value of colors) {
  // parcourir an array
  console.log(value);
}

// Break
// let i = 0;
// while (i <= 5) {
//   if (i === 5 ) break;
//   console.log(i);
//   i++;
// }
// output: 0 1 2 3 4

// Continue
// let i = 0;
// while (i <= 10) {
//   if (i % 2 == 0) {
//     i++;
//     continue; }
//   console.log(i);
//   i++;
// }
// Output 1 3 5 7 9
