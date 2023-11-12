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
let stack = []



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
    grid.push([])
    for(let x = 0; x<col; x++){
      let cell = new Cell(x,y);
      grid[y].push(cell);
    }
  }
  
  //sets current cell to the origin of the grid
  currentCell = grid[0][0];
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


  //sets the next unvisited cell as current cell
  let nextCell = currentCell.checkNeighbors();
  if (nextCell) {
    nextCell.visited = true;

    //pushes the current cell's current position before it moves to a neighboring cell
    // so that when it gets stuck it can come back to this position and move on
    stack.push(currentCell);

    removeWalls(currentCell,nextCell);

    currentCell = nextCell;
  }
  // when there are no neighbouring cells for that position the current cell backtracks
  // and gets to the position it came from and then continues from there to other neighboring cells
  else if (stack.length > 0){
    currentCell = stack.pop();
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
    stroke(25,25,112);

    //makes each cell with four lines instead of using the rect function(concise form of an if loop)
    this.walls[0] && line(x, y, x+cellSize, y)
    this.walls[1] && line(x+cellSize,y,x+cellSize,y+cellSize)
    this.walls[2] && line(x+cellSize,y+cellSize,x,y+cellSize)
    this.walls[3] && line(x,y+cellSize,x,y)
    
    //checks if the current cell has visited the cell
    if (this.visited) {
      noStroke();
      fill(0,128,128);
      rect(x, y, cellSize, cellSize);
    }
  };


  checkNeighbors() {
    let neighbors = [];

    //sets the x and y to be the current cells x and y
    let x = this.x;
    let y = this.y;


    let top;
    let right;
    let bottom;
    let left;

    
    //checks if it is off the grid
    if (grid[y - 1]) {
      top = grid[y - 1][x];
    }
    else {
      top = undefined;
    }
    if (grid[y + 1]) {
      bottom = grid[y + 1][x];
    }
    else {
      bottom = undefined;
    }
    left = grid[y][x - 1];
    right = grid[y][x + 1];


    // if the cell is defined and is not visited then it will push it to the neighbours array we had made
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

    //chooses a random neghbouring cell to become the next current cell
    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    }
    else {
      return undefined;
    }

  }

}



// removes walls between the current cell and the neighbouring cell
function removeWalls(c,n){

  let x = c.x - n.x
  //left wall of current cell
  if( x === 1){
    c.walls[3] = false;
    n.walls[1] = false;
  }
  else if(x === -1){
    //right wall of current cell
    c.walls[1] = false;
    n.walls[3] = false;
  }

  let y = c.y - n.y
  if( y === 1){
    //top wall of current cell
    c.walls[0] = false;
    n.walls[2] = false;
  }
  else if(y === -1){
    // bottom wall of current cell
    c.walls[2] = false;
    n.walls[0] = false;
  }
}
