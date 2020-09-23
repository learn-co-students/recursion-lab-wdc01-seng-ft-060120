// Code your solution here!

function printString(myString) {
    if (myString.length > 1){
        console.log(myString[0])
        printString(myString.substring(1, myString.length))
    }
    else {
        console.log(myString)
    }
}


function reverseString(myString) {
    if (myString.length > 1){
        return reverseString(myString.substring(1, myString.length)) + myString[0]
    }
    else{
        return myString
    }
}

function isPalindrome(myString){
    if (myString.length > 1){
        if(myString[0] === myString[myString.length -1]){
            return isPalindrome(myString.substring(1, myString.length - 1))
        }
        else{
            return false
        }
    }
    else{
        return true
    }
}




