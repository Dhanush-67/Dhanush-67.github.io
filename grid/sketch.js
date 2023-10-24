// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let grid = [[1,0,0,1],
//             [0,0,1,1],
//             [1,1,0,0],
//             [0,1,1,1]];

let grid;
let cellSize;
const GRID_SIZE = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (height > width){
    cellSize = width/GRID_SIZE
  }
  else{
    cellSize = height/GRID_SIZE
  }

  grid = generateRandomGrid(GRID_SIZE)

}

function draw() {
  background(220);
  displayGrid();

}

function keyTyped(){
  if (key === "r"){
    grid = generateRandomGrid(Grid_SIZW)
  }
}

function displayGrid(){
  for (let y = 0; y<4; y++){
    for (let x = 0; x <4; x++){
      rect(x*cellSize, y*cellSize, cellSize,cellSize);{
    }
  }
}
}

function generateRandomGrid(cols,row){
  let randomArray = [];
  for(let y = 0; y < cols; y++){
    randomArray.push([]);
    for (let x = 0; y <rows; x++){
      (for x in 90)
      if (random(100)<50){
        randomArray[y].push(0)
      }
      else{
        randomArray[y].push(1);
      }
    }
  }
  return Array
}