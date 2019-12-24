// Your code goes here
let a = prompt('Введите значение a', '');
let b = prompt('Введите значение b', '');
let c = prompt('Введите значение c', '');
const DISCR_POWER_COEF = 2;
const DISC_MULT_COEF = 4;
const DENOMINATOR_MULT = 2;

if (a.trim().length === 0 || b.trim().length === 0 || c.trim().length === 0) {
    alert('Invalid input data');
} else {
    a = Number(a);
    b = Number(b);
    c = Number(c);
if ( isNaN(a) || isNaN(b) || isNaN(c) || a=== 0) {
    alert('Invalid input data');
} else {
    if (Math.pow(b, DISCR_POWER_COEF) - DISC_MULT_COEF*a*c ===0) {
        console.log(`x = ${Math.round((-b + Math.sqrt(Math.pow(b,DISCR_POWER_COEF) 
            - DISC_MULT_COEF*a*c))/(DENOMINATOR_MULT*a))}`);
    } else if(Math.pow(b,DISCR_POWER_COEF) - DISC_MULT_COEF*a*c > 0) {
        console.log(`x1 = ${Math.round((-b + Math.sqrt(Math.pow(b,DISCR_POWER_COEF) 
            - DISC_MULT_COEF*a*c))/(DENOMINATOR_MULT*a))}`);
        console.log(`x2 = ${Math.round((-b - Math.sqrt(Math.pow(b,DISCR_POWER_COEF) 
            - DISC_MULT_COEF*a*c))/(DENOMINATOR_MULT*a))}`);
    } else {
        console.log('no solution');
    }
}
}



