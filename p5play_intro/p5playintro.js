let ball;
// let ball2;
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
  ball.vel.x = 3;
  ball.vel.y = 3;
  ball.bounciness = 1;
  ball.collider = "dynamic";


  // ball2 = new Sprite();
  // ball2.x = 100;
  // ball2.y = 300;
  // ball2.diameter = 100;
  // ball2.color = "brown";

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

  background(220);
  fill (0, 0, 255);
  textSize(14);
  text("Ball: (" + int(ball.x) + ", " + int(ball.y) + ")", 10, 20);
  text("Mouse: (" + int(mouseX) + ", " + int(mouseY) + ")", 10, 40);

  if(ball.x < 0 + ball.diameter / 2  || ball.x > width - ball.diameter / 2) {
    ball.vel.x *= -1;
  }

  if(ball.y < 0 + ball.diameter / 2  || ball.y > height - ball.diameter / 2) {
    ball.vel.y *= -1;
  }

  box.x = mouseX;
  box.y = mouseY;
    
  if (mouse.presses("left")) {
    let x = new Sprite (mouseX, mouseY, 30, 30);
    x.collider = "dynamic";

  }
}