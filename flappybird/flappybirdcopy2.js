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

    bird.collider = "dynamic";
    bird.mass = 2;
    bird.bounciness = 0.02;
    bird.drag = 0.5;
    world.gravity.y = 10;


    floor = new Sprite();
    floor.x = 200;
    floor.y = height - 20;
    floor.width = 400;
    floor.height = 125;
    floor.img = base;

    floor.collider = "static";

}

function draw() {
    image(bg, 0, 0, width, height);

    if(kb.presses("space")) {
        bird.vel.y = -5;
        bird.sleeping = false;
    } 
    if(bird.vel.y)

    // Debug
    fill("blue");
    textSize(14);
    text("vel.y: " + bird.vel.y.toFixed(2), 10, 20);
    text("isMoving: " + bird.isMoving, 10, 40);
    text("sleeping: " + bird.sleeping, 10, 60);
}