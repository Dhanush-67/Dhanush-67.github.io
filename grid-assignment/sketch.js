// Grid Assignment
// Dhanush Rai
// 10-27-2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let cellSize;
let grid;
const GRID_SIZE = 20;

function setup() {

  createCanvas(windowWidth*0.95, windowHeight*0.95);

  if (height > width){
    //cellSize = 10;
    cellSize = width/GRID_SIZE;
  }
  else{
    //cellSize = 10;
    cellSize = height/GRID_SIZE;
  }
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid(){
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 0) {
        fill("blue");
      }
      if (grid[y][x] === 1) {
        fill("yellow");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let randomArray = [];
  for (let y = 0; y < cols; y++) {
    randomArray.push([]);
    for (let x = 0; x < rows; x++) {
      if (random(100) < 50) {
        randomArray[y].push(0);
      }
      else {
        randomArray[y].push(1);
      }
    }
  }
  console.log(randomArray);
  return randomArray;
}
