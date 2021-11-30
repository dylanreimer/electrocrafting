const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

let pendulums = [];

let cols = 80, rows = 40;

let time;
let distance;

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
          
          c = map(angle, -2, 2, 0, 40);
          
          let refX = mouseX
          let refY = mouseY
        //   let refX = canvasWidth/2
        //   let refY = canvasHeight/2


          distance = abs(dist(i*((canvasWidth+80)/cols), j*((canvasHeight+80)/rows), refX, refY))
          distmap = map(distance, 0, dist(0, 0, refX, refY), 10, 20)
          
        //   pendulums[i][j] = new Pendulum(i*((canvasWidth+80)/cols), j*((canvasHeight+80)/rows), c/0.6, [255, 255*(j%2), 255*(j%2)]);
          pendulums[i][j] = new Pendulum(i*((canvasWidth+100)/cols)-30, j*((canvasHeight+100)/rows)-30, distmap, [100, 255-7*i, 255-7*j]);
        }
    }
    
    music.play();
    
    time = 0;
}



function draw() {
    background(30);
    

    for(let i =0; i < cols; i++){
        for(let j = 0; j < rows; j++) { 
            pendulums[i][j].render();
            pendulums[i][j].update();
            pendulums[i][j].color[0] = 255/2*sin(time/50) + 255/2; 
            // pendulums[i][j].color[1] += 255/2*cos(time/50) + 255/2;
            // pendulums[i][j].color[2] += 255/2*sin(time/50) + 255/2; 
            // pendulums[i][j].color[1] += 1;
            // pendulums[i][j].color[2] += 1;
        }
    }

    time++;
}

function mouseClicked() {
    for(let i = 0; i < cols; i++){
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