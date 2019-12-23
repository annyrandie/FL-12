// Your code goes here
let a = +prompt("Введите значение a", "");
let b = +prompt("Введите значение b", "");
let c = +prompt("Введите значение c", "");
let x;
let x1;
let x2;

if (isNaN(a)||isNaN(b)||isNaN(c)) {
    console.log("Invalid input data");
};

if (Math.pow(b,2) - 4*a*c ==0) {
    console.log(x = Math.round((-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a)));
} else if(Math.pow(b,2) - 4*a*c > 0) {
    console.log(x1 = Math.round((-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a)));
    console.log(x2 = Math.round((-b - Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a)));
}
else {
    console.log("no solution");
}



