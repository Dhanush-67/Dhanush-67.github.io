//Dhanush Rai
//Oct 10

//Extra for experts
//- I have used vectors to place my objects and also move them
// I have also made each thing in my game as an object instead of coding everything in sketch.js. I have made different js files for each object.
// I have also used arrays to create multiple objetcs

//global variables
let satellite;
let asteroids = [];
let lasers = [];
let score = 0;

function setup() {
  createCanvas(400, 400);
  satellite = new Satellite();
  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);

  satellite.turn();
  satellite.update();
  satellite.edges();

  for (let i = 0; i < asteroids.length; i++) {
    if (satellite.hits(asteroids[i])) {
      background("gray");
      score = 0;
      console.log("Restart");
    }
    asteroids[i].display();
    asteroids[i].update();
    asteroids[i].edges();
  }
  for (let i = lasers.length - 1; i >= 0; i--) {
    lasers[i].display();
    lasers[i].update();
    for (let j = asteroids.length - 1; j >= 0; j--) {
      if (lasers[i].hits(asteroids[j])) {
        let newAsteroids = asteroids[j].breakup();
        asteroids = asteroids.concat(newAsteroids);
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        score++;
        console.log("Score:" + score);
        break;
      }
    }
  }
  satellite.display();
}

function keyReleased() {
  satellite.setRotation(0);
  satellite.goingForward(false);
}

function mousePressed() {
  lasers.push(new Laser(satellite.pos, satellite.heading));
}

function keyPressed() {
  if (keyCode === 68) {
    satellite.setRotation(0.1);
  } else if (keyCode === 65) {
    satellite.setRotation(-0.1);
  } else if (keyCode === 87) {
    satellite.goingForward(true);
  }
}
