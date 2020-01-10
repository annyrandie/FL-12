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
            result[i] = +(arguments[i]); 
        }
        
    }
    return result;
}
convert('1', 2, 3, '4');

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

executeforEach([1,2,3], function(el) {console.log(el * 2)});

/*
Task3
Write function, which returns transformed array based on function, 
which passed as a second parameter (callback). If array contains 
a number as string, it should convert it and return as number. 
You’re allowed to change a body of that callback function if you 
need. Reuse function from task 2.
*/

function mapArray(arr, callback) {
    for(let i = 0; i<arr.length; i++) {
        if(typeof arr[i] ==='string') {
            arr[i] = +arr[i];
        }
    }
   // executeforEach(arr, returnArray);
    return arr;
    
}
console.log(mapArray([2, '5', 8], function(el) {return el + 3 }));

/*
Task4
Write function, which returns filtered array based on function, 
which passed as a parameter. Reuse function from task 2.
*/

function filterArray(arr, callback) {

}
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
    for(let i = a; i<=b; i++) {
        result.push(i);
    }
    return result;
}

makeListFromRange(2,7);

/*
Task9
Write a function which returns a day number that was some 
amount of days ago from the passed date.
It should not change the given source date.
*/
const date = new Date(2019, 0, 2);

function getPastDate(date, num) {
    function convertNumofDays(days) {
        return days*24*60*60*1000;
    }
    let input_time = date.getTime();
    let past_time = input_time - convertNumofDays(num);
    let past_date = new Date(past_time);
    console.log(past_date);
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
    let day = date.getDate();
    let monthIdx = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    hours = ('0' + hours).slice(-2);
    let minutes = date.getMinutes();

    return `${year}/${monthIdx}/${day} ${hours}:${minutes}`;
}

console.log(formatDate(new Date()) );
