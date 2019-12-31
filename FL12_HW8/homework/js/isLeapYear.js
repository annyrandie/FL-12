function isLeapYear(input) {
    const input_date = new Date(input);
    const input_year = input_date.getFullYear();
 
    if(input_year % 4 === 0 && input_year % 100 !== 0) {
        return `${input_year} is a leap year`;
    } else if (input_year % 400 === 0) {
        return `${input_year} is a leap year`;
    } else if (isNaN(input_year)) {
        return 'Invalid Date';
    } else {
        return `${input_year} is not a leap year`;
    }
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);