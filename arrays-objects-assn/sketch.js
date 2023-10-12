// Project Title
// Dhanush Rai
// 10 - 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayCircle();
  moveCircle();
}

function displayCircle(){
  fill("red");
  circle(x,y,30);
}

function moveCircle(){
  x = mouseX;
  y = mouseY;
}
