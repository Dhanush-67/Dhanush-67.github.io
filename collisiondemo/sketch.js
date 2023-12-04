// Collide2d Demos
//How to use another library


let Spaceship;
let spaceshipPos;

class spaceship{
  constructor(x,y,img){
    this.x = x;
    this.y = y;
    this.img = img;
    this.ship = createSprite(x, y, 50,50);
    this.ship.addImage(spaceshipImg);
  }
}

function preload(){
  spaceshipImg = loadImage("SHIP.png");
}

//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  spaceshipPos = createVector(windowWidth/2,windowHeight/2);
  Spaceship = new spaceship(spaceshipPos.x,spaceshipPos.y, spaceshipImg);
}

//draw 
function draw() {
  background(220);
}