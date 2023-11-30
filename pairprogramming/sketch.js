// OOP Pair Programming Starter Code
// Dhanush Rai, Tareen
// November 30th


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

let bulletArray = [];

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.Image = theImage;
    this.dx = 5;
    this.dy = 5;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if (keyIsDown(87)) {
      this.y -= this.dy;
    }
    if (keyIsDown(83)) {
      this.y += this.dy;
    }
    if (keyIsDown(68)) {
      this.x += this.dx;
    }
    if (keyIsDown(65)) {
      this.x -= this.dx;
    }
    // if doing extra for experts, show bullet(s)
    for (let bullet of bulletArray) {
      bullet.display();
      bullet.update();
      bullet.isOnScreen();
    }
  }
  
  display() {
    // show the ship
    image(shipImage, this.x, this.y);
  }
  
  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    if (keyIsDown(32)){
      let bullet = new Bullet(this.x + (shipImage.width/2 - bulletImage.width/2), this.y,0,this.dy,bulletImage);
      bulletArray.push(bullet);
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.image = theImage;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.y -= this.dy;
  }

  display() {
    // show the bullet
    image(bulletImage, this.x, this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    for (let x = bulletArray.length-1; x >= 0; x--) {
      if(bulletArray[x].y+bulletImage.height <0){
        bulletArray.splice(bulletArray[x],1);
      }
    }
  }
}
