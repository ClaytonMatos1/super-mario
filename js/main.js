const mario = document.getElementById('mario');
const pipe = document.getElementById('pipe');
const back = document.getElementById('back');
const scoreNumber = document.getElementById('number');
let flgScored = false;
let scored = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

document.addEventListener('keydown', jump);

const over = () => {
    back.src = './images/gameover.jfif';
    back.classList.remove('back');
    back.classList.add('over');
    back.style.cursor = 'pointer';

    back.addEventListener('click', () => {
        window.location.reload();
    });
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 110) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        setTimeout(over, 200);

        window.clearInterval(loop);
    } else if (flgScored && pipePosition < 30) {
        flgScored = false;
        scored = scored + 1;
        scoreNumber.textContent = scored;
    } else if (pipePosition > 120) {
        flgScored = true;
    }
}, 10);
