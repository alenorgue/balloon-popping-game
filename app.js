let poppedBallon = 0;
const totalBalloons = 24;
const balloons = document.getElementById('balloon-gallery');
const leftCounter = document.getElementById('left');
const message = document.getElementById('yay-no-balloons');


leftCounter.textContent = totalBalloons;

balloons.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('balloon')) {
        balloonPop(e);
    }
});

function balloonPop(e) {
    e.target.style.backgroundColor = "#ededed";
    e.target.textContent = "POP!";
    e.target.classList.remove('balloon'); 
    poppedBallon++;

    leftCounter.textContent = totalBalloons - poppedBallon;

    checkGameEnd();
}

function checkGameEnd() {
    if (poppedBallon === totalBalloons) {
        balloons.innerHTML = ''; 
        message.style.display = 'block'; 
    }
}
