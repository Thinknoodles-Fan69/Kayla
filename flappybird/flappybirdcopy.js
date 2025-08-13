let floor, bird;
let flapMidImg, bg, base;

function preload() {
    flapMidImg = loadImage("assets/bluebird-midflap.png");
    bg = loadImage("assets/background-day.png");
    base = loadImage("assets/base.png");
}



function setup() {
    new Canvas(400, 600);

    bird = new Sprite();
    bird.x = width/2;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.img = flapMidImg;

}

function draw() {
    Image(bg, 0, 0, width, height)
}