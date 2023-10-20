// Bullet Blitz
// Dhanush Rai
// 19 - 10 - 2023
//
// Extra for Experts:
// - I have used vectors, rotations, atan2 functions and translations.
// I have also used the contrain function to keep the object in place. I also
// have used the class contructor instead of simply using an object.

//global variables

//turret stuff
let turrets = [];
let turretImgUp;
let turretpos;
let turret1;
let turret2;
let turret3;
let turret4;

//variables for start screen and background
let backgroundImg;
let state = "start game";
let playButton;
let playButtonSize = 0.5;
let screenWidth = 1280;
let screenHeight = 720;
let score = 10;

//ufo variables
let ufoImg;
let ufoSize = 0.3;
let ufoPos;
let ufoDx = 0;
let ufoDy = 0;
let ufoX;
let ufoY;
let ufoAngle;
let ufoAngle1;
let ufoAngle2;
let ufoAngle3;
let ufoAngle4;
let lastSwitchTime = 0;

let bullets = []


function preload(){
  turretImgUp = loadImage("Turret Image up.png");
  backgroundImg = loadImage("background Image.png");
  ufoImg = loadImage("ufo.png");
  playButton = loadImage("Play Button.png");
}

function setup() {
  createCanvas(screenWidth, screenHeight);
  let xcor = [40,screenWidth/2,screenWidth-40,screenWidth/2];
  let ycor = [screenHeight/2,40,screenHeight/2,screenHeight-40];

  //loop that will spawn turrets
  for(let i = 0; i < 4; i++){
    let theTurret = spawnTurret(xcor[i],ycor[i]);
    turrets.push(theTurret);
  }

  //coordinates of turrets
  turret1 = createVector(xcor[0],ycor[0])
  turret2 = createVector(xcor[1],ycor[1])
  turret3 = createVector(xcor[2],ycor[2])
  turret4 = createVector(xcor[3],ycor[3])

  //postion of turret
  ufoPos = createVector(screenWidth/2, screenHeight/2);
}

function draw() {

  if (score <= 0){
    state = "EndScreen"
  }

  if (state === "EndScreen"){
    endScreen()
  }

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
    checkState()

    //loop to display bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].display();
    bullets[i].update();
    bullets[i].hits(ufoPos);
  }
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

function endScreen(){
  background(backgroundImg)
  push();
  textSize(50);
  textStyle(BOLD);
  textAlign(CENTER)
  text("Game Over!",screenWidth/2,screenHeight/2);
  pop();
}

//function to spawn bullets as time passes
function checkState() {
  if (millis() > lastSwitchTime + 600) {
  bullets.push(new Bullet(turret1.x,turret1.y,ufoAngle1));
  bullets.push(new Bullet(turret2.x,turret2.y,ufoAngle));
  bullets.push(new Bullet(turret3.x,turret3.y,ufoAngle));
  bullets.push(new Bullet(turret4.x,turret4.y,ufoAngle));
  lastSwitchTime = millis();
  }
}


function displayScore(){
  push();
  textSize(50);
  textStyle(BOLD);
  text("WASD",50,50);
  pop();
}


function mousePressed() {
  bullets.push(new Bullet(turret1.x,turret1.y,ufoAngle1));
  bullets.push(new Bullet(turret2.x,turret2.y,ufoAngle2));
  bullets.push(new Bullet(turret3.x,turret3.y,ufoAngle3));
  bullets.push(new Bullet(turret4.x,turret4.y,ufoAngle3));
}

class Bullet{
  constructor (sposx,sposy,angle){

  this.pos = createVector(sposx,sposy);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(5);

  this.update = function(){
    if (sposx === turret3.x || sposx === turret4.x){
      this.pos.sub(this.vel);
    }
    else{
      this.pos.add(this.vel);
    }
    
  };
    
  this.display = function(){
    push();
    stroke("blue");
    strokeWeight(4);
    translate(this.pos.x,this.pos.y)
    circle(0,0,10);
    pop();
  };

  this.hits = function(ufo){
    let d = dist(this.pos.x,this.pos.y,ufo.x,ufo.y);
    if (d < ufoImg.width*ufoSize || d < ufoImg.height*ufoSize ){
      score -= 1;
    }
  }
 }
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
  let turretImg = [turretImgUp,turretImgUp,turretImgUp,turretImgUp];
  for(let i = 0; i <turrets.length; i++ ){
    let theTurret = turrets[i];
    line(theTurret.x,theTurret.y,ufoPos.x ,ufoPos.y)
    push();
    if (i === 0){
      angleMode(DEGREES)
      ufoAngle1 = atan2(theTurret.x - ufoPos.x, theTurret.y - ufoPos.y)
    }
    if (i === 0){
      angleMode(DEGREES)
      ufoAngle2 = atan2(theTurret.x - ufoPos.x, theTurret.y - ufoPos.y)
    }
    if (i === 0){
      angleMode(DEGREES)
      ufoAngle3 = atan2(theTurret.x - ufoPos.x, theTurret.y - ufoPos.y)
    }
    if (i === 0){
      angleMode(DEGREES)
      ufoAngle4 = atan2(theTurret.x - ufoPos.x, theTurret.y - ufoPos.y)
    }
    ufoAngle = atan2(theTurret.x - ufoPos.x, theTurret.y - ufoPos.y)
    translate(theTurret.x,theTurret.y)
    angleMode(DEGREES)
    rotate(-ufoAngle)
    imageMode(CENTER)
    image(turretImg[i],0,0,turretImg[i].width * 0.10, turretImg[i].height * 0.10);
    pop();
  }
}

