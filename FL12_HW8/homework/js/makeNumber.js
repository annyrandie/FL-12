function makeNumber(str) {
    let number_string = '';
    for(let i = 0; i<str.length; i++) {
        if(!isNaN(parseInt(str[i]))) {
            number_string = number_string + str[i];
        }
    }
    return number_string;
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');