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

function addUpTo(myArray, index){
    if(index > 0){
        return addUpTo(myArray.slice(1), index - 1) + myArray[0]
    }
    else{
        return myArray[0]
    }
}

function maxOf(myArray){
    if(myArray.length > 1){
        return Math.max(myArray.pop(), maxOf(myArray))
    }
    else{
        return myArray[0]
    }
}

function includesNumber(array, number){
    if(array.length > 0){
        if(array[0] === number){
            return true
        }
        else{
            return includesNumber(array.slice(1), number)
        }
    }
    else{
        return false
    }
}



