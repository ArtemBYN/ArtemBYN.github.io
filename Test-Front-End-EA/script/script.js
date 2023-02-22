//Функционал таймера
function timer() {
    var nowDate = new Date();
    var achiveDate = new Date(2023, 4, 31, 0, 0,
        0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate) + 1000;
    if (result < 0) {
        var elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var seconds = Math.floor((result / 1000) % 60);
    var minutes = Math.floor((result / 1000 / 60) % 60);
    var hours = Math.floor((result / 1000 / 60 / 60) % 24);
    var days = Math.floor(result / 1000 / 60 / 60 / 24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    var elmnt = document.getElementById('timer');
    elmnt.innerHTML = days + '  :  ' + hours + '  :  ' + minutes + '  :  ' + seconds;
    setTimeout(timer, 1000);
}
window.onload = function () {
    timer();
}

// Валидация подписки на e-mail
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.getElementById('validation');
const button1 = document.querySelector('.footer__link')
const disableButton = () => {
    button1.disabled = true;
};

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function onInput() {
    if (isEmailValid(input.value)) {
        input.style.borderColor = 'green';
        console.log(1);
    } else {
        input.style.borderColor = 'red';
    }
}

button1.addEventListener("click", disableButton);

input.addEventListener('input', onInput);

// POPUp

$('.footer__link').click(function (e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});