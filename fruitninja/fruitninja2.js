let dojoBG;
let fruitGroup;
let fruitTypes = [];
let fruitsThatAreCutIntoHalfBecauseWeUsedTheMouseToCutTheFruitsBecauseTheGameIsCalledFruitNinja;
let score = 0;
let missedFruits = 0;
let gameState = 'start';
let gameStartTime = 0;
let gameTimer = 0;
let gameDuration = 60;
let sliceSound, bgMusic;
let diffucultyNumFruits = 1;
let lastDifficultyIncrease = 0;





function preload() {
    dojoBG = loadImage("assets/dojobackground.png");
    sliceSound = createAudio("assets/fruit-ninja-combo.mp3")
    bgMusic = createAudio("assets/fruit-ninja-bgtrack.mp3")

    let peach = {
        whole: loadImage("assets/peachwhole.png"),
        half: loadImage("assets/peachhalf2.png")
    };

    let watermelon = {
        whole: loadImage("assets/watermelonwhole.png"),
        half: loadImage("assets/watermelonhalf.png")
    };

    fruitTypes = [peach, watermelon];   
}





function setup() {
    new Canvas(800, 600);
    world.gravity.y = 10;

    fruitGroup = new Group(); 
    fruitsThatAreCutIntoHalfBecauseWeUsedTheMouseToCutTheFruitsBecauseTheGameIsCalledFruitNinja = new Group();
}





function draw() {
    clear();
    image(dojoBG, 0, 0, width, height);

    if ((kb.presses(" ") || mouse.presses()) && (gameState == "start")) {
        gameState = "play";
        score = 0;
        missedFruits = 0;
        fruitGroup.removeAll();
        fruitsThatAreCutIntoHalfBecauseWeUsedTheMouseToCutTheFruitsBecauseTheGameIsCalledFruitNinja.removeAll();
        bgMusic.play()

        gameStartTime = millis();
        gameTimer = 0; 
    }

    if(gameTimer >= gameDuration) {
        gameState = "gameover";
    }

    if(gameState == "gameover") {
        fill(0, 180);
        rect(0, 0, width, height);
        fill(255, 0, 0);
        textAlign(CENTER, CENTER);
        textSize(48);
        text("Game Over!", width/2, height/2 - 60);
        textSize(24);
        fill(255);
        text("Score: " + score, width/2, height/2);
        text("Missed Fruit: " + missedFruits, width/2, height/2 + 40);
        text("Press SPACE or CLICK to Restart", width/2, height/2 + 80);
        bgMusic.stop()
        gameState = "start";
        

        return;
        

    }



    if(gameState === 'start') {
        fill(0, 180);
        rect(0, 0, width, height);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(48);
        text("Fruit Ninja", width / 2, height / 2 - 40);
        textSize(24)
        text("Press Space or Click to Start", width / 2, height / 2 + 20);

        return;
       }

    if(frameCount % 120 === 0) {
        let num = random(2,6);
        for(let i = 0; i < num; i++) {
            spawnFruit();
        }
        
    }


    if(mouse.pressing()) {
        let trail = new Sprite(mouse.x, mouse.y, 7, 7);
        trail.collider = "none";
        trail.color = "red";
        trail.life = 10;

        sliceFruit();
    }

    stroke(158, 69, 69);
    fill(255);
    textSize(24);
    textAlign(LEFT, TOP);
    text("Score: " + score, 10, 10);


    for (let fruit of fruitGroup) {
        if (fruit.y > height + 20) {
            fruit.remove();
            missedFruits += 1;

        }
    }

    text("Missed: " + missedFruits, 200, 10);


    gameTimer = floor((millis() - gameStartTime) / 1000);

    text("Time: " + (gameDuration - gameTimer), 400, 10);
}



function spawnFruit() {
    let fruitData = random(fruitTypes); 
    let randomX = random(300, 500);


    let fruit = new fruitGroup.Sprite(randomX, height + 20, 40);
    fruit.img = fruitData.whole;
    fruit.type = fruitData;
    fruit.vel.y = random(-10, -14);
    fruit.vel.x = random(-2, 2);
    fruit.friction = 0;

}

function sliceFruit() {
    for (let fruit of fruitGroup) {
        if (fruit.sliced) {
            continue;
        }

        let d = dist(mouse.x, mouse.y, fruit.x, fruit.y);

        if (d < ((fruit.d / 2) + 5)) {
            fruit.sliced = true;

            let fx = fruit.x;
            let fy = fruit.y;

            fruit.remove();

            splitFruit(fx, fy, fruit.type);

            sliceSound.play();

            score += 1

            break;
        }


    }
}

function splitFruit(x, y, fruitData) {

    let left = new fruitsThatAreCutIntoHalfBecauseWeUsedTheMouseToCutTheFruitsBecauseTheGameIsCalledFruitNinja.Sprite(x - 20, y, 40, 40);
    left.img = fruitData.half;
    left.vel.x = -3;
    left.vel.y = random(-5, -2);
    left.rotationSpeed = -5;
    left.life = 30;

    let right = new fruitsThatAreCutIntoHalfBecauseWeUsedTheMouseToCutTheFruitsBecauseTheGameIsCalledFruitNinja.Sprite(x + 20, y, 40, 40);
    right.img = fruitData.half;
    right.vel.x = 3;
    right.vel.y = random(-5, -2);
    right.rotationSpeed = 5;
    right.life = 30;
}
