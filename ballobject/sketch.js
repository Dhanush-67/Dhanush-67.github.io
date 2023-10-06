// Ball object Notation Demo
// Oct 5, 2023

let theBall

function setup() {
  createCanvas(windowWidth, windowHeight);
  theBall = spawnBall();
}

function draw() {
  background(220);
  moveBall();
  displayBall();
  teleportBall()
}

function keytyped(){
  if (key === " "){
    theBall = spawnBall()
  }
}

function spawnBall(){
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(15,30),
    r: random(255),
    g: random(255),
    b: random(255),
    dx: (-5,5),
    dy: (-5,5),
  }
}
function moveBall(){
  theBall.x += theBall.dx;
  theBall.y += theBall.dy;
}

function displayBall(){
  fill(theBall.r,theBall.g,theBall.b);
  circle(theBall.x,theBall.y,theBall.radius*2);
}

function teleportBall(){
  if (theBall.x - theBall.radius > windowWidth){
    theBall.x = 0 - theBall.radius;
  }

  else if (theBall.x <0 - theBall.radius){
    theBall.x = width + theBall.radius;
  }
  if (theBall.y - theBall.radius > windowHeight){
    theBall.y = 0;
  }
  else if (theBall.y - theBall.radius){
    theBall.y = height + theBall.radius;
  }
}