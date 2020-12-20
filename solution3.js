function max(a, b) {
  return a > b ? a : b;
}
console.log(max(10, 6));

function isLandscape(width, heigh) {
  // We use this expression when return should be boolean
  return width > heigh;
}

function showNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    const message = i % 2 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sum(10));

//*************************************************/

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}

//**************************************************/

function showPrime(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}

//*****************************************/
// Function Constructor

let post = new Post("a", "b", "c");
console.log(post);
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
