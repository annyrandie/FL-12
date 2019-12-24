// Your code goes here
let a = prompt('Введите значение a', '');
let b = prompt('Введите значение b', '');
let c = prompt('Введите значение c', '');

if (a.trim().length === 0 || b.trim().length === 0 || c.trim().length === 0) {
    alert('input values should be ONLY numbers');  
} else {
    a = Number(a);
    b = Number(b);
    c = Number(c);
if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
    alert('input values should be ONLY numbers');
} else {
    if (a===0 || b ===0 || c === 0) {
        alert('A triangle must have 3 sides with a positive definite length');
    } else if 
        (a >= b + c || b >= a + c || c >= a + b) {
            alert('Triangle doesn’t exist');
        } else if 
        (a ===b && b===c && a===c) {
            alert('Equilateral triangle');
        } else if 
        (a === b && b!==c || b===c && a !== c) {
            alert('Isosceles triangle');
        } else if 
        (a !==b && a!==c && b!==c) {
            alert('Scalene triangle’');
        }      
} 
}
