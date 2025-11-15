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


    if(playerY >= height - playerSize) {
        playerY >= height - playerSize
        isGrounded = true;
        

        velocity = 0;
    } else {

        isGrounded = false;

        
    }
}

function keyPressed() {
    if(key === " " && isGrounded) {
        velocity = -12;
    }
}