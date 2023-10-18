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
let screenWidth = 1280;
let screenHeight = 720;
let ufoImg;

function preload(){
  turretImgUp = loadImage("Turret Image up.png");
  turretImgDown = loadImage("Turret Image down.png");
  turretImgLeft = loadImage("Turret Image left.png");
  turretImgRight = loadImage("Turret Image right.png");
  backgroundImg = loadImage("background Image.png");
  ufoImg = loadImage("ufo.png");
}

function setup() {
  createCanvas(screenWidth, screenHeight);
  let xcor = [0,screenWidth/2,screenWidth-80,screenWidth/2];
  let ycor = [screenHeight/2,0,screenHeight/2,screenHeight-80];
  for(let i = 0; i < 4; i++){
    let theTurret = spawnTurret(xcor[i],ycor[i]);
    turrets.push(theTurret);
  }
}

function draw() {
  background(backgroundImg);
  image(ufoImg,screenWidth/2,screenHeight/2,ufoImg.width*0.3,ufoImg.height*0.3);
  displayBoundary();
  displayTurret();
  //displayUfo();
}


function displayBoundary(){
  stroke("red");
  strokeWeight(4);
  let l1 = createVector(80,80);
  let l2 = createVector(80,640);
  let l3 = createVector(1200,80);
  let l4 = createVector(1200,640);
  line(l1.x,l1.y,l2.x,l2.y);
  line(l1.x,l1.y,l3.x,l3.y);
  line(l2.x,l2.y,l4.x,l4.y);
  line(l3.x,l3.y,l4.x,l4.y);

  //rect(50,30,1230,670);
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
    image(turretImg[i],theTurret.x,theTurret.y,turretImg[i].width * 0.10, turretImg[i].height * 0.10);
    //square(theTurret.x,theTurret.y,theTurret.size);
  }
}

