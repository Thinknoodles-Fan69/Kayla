let playerX = 100;
let playerY = 0;
let playerSize = 30;
let velocity = 0;
let isGrounded = false;

let spikesX = [];
let spikeWidth = 20;
let spikeHeight = 30;
let spikeSpeed = 5;

let gameover = false;



function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    playerY = height - playerSize;

    for(let i = 0; i < 3; i++) {
        spikesX.push(width + i * 300);
    }
}

function draw() {
    background(255);

    if(!gameover) {
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

        fill(0, 255, 0);
        rect(playerX, playerY, playerSize, playerSize);


        fill(255, 0, 0);
        for(let i = 0; i < spikesX.length; i++) {
            spikesX[i] -= spikeSpeed;

            if(spikesX[i] < -spikeWidth) {
                spikesX[i] = width + random(100, 300);

            }

            triangle(spikesX[i], height, spikesX[i] + spikeWidth / 2, height - spikeHeight, spikesX[i] + spikeHeight, height);


            if(playerX + playerSize > spikesX[i] && playerX < spikesX[i] + width && playerY + playerSize > height - spikeHeight) {
                
            }
        }

    
    } else {
        fill(255, 0, 0);
        textSize(32);
        text("GAME OVER!" , width / 2, height / 2 - 20)
    }


}

function keyPressed() {
    if(key === " " && isGrounded) {
        velocity = -12;
    }
}