document.getElementById('blackScreen').addEventListener('click', function(event) {
    const img = document.createElement('img');
    img.src = 'path/to/your/image.jpg';
    img.style.position = 'absolute';
    img.style.left = `${event.clientX}px`;
    img.style.top = `${event.clientY}px`;
    img.style.transform = 'translate(-50%, -50%)';
    
    document.getElementById('blackScreen').appendChild(img);
    
    setTimeout(() => {
        img.remove();
    }, 1000); // 1초 후에 이미지가 사라짐
});
