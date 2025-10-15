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

    world.gravity.y = 10;
    
    new Canvas(400, 600);
    flappybird = new Sprite();
    flappybird.img = flappybirdImg;
    image(bg, 0, 0, width, height);

    ball = new Sprite();
    ball.x = 100;
    ball.y = 200;
    ball.diameter = 40;
    ball.color = "blue";
    ball.vel.x = 0;
    ball.vel.y = 3;
    ball.bounciness = 2;
    ball.collider = "dynamic";



}

function draw(){

}










