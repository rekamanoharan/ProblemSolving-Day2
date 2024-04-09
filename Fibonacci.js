// 1.Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.

// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

function generateFibonacci(n) {
  const fibonacciSequence = [0, 1];

  // Generate the next Fibonacci numbers until the sequence has n elements
  for (let i = 2; i < n; i++) {
    const nextFibonacciNumber =
      fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextFibonacciNumber);
  }

  return fibonacciSequence;
}

console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
