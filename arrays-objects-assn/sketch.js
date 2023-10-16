// Project Title
// Dhanush Rai
// 10 - 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let turrets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let theTurret = spawnTurret(0,windowHeight/2);
  turrets.push(theTurret);
  theTurret = spawnTurret(windowWidth/2,0);
  turrets.push(theTurret);
  theTurret = spawnTurret(windowWidth-50,windowHeight/2);
  turrets.push(theTurret);
  theTurret = spawnTurret(windowWidth/2,windowHeight-50);
  turrets.push(theTurret);
}

function draw() {
  background(220);
  displayTurret();
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
  for(let i = 0; i <turrets.length; i++ ){
    let theTurret = turrets[i];
    square(theTurret.x,theTurret.y,theTurret.size);
  }
}

