


let floor, bird;
let flapMidImg, bg, base, flapUpImg, flapDownImg;
let pipeGroup;
let pipe;
let bottonPipe, topPipe;

function preload() {
    flapMidImg = loadImage("assets/bluebird-midflap.png");
    flapUpImg = loadImage("assets/bluebird-upflap.png");
    flapDownImg = loadImage("assets/bluebird-downflap.png");
    bg = loadImage("assets/background-day.png");
    base = loadImage("assets/base.png");
    pipe = loadImage("assets/pipe-green.png")
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

    pipeGroup = new Group();

}

function draw() {
    image(bg, 0, 0, width, height);

    if(kb.presses("space") || mouse.presses()) {
        bird.vel.y = -5;
        bird.sleeping = false;
    } 

    if(bird.vel.y < -1) {
        bird.img = flapUpImg;
        bird.rotation = -30;

    } else if (bird.vel.y > 1) {
        bird.img = flapDownImg;
        bird.rotation = 30;
    } else {
        bird.img = flapMidImg;
        bird.rotation = 0;
    }

    if (frameCount === 1) {
        spawnPipePair();
    }

    
    bird.x += 3;
    camera.x = bird.x;
    floor.x = bird.x; 


    if (frameCount % 90 === 0) {
        spawnPipePair();
    }

    for (let pipe of pipeGroup) {
        if (pipe.x < -50) {
            pipe.remove();
        }
    }


    //collision detection
    





    // Debug
    fill("blue");
    textSize(14);
    text("vel.y: " + bird.vel.y.toFixed(2), 10, 20);
    text("isMoving: " + bird.isMoving, 10, 40);
    text("sleeping: " + bird.sleeping, 10, 60);


    
}





function spawnPipePair() {
        let midY = random(305, height - 150);
        let gap = 50;



        bottomPipe = new Sprite(bird.x + 400, midY + gap / 2 + 200, 52, 320, 'static');
        bottomPipe.img = pipe;
        



        topPipe = new Sprite(bird.x + 400, midY - gap / 2 - 200, 52, 320, 'static');
        topPipe.rotation = -180;
        topPipe.img = pipe;

        pipeGroup.add(bottomPipe);
        pipeGroup.add(topPipe);
        pipeGroup.layer = 0;

        
        

    }