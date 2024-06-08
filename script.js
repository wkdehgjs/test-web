function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    raindrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`; // 0.5초에서 1초 사이의 랜덤한 지속시간
    document.querySelector('.sky').appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 1000); // 빗방울이 사라지는 시간
}

setInterval(createRaindrop, 50); // 빗방울 생성 간격
