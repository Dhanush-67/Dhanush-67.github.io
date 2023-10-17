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
  let xcor = [0,windowWidth/2,windowWidth-50,windowWidth/2];
  let ycor = [windowHeight/2,0,windowHeight/2,windowHeight-50];
  for(let i = 0; i < 4; i++){
    let theTurret = spawnTurret(xcor[i],ycor[i]);
    turrets.push(theTurret);
  }
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

