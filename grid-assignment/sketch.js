// Grid Assignment
// Dhanush Rai
// 10-27-2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let cellSize;
let grid;
const GRID_SIZE = 10;
let playerX = 0;
let playerY = 0;

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
  grid[playerY][playerX] = 9;
}

function draw() {
  background(255);
  displayGrid();
}

function keyTyped() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  else if (key === "s") { //move down
    movePlayer(0, 1);
  }
  else if (key === "w") { //move up
    movePlayer(0, -1);
  }
  else if (key === "a") { //move left
    movePlayer(-1, 0);
  }
  else if (key === "d") { //move right
    movePlayer(1, 0);
  }
}

function movePlayer(x, y) {
  //edge case check
  if (playerX + x >= 0 && playerX + x < GRID_SIZE &&
      playerY + y >= 0 && playerY + y < GRID_SIZE) {
    
    //check if running into a wall
    if (grid[playerY + y][playerX + x] === 0) {
      let tempX = playerX;
      let tempY = playerY;

      playerX += x;
      playerY += y;

      //update grid
      grid[playerY][playerX] = 9;
      grid[tempY][tempX] = 0;
    }
  }
}

function displayGrid(){
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 0) {
        fill("blue");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 9) {
        fill("green");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let gridArray = [];
  for (let y = 0; y < cols; y++) {
    gridArray.push([]);
    for (let x = 0; x < rows; x++) {
      if (random(100) < 50) {
        gridArray[y].push(0);
      }
      else {
        gridArray[y].push(1);
      }
    }
  }
  console.log(gridArray);
  return gridArray;
}
