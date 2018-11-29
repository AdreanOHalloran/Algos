// fizzbuzz - With modulus
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }




// fizzbuzz - without modulus
// for (let i = 1; i <= 100; i++) {
//     if (i / 3 - Math.floor(i / 3) === 0 && i / 5 - Math.floor(i / 5) === 0) {
//         console.log('FizzBuzz');
//     } else if (i / 3 - Math.floor(i / 3) === 0) {
//         console.log('Fizz');
//     } else if (i / 5 - Math.floor(i / 5) === 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i);
//     }
//     // Do more looping if loop condition is true
// }




// Reverse a string -- FreeCodeCamp
// function reverseString(str) {
    // // using methods with variables
    // var strArr = str.split("");
    // var reverseStrArray = strArr.reverse();
    // var reversedString = reverseStrArray.join("");
    // return reversedString


    // // using methods
    // return str.split("").reverse().join("");


    // manually using forloop
//     var final = "";
//     for (var i =str.length - 1; i>=0; i--) {
//         final += str[i];
//     }
//     return final;
// }
// console.log(reverseString("hello")); // olleh




// Add numbers in an array -- HackerRank
// function simpleArraySum(ar) {
//     var sum = 0;
//     for (var i = 0; i < ar.length; i++) {
//         sum += ar[i];
//     }  
//     // return sum;
// }
// console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));




// Comparing results between two people -- HackeRank
// function compareTriplets(a, b) {
//     var results = [];
//     var alice = 0;
//     var bob = 0;


//     for (var i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) alice++;
//         if (b[i] > a[i]) bob++
//     }
//     results[0] = alice;
//     results[1] = bob;
//     return results;
// }
// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));


// // Filter an array  -- integers
// var arr3 = [5, 3, 100, 55, 89, 300];


// var newArr3 = arr3.filter((element) => {
//  if (element > 60) {
//   return true
//  } else {
//   return false
//  }
// })
// console.log(newArr3);
// console.log(arr3.includes(100));




// //Sorting an array "strings"
// var arr2 = ['a', 'abc', 'tr', 'bcd'];
// var sortedArr = arr2.sort();
// console.log(sortedArr);


// // Sorting an array integers
// var arr1 = [4, 230, 1, 60, 66, 153543, 13264356864323];
// var sortedArr = arr1.sort((a, b) => {
//  return a - b;
// })
// console.log(sortedArr);


// factoralize 5! = 1 * 2 * 3 * 4 * 5 = 120 -- Freecodecamp
// function factorialize(num) {
//     var result = 1;
//     for (var i = 1; i<=num; i++) {
//         //result = result * i;
//         result *= i;
//     }
//     return result;
// }
// console.log(factorialize(5));


// //Palindrome -- Freecodecamp
// let palindrome = (str) => {
//     let reg = /[\W_]/g;


//     let smallStr = str.toLowerCase().replace(reg, "");


//     let reversed = smallStr.split("").reverse().join("");
//     if (reversed === smallStr) {
//         console.log("True")
//     } else {
//         console.log("False")
//     }
// }
// palindrome("racecar");
// palindrome("dog");




// Find Longest Word -- Freecodecamp
// let findLongestWord = (str) => {
    // // using array methods
    // console.log(str.split(" ").sort(function(a, b) {return b.length - a.length})[0]);


//     // using for loop
//     let words = str.split(" ");
//     let longest = "";
//     for (let word of words) {
//         if (word.length > longest.length)
//         longest = word
//     }
//     console.log(longest);
//     console.log(longest.length);
// }
// findLongestWord("I want to find out what is the longest word in this sentence")




// Capitalize the first letter of each word (titleCase) ---FreeCodeCamp
// function titleCase(str) {
    // // First Way  
    // var words = str.toLowerCase().split(" ");
    // for (var i = 0 ; i < words.length; i++) {
    //     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    // }
    // console.log(words.join(" "));


//     //Second Way --- Map Method
//     var titled = str.toLowerCase().split(" ").map(function(elem) {
//         return elem[0].toUpperCase() + elem.slice(1);
//     })
//     console.log(titled.join(" "));
// }
// titleCase("I'm a little tea pot");




// Largest Number in an array -- Freecodecamp
// function largestOfFour(arr) {
//     var maxes = [];
//     for (var i = 0; i < arr.length; i++) {
//         var tempMax = arr[i][0];
//         for (var j = 0; j < arr[i].length; j++) {
//             var currentElement = arr[i][j];
//             if (currentElement >= tempMax) {
//                 tempMax = currentElement;
//             }
//         }
//         maxes.push(tempMax);
//     }
//     console.log(maxes);
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Confirm Ending -- freecodecamp
// function confirmEnding(str, target) {
    
//     // 1st Method using endwith method
//     if (str.endsWith(target)) {
//         return true;
//     }
//     return false;
//     //1st method simplified one line 
//     return str.endsWith(target);


//     //2nd method .substr
//     if (str.substr(-target.length) === target) {
//         return true;
//     }
//     return false;
//     //2nd method .substr simplified
//     return str.substr(-target.length) === target;


//     //slice method
//     return str.slice(-target.length) === target;
// }
// console.log(confirmEnding("Bastion", "on"));






// Repeat a  string
// function repeatStringNumTimes(str, num) {
//     // // with return() method
//     // if (num < 0 ) {
//     //     return "";
//     // }
//     // return str.repeat(num);


//     // with for loop
//     var final = "";
//     if (num < 0) {
//         return "";
//     } else {
//         for (var i = 0; i < num; i++) {
//             final += str;
//         }
//         return final
//     }


//   }
//   console.log(repeatStringNumTimes("abc", 10));






//truncate a sting
// function truncateString(str, num) {
//     if (num >= str.length) return str;
//     if (num <= 3) {
//         return str.slice(0, num) + "...";
//     } else {
//         return str.slice(0, num-3) + "..."
//     }
//   }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));




// break array into groups - Chunky Monkey - Freecodecamp
// function chunkArrayInGroups(arr, size) {
//     // slice method
//     var groups = [];
//     while (arr.length > 0) {
//         // groups.push(arr.slice(0, size));
//         // arr = arr.slice(size);
//         // or
//         groups.push(arr.splice(0, size))
//     }
//     return groups;
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));






// slasher flick --- Splice Method
// function slasher(arr, howMany) {
//     arr.splice(0, howMany)
//     return arr;
// }
// console.log(slasher([1,2,3], 2));
// console.log(slasher(["burgers","fries","shake"], 1));


    
    
    // const convert = (temp, unit) => {
    //     if (unit === "C") {
    //         console.log (`${temp} degrees fahrenheit converted to celsius is ${(temp -32) / 1.8} degrees`);
    //     } else if (unit === "F") {
    //         console.log (`${temp} degrees celsius converted to Fahrenheit is ${(temp * 1.8) + 32} degrees`);
    //     } else {
    //         console.log("that unit is not supported");
    //     }
    // }
    // convert(12, "C");
    // convert(32, "C");
    // convert(65, "C");
    // convert(100, "F");


// function clock_angles(hour, minute) {
//     // first workout the minute angle
//         var minAngle = 360*(minute/60);
//     // then work out hour angle
//     // first the hour then the hour + mins
//         var hourAngle = (360*(hour/12))+((360/12)*(minute/60));
//         console.log("minute angle = " + minAngle);
//         console.log("hour angle = " + hourAngle);
//     //if minute angle greater than hour angle
//         if(minAngle > hourAngle) {
//             return minAngle - hourAngle;
//         }
//     //if minute angle less than minute angle
//         else {
//             return hourAngle - minAngle;
//         }
//     }
//     console.log(clock_angles(7,15));




// JavaScript Cardio 3 - https://www.youtube.com/watch?v=tcoiPHktCwQ&feature=youtu.be


// ADD ALL NUMBERS - no Arrays - Arguments object & for loop
// function addAll() {
    // //solution 1 ES5
    // var args = Array.prototype.slice.call(arguments);
    // var total = 0;
    // for(let i = 0; i < args.length; i++) {
    //     total += args[i];
    // }
    // return total;


    //solution 2 ES6 - ...rest & reduce/forEach
// function addAll(...numbers) { 
//     let total = 0;
//     numbers.forEach((num) => {
//         total += num;
//     });
//     //this can be written as 
//     // numbers.forEach(num => (total += num));
//     //or
//     // reduce method
//     // return numbers.reduce((acc, cur) => acc + cur);
//     return total;
// }
// console.log(addAll(2,5,6,7));


// // SUM ALL PRIMES
// function sumAllPrimes(num) {
//     let total = 0;


//     function checkForPrime(i) {
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }


//     for (let i = 2; i <= num; i++) {
//         if (checkForPrime(i)) {
//             total += i;
//         }
//     }
//     return total;
// }
// console.log(sumAllPrimes(10));




// Seek and Destroy. Remove from Array Arguments
// function seekAndDestroy (arr) {
    // //solution 1: arguments, indexOf, filter
    // const args = Array.from(arguments);
    // function filterArr(arr) {
    //     // Return true if NOT in array
    //     return args.indexOf(arr) === -1;
    // }


    // return arr.filter(filterArr);


    //Solution 2: ..rest, filter, includes
// function seekAndDestroy (arr, ...rest) {
//     return arr.filter(val => !rest.includes(val));


// }
// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));s




// // SORT BY HEIGHT [-1, 150, 190, 170, -1, -1, 160, 180]
// function sortByHeight (a) {
//     const arr1 = [];
//     const arr2 = [];


//     a.forEach((val, i) => {
//         if (val === -1) {
//             arr1.push(i);
//         } else {
//             arr2.push(val);
//         }
//     });


//     const sortArr = arr2.sort((a, b) => {
//         return a -b;
//     })
    
//     arr1.forEach((val, i)  => sortArr.splice(arr1[i], 0, -1));
//     return sortArr;
// }


// const a = [-1, 150, 190, 170, -1, -1, 160, 180]
// console.log(sortByHeight(a));


// // MISSING LETTERS
// function missingLetters(str) {
//     let compare = str.charCodeAt(0);
//     let missing;


//     str.split("").map((char, i) => {
//         if(str.charCodeAt(i) == compare) {
//             ++compare;
//         } else {
//             missing = String.fromCharCode(compare);
//         }
//     })
//     return missing;
// }
// console.log(missingLetters("abce"));






// // EVEN & ODD SUMS. sum the even and the odd numbers separately from an array.
// function evenOddSums(arr) {
//     let evenSum = 0;
//     let oddSum = 0;


//     arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));


//     return [evenSum, oddSum];
// }
// console.log(evenOddSums([50, 60, 60, 45, 71]));




// Mutations - FreeCodeCamp.check if word contains letters https://www.youtube.com/watch?v=WGTVz35ZTaw&index=13&list=PLkBfv4fGBau-q9tGBUgVoGClRsSBiiZm8&t=0s
// function mutation(arr) {
//     var firstWord = arr[0].toLowerCase();
//     var secondWord = arr[1].toLowerCase();


//     // for (var i = 0; i < secondWord.length; i++) {
//     //     if (firstWord.indexOf(secondWord[i]) === -1) return false;
//     // }


//     // second method
//     for (var letter of secondWord) {
//         if (firstWord.indexOf(letter) === -1) return false;
//     }


//      // Third Method - Includes
    // for (var letter of secondWord) {
    //     if (firstWord.includes(letter)) return false;
    // }
// 
// 
//     return true;
// }
// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "he"]));




// // Freecodecamp Falsy Bouncer- Remove all false things from an array  https://www.youtube.com/watch?v=GdU0oQWxTB4&list=PLkBfv4fGBau-q9tGBUgVoGClRsSBiiZm8&index=13
// // solution 1; for of loop
// function bouncer(arr) {
//     var truthies = [];


//     for (var item of arr) {
//         if (item) truthies.push(item);
//     }
//     return truthies;
// }
// // solution 2: filter
// function bouncer(arr) {
//     return arr.filter(function(elem) {
//         return elem;
//     })
// }
// console.log(bouncer([7, "ate", "", false, 9]));