// LOOPS EXERCISE 1
// Skills: Conditions and loops
// Counting Loops:
// Use a for loop to log numbers from 1 to 10, then another for loop to count down, logging
// numbers from 10 to 1.

//it works 
    // for(let i = 0; i <= 10; i++){
    //     console.log(i);
    // }

    //it works
// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// };
// Repeat the exercise with a while loop.
// why does this keep consoling 12 ?

// let i = 0;
// while (i < 10 ) {
//     i++;
//     console.log(i);
// }

// let i =11;
// do {
//     i++;
//     console.log(i);
// }while(i < 10);

// Repeat with a do while.

//for of is used for arrays 

// Create this array: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Use a for … of to loop through
// this array and log all the numbers. (Note: we’re not asking you to also count down on this one.)
//works
// let num = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i <= num.length; i++){
//     console.log (num[i]);
// }


// Extended Challenges second exercise:
// Given any string, use a loop to add padding (extra spaces) to the front to make the string ten
// characters long. For example, given the string “planet”, log “ planet” (add four spaces), and for
// the string “headlamp”, log “ headlamp” (add two spaces).


// https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_loops2
// Create a loop that runs through each item in the fruits array.


// var fruits = ["Apple", "Banana", "Orange"];
// for (x 
 
// ) {
//   console.log(x);
// }

//https://www.freecodecamp.org/news/the-complete-guide-to-loops-in-javascript-f5e242921d8c/
// Not understanding why this is working 
// both are starting at 0, and both are less than 2
//but why are they starting at different values?


// Nested for Loops
// Because a for loop is a JavaScript statement in itself, it can be used as the iterable statement of another for loop. This hierarchical for loop is often used for working with 2-dimensional grids:

// for (let y = 0; y < 2; y++)
//     for (let x = 0; x < 2; x++)
//         console.log(x, y);
// Console output (all combinations between x / y):

// 0 0
// 1 0
// 0 1
// 1 1
