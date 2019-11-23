"use strict";

console.log('-- Task 1 --');
console.log("Find in array: sum, min and max, replace min and max - create custom functions");

let array = [10, -19, 128, -3, 15, 70, 67, 30, 21]; // Our Array

console.log("We have array: [10,-19,128,-3,15,70,67,30,21]");

let min = Math.min.apply(null, array); // Find the minimum number of array

console.log("In this array min = " + min);

let max = Math.max.apply(null, array); // Find the maximum number of array

console.log("In this array max = " + max);

function arraySum(array) { // Find the sum of all the numbers in the array
    let sum = 0;
    for (let s = 0; s < array.length; s++) {

        sum = sum + array[s];
    }
    console.log("Sum of array numbers = " + sum);
};

arraySum(array);

let position = array.indexOf(max); // Replace min and max in array

if (position < max) {
    array[position] = min;
};
position = array.indexOf(min);

if (position > min) {
    array[position] = max;
};

console.log("After replace min and max we have next array: " + "[" + array + "]");

/*Create function which will return function with callback in arguments*/
console.log('-- Task 2 --');
console.log('See alert in top of you screen');

function LazyMan(sleep, callback) {
    alert(`Are you ${sleep} bro ?`);
    callback();
}

LazyMan('sleeping', function() {
    alert('But I am not sleeping, because I am doing this homework :(');
});

/*Create a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.*/
console.log('-- Task 3 --');
console.log('From our array: 10,-19,128,-3,15,70,67,30,21');
console.log('Numbers that are divided by 3 = foo');
console.log('Numbers that are divided by 7 = bar');
console.log('Numbers that are divided by 3 and 7 = foobar');

function ReplaceNumbers(array) {
    for (let n = 0; n < array.length; n++) {

        if (array[n] % 3 === 0 && array[n] % 7 === 0) {
            array[n] = "foobar"
        } else if (array[n] % 7 === 0) {
            array[n] = "bar"
        } else if (array[n] % 3 === 0) {
            array[n] = "foo"
        }

    }

    console.log(array);
};
ReplaceNumbers(array);

/*Create function with 2 string params. It must check if letters in the first correspond to the number of matches in second and return %.*/
console.log('-- Task 4 --');
console.log('We Have Two Words: GeekHub and GitHub');

function LetterCheck(a, b) {
    let coincidence = 0
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                coincidence++;
            }
        }
    }
    let p = coincidence / (a.length + b.length) * 100;
    console.log("Letter matches in this words = " + coincidence + " this in % = " + p);
};
LetterCheck("GeekHub", "GitHub");