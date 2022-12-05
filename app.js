const p1button = document.querySelector('#pointP1');
const p2button = document.querySelector('#pointP2');
const p1holder = document.querySelector('#p1Score');
const p2holder = document.querySelector('#p2Score');
const dropDown = document.querySelector('#toPoints');
const reset = document.querySelector('#reset');

dropDown.addEventListener('change', (e) => {
});

let p1Score = 0;
let p2Score = 0;

const pointToP1 = function () {
    p1Score++;
    p1holder.innerText = p1Score;
    if (p1Score == dropDown.value) {
        p1holder.classList.toggle('green');
        p2holder.classList.toggle('red');
        stopButtons();
    }
}
p1button.addEventListener('click', pointToP1);

const pointToP2 = function () {
    p2Score++;
    p2holder.innerText = p2Score;
    if (p2Score == dropDown.value) {
        p1holder.classList.add('red');
        p2holder.classList.add('green');
        stopButtons();
    }
}
p2button.addEventListener('click', pointToP2);

let stopButtons = function () {
    p1button.removeEventListener('click', pointToP1);
    p2button.removeEventListener('click', pointToP2);
}

const resetAll = function () {
    window.location.reload();
}
reset.addEventListener('click', resetAll);