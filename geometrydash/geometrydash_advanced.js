let playerX = 100;
let playerY = 0;
let playerSize = 30;
let velocity = 0;
let isGrounded = false;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    playerY = height - playerSize;
}

function draw() {
    background(255);

    fill(255, 0, 0);
    rect(playerX, playerY, playerSize, playerSize);

    velocity += 0.001;
    console.log(velocity)
    playerY += velocity;

    
}