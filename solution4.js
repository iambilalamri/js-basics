const fibonacci = (n) => {
  if (n <= 2) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
};

const factorial = (n) => {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
};

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(9));

console.log(factorial(4));
