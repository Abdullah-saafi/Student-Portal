let uName = document.querySelector('.u-name');
let pwd = document.querySelector('.password')
let wrngEmail = document.querySelector('.wrng-email')
let wrngPwd = document.querySelector('.wrng-pwd')
let pwdPtrn = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

let logIn = document.querySelector('.login-btn');

logIn.addEventListener('click' , function () {
    if (uName.value === '' || !uName.value.includes('@gmail.com')) {
        wrngEmail.style.display='block';
        
    }else{
        wrngEmail.style.display='none';

    }
    if (pwd.value === '' || !pwdPtrn.test(pwd.value)) {
        wrngPwd.style.display='block';
        
    }else{
        wrngPwd.style.display='none';

    }
})

/* Registration Form Js */

console.log('hy');
