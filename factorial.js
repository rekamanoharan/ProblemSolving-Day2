// 2.Write a function that takes a number as input and returns the factorial of that number.

function factorial(n) {
  if (n < 0) {
    return null; // Factorial is not defined for negative numbers
  }

  let result = 1;

  // Multiply all integers from 1 to n
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(8)); // Output: 40320
