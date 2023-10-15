// Project Title
// Dhanush Rai
// 10 - 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let x;
let y;
let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let theBall = spawnBall();
  ballArray.push(theBall);
}

function draw() {
  background(220);
  displayCircle();
  moveCircle();
}

function spawnBall(){
  let ball = {
    x : random (50,500),
    y : random(50,500),
    r : random(255),
    g : random(255),
    b : random(255),
  };
  return ball;
}


function displayCircle(){
  for(let i = 0; i<ballArray.length; i++){
    let theBall = ballArray[i];
    fill(theBall.r, theBall.g, theBall.b);
    circle(theBall.x,theBall.y,50);
  }
}

function moveCircle(){
  x = random(10,50);
  y = random(height);
}

function mousePressed(){
  let theBall = spawnBall();
  ballArray.push(theBall);
}
