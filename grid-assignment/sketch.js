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
  
  // makes a list of cells and pushes it to the array "grid"
  for(let y = 0; y< row; y++){
    grid.push([])
    for(let x = 0; x<col; x++){
      let cell = new Cell(x,y);
      grid[y].push(cell);
    }
  }
  console.log(grid)
  console.log(grid[0][0.1])
  currentCell = grid[0][0];
  frameRate(5)
}

function draw(){
  background(255);
  displayGrid();

  currentCell.visited = true;
  let next = currentCell.checkNeighbours();
  if (next){
    next.visited = true;
    currentCell = next
  }
}


function displayGrid(){
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid.length; j++){
    grid[i][j].show();
    }
  }
}

//cell object
function Cell(x,y){
  this.x = x;
  this.y = y;
  this.walls = [true,true,true,true];
  this.visited = false;

  //displays each cell
  this.show = function(){
    let x = this.x*cellSize;
    let y = this.y*cellSize;
    stroke(0);

    //makes each cell with four lines instead of using the rect function
    this.walls[0] && line(x, y, x+cellSize, y)
    this.walls[1] && line(x+cellSize,y,x+cellSize,y+cellSize)
    this.walls[2] && line(x+cellSize,y+cellSize,x,y+cellSize)
    this.walls[3] && line(x,y+cellSize,x,y)

    if(this.visited){
        fill(255,0,255,100)
        rect(x,y,cellSize,cellSize)
    }

  };

  //checks for unvisited neirghbouring cells
  this.checkNeighbours = function(){
    let neighbours = [];


    let top = grid[x][y-1]
    let right = grid[x+1][y]
    let bottom = grid[x][y+1]
    let left = grid[x-1][y]

    if(grid[x][y]<  0 || grid[x][y] > row){
        return "invalid"
    }
    
    !top.visited && "invalid" && neighbours.push(top);
    !right.visited && "invalid" && neighbours.push(right);
    !bottom.visited && "invalid" && neighbours.push(bottom);
    !left.visited && "invalid" && neighbours.push(left);

    if(neighbours.length>0){
        let r = floor(random(0,neighbours.length));
        return neighbours[r]
    }
    else{
        return undefined
    }
    }

    

}