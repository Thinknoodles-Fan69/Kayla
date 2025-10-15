// task 1
let flappybird;
let bg;
let flappybirdImg;
let ball;

function preload() {
    bg = loadImage("assets/background-day.png")
    flappybirdImg = loadImage("assets/yellowbird-midflap.png")

}

function setup() {
    new Canvas(400, 600);
    flappybird = new Sprite();
    flappybird.img = flappybirdImg;
    image(bg, 0, 0, width, height);

    ball = new Sprite()



}

function draw(){

}










