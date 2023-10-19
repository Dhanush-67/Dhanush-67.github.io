// Project Title
// Dhanush Rai
// 10 - 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let turrets = [];
let turretImgUp;
let turretImgDown;
let turretImgLeft;
let turretImgRight;

let backgroundImg;
let state = "start game";
let playButton;
let playButtonSize = 0.5;
let screenWidth = 1280;
let screenHeight = 720;
let score = 0;

let ufoImg;
let ufoSize = 0.3;
let ufoPos;
let ufoDx = 0;
let ufoDy = 0;
let ufoX;
let ufoY;
let ufoHeading;


function preload(){
  turretImgUp = loadImage("Turret Image up.png");
  turretImgDown = loadImage("Turret Image down.png");
  turretImgLeft = loadImage("Turret Image left.png");
  turretImgRight = loadImage("Turret Image right.png");
  backgroundImg = loadImage("background Image.png");
  ufoImg = loadImage("ufo.png");
  playButton = loadImage("Play Button.png");
}

function setup() {
  createCanvas(screenWidth, screenHeight);
  let xcor = [0,screenWidth/2,screenWidth-80,screenWidth/2];
  let ycor = [screenHeight/2,0,screenHeight/2,screenHeight-80];

  for(let i = 0; i < 4; i++){
    let theTurret = spawnTurret(xcor[i],ycor[i]);
    turrets.push(theTurret);
  }

  ufoPos = createVector(screenWidth/2, screenHeight/2);
  ufoHeading = ufoPos.heading();
}

function draw() {
  if (state === "start game"){
    startGameScreen();
  }

  if (state === "game"){
    background(backgroundImg);
    displayBoundary();
    displayTurret();
    displayUfo();
    moveUfo();
    displayScore();
  }
}

function startGameScreen(){
  push();
  background(backgroundImg);
  imageMode(CENTER);
  image(playButton,screenWidth/2,screenHeight/2,playButton.width*playButtonSize,playButton.height*playButtonSize);
  if (mouseIsPressed === true && state === "start game"){
    state = "game";
  }
  pop();
}

function displayScore(){
  push();
  textSize(50);
  textStyle("BOLD");
  text("Score:",50,50);
  pop();
}

function displayUfo(){
  push();
  imageMode(CENTER);
  ufoPos.x = constrain(ufoPos.x,115,1165);
  ufoPos.y = constrain(ufoPos.y,105,610);
  image(ufoImg,ufoPos.x,ufoPos.y,ufoImg.width*ufoSize,ufoImg.height*ufoSize);
  pop();
}

function moveUfo(){
  ufoPos.x +=  ufoDx;
  ufoPos.y += ufoDy;
}


function keyPressed() {
  if (keyCode === 68) {
    ufoDx = 4;
    ufoDy = 0;
  }
  else if (keyCode === 65) {
    ufoDx = -4;
    ufoDy = 0;
  } 
  else if (keyCode === 87) {
    ufoDy = -4;
    ufoDx = 0;
  }
  else if (keyCode === 83){
    ufoDy = 4;
    ufoDx = 0;
  }
}


function displayBoundary(){
  push();
  stroke("blue");
  strokeWeight(4);
  let l1 = createVector(80,80);
  let l2 = createVector(80,640);
  let l3 = createVector(1200,80);
  let l4 = createVector(1200,640);
  let wall1 = line(l1.x,l1.y,l2.x,l2.y);
  let wall2 = line(l1.x,l1.y,l3.x,l3.y);
  let wall3 = line(l2.x,l2.y,l4.x,l4.y);
  let wall4 = line(l3.x,l3.y,l4.x,l4.y);
  pop();
}

function spawnTurret(xpos,ypos){
  let theTurret = {
    x : xpos,
    y : ypos,
    size : 50
  };
  return theTurret;
}

function displayTurret(){
  let turretImg = [turretImgRight,turretImgDown,turretImgLeft,turretImgUp];
  for(let i = 0; i <turrets.length; i++ ){
    let theTurret = turrets[i];
    push();
    line(theTurret.x, theTurret.y, ufoPos.x, ufoPos.y);
    rotate(ufoHeading);
    pop();
    image(turretImg[i],theTurret.x,theTurret.y,turretImg[i].width * 0.10, turretImg[i].height * 0.10);
  }
}

