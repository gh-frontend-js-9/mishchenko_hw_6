/*Find in array: sum, min and max, replace min and max - create custom functions*/
console.log('-- Task 1 --')

let array = [30, 21, 7, 42, 70];

console.log('We have array: 30, 21, 7, 42, 70')

let min = Math.min.apply(null, array);

console.log("Min number of this array = " + min);

let max = Math.max.apply(null, array);

console.log("Max number of this array = " + max);

function arraySum(array) {
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log("Sum of array numbers = " + sum);
}
arraySum(array);

function ReplaceMinMax(array) {
    let ReplaceMin = array[array.indexOf(Math.max.apply(null, array), 0)];
    array[array.indexOf(Math.max.apply(null, array), 0)] = array[array.indexOf(Math.min.apply(null, array), 0)];
    array[array.indexOf(Math.min.apply(null, array), 0)] = ReplaceMin;
    console.log("Min Number After Replace  = " + ReplaceMin);
}
ReplaceMinMax(array);

/*Create function which will return function with callback in arguments*/
console.log('-- Task 2 --')

console.log('See alert in top of you screen')

function LazyMan(sleep, callback) {
    alert(`Are you ${sleep} bro ?`);
    callback();
}

LazyMan('sleeping', function() {
    alert('But I am not sleeping, because I am doing this homework :(');
});

/*Create a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.*/
console.log('-- Task 3 --')
console.log('From our array: 30, 21, 7, 42, 70')
console.log('Numbers that are divided by 3 = foo')
console.log('Numbers that are divided by 7 = bar')
console.log('Numbers that are divided by 3 and 7 = foobar')

function ReplaceNumbers(array) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] % 3 == 0 && array[i] % 7 == 0) {
            array[i] = "foobar"
        } else if (array[i] % 7 == 0) {
            array[i] = "bar"
        } else if (array[i] % 3 == 0) {
            array[i] = "foo"
        }

    }

    console.log(array)
}
ReplaceNumbers(array)


/*Create function with 2 string params. It must check if letters in the first correspond to the number of matches in second and return %.*/
console.log('-- Task 4 --')

console.log('We Have Two Words: GeekHub and GitHub')

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
    console.log("Letter matches in this words = " + coincidence + " this in % = " + p)
}
LetterCheck("GeekHub", "GitHub")