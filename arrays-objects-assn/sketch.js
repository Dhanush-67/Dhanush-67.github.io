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
    x : random (height),
    y : random(width),
  };
  return ball;
}


function displayCircle(){
  for(let i = 0; 1<ballArray.length; i++){
    let theBall = ballArray[i];
    circle(theBall.x,theBall.y,100);
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
