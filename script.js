document.getElementById('blackScreen').addEventListener('click', function(event) {
    // 이미지 생성
    const img = document.createElement('img');
    img.src = 'images/myImage.jpg'; // JPG 이미지 파일 경로를 여기에 입력하세요
    img.style.position = 'absolute';
    img.style.left = `${event.clientX}px`;
    img.style.top = `${event.clientY}px`;
    img.style.transform = 'translate(-50%, -50%)';
    
    document.getElementById('blackScreen').appendChild(img);
    
    // 이미지 1초 후 제거
    setTimeout(() => {
        img.remove();
    }, 1000); // 1초 후에 이미지가 사라짐
});
