const email_input = document.getElementById('email');
const email_input_error = document.getElementById('email_error');
const name_input = document.getElementById('name');
const name_input_error = document.getElementById('name_error');
const pwd_input = document.getElementById('password');
const pwdc_input = document.getElementById('password_check');
const pwdc_input_error = document.getElementById('pwdc_error');
const number_regexr = /^\d{3}-\d{3,4}-\d{4}$/;
const email_regexr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const name_regexr = /^([가-힣]{2,5}|[a-zA-Z]{2,20})$/;

// email 형식 검증
email_input.addEventListener('input', event => {
    if(event.target.value.match(email_regexr)) {
        email_input_error.className = "error";
    } else {
        if(email_input.value === '') {
            email_input_error.className = "error";
        } else {
            email_input_error.className = "error_check";
        }
    }
});

// 이름 형식 검증
name_input.addEventListener('input', event => {
    if(event.target.value.match(name_regexr)) {
        name_input_error.className = "error";
    } else {
        if(name_input.value === '') {
            name_input_error.className = "error";
        } else {
            name_input_error.className = "error_check";
        }
    }
});

//  패스워드 일치 검증
pwdc_input.addEventListener('input', event => {
    if(event.target.value === pwd_input.value) {
        pwdc_input_error.className = "error";
    } else {
        if(pwdc_input.value === '' || pwd_input.value === '') {
            pwdc_input_error.className = "error";
        } else {
            pwdc_input_error.className = "error_check"
        }
    }
});
