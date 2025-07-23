let ball;
let ball2;
let box;



function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color
  
  ball = new Sprite();
  ball.x = 100;
  ball.y = 200;
  ball.diameter = 100;
  ball.color = "brown";

  ball2 = new Sprite();
  ball2.x = 100;
  ball2.y = 300;
  ball2.diameter = 100;
  ball2.color = "brown";

  box = new Sprite();
  box.x = 400;
  box.y = 250;
  box.w = 100;
  box.h = 50;
  box.color = "yellow";


}

function draw() {
  // fill("skyblue")
  // stroke("pink")
  // strokeWeight(10)

  // circle(30, 30, 50)
  // rect(50, 50, 100, 200)
  // rect(150, 250, 100, 100)

  background(240);
  fill (0, 0, 255);
  textSize(14);
  text("Ball: (" + int(ball.x) + ", " + int(ball.y) + ")", 10, 20);
  text("Mouse: (" + mouseX + ", " + mouseY + ")", 10, 20);

}