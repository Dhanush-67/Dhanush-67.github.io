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
let stack = [];
let endScreen = false;
let time = 0;
let passedTime;

//player
let playerCell;
let playerX = 0;
let playerY = 0;

//end
let endCell;



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
  playerCell = grid[playerY][playerX];
  endCell = grid[grid.length-1][grid.length-1];
}



function draw(){
  if(endScreen){
    EndScreen()
  }
  else{
    background(255);
    displayGrid();
    displayTime();
  }
}


function EndScreen(){
  push();
  background(255)
  textSize(30);
  textStyle(BOLD);
  textAlign(CENTER);
  text("Game Over!",width/2-200,height/2);
  text("You took "+Math.floor(time/1000)+"s",width/2-200, height/2+100)
  pop();
}

function displayTime(){
  time = millis() - passedTime
  push();
  fill(0)
  textSize(20);
  textStyle(BOLD);
  text("Time: "+Math.floor(time/1000)+"s",width/2,height/2);
  pop();
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
    passedTime = millis()
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
  else{
    playerCell.start = true;
    endCell.start = true;
    passedTime = passedTime;
    if(playerCell.x === endCell.x && playerCell.y === endCell.y){
      endScreen = true;
    }
  }
}



//cell object
class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.walls = [true,true,true,true];
    this.visited = false;    
    this.start = false
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

    if (this.start) {
      noStroke();
      fill(34,139,34);
      rect(x, y, cellSize, cellSize);
    }
  };

  movePlayer(a,b){
    let x = this.x
    let y = this.y

    
    //go down
    if(a === 0 && b === 1 && !this.walls[2]){
      let down;
      if (grid[y + 1]) {
        down = grid[y + 1][x];
      }
      else {
        down = undefined;
      }
      return down
    }
    

    //go up
    if(a === 0 && b === -1 && !this.walls[0]){
      let up;
      if (grid[y - 1]) {
        up = grid[y - 1][x];
      }
      else {
        up = undefined;
      }
      return up;
    }
    

    //go left
    if(a === -1 && b === 0 && !this.walls[3]){
      let left = grid[y][x - 1];
      return left
    }

    //go right
    if(a === 1 && b === 0 && !this.walls[1]){
      let right = grid[y][x + 1];
      return right
    }
  }


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


function keyTyped() {
  if (key === "s") { //move down
    playerCell.visited = false;
    let next = playerCell.movePlayer(0, 1);
  if (next) {
    playerCell = next;
  }
  }

  else if (key === "w") { //move up
    let next = playerCell.movePlayer(0, -1);
  if (next) {
    playerCell = next;
  }
  }

  else if (key === "a") { //move left
    let next = playerCell.movePlayer(-1, 0);
  if (next) {
    playerCell = next;
  }
  }

  else if (key === "d") { //move right
    let next = playerCell.movePlayer(1, 0);
  if (next) {
    playerCell = next;
  }
  }
}
