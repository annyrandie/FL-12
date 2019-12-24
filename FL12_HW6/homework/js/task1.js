// Your code goes here
let a = prompt("Введите значение a", "");
let b = prompt("Введите значение b", "");
let c = prompt("Введите значение c", "");

if (a.trim().length === 0 || b.trim().length === 0 || c.trim().length === 0) {
    alert('Invalid input data');
} else {
    a = Number(a);
    b = Number(b);
    c = Number(c);
if ( isNaN(a) || isNaN(b) || isNaN(c) || a=== 0) {
    alert('Invalid input data');
} else {
    if (Math.pow(b,2) - 4*a*c ===0) {
        console.log(`x = ${Math.round((-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a))}`);
    } else if(Math.pow(b,2) - 4*a*c > 0) {
        console.log(`x1 = ${Math.round((-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a))}`);
        console.log(`x2 = ${Math.round((-b - Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a))}`);
    } else {
        console.log('no solution');
    }
}
}
