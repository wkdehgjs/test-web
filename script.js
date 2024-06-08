let score = 0;
const gameArea = document.getElementById('gameArea');
const scoreBoard = document.getElementById('scoreBoard');
const gameDuration = 30000; // 게임 시간: 30초
const circleDisplayTime = 1000; // 원이 화면에 나타나는 시간: 1초

function startGame() {
    score = 0;
    scoreBoard.textContent = `Score: ${score}`;
    const gameInterval = setInterval(createCircle, circleDisplayTime);

    setTimeout(() => {
        clearInterval(gameInterval);
        alert(`Game Over! Your final score is ${score}`);
    }, gameDuration);
}

function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    const x = Math.random() * (gameArea.clientWidth - 50);
    const y = Math.random() * (gameArea.clientHeight - 50);

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    circle.addEventListener('click', () => {
        score++;
        scoreBoard.textContent = `Score: ${score}`;
        circle.remove();
    });

    gameArea.appendChild(circle);

    setTimeout(() => {
        if (document.body.contains(circle)) {
            circle.remove();
        }
    }, circleDisplayTime);
}

window.onload = startGame;
