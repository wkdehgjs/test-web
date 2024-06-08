let img;
let raindrops = [];

function preload() {
    img = loadImage('image.png'); // 이미지 파일 경로를 맞춰주세요
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); // 배경을 검정색으로 설정
}

function draw() {
    background(0); // 배경을 검정색으로 설정

    for (let i = raindrops.length - 1; i >= 0; i--) {
        raindrops[i].update();
        raindrops[i].display();
        
        if (raindrops[i].y > height) {
            raindrops.splice(i, 1); // 화면 아래로 사라진 이미지 제거
        }
    }
}

function mousePressed() {
    let size = random(20, 100); // 이미지 크기 랜덤 설정
    let raindrop = new Raindrop(mouseX, -size, size);
    raindrops.push(raindrop); // 새로운 이미지 추가
}

class Raindrop {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = random(2, 5);
    }

    update() {
        this.y += this.speed;
    }

    display() {
        imageMode(CENTER);
        image(img, this.x, this.y, this.size, this.size);
    }
}
