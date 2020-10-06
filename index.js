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
    if (string.length > 1) {
        return reverseString(string.substring(1, string.length)) + string[0]
    } else {
        return string
    }
}

function isPalindrome(string) {
    if (string.length > 1){
        if (string[0] === string[string.length - 1]){
            return isPalindrome(string.substring(1, string.length - 1))
        } else {
            return false
        }
    } else {
        return true
    }
}

function addUpTo(array, index){
    return index ? array[index] + addUpTo(array, index - 1) : array[index]
}

function maxOf(array){
    if (array.length === 1){
        return array[0]
    } else {
        return Math.max(array.pop(), maxOf(array))
    }
}

function includesNumber(array, number){
    if (array.length > 0){
        if(array[0] === number){
            return true
        } else {
            return includesNumber(array.slice(1), number)
        }
    } else {
        return false
    }
}