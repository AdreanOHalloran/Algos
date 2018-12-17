// function rot13(str) { // LBH QVQ VG!
//     //solution one
//     // https://www.youtube.com/watch?v=4mp-6a3vARU&list=PLkBfv4fGBau-q9tGBUgVoGClRsSBiiZm8&index=16
//     let solved = "";
//     for (let i = 0; i < str.length; i++) {
//         let asciiNum = str[i].charCodeAt();
//         if (asciiNum >= 65 && asciiNum <= 77) {
//             solved += String.fromCharCode(asciiNum + 13)
//         } else if (asciiNum >=78 && asciiNum <= 90) {
//             solved += String.fromCharCode(asciiNum - 13);
//         } else {
//             solved += str[i]
//         }
//     }
//     return solved;


    // https://www.youtube.com/watch?v=eAe0Xo57AKM
    // Solution 2 - map & regex solution.
//     str = str.split("").map(cipher).join("")
//     return str;
// }
// function cipher(letter) {
//     var symbolregex = /[^a-zA-Z]/g;
//     if(symbolregex.test(letter)) {
//         return letter;
//     }
//     var codeAscii = letter.charCodeAt(0);
//     if (codeAscii > 77) {
//         codeAscii -= 13;
//     } else {
//         codeAscii += 13;
//     }
//     return String.fromCharCode(codeAscii);
// }
// console.log(rot13("SERR PBQR PNZC"));
    