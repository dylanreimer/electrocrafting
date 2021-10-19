const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

let pendulums = [];

let cols = 20, rows = 20;


function preload() {
  
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    pendulums = make2d(cols, rows);
        
    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
          
          const xangle = map(mouseX, 0, width, -TWO_PI, TWO_PI);
          const yangle = map(mouseY, 0, height, -TWO_PI, TWO_PI);
          
          angle = (xangle * (i / width)*4) + (yangle * (j / height)*8);
          
          //console.log(angle);
          c = map(angle, -2, 2, 0, 50); 
          
          pendulums[i][j] = new Pendulum(i* (width/cols), j * (height/rows), angle, c);
      
        }
    }

    




    pendulum = new Pendulum(canvasWidth/2, canvasHeight/2, 100, 200, 0.01, [255, 255, 255]);
}



function draw() {
    background(30);

    for(let i =0; i < cols; i++){
        for(let j = 0; j < rows; j++) { 
            pendulums[i][j].render();
            pendulums[i][j].update();
        }
    }
}



function make2d(cols, rows) {
    let array = new Array(cols);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows);
    }
    return array
}