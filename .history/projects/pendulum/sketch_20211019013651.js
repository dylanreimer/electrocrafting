const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

let pendulums = [];

let cols = 20, rows = 20;

function preload() {
    music = loadSound('assets/limerence.mp3');
}

function setup() {

    createCanvas(canvasWidth, canvasHeight);

    pendulums = make2d(cols, rows);
        
    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
          
          const xangle = map(0, 0, width, -TWO_PI, TWO_PI);
          const yangle = map(0, 0, height, -TWO_PI, TWO_PI);
          
          angle = (xangle * (i / width)*4) + (yangle * (j / height)*8);
          
          c = map(angle, -2, 2, 0, 50); 
          
          pendulums[i][j] = new Pendulum(i*(canvasWidth/cols)+60, j*(canvasHeight/rows), c/0.8);
        }
    }

    music.play();
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

function mouseClicked() {
    for(let i =0; i < cols; i++){
        for(let j = 0; j < rows; j++) { 
            pendulums[i][j].velocity += 0.3;
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