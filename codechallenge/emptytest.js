// fizzbuzz - With modulus




// fizzbuzz - without modulus




// Reverse a string -- FreeCodeCamp
// js Cardio https://www.youtube.com/watch?v=M2bJBuaOeOQ
// function reverseString(str) {
    // // using methods with variables

    // // using methods

    // manually using forloop Decrement

    // // forLoop Increment
    
    // for of loop

    // forEach

// }
// console.log(reverseString("hello")); // olleh




// Add numbers in an array -- HackerRank
// function simpleArraySum(ar) {

// }
// console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));




// Comparing results between two people -- HackeRank
// function compareTriplets(a, b) {

// }
// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));


// // Filter an array  -- integers
// var arr3 = [5, 3, 100, 55, 89, 300];

// console.log(newArr3);
// console.log(arr3.includes(100));




// //Sorting an array "strings"
// var arr2 = ['a', 'abc', 'tr', 'bcd'];

// console.log(sortedArr);


// // Sorting an array integers
// var arr1 = [4, 230, 1, 60, 66, 153543, 13264356864323];

// console.log(sortArr);


// factoralize 5! = 1 * 2 * 3 * 4 * 5 = 120 -- Freecodecamp
// function factorialize(num) {

// }
// console.log(factorialize(5));


// //Palindrome -- Freecodecamp
// let palindrome = (str) => {
//     let reg = /[\W_]/g;

//     let smallStr = str.toLowerCase().replace(reg, "");

// }
// palindrome("racecar");
// palindrome("dog");




// Find Longest Word -- Freecodecamp
// let findLongestWord = (str) => {
//     // using array methods

//     // using for of loop

//     console.log(longest);
//     console.log(longest.length);
// }
// findLongestWord("I want to find out what is the longest word in this sentence")




// Capitalize the first letter of each word (titleCase) ---FreeCodeCamp
// function titleCase(str) {
//     // // First Way for loop 

//     console.log(words.join(" "));

// //     //Second Way --- Map Method

//     console.log(titled.join(" "));
// }
// titleCase("I'm a little tea pot");




// Largest Number in an array -- Freecodecamp
// function largestOfFour(arr) {
//     var maxes = [];

//     console.log(maxes);
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Confirm Ending -- freecodecamp
// function confirmEnding(str, target) {
    
// //     // 1st Method using endsWith method

// //     //1st method simplified one line 

// //     //2nd method .substr

// //     //2nd method .substr simplified


// //     //slice method

// }
// console.log(confirmEnding("Bastion", "on"));
// console.log(confirmEnding("Bastion", "tn"));






// // Repeat a  string
// function repeatStringNumTimes(str, num) {
//     // // with return() method with repeat

//     //     // with for loop

// }

// console.log(repeatStringNumTimes("abc", 10));






//truncate a sting
// function truncateString(str, num) {

// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));




// break array into groups - Chunky Monkey - Freecodecamp
// function chunkArrayInGroups(arr, size) {
//     // slice method (while loop)

// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));






//  // slasher flick --- Splice Method
// function slasher(arr, howMany) {

// }
// console.log(slasher([1,2,3], 2));
// console.log(slasher(["burgers","fries","shake"], 1));


    
    
// const convert = (temp, unit) => {

// }
// convert(12, "C");
// convert(32, "C");
// convert(65, "C");
// convert(100, "F");


// function clock_angles(hour, minute) {
// //     // first workout the minute angle

// //     // then work out hour angle
// //     // first the hour then the hour + mins

// //         console.log("minute angle = " + minAngle);
// //         console.log("hour angle = " + hourAngle);
// //     //if minute angle greater than hour angle
// //     // else if minute angle less than minute angle

// }
// console.log(clock_angles(3,15));




// JavaScript Cardio 3 - https://www.youtube.com/watch?v=tcoiPHktCwQ&feature=youtu.be


// ADD ALL NUMBERS - no Arrays - Arguments object & for loop
// function addAll() {
    // //solution 1 ES5 with 'arguments'


    //solution 2 ES6 - ...rest & reduce/forEach
// function addAll(...numbers) { 

// }
// console.log(addAll(2,5,6,7));




// // SUM ALL PRIMES
// function sumAllPrimes(num) {

// }
// console.log(sumAllPrimes(10));




// Seek and Destroy. Remove from Array Arguments
// function seekAndDestroy (arr) {
    // //solution 1: arguments, indexOf, filter

    //     // Return true if NOT in array
    
    // }


    // return arr.filter(filterArr);


    //Solution 2: ..rest, filter, includes
// function seekAndDestroy (arr, ...rest) {



// }
// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));




// // SORT BY HEIGHT [-1, 150, 190, 170, -1, -1, 160, 180]
// function sortByHeight (a) {
//     const arr1 = [];
//     const arr2 = [];


// }
// const a = [-1, 150, 190, 170, -1, -1, 160, 180]
// console.log(sortByHeight(a));


// // MISSING LETTERS
// function missingLetters(str) {
    
// }
// console.log(missingLetters("abce"));






// // EVEN & ODD SUMS. sum the even and the odd numbers separately from an array.
// function evenOddSums(arr) {
//     let evenSum = 0;
//     let oddSum = 0;


//     return [evenSum, oddSum];
// }
// console.log(evenOddSums([50, 60, 60, 45, 71]));




// Mutations - FreeCodeCamp.check if word contains letters https://www.youtube.com/watch?v=WGTVz35ZTaw&index=13&list=PLkBfv4fGBau-q9tGBUgVoGClRsSBiiZm8&t=0s
// function mutation(arr) {
//     var firstWord = arr[0].toLowerCase();
//     var secondWord = arr[1].toLowerCase();

    // first method for loop


//     // second method for of with index


//      // Third Method - Includes
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


//     return truthies;
// }
// // solution 2: filter
// function bouncer(arr) {
    
// }
// console.log(bouncer([7, "ate", "", false, 9]));

// // Reverse an integer
// function reverseInt(int) {
    
// }
// console.log(reverseInt(54321));