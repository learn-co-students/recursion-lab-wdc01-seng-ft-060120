// Code your solution here!
function printString(string) {
  console.log(string[0])

  if (string.length > 1) {
    let mySubString = string.substring(1, string.length)
    printString(mySubString)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(string) {
  let length = string.length;

  if (length < 2) {
    return true;
  } else if (string[length - 1] === string[0]) {
    return isPalindrome(string.substring(1, length - 1));
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  let new_index = index -1

  if (index < 1) {
    return array[index]
  } else {
    return array[index] + addUpTo(array, new_index)
  }
}

function maxOf(array) {
  return array.length === 1 ? array[0] : Math.max(array.pop(), maxOf(array))
}

function includesNumber(array, number) {
  if (array.length === 0) {
      return false;
  } else if (array.shift() === number) {
    return true;
  } else {
    return includesNumber(array, number)
  }
}
