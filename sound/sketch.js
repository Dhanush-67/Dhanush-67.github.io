// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mario;
let coinSound;
let backgroundSound;
let backgroundImage;

function preload(){
  mario = loadImage("mario (2).png");
  coinSound = loadSound("coin-sound.wav");
  backgroundSound = loadSound("background-sound.mp3");
  backgroundImage = loadImage("background-image.png");

  backgroundSound.setVolume(0.5);
  coinSound.setVolume(1.0);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(backgroundImage,windowWidth/2, windowHeight/2,backgroundImage.width*6,backgroundImage.height*6);
  image(mario,mouseX,mouseY,mario.width * 0.5, mario.height * 0.5);
  displaySquare();
}

function displaySquare(){
  square(windowWidth/2,windowHeight/2);
}

function mousePressed(){
  coinSound.play();
  if (!backgroundSound.isPlaying()){
    backgroundSound.loop();
  }

}
