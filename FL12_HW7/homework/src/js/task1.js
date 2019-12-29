// Your code goes here
let minLength = 5;
let new_minLength = 6;
const USER_EMAIL = 'user@gmail.com';
const ADMIN_EMAIL = 'admin@gmail.com';
let email;
let password;
let USER_PASS = 'UserPass';
let ADMIN_PASS = 'AdminPass';
let confirmNewPass;
let ask;
let newPassword;
let checkpassword;

email = prompt('Type your email, please', '');
if (email.trim().length === 0 || email === null ) {
    alert('Canceled');
} else if (email.trim().length < minLength) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === USER_EMAIL || email === ADMIN_EMAIL) {
    password = prompt('Type your password, please', '');
    if (password.trim().length === 0 || password === null) {
        alert('Canceled');
    } else if (email === USER_EMAIL && password ===USER_PASS || email ===ADMIN_EMAIL && password === ADMIN_PASS) {
        confirmNewPass = confirm('Do you want to change your password?');
        if (confirmNewPass) {
            password = prompt('Type an old password, please','');
            if (password.trim().length === 0 || password === null) {
                alert('Canceled');
            }else if(email === USER_EMAIL && password ===USER_PASS || email ===ADMIN_EMAIL && password === ADMIN_PASS) {
                newPassword = prompt('Type a new password,please', '');
                if(newPassword.trim().length === 0 || newPassword === null) {
                    alert('Canceled');
                } else if (newPassword.length <new_minLength) {
                    alert('It\'s too short password. Sorry.');
                } else {
                    checkpassword = prompt('Type a new password again', '');
                    if (checkpassword !==newPassword) {
                        alert('You wrote the wrong password');
                    } else {
                        alert('You have succeessfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }

        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
       
    
} else {
    alert('I don\'t know you');
}