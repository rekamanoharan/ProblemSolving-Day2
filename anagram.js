// 5.Explain the concept of anagram and write a function to check if two strings are anagrams of each other.

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, "listen" and "silent" are anagrams of each other because they use the same letters.

function isAnagram(str1, str2) {
  // Step 1: Convert strings to lowercase and remove non-alphabetic characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  str2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  // Step 2: Check if lengths are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Step 3: Create frequency counters
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Step 4: Populate frequency counters
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // Step 5: Compare frequency counters
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

const str1 = "state";
const str2 = "taste";
console.log(isAnagram(str1, str2)); // Output: true
