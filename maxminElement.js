// 4.Write a function that finds the maximum and minimum elements in an array.

function findMaxAndMin(arr) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  let max = arr[0]; // Initialize max as the first element
  let min = arr[0]; // Initialize min as the first element

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if a larger element is found
    } else if (arr[i] < min) {
      min = arr[i]; // Update min if a smaller element is found
    }
  }

  return { max, min };
}

const array = [5, 2, 50, 8, 0];
console.log(findMaxAndMin(array)); // Output: { max: 50, min: 0 }
