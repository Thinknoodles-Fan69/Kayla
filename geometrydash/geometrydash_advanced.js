let playerX = 100;
let playerY = 0;
let playerSize = 30;
let velocity = 0;
let isGrounded = false;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    playerY = height - playerSize;

    for(let i = 0; i < 3; i++) {
        spikesX.push(width + i * 300)
    }
}

function draw() {
    background(255);

    velocity += 0.8;
    console.log(velocity)
    playerY += velocity;
    console.log(playerY)

    


    if(playerY >= height - playerSize) {
        
        playerY      = height - playerSize
        isGrounded = true;
        velocity = 0;

    } else {

        isGrounded = false;

    }

    fill(255, 0, 0);
    rect(playerX, playerY, playerSize, playerSize);
}

function keyPressed() {
    if(key === " " && isGrounded) {
        velocity = -12;
    }
}