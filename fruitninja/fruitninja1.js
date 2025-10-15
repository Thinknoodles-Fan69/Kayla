let dojoBG;
let fruitGroup;
let fruitTypes = [];
let fruitsThatAreCutIntoHalfBecauseWeUsedTheMouseToCutTheFruitsBecauseTheGameIsCalledFruitNinja;
let score = 0;
let missedFruits = 0;



function preload() {
    dojoBG = loadImage("assets/dojobackground.png");

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

    if(frameCount % 120 === 0) {
        let num = 100;
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
