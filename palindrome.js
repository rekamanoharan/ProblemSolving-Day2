// 3.Write a function that checks if a given string is a palindrome.

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Iterate through the string from both ends simultaneously
  for (let i = 0, j = cleanStr.length - 1; i < j; i++, j--) {
    // If characters at current positions don't match, it's not a palindrome
    if (cleanStr[i] !== cleanStr[j]) {
      return false;
    }
  }

  // If all characters match, it's a palindrome
  return true;
}

console.log(isPalindrome("madam")); // Output: true
