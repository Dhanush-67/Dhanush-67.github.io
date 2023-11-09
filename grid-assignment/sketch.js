// Grid Assignment
// Dhanush Rai
// 10-27-2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// //global variables
// let cellSize;
// let grid;
// const GRID_SIZE = 10;
// let playerX = 0;
// let playerY = 0;

// function setup() {

//   createCanvas(windowWidth*0.95, windowHeight*0.95);

//   if (height > width){
//     //cellSize = 10;
//     cellSize = width/GRID_SIZE;
//   }
//   else{
//     //cellSize = 10;
//     cellSize = height/GRID_SIZE;
//   }
//   grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
//   grid[playerY][playerX] = 9;
// }

// function draw() {
//   background(255);
//   displayGrid();
// }

// function keyTyped() {
//   if (key === "r") {
//     grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
//   }
//   else if (key === "s") { //move down
//     movePlayer(0, 1);
//   }
//   else if (key === "w") { //move up
//     movePlayer(0, -1);
//   }
//   else if (key === "a") { //move left
//     movePlayer(-1, 0);
//   }
//   else if (key === "d") { //move right
//     movePlayer(1, 0);
//   }
// }


// function movePlayer(x, y) {
//   //edge case check
//   if (playerX + x >= 0 && playerX + x < GRID_SIZE &&
//       playerY + y >= 0 && playerY + y < GRID_SIZE) {
    
//     //check if running into a wall
//     if (grid[playerY + y][playerX + x] === 0) {
//       let tempX = playerX;
//       let tempY = playerY;

//       playerX += x;
//       playerY += y;

//       //update grid
//       grid[playerY][playerX] = 9;
//       grid[tempY][tempX] = 0;
//     }
//   }
// }

// function displayGrid(){
//   for (let x = 0; x < grid.length; x++ ){
//     let cells = grid[x];
//     console.log(x);
//   }
//   // for (let y = 0; y < GRID_SIZE; y++) {
//   //   for (let x = 0; x < GRID_SIZE; x++) {
//   //     cellX = grid[y][x]
//   //     stroke(0);
//   //     noFill();

//   //     let walls = [true,true,true,true];
//   //     if(walls[0]){
//   //       line(x*cellSize,y*cellSize,x+cellSize,y*cellSize);
//   //     }
//   //     if(walls[1]){
//   //       line(x+cellSize,y*cellSize,x+cellSize,y+cellSize);
//   //     }
//   //     if(walls[2]){
//   //       line(x*cellSize,y*cellSize,x*cellSize,y+cellSize);
//   //     }
//   //     if(walls[3]){
//   //       line(x*cellSize,y+cellSize,x*cellSize,y*cellSize);
//   //     }

//   //     let walls = [true,true,false,false];
//   //     if(walls[0]){
//   //       line(x*cellSize,y*cellSize,x*cellSize+cellSize,y*cellSize);
//   //     }
//   //     if(walls[1]){
//   //       line(x*cellSize+cellSize,y*cellSize,x*cellSize+cellSize,y*cellSize+cellSize);
//   //     }
//   //     if(walls[2]){
//   //       line(x*cellSize+cellSize,y*cellSize,x*cellSize,y*cellSize);
//   //     }
//   //     if(walls[3]){
//   //       line(x*cellSize,y*cellSize+cellSize,x*cellSize,y*cellSize);
//   //     }
//   //     rect(x * cellSize, y * cellSize, cellSize, cellSize);
//   //   }
//   // }
// }

// function generateRandomGrid(cols, rows) {
//   let gridArray = [];
//   for (let y = 0; y < cols; y++) {
//     gridArray.push([]);
//     for (let x = 0; x < rows; x++) {
//       gridArray[y].push(x);
//     }
//   }
//   return gridArray;
// }

//global variables
let col;
let row;
let cellSize = 40;
let grid = [];

//setup function
function setup() {
  //adjusts the size of the grid based on window height and width
  createCanvas(windowWidth, windowHeight);
  if (height > width){
    col = floor(width/cellSize);
    row = floor(width/cellSize);
  }
  else{
    col = floor(height/cellSize);
    row = floor(height/cellSize);
  }
  
  // makes a list of cells and pushes it to the array "grid"
  for(let y = 0; y< row; y++){
    for(let x = 0; x<col; x++){
      let cell = new Cell(x,y);
      grid.push(cell);
    }
  }
}

function draw(){
  background(255);
  displayGrid();
}

function displayGrid(){
  for(let i = 0; i < grid.length; i++){
    grid[i].show();
  }
}

function Cell(x,y){
  this.x = x;
  this.y = y;

  this.show = function(){
    let x = this.x*cellSize;
    let y = this.y*cellSize;
    stroke(0);
    noFill();
    
    rect(x,y,cellSize,cellSize);
  };

}

