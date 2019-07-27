/* Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:

If the given array is empty, it should return 0.
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
*/

function findSmallestElement(arr) {
    let smallestElem = arr[0];
    if(arr.length < 1) {
        return 0;
    }
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < smallestElem) {
            smallestElem = arr[i];
        }
    }
    return smallestElem;
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
    

 
function findSmallestElement(arr) {
    // your code here
    let smallestElem = arr[0];
    if(arr.length < 1) {
        return 0;
    }

    for(var nums in arr) {
        if(arr[nums] < smallestElem) {
            smallestElem = arr[nums];
        }
    }
    return smallestElem;
  }

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1


//Also my way
function findSmallestElement(arr) {
    // your code here
    let smallestElem = arr[0];
    if(arr.length === 0) {
        return 0;
    }
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < smallestElem)
        smallestElem = arr[i];
    }
    return smallestElem;
  }
  
  var output = findSmallestElement([4, 1, 9, 10]);
  console.log(output); // --> 1

//Diff. way using : and ? --> i find this a little confusing bc of the ? :
//A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, a

function findSmallestElement(arr) {
    if(arr.length === 0) {
        return 0;
    } else {
        var smallestElem = arr.reduce(function(a,b) {
            return a < b ? a : b;
        });
        return smallestElem;
    }
}

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1


/* Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:

If there are ties, it should return the first element to appear.
If the given array is empty, it should return an empty string.
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
*/

function findShortestElement(arr) {
    // your code here
    let shortestElem = arr[0];
    if(arr === undefined) {
        return '';
    }
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length < shortestElem.length) {
            shortestElem = arr[i];
        }
    }
    return shortestElem;
  }
  var output = findShortestElement(['a', 'two', 'three']);
  console.log(output); // --> 'a'


function findShortestElement(arr) {
    let shortestElem = arr[0];
    if(arr.length < 1) {
        return "";
    }
    for(var elem in arr) {
        if(arr[elem].length < shortestElem.length) 
        shortestElem = arr[elem];
    }
    return shortestElem;
}

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'



// Array Mehtod 13 Below 

/* Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:

It should return 0 if the array is empty.
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
*/
function getLargestElement(arr) {
    // your code here
    let largestElem = arr[0];
    if(arr.length < 1) {
        return 0;
    }
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > largestElem) {
            largestElem = arr[i];
        }
    }
    return largestElem;
  }

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;


//Another Way
function getLargestElement(arr) {
    let largestElem = arr[0];
    for(var large in arr) {
        if(arr[large] > largestElem) {
            largestElem = arr[large];
        }
    }
    return largestElem;
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;



/* Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
*/
function computeSumOfAllElements(arr) {
    // your code here
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
       sum += arr[i];
    }
    return sum;
  }

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6


function computeSumOfAllElements(arr) {
    var sum = 0;
    for(var add in arr) {
        sum += arr[add];
    }
    return sum;
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6







