// Grid Assignment
// Dhanush Rai
// 10-27-2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//global variables
let col;
let row;
let cellSize = 40;
let grid = [];
let currentCell;


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

  frameRate(10)
  
  // makes a list of cells and pushes it to the array "grid"
  for(let y = 0; y< row; y++){
    grid.push([])
    for(let x = 0; x<col; x++){
      let cell = new Cell(x,y);
      grid[y].push(cell);
    }
  }

  currentCell = grid[0][0];

  console.log(grid)
}

function draw(){
  background(255);
  displayGrid();

}


function displayGrid(){
  for(let row of grid){
    for(let col of row){
      col.show();
    }
  }
  currentCell.visited = true;
  let next = currentCell.checkNeighbors();
  
  if (next) {
    next.visited = true;
    currentCell = next;
  }
}

//cell object
class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.walls = [true,true,true,true];
    this.visited = false;    
  }

  //displays each cell
  show(){
    let x = this.x*cellSize;
    let y = this.y*cellSize;
    stroke(0);

    //makes each cell with four lines instead of using the rect function
    this.walls[0] && line(x, y, x+cellSize, y)
    this.walls[1] && line(x+cellSize,y,x+cellSize,y+cellSize)
    this.walls[2] && line(x+cellSize,y+cellSize,x,y+cellSize)
    this.walls[3] && line(x,y+cellSize,x,y)
    
    if (this.visited) {
      fill(255, 0, 255, 100);
      rect(x, y, cellSize, cellSize);
    }

  };

  checkNeighbors() {
    let neighbors = [];

    let x = this.x;
    let y = this.y;

    let top;
    let right;
    let bottom;
    let left;

    if (y - 1 >= 0) {
      top = grid[y - 1][x];
    }
    else {
      top = undefined;
    }
    if (y + 1 < row) {
      bottom = grid[y + 1][x];
    }
    else {
      bottom = undefined;
    }
    left = grid[y][x - 1];
    right = grid[y][x + 1];

    if (top) {
      if (!top.visited){
        neighbors.push(top);
      }
    }
    if (right) {
      if (!right.visited){
        neighbors.push(right);
      }
    }
    if (bottom) {
      if (!bottom.visited){
        neighbors.push(bottom);
      }
    }
    if (left) {
      if (!left.visited){
        neighbors.push(left);
      }
    }


    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    }
    else {
      return undefined;
    }


  }

}