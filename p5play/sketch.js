// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let sA, sB, j;
function setup() {
	new Canvas(500, 500);
	world.gravity.y = 10;

	sA = new Sprite(250, 0, 10, 50, 'k');
	sB = new Sprite(100, 20, 20);

	j = new DistanceJoint(sA, sB);
	j.offsetA.y = 25;

	j.springiness = 0.6; // try changing this!
}

function draw() {
	clear();
	sA.moveTowards(mouse);
}

// let hit = false;
// const triPoly = [];

// function setup() {
//   createCanvas(500, 400);
//   //collideDebug(true); // enable debug mode

//   triPoly[0] = createVector(300, 200);
//   triPoly[1] = createVector(350, 300);
//   triPoly[2] = createVector(250, 300);
// }

// function draw() {
//   background(255);

//   // We could for loop over the triPoly[] to draw it with a begin/endShape, but this is simpler: :)
//   triangle(300, 200, 350, 300, 250, 300);
//   // Or:
//   // triangle(triPoly[0].x, triPoly[0].y, triPoly[1].x, triPoly[1].y, triPoly[2].x, triPoly[2].y);

//   circle(mouseX, mouseY, 45);

//   hit = collideCirclePoly(mouseX, mouseY, 45, triPoly);

//   // Use vectors as input:
//   // const mouse    = createVector(mouseX, mouseY);
//   // const diameter = 45;
//   // hit = collideCirclePolyVector(mouse, diameter, triPoly, true);

//   stroke(hit ? color("red") : 0);
//   print("colliding?", hit);
// }