function makeNumber(str) {
    let number_string = '';
    for(let i = 0; i<str.length; i++) {
        if(!isNaN(parseInt(str[i]))) {
            number_string = number_string + str[i];
        }
    }
    return number_string;
}

function countNumbers(str) {
    let result = '';
    const numbers_count = {};
    result = makeNumber(str);
    for(let i = 0; i<result.length; i++) {
        const ch = result[i];
        if(!numbers_count[ch]) {
            numbers_count[ch] = 0; 
        } 
            numbers_count[ch] += 1;  
    }  
    return numbers_count;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');