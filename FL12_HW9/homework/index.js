// Your code goes here

//Task1

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

let a = 2, b = 3;
convert('1', a, b, '4');


//Task2

let c = 1, d = 2, e = 3;
function executeforEach(arr, func) {
    for(let i = 0; i<arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([c,d,e], function(el) {
     console.log(el * d) 
    });


//Task3

function mapArray(arr, callback) {
    let mappedArray = [];
    executeforEach(arr, function(item) {
        mappedArray.push(callback(parseInt(item)))
    });
    return mappedArray;  
}

let f = 2, g = 8, h = 3;
mapArray([f, '5', g], function(el) {
    return el + h 
});


//Task4

function filterArray(arr, callback) {
    let filteredArray = [];
    executeforEach(arr, function(item) {
        if(callback(item)) { 
            filteredArray.push(item) 
        }
    })
    return filteredArray;
}

let i = 2, j = 5, k = 8, l = 2;
filterArray([i, j, k], function(el) { 
    return el % l === 0 
});


//Task5

function flipOver(str) {
    let newString = '';
    for(let i = str.length-1; i>=0; i--) {
        newString += str[i];

    }
    return newString;
}
flipOver('hey world');



//Task6

function makeListFromRange(a, b) {
    let result = [];
    for(let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}

let m = 2, n =7;
makeListFromRange(m,n);


//Task7

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

getArrayOfKeys(actors, 'age');


//Task8

function substitude(arr) {
    let newArray = [];
    mapArray(arr, function(item) {
        const LOWEST_NUMBER = 30;
        if(item > LOWEST_NUMBER) {
            newArray.push(item);
        } else {
            newArray.push('*');
        }
        
    })
    return newArray;
}

let o = 58, p = 14, r = 48, s = 2, t = 31, u = 29;
substitude([o, p, r, s, t, u]);


//Task9

let inputYear = 2019, inputDate = 2;
const date = new Date(inputYear, 0, inputDate);

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

let oneDayAgo = 1;
let twoDaysAgo = 2;
let yearAgo = 365;
getPastDate(date, oneDayAgo); 
getPastDate(date, twoDaysAgo); 
getPastDate(date, yearAgo); 


//Task10

function formatDate(date) {
    const TWODIGIT = 10;
    const INDEX_PLUS = 1;
    let day = date.getDate();
    let monIdx = date.getMonth() + INDEX_PLUS;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${year}/${monIdx}/${day} ${hours <TWODIGIT ?'0'+ hours : hours}:${minutes<TWODIGIT ?'0'+ minutes: minutes}`;
}

formatDate(new Date()) ;

