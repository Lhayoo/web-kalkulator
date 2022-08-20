var input = document.getElementById('input');

function clickBtn(number) {

    var click = number.innerHTML;

    if (click == '=') {
        input.innerHTML = eval(input.innerHTML);
    } else if (click == 'CE') {
        input.innerHTML = '0';

    } else {
        if (input.innerHTML == '0') {
            input.innerHTML = click;

        } else {
            input.innerHTML += click;
        }
    }
}