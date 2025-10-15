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
    background(220)

    image(bg, 0, 0, width, height);

    if (mouse.presses("left")) {
    ball.vel.y = -1000;

  }
}










