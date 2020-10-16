function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.slice(1);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str,newStr = "") {
  newStr += str[str.length - 1];
  const sub = str.slice(0,str.length - 1);
  if(sub.length <= 0)
    return newStr;
  else
    return reverseString(sub,newStr);
}

function isPalindrome(str){
  if (str.length <= 1)
    return true;
  else if (str[0] === str[str.length - 1])
    return isPalindrome(str.slice(1,str.length - 1));
  return false;
}

//sum all elements up to & including lastIdx
function addUpTo(arr,lastIdx, currentIdx = 0, sum = 0){
  const newSum = sum + arr[currentIdx];

  if(currentIdx === lastIdx)
    return newSum;
  return(addUpTo(arr,lastIdx,currentIdx + 1, newSum));
}

//find max num in array
function maxOf(arr,max = 0){
  const current = arr.pop();
  const newMax = current > max ? current : max;

  if(arr.length === 0)
    return newMax;
  
  return maxOf(arr,newMax);
}


function includesNumber(arr,num){
  if(arr.length === 0) return false;
  
  const current = arr.shift();

  if(current === num) return true;

  return includesNumber(arr,num);
}