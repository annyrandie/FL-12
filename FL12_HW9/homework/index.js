// Your code goes here
/*
Task1
Write a function that converts the argument values. If it will be 
a string, convert it to number and wise versa.
It should return an array of converted values.
*/

function convert() {
    let result = [];
    for(let i = 0; i<arguments.length; i++) {
        if(typeof arguments[i] ==='number') {
            result[i] =String(arguments[i]);
        } else {
            result[i] = parseInt(arguments[i]); 
        }
        
    }
    return result;
}
console.log(convert('1', 2, 3, '4'));

/*
Task2
Write function, which iterates over array and executes function 
on each element.
*/

function executeforEach(arr, func) {
    for(let i = 0; i<arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1,2,3], function(el) { console.log(el * 2) });

/*
Task3
Write function, which returns transformed array based on function, 
which passed as a second parameter (callback). If array contains 
a number as string, it should convert it and return as number. 
You’re allowed to change a body of that callback function if you 
need. Reuse function from task 2.
*/

function mapArray(arr, callback) {
    let mappedArray = [];
    executeforEach(arr, function(item) {
        mappedArray.push(callback(parseInt(item)))
    });
    return mappedArray;  
}
console.log(mapArray([2, '5', 8], function(el) {return el + 3 }));

/*
Task4
Write function, which returns filtered array based on function, 
which passed as a parameter. Reuse function from task 2.
*/

function filterArray(arr, callback) {
    let filteredArray = [];
    executeforEach(arr, function(item) {
        if(callback(item)) { 
            filteredArray.push(item) 
        }
    })
    return filteredArray;
}

console.log(filterArray([2, 5, 8], function(el) { return el % 2 === 0 }));
/*
Task5
Write a function that reverses the string value passed into it.
*/

function flipOver(str) {
    let newString = '';
    for(let i = str.length-1; i>=0; i--) {
        newString += str[i];

    }
    return newString;
}
flipOver('hey world');


/*
Task6
Write a function which creates an array from the 
given range of numbers
*/

function makeListFromRange(a, b) {
    let result = [];
    for(let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}

makeListFromRange(2,7);

/*Task7
Write a function that accepts an array of object and returns new array of values 
by passed key name.
That function should not change the original array. Reuse function from task 2. 
*/

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

function getArrayOfKeys(arr, key) {
    const result = [];
    function returnKey(item) {
        result.push(item[key]);
    }
    executeforEach(arr, returnKey);

    return result;
}

console.log(getArrayOfKeys(actors, 'age'));

/*Task8
 Write function substitute() that accepts an array of numbers and manages to replace 
 all numbers lower than 30 with '*'. 
 It should return a new array with numbers and '*' instead of numbers lowest from 30. 
 Reuse function from task 3.
*/

function substitude(arr) {
    let newArray = [];
    mapArray(arr, function(item) {
        const LOWEST_NUMBER = 30;
        if(item > LOWEST_NUMBER) {
            newArray.push(item);
        }
        newArray.push('*');
    })
    return newArray;
}
console.log(substitude([58, 14, 48, 2, 31, 29]));

/*
Task9
Write a function which returns a day number that was some 
amount of days ago from the passed date.
It should not change the given source date.
*/
const date = new Date(2019, 0, 2);

function getPastDate(date, num) {
    const HOURS = 24;
    const MINUTES = 60;
    const SECONDS = 60;
    const MILI_CONV = 1000;

    function convertNumofDays(days) {
        return days * HOURS * MINUTES * SECONDS * MILI_CONV;
    }

    let input_time = date.getTime();
    let past_time = input_time - convertNumofDays(num);
    let past_date = new Date(past_time);
    return past_date.getDate();
}

console.log(getPastDate(date, 1)); 
console.log(getPastDate(date, 2)); 
console.log(getPastDate(date, 365)); 

/*
Task10
Write a function that formats a 
date in such format "YYYY/M/d HH:mm".
*/

function formatDate(date) {
    const INDEX_PLUS = 1;
    let day = date.getDate();
    let monthIdx = date.getMonth() + INDEX_PLUS;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${year}/${monthIdx}/${day} ${hours <10 ? '0' + hours : hours}:${minutes <10 ? '0' + minutes: minutes}`;
}

console.log(formatDate(new Date()) );

